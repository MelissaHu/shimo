<template>
    <div>
        <h3>登录</h3>
        <div>
          <div>用户名：<input type="text" v-model="loginForm.username"></div>
          <div>密码：<input type="password" v-model="loginForm.password"></div>
          <button @click.stop.prevent="login">登录</button>
        </div>
    </div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
    data(){
      return{
        loginForm:{
            username:'',
            password:''
        }
      }
    },
    methods:{
        //...mapActions(['toLogin']),
        login(){
            if(this.loginForm.username === '' || this.loginForm.password === ''){
                console.log('账号或者密码不能为空')
            }else{
                console.log(this.loginForm)
                //this.toLogin(this.loginForm)
                this.$store.dispatch('toLogin',this.loginForm)
            }
            
        }
    }
}
</script>