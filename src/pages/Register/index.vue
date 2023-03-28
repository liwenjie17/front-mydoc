<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 
          <router-link to="/login" target="_blank">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>用户名:</label>
        <input
          placeholder="请输入你的用户名"
          v-model="name"
          name="name"
          v-validate="{ required: true}"
          :class="{ invalid: errors.has('name') }"
           style="border-radius:15px"
        />
        <span class="error-msg">{{ errors.first("name") }}</span>
      </div>
      <div class="content">
        <label>邮箱:</label>
        <input
          placeholder="请输入你的邮箱号"
          v-model="email"
          name="eamil"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('email') }"
           style="border-radius:15px"
        />
        <span class="error-msg">{{ errors.first("email") }}</span>
      </div>
      <div class="content">
        <label>邮箱验证码:</label>
        <input
          placeholder="请输入你的验证码"
          v-model="code"
          name="code"
          v-validate="{ required: true, regex: /^\d{6}$/ }"
          :class="{ invalid: errors.has('code') }"
           style="border-radius:15px"
        />
        <button style="width: 100px; height: 38px" @click="getCode">
          获取验证码
        </button>
        <span class="error-msg">{{ errors.first("code") }}</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          placeholder="请输入你的密码"
          v-model="password"
          name="password"
          v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"
          :class="{ invalid: errors.has('password') }"
           style="border-radius:15px"
        />
        <span class="error-msg">{{ errors.first("password") }}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input
          placeholder="请输入确认密码"
          v-model="password1"
          name="password1"
          v-validate="{ required: true, is: password }"
          :class="{ invalid: errors.has('password1') }"
          style="border-radius:15px"
        />
        <span class="error-msg">{{ errors.first("password1") }}</span>
      </div>
      <div class="controls">
        <input
          type="checkbox"
          v-model="agree"
          name="agree"
          v-validate="{ required: true, agree: true }"
          :class="{ invalid: errors.has('agree') }"
           
        />
        <span>同意协议并注册《在线文档用户协议》</span>
        <span class="error-msg">{{ errors.first("agree") }}</span>
      </div>
      <div class="btn">
        <button @click="userRegister"  style="border-radius:15px">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  //收集的表单数据
  data() {
    return {
      //用户名
      name:"",
      //邮箱号
      email: "",
      //验证码
      code: "",
      //密码
      password: "",
      //确认密码
      password1: "",
      //是否同意
      agree: true,
    };
  },
  methods: {
    //获取验证码
    async getCode() {
      try {
        //简单判断一下:至少有数据
        const { email } = this;
        email && (await this.$store.dispatch("getCode", email));
        //如果获取到验证码就把仓库的验证码填进去
        this.code = this.$store.state.user.code;
      } catch (error) {
        alert(error.message);
      }
    },
    //进行用户注册
    async userRegister() {
      //全部的表单验证成功再向服务器发送请求
      const success = await this.$validator.validateAll();
      if (success) {
        try {
          //如果成功路由跳转
          const {name, email, code, password, password1 } = this;
          //简单判断一下再发请求
            await this.$store.dispatch("userRegister", {
              name,
              email,
              code,
              password,
            });
          this.$router.push("/login");
        } catch (error) {
          alert(error.message);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 505px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #1c65ec;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;
      label {
        font-size: 14px;
        width: 90px;
        text-align: right;
        display: inline-block;
      }
      button{
         position: absolute;
         left: 660px;
         width: 10px;
         border-radius: 15px;
         font-size: 10px;
         font-weight: bold;
         
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
        font-size: 14px;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      
      margin: 17px 0 0 55px;
      padding-left: 410px;
      margin-bottom: 18px;
      position: relative;
      button {
        outline: none;
        text-align: center;
        border: none;
        width: 270px;
        height: 36px;
        background: #13dee6;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
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
