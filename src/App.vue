<template>
  <div id="app">
    <router-view></router-view>
    <!-- <MybolglistVue /> -->
    <!-- <AddBlog /> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <router-link to="/add-blog">add-blog</router-link>
      <router-link to="/app">App.vue</router-link>
       <router-link to="/Mybolg">Mybolg</router-link>

    </div>
  </div>
</template>

<script>
// import MybolglistVue from "./components/Mybolglist.vue";
// import AddBlog from "./components/AddBlog.vue";

export default {
  name: "App",
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
