<template>
    <div>
        <h3>注册页面</h3>
        <div>
          <div>输入手机号：<input type="text" v-model="registerForm.telNo"  @input="getTelPhone"></div>
          <div>输入验证码：<input type="password" v-model="registerForm.authCode"><button>获取验证码</button></div>
          <button @click.stop.prevent="submit">登录</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
      return{
        registerForm:{
            telNo:'',
            authCode:''
        }
      }
    },
    methods:{
       ...mapActions({toRegister:'toRegister'}),
       getTelPhone(){
          let val = this.registerForm.telNo;
          if(val.replace(/[^\d]/g,'')){
              console.log('不是数字')
          }else{
              console.log('是数字')
          }
       },
        submit(){
            if(this.registerForm.telNo === '' || this.registerForm.authCode === ''){
                   console.log('账号或者密码不能为空')
            }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.registerForm.telNo))){
                   console.log('手机号码有误嗯，请重新填写');
            }else{
                 this.toRegister(this.registerForm)
            }
        }
    }
}
</script>