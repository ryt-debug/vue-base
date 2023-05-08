import axios from 'axios'

// 这边由于后端没有区分测试和正式，姑且都写成一个接口。
axios.defaults.baseURL = 'http://localhost:8080/api/'
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = false
// 请求头，headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = 'token' || ''
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios

/**
 * 相应结构
 * {   // `data` 由服务器提供的响应   
    data: {},   
     // `status` 来自服务器响应的 HTTP 状态码   
    status: 200,    
    // `statusText` 来自服务器响应的 HTTP 状态信息   
    statusText: 'OK',    
    // `headers` 服务器响应的头   
    headers: {},    
     // `config` 是为请求提供的配置信息   
    config: {},  
    // 'request'   // `request` is the request that generated this response   // It is the last ClientRequest instance in node.js (in redirects)   // and an XMLHttpRequest instance the browser   
    request: {} 
}
 */