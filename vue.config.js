const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //不打包map文件
  productionSourceMap:false,
  transpileDependencies: true,
  publicPath:'./',
  //关闭校验工具
  lintOnSave:false,
  //代理跨域（服务器）
  devServer:{
    proxy:{
      //请求路径出现/api，开始工作
      'api':{
        target:'http://gmall-h5-api.atguigu.cn',
        //重写路径
        // pathRewrite:{'^/api':''}
      }
    }
  }
})
