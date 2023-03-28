<template>
    <div  class="card-header" style="border-bottom: 1px solid  rebeccapurple;">
            <ul class="nav nav-pills">
                <li class="page-header" style="margin-top:10px"><h5>MinDoc文档管理系统</h5></li>
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
                <input type="text" placeholder="请输入关键字..." style="border-radius:8px;margin-left:20px;margin-top:8px"/>
                </li>
                <li style="margin-left:40%;">
                  <span>超级管理员</span>
                <el-dropdown >
        <i class="el-icon-setting" style="font-size:20px;margin-top:10px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </li>
            </ul>
        </div>
</template>

<script>
export default {
name:'Header'
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