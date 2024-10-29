import axios from "axios";

axios.defaults.timeout = 60000;
axios.defaults.baseURL = "http://127.0.0.1:8080";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data);
      config.headers = {
        "Content-Type": "application/json",
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);
  
/**
 * http response 拦截器
 */
// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         console.log("请求出错：", error);
//     }
// );
  
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function Post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
