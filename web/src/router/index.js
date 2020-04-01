import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "默认页",
      component: resolve => require(["@/pages/login.vue"], resolve),
    },
    {
      path: "/register",
      name: "默认页",
      component: resolve => require(["@/pages/register.vue"], resolve),
    }
  ]
});

export default router;
