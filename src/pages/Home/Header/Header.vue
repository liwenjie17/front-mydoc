<template>
    <div  class="card-header" style="border-bottom: 1px solid  rebeccapurple;">
            <ul class="nav nav-pills">
                <li class="page-header" style="margin-top:10px"><h5>MyDoc文档管理系统</h5></li>
                <li class="nav-item">
                <!-- <a class="nav-link active" href=""></a> -->
                <router-link class="nav-link " active-class="active" to="/homepage" style="margin-left:20px">首页</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link " active-class="active" to="/article">文章</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link " active-class="active" to="/span">标签</router-link>
                </li>
                <li class="nav-item">
                <input type="text" placeholder="请输入关键字..." style="border-radius:8px;margin-left:20px;margin-top:8px;"/>
                <i class="el-icon-search" style="font-size:20px;margin-left:8px"></i>
                </li>
                <li style="margin-left:35%;height:50px;">
                  <el-avatar :size="size" :src="circleUrl" style="margin-left:8px;margin-top:5px"></el-avatar>
                 
 
      </li>
      <li>
 <span style="font-size:20px;padding:10px;line-height:50px;top:0px">李文杰</span>
      </li>
      <li>
               <el-dropdown >
        <i class="el-icon-setting" style="font-size:20px;margin-top:15px"></i>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item>
            <router-link to="/login">登录</router-link>
            </el-dropdown-item>

          <el-dropdown-item>
            <router-link to="/register">注册</router-link>
          </el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </li>
            </ul>
        </div>
</template>

<script>
export default {
name:'Header',
data() {
  return {
     circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
     size:"large"
  }
},
}
</script>

<style lang="less" scoped >
   .el-header {
    background-color: #e3ebf5;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
     background-color: #e3ebf5;
  }
</style>