// //配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import routes from './routes'

Vue.use(VueRouter)
// //先把VueRouter原型对象的push，先保存一份
// let originPush=VueRouter.prototype.push;
// let originReplace=VueRouter.prototype.replace;
// //重写 push replace
// //第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
// //第二个参数:成功的回调
// //第三个参数：失败的 回调
// VueRouter.prototype.push=function(location,resolve,reject){
//    if (resolve&& reject)
//    {
//        originPush.call(this,location,resolve,reject);
//    }else{
//        originPush.call(this,location,()=>{},()=>{});
//    }
// }
// VueRouter.prototype.replace=function(location,resolve,reject){
//     if (resolve&& reject)
//     {
//         originReplace.call(this,location,resolve,reject);
//     }else{
//         originReplace.call(this,location,()=>{},()=>{});
//     }
// }
//配置路由
let router=new VueRouter({
    // //配置路由
    routes:routes,
    // //滚动行为
    // scrollBehavior (to, from, savedPosition) {
    //     // 代表滚动条在最上方
    //     return {y:0}
    //   }
});
export default router;