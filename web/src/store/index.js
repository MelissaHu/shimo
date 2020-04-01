import Vue from "vue";
import Vuex from "vuex";
import {toLogin,toRegister} from '../axios/service.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  
  },
  mutations: {
  },
  actions: {
    async toLogin({state},params){
      await toLogin(params)
   },
   async toRegister({state},params){
    await toRegister(params)
 }
}
});
export default store;
