import axios from "axios";
// 下面是创建axios实例,通过实例去ajax请求
const instance1 = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000
});
// 面试题，axios二次封装，封装内容有哪些? 封装内容是对请求拦截，处理所有api接口的公共参数
// axios全局请求拦截
instance1.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('--------------',config.headers['X-Host'])
    // 统一设置请求头信息
    console.log(config.data)
    let xhost = config.data.xhost
    config.headers['X-Host'] = xhost
    delete config.data.xhost
    config.headers['X-Client-Info'] = '{"a":"3000","ch":"1002","v":"5.0.4","e":"15730311184389456576673"}'
    // 通过get方式为每一个接口传递一个version参数，值为2.0
    console.log(config.url) // 获取到当前请求的api接口地址

    // 检测以前url地址上是否带有请求参数
    config.url += (config.url.indexOf('?') === -1 ? '?' : '&')+'version=2.0'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 设置全局响应拦截(对响应结果作二次处理，再返回给then方法；处理些统一错误提示)
instance.interceptors.response.use(function(response){
    console.log('我是全局响应拦截方法...',response)
    // if(response.data.data.code != 0){
    //     alert('请求有误!')
    // }
    return Promise.resolve(response.data)
},function(error){
    console.log('请求失败了...',error)
})

export default instance1