import Vue from 'vue'
import Vuex from 'vuex'
//需要使用插件一次
Vue.use(Vuex)

// 后期数据量大不易维护，可以使用vuex的模块化开发
//state:仓库存储数据的地方
// const state={
//     count:1
// };
//mutations:修改state的唯一手段
// const mutations={};
//actions:处理actuon,可以书写自己的业务逻辑
// const actions={};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters={};

//引入小仓库
import home from './home';
import user from './user';
//对外暴露Store的一个实例
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters,
    
    //实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        user
    }
})