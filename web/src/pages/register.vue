
<template>
    <div>
        <h3>注册页面</h3>
        <div>
          <div>输入手机号：<input type="text" v-model="registerForm.phoneNo" oninput = "value=value.replace(/[^\d]/g,'')" maxlength="11" @input="getTelPhone"></div>
          <div>输入验证码：<input type="text" disabled=true v-model="registerForm.authCode" maxlength="4"><button>获取验证码</button></div>
          <div>设置密码：<input type="password" v-model="registerForm.password"></div>
          <button @click.stop.prevent="submit">提交</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
      return{
        registerForm:{
            phoneNo:'',
            authCode:'',
            password:''
        }
      }
    },
    methods:{
       ...mapActions({toRegister:'toRegister'}),
       getTelPhone(){
          let val = this.registerForm.phoneNo;
          if(val.replace(/[^\d]/g,'')){
              console.log('不是数字')
          }else{
              console.log('是数字')
          }
       },
        submit(){
            if(this.registerForm.phoneNo === '' || this.registerForm.password === ''){
                   console.log('账号或者密码不能为空')
            }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.registerForm.phoneNo))){
                   console.log('手机号码有误嗯，请重新填写');
            }else{
                 this.toRegister(this.registerForm)
            }
        }
    }
}
</script>