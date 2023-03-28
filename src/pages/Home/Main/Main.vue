<template>
  <el-container style="height: 500px; border: 1px solid gray">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>我的项目</template
          >
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <router-link
              class="list-group-item"
              active-class="active"
              to="/about"
            >
              <el-menu-item index="1-1">选项1</el-menu-item>
            </router-link>
            <router-link
              class="list-group-item"
              active-class="active"
              to="/about"
            >
              <el-menu-item index="1-2">选项2</el-menu-item>
            </router-link>
          </el-menu-item-group>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <router-link
              class="list-group-item"
              active-class="active"
              to="/abouts"
            >
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </router-link>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>我的文章</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <span style="margin-left: 0px; font-size: 20px">项目列表</span>
        <el-button
          type="primary"
          style="margin-left: 70%"
          >导入项目</el-button
        >
        <el-button type="success" @click="dialogFormVisible = true">添加项目</el-button>
      </el-header>
          <About v-if="$route.meta.show"/>
      <router-view></router-view>
    </el-container>
    <el-dialog title="添加项目" :visible.sync="dialogFormVisible">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-form :model="form">
            <!-- <el-form-item  :label-width="formLabelWidth"> -->
            <el-form-item>
              <el-input
                v-model="form.title"
                autocomplete="off"
                placeholder="标题（不超过100字）"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="https://www.iminho.me.com"
              :label-width="formLabelWidth"
              style="font-size: 15px"
            >
              <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select> -->
              <el-input
                v-model="form.note"
                placeholder="项目的唯一标识（不超过50个字）"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.text"
                autocomplete="off"
                placeholder="描述信息不超过500个字符"
                type="textarea"
                rows="7"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
            <div class="picture">
                <span>默认封面</span>
            </div>
        </el-col>
      </el-row>
      
        
     
      <el-radio v-model="radio" label="1">公开（任何人都可以访问）</el-radio>
      <el-radio v-model="radio" label="2"
        >私有（只有参与者或使用令牌才能访问）</el-radio
      >

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import About from '@/components/About';
export default {
  name: "Main",
  components:{About},
  data() {
    const item = {
      date: "MinDoc帮助手册",
      name: "XX",
      address: "dhidsbobsdzbivn",
    };
    return {
      radio: "1",
      tableData: Array(5).fill(item),
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        title: "",
        note: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "220px",
      formLabelHeight: "90px",
    };
  },
  methods: {
    
  },
};
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

.picture{
    background-color: rgb(223, 220, 220);
    width: 130px;
    height: 170px;
    font-size: 20px;
    color: black;
}
</style>