export default function ({ $axios })  {
  // 数据访问前缀
  // $axios.defaults.baseURL = 'http://XXX/api';
  $axios.defaults.timeout = 60000;
  $axios.defaults.headers = {
    "Content-Type": "application/json",
  };
  // request拦截器
  $axios.onRequest(config => {
    if(process.client){
      // 客户端下，请求进度条开始
      // NProgress.start();
    }
    config.headers['fuckdes'] = true;
  });
  // response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(
      response => {
        if(process.client){
            // 客户端下， 请求进度条结束
            // NProgress.done();
        }
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
      })
}