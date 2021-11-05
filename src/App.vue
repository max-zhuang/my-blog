<template>
  <div id="app">
    <router-view :handleAddBlog="handleAddBlog" :blogs="blogs"></router-view>

    <div>
      <router-link to="/add-blog">add-blog </router-link>
      <router-link to="/app">App.vue</router-link>
      <router-link to="/blog-list">blog-list</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {
    // HelloWorld,
    // MybloglistVue,
    // AddBlog,
  },
  data: function () {
    return {
      sharedData: () => {},
      blogs: [
        {
          id:1,
          title: "cakejuju",
          content: `我们提供了通用的项目模板，你可以直接使用。对于 Laravel 用户，我们也准备了相应的模板，同样可以直接下载使用。

如果不希望使用我们提供的模板，请继续阅读`,
        },
        {
          id:2,
          title: "james",
          content: `勒布朗·詹姆斯（LeBron James），全名勒布朗·雷蒙·詹姆斯（LeBron Raymone James），1984年12月30日出生于美国俄亥俄州阿克伦，美国职业篮球运动员，司职小前锋，绰号“小皇帝”（King James），效力于NBA洛杉矶湖人队。`,
        },
        {
          id:3,
          title: "kobe",
          content: `科比·比恩·布莱恩特（Kobe Bean Bryant，1978年8月23日—2020年1月26日），出生于美国宾夕法尼亚州费城，前美国职业篮球运动员，司职得分后卫/小前锋（锋卫摇摆人），绰号“黑曼巴”（Black Mamba）。`,
        },
      ],
    };
  },
  methods: {
    handleAddBlog(blog) {
      this.blogs.push(blog);
    },
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
