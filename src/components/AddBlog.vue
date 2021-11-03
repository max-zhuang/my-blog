<template>
<div>
  <input type="text" v-model="title">
  <textarea type="text" v-model="content"></textarea>
  <button @click="add">点我啊</button>
</div>
  
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      title: "",
      content: "",
      records: [],
    };
  },
  methods: {
    add() {
      this.records.push({ title: this.title, content: this.content });
    },
  },
};
</script>

<style >
</style>