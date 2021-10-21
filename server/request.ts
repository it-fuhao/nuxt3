import axios from 'axios';

const service = axios.create({
  timeout: 60000, // 60s超时
  headers: {
    "Content-Type": "application/json",
  },
})

// request 请求 拦截器
service.interceptors.request.use(
  config => {
    // do something
    config.headers['fuckdes'] = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应 response拦截器  如果非200 。拦截器的两个回调都会走
service.interceptors.response.use(
  response => {
    // http请求状态码只认200
    if (response.status === 200) {
      const res = response.data; //  拿到后端返回的数据
      // 实际业务状态码只认 '00000'.
      if (res.code === "00000") {
        // 大部分请求只有正确的返回值。那就是code 00000
        return Promise.resolve(res);
      } else {
        // 不同的状态码并不是常态，其余状态码统一扔try catch处理,这里需要在业务代码中判断状态码
        return Promise.reject(res);
      }
    } else {
      return Promise.reject(new Error('服务异常'));
    }
  },
  error => {
    let errorMessage: string = '';
    // 判断网络环境
    if (error.message.includes("Network Error")) {
      errorMessage = "Network Error：网络环境异常!";
    } else if (error.message.includes("timeout")) {
      errorMessage = "timeout：请求超时，请稍后再试！";
    } else if (error.response) {
      if (error.response.status === 404) {
        // 400 开头。 统一 找不到服务
        errorMessage = "404：找不到了，请联系管理员！";
      } else if (String(error.response.status).startsWith("5")) {
        // 500开头。统一服务器忙
        errorMessage = error.response.status + "：服务器忙，请稍后再试！";
      }
    } else {
      errorMessage = "网络异常!";
    }
    return Promise.reject(new Error(errorMessage));
  }
);

// 接口返回类型
// export interface responseTypes {
//   data: object,
//   message: string,
//   code: string,
// }

export default service;