//所有的API接口进行统一的管理
import requests from "./ajax";
import mockRequests from "./mockAjax"
//三级联动的接口
//请求地址：/api/product/getBaseCategoryList get请求无参数
export const reqCategoryList=()=>{
    //发请求:axios发请求返回结果是Promise对象
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}



//获取搜索模块数据 地址：/api/list 请求方式post 
//需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//当前这个函数需不需要接收外部传递的参数
//当前的接口给服务器传递参数params至少是一个空对象
export const reqGetSearchInfo=(params)=>{
    return requests({
        url:'/list',
        method:'post',
        data:params
    })
}



//获取注册验证码
export const reqGetCode=(phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get',
    })
}
//注册
export const reqUserRegister=(data)=>{
    return requests({
        url:'/user/passport/register',
        method:'post',
        data:data
    })
}
//登录
export const reqUserLogin=(data)=>{
    return requests({
        url:'/user/passport/login',
        method:'post',
        data:data
    })
}
//获取用户的信息，需要带着用户的token向服务器要用户的信息
export const reqUserInfo=()=>{
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'get',
    })
}
//退出登录
export const reqLogout=()=>{
    return requests({
        url:'/user/passport/logout',
        method:'get',
    })
}



