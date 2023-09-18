import { http2Request } from "..";

interface entiresType {
  errcode: number;
  list: any[];
  totalCount: number;
}

http2Request
  .request<entiresType>({
    url: "/entire/list",
    params: {
      offset: 0,
      size: 20,
    },
  })
  .then((res) => {
    console.log(res);
  });

http2Request
  .request({
    url: "/home/highscore",
    interceptors: {
      requestSuccessFn: (config) => {
        console.log("请求成功拦截器/home/highscore");
        return config;
      },
      requestErrorFn: (error) => {
        console.log("请求失败拦截器/home/highscore");
        return error;
      },
      responseErrorFn(error) {
        console.log("响应失败拦截器/home/highscore");
        return error;
      },
      responseSuccessFn(res) {
        console.log("响应成功拦截器/home/highscore");
        return res;
      },
    },
  })
  .then((res) => {
    console.log(res);
  });
