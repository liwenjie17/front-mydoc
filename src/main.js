//引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from '@/router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入表单校验
import '@/plugins/validate.js'
//引入仓库
import store from '@/store/index';
//统一接口api文件夹里面的全部请求函数
import * as API from '@/API';
//关闭生产提示
Vue.config.productionTip=false
//使用插件
//使用插件
// Vue.use(VueRouter)
Vue.use(ElementUI);

//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    router:router,
})