<template>
  <div class="login-container">
    <!-- 登录 -->
 
    <div class="login-wrap">
      
      <div class="login">
<div class="login-back-home">
        <router-link to="/home">
        <i class="el-icon-s-home"></i>
        </router-link> 
      </div>
        <div class="loginform">
           <!-- <ul class="tab clearFix">
            <li>
              <a href="##" class="current">Login</a>
            </li>
          </ul> -->
          <p class="table">Login</p>
          <div class="content">
            <form >
              <div class="input-text clearFix">
                
                <input type="text" placeholder="邮箱/用户名/手机号" v-model="phone">
              </div>
              <div class="input-text clearFix">
                
                <input type="text" placeholder="请输入密码" v-model="password" class="input-style">
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="">
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click.prevent="userLogin">登&nbsp;&nbsp;录</button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt=""></li>
                <li><img src="./images/sina.png" alt=""></li>
                <li><img src="./images/ali.png" alt=""></li>
                <li><img src="./images/weixin.png" alt=""></li>
              </ul>
              <router-link class="register" to="/register">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        //手机号
        phone:'',
        //密码
        password:''
      }
    },
    methods: {
      //登录的回调
      async userLogin(){
        try{
          //登录成功
          const {phone,password}=this;
          phone&&password&&await this.$store.dispatch('userLogin',{phone,password})
          //进行路由跳转，看路由当中是否包含query参数
          //有则跳到query参数指定的位置，没有就跳到home
          let topath=this.$route.query.redirect||"home"
          this.$router.push(topath)
        }catch(error){
           alert(error.message)
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .login-container {
    .login-wrap {
      height: 587px;
      background-color: #d3e4f8;
      flex-direction: row;
      flex: 1;
     
      .login {
        width: 1200px;
        height: 487px;
        margin: 0 auto;
        // background: url(./images/loginbg.png) no-repeat;
      }
      .login-back-home{
       flex: 1;
       font-size: 60px;
       margin-left: 50px;
       float: left;
       top: 45px;
     }

      .loginform {
        flex: 1;
        width: 420px;
        height: 406px;
        box-sizing: border-box;
        background: #fff;
        float: right;
        top: 45px;
        position: relative;
        padding: 20px;
         backdrop-filter: blur(10px);
            box-shadow: 0 0 20px #a29bfe;
            border-radius: 15px;

        .tab {
        

          li {
            width: 50%;
            float: left;
            text-align: center;

            a {
              width: 100%;
              display: block;
              height: 50px;
              line-height: 50px;
              font-size: 20px;
              font-weight: 700;
              color: #333;
              box-sizing: border-box;
              text-decoration: none;
              text-align: center;

            }

            .current {
              border-bottom: none;
              border-top-color: #28a3ef;
              color: #968cee;
            }
          }
        }
        .table{
            font: 900 40px '';
            text-align: center;
            letter-spacing: 5px;
            color: #19486e;
        }

        .content {
          width: 380px;
          height: 316px;
          box-sizing: border-box;
        //   border: 1px solid #ddd;
          border-top: none;
          padding: 18px;

          form {
            margin: 15px 0 18px 0;
            font-size: 12px;
            line-height: 18px;

            .input-text {
              margin-bottom: 16px;
              left: 0;
              right: 0;
              

              span {
                float: left;
                width: 37px;
                height: 32px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                border-radius: 2px 0 0 2px;
              }

              .pwd {
                background-position: -72px -201px;
              }

              input {
                width: 340px;
                height: 40px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                float: left;
                padding-top: 6px;
                padding-bottom: 6px;
                font-size: 14px;
                line-height: 22px;
                padding-right: 8px;
                padding-left: 8px;

                border-radius: 10px;
                outline: none;
              }
            }

            .setting {
              label {
                float: left;
              }

              .forget {
                float: right;
              }
            }

            .btn {
              background-color: #bab1f1;
              padding: 6px;
              border-radius: 10px;
              font-size: 16px;
              font-family: 微软雅黑;
              word-spacing: 4px;
              border: 1px solid #bab1f1;
              color: #fff;
              width: 100%;
              height: 36px;
              margin-top: 25px;
              outline: none;
            }
            .btn:hover{
              box-shadow: #1f2122;
            }
          }

          .call {
            margin-top: 30px;

            ul {
              float: left;

              li {
                float: left;
                margin-right: 5px;
              }
            }

            .register {
              float: right;
              font-size: 15px;
              line-height: 38px;
            }

            .register:hover {
              color: #4cb9fc;
              text-decoration: underline;
            }
          }

        }
      }
    }
   

    .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
    }

  }
</style>