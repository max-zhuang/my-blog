<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ blog.id }}-{{ blog.title }}</span>
      </div>
      <div class="text item">
        {{ blog.content }}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: { blogs: Array },
  computed: {
    blog() {
      // console.log(this.$route.params);
      return this.blogs.filter((p) => {
        return p.id === parseInt(this.$route.params.id);
      })[0];
    },
  },
};
</script>
<style >
</style>