import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config);
  }
}

export default Request;
