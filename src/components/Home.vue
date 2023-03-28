<template>
  <h3>我是选项一</h3>
</template>

<script>
export default {
name:'Home',
  data() {
    const item = {
      date: "MinDoc帮助手册",
      name: "XX",
      address: "dhidsbobsdzbivn",
    };
    return {
      tableData: Array(5).fill(item),
    };
  },
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