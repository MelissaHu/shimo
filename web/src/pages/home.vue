<template>
    <div>这是主页噢,用户名:{{userName}}</div>
</template>

<script>
export default {
 computed:{
     userName(){
         return sessionStorage.getItem("username");
     }
 }
}
</script>

<style>

</style>