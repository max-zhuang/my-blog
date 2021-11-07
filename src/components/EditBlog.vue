<template>
  <div>
    <el-input type="text" v-model="title" placeholder="请输入内容"></el-input>
    <el-input
      type="textarea"
      :rows="20"
      placeholder="请输入内容"
      v-model="content"
    >
    </el-input>

    <el-button type="primary" @click="change">修改</el-button>
  </div>
</template>

<script>
export default {
  name: "EditBlog",
  data() {
    const blog = this.blogs.filter((p) => {
      return p.id === parseInt(this.$route.params.id);
    })[0];

    return {
      title: blog.title,
      content: blog.content,
    };
  },

  methods: {
    change() {
      const blog = this.blogs.filter((p) => {
        return p.id === parseInt(this.$route.params.id);
      })[0];
      blog.title = this.title;
      blog.content = this.content;
      this.$router.push("/blog-list");
    },
  },
  props: {
    handleChangeBlog: Function,
    blogs: Array,
  },
};
</script>

<style >
</style>