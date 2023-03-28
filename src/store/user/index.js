import {reqGetCode,reqUserLogin,reqUserRegister,reqUserInfo,reqLogout} from '@/API'
import {getToken, setToken,removeToken} from '@/utils/token'
//登录注册模块
const state={
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSER(state,userInfo){
        state.userInfo=userInfo
    },
    CLIEAR(state){
        //把仓库中相关的用户信息清空
         state.token='';
         state.userInfo={};
         //本地存储数据清空
         removeToken();
    }
};
const actions={
    //获取验证码
    async getCode({commit},phone){
        /* 获取验证码的这个接口把验证码返回，但是正常清空后台会把验证码发到用户手机上【省钱】
        */
        let result=await reqGetCode(phone);
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //用户注册
    async userRegister({commit},user){
          let result=await reqUserRegister(user);
          if(result.code==200){
              return 'ok'
          }else{
              return Promise.reject(new Error('faile'))
          }
    },
    //用户登录【token】
    async userLogin({commit},data){
        let result=await reqUserLogin(data);
        if(result.code==200){
            //服务器下发的token是用户的唯一标识符
            //将来经常通过带token找服务器要用户的信息
            commit("USERLOGIN",result.data.token)
            //持久化存储token
            setToken(result.data.token);
            return 'ok'
        }else{
            return Promise.reject(new Error('用户名错误或密码错误！'))
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result=await reqUserInfo();
        if(result.code==200){
            console.log('6666')
         commit("GETUSER",result.data)
        //  return 'ok' 
        // }else{
        //     return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async userLogout({commit}){
       let result=await reqLogout();
       //actions里面不能操作mutations,需要提交commit
       if(result.code==200){
          commit("CLIEAR")
          return 'ok'
       }else{
           return Promise.reject(new Error('faile'))
       }
    }
};
const getters={};
export default{
    state,
    mutations,
    actions,
    getters
}