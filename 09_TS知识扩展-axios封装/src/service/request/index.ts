import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { HttpReuqestConfig } from "./type";
// 针对AxiosRequestConfig配置进行扩展

class Request {
  instance: AxiosInstance;
  // request实例=>axios实例
  constructor(config: HttpReuqestConfig) {
    this.instance = axios.create(config);
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局拦截", config);
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
    if (config.interceptors) {
      //类型缩小
      // 针对特定的hyRequest实例添加拦截器
      this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestErrorFn);
      this.instance.interceptors.response.use(config.interceptors?.responseSuccessFn, config.interceptors?.responseErrorFn);
    }
  }
  // 封装网络请求
  request<T = any>(config: HttpReuqestConfig<T>) {
    // 单次请求的成功拦截
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config);
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: HttpReuqestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: HttpReuqestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default Request;
