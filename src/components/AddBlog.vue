<template>
  <div>
    <!-- <input type="text" v-model="title"> -->
    <el-input type="text" v-model="title" placeholder="请输入内容"></el-input>
    <!-- <textarea type="text" v-model="content"></textarea> -->
    <el-input
      type="textarea"
      :rows="20"
      placeholder="请输入内容"
      v-model="content"
    >
    </el-input>
    <!-- <button @click="add">点我啊</button> -->
    <el-button type="primary" @click="add">创建BLOG</el-button>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      title: "",
      content: "",
      // records: [],
    };
  },
  methods: {
    add() {
      this.handleAddBlog({ title: this.title, content: this.content });
      this.$router.push("/blog-list");
      // this.records.push({ title: this.title, content: this.content });
    },
  },
  props: {
    handleAddBlog: Function,
  },
};
</script>

<style >
</style>