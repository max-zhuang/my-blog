import VueRouter from "vue-router";
import AddBlog from "../components/AddBlog.vue";
import App from "../App.vue";
import Mybolglist from "../components/Mybolglist.vue"

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
      path:"/Mybolg",
      component: Mybolglist
    }
  ],
});
