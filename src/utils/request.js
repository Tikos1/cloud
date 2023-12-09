// 对axios做一些配置
import store from '@/store'
import axios from 'axios'
import axiosRetry from 'axios-retry'
// axios.create 返回值一个新的axios的实例
const request = axios.create({
    baseURL:"http://111.229.247.11:3000",
    timeout:5000,
    withCredentials:true, // 跨域携带cookie
})
axiosRetry(request, { retries: 3 })

// 每一次请求都会触发的函数如何去设置（请求拦截器）
// 如何设置请求拦截器
request.interceptors.request.use((config)=>{
    // config 是你每一次发起请求的详细配置
    // 在这个位置可以对请求配置作更改
    const cookie = store.state.auth.cookie
    if(cookie){
        // 策略模式
        ({
            get(){
                config.params || (config.params = {})
            config.params.cookie = cookie
            },
            post(){
                config.params || (config.data = {})
                    config.data.cookie = cookie
            },
        })[config.method]()
    }
    
    return config;
})

export default request
// _axios 和 axios 功能基本一致

// axios.get("/abc")=>http://localhost:8080/abc
// 基础请求地址baseURL