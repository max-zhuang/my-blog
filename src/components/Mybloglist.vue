<template>
  <div>
    <div v-for="(p, index) of blogs" :key="index">
      <!-- <h1>{{ p.title }}</h1>
      <p>{{ p.content }}</p> -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ p.title }}</span>
          <el-button @click="deleteBlog(index)"  style="float: right; padding: 3px 0" type="text"
            >删除文章</el-button
          >
        </div>
        <div class="text item">
          {{ p.content }}
        </div>
      </el-card>
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "MyblogList",
  props: {
    blogs: Array,
  },
  methods: {
    deleteBlog(index){
      this.blogs.splice(index,1)
        
    }
  },
};
</script>

 <style >
</style>