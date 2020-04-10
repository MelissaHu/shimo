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
    },
    {
      path:'/',
      name:'首页',
      component:resolve => require(["@/pages/home.vue"], resolve),
    }
  ]
});

router.beforeEach((to,from,next)=>{
  let username = sessionStorage.getItem("username");
  if(username){
    if(to.path === '/'){
      next();
      return;
    }
    next();  
 }else{
  if(to.path === '/'){
    next('/login');
    return;
  }else if(to.path === '/register'){
    next('/register');
    return;
  }
   next();
 }
 next();
})


export default router;
