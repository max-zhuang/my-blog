<template>
  <div class="blog-list-box">
    <div v-for="(p, index) of blogs" :key="index" class="blog-list-item">
      <!-- <h1>{{ p.title }}</h1>
      <p>{{ p.content }}</p> -->
      <el-card class="box-card">
        <div slot="header" class="header-box">
          <div>
            <span>{{ p.id }}-{{ p.title }}</span>
            <el-button @click="deleteBlog(index)" type="text"
              >删除文章
            </el-button>
          </div>
          <div>
          <el-button @click="ShowBlog(p.id)">展示Blog</el-button>
          <el-button @click="ChangeBlog(p.id)">修改Blog</el-button>
        </div>
        </div>
        <div class="text item">
          {{ p.content }}
        </div>
      </el-card>
    </div>
  </div>
</template>
 
 <script>
// import { component } from 'vue/types/umd'
export default {
  name: "MyblogList",
  props: {
    blogs: Array,
  },
  methods: {
    deleteBlog(index) {
      this.blogs.splice(index, 1);
    },
    ShowBlog(id) {
      this.$router.push("/blog/" + id);
    },
    ChangeBlog(id) {
      this.$router.push("/edit-blog/" + id);
    },
  },
};
</script>

 <style>
.blog-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.blog-list-item {
  width: 30%;
  margin: 8px;
}
.header-box {
  display: flex;
  flex-wrap: wrap;
}
</style>