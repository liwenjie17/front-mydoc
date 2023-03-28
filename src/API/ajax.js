//对于axios进行 二次封装（主要是要用到它的请求和响应拦截器）
import axios from "axios";
//1.利用axios对象的方法create 去创建一个axios实例
//2.requests就是axios 只不过稍微配置一下

//引入进度条
import nprogress  from "nprogress";
//start代表进度条开始 done代表进度条结束

//引入进度条样式  
import "nprogress/nprogress.css"

//在当前模块中引入store
import store from "@/store";

const requests=axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中都带有/api
    baseURL:"/api",
    //代表请求超时的时间5S
    timeout:5000,
});
//请求拦截器：再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事
requests.interceptors.request.use((config)=>{
    //config :配置对象，对象里面有一个属性很重要，header 请求头
    if(store.state.detail.uuid_token)
    {
        //给请求头添加一个字段（userTempId）,不是随便添加，需要跟后台人员商量好
        config.headers.userTempId=store.state.detail.uuid_token
    }
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    //进度条开始动
    nprogress.start();
    return config;
});
//响应拦截器(返回成功的回调和失败的回调)
requests.interceptors.response.use((res)=>{
    //成功的回调函数，服务器响应的数据回来以后，响应拦截器可以检测到可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
});
//对外暴露
export default requests;