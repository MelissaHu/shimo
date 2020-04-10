import Vue from "vue";
import Vuex from "vuex";
import {toLogin,toRegister} from '../axios/service.js'
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  
  },
  mutations: {
  },
  actions: {
    async toLogin({state},params){
      await toLogin(params)
      .then((res)=>{
       if(res.code==='200'){ 
         router.push({path:'/'})
         sessionStorage.setItem("username",res.data.username);
      } 
    })
   },
   async toRegister({state},params){
    await toRegister(params)
    .then((res)=>{
      if(res.code==='200'){ 
        this.toLogin({})
     } 
   })
 }
}
});
export default store;
