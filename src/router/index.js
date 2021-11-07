import VueRouter from "vue-router";
import AddBlog from "../components/AddBlog.vue";
import App from "../App.vue";
import Mybloglist from "../components/Mybloglist.vue";
import Blog from "../components/Blog.vue";
import EditBlog from "../components/EditBlog.vue"


export default new VueRouter({
  routes: [
    {
      path: "/add-blog",
      component: AddBlog,
    },
    {
      path: "/app",
      component: App,
    },
    {
      path:"/blog-list",
      component: Mybloglist
    },
    {
      path:"/blog/:id",
      component:Blog
    },
    {
      path:"/edit-blog/:id",
      component: EditBlog


    }
  ],
});
