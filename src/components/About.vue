<template>
  <el-main>
        <el-table :data="tableData" >
          <el-table-column  label="名称" width="440">
            <template slot-scope="scope">
          <el-link type="primary">
            <div>
              <h3>{{scope.row.name}}</h3>
              <h5>{{scope.row.address}}</h5>
              <h6>{{scope.row.date}}</h6>
            </div>
            
            </el-link>
          </template>
          </el-table-column>
        </el-table>
      </el-main>
</template>

<script>
export default {
name:'About',
  data() {
    const item = {
      date: "MyDoc帮助手册",
      name: "XX",
      address: "dhidsbobsdzbivnhghjkhjk",
    };
    return {
      tableData: Array(5).fill(item),
    };
  },
  methods:{
    open(){
      alert('hhhh')
    }
  }
}
</script>

<style  lang="less" scoped>
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