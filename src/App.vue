<template>
  <div id="app">
    <router-view></router-view>
    <!-- <MybolglistVue /> -->
    <!-- <AddBlog /> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <!-- <el-tabs>
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs> -->
      <router-link to="/add-blog">add-blog </router-link>
      <router-link to="/app">App.vue</router-link>
      <router-link to="/Mybolg">Mybolg</router-link>

      <el-button @click="asd" size="mini" type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
// import MybolglistVue from "./components/Mybolglist.vue";
// import AddBlog from "./components/AddBlog.vue";

export default {
  name: "App",
  methods: {
    asd() {
      console.log("xixixixi");
    },
  },
  components: {
    // HelloWorld,
    // MybolglistVue,
    // AddBlog,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
