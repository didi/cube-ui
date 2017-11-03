<template>
  <home>
    <router-link to="/zh-CN" class="tab right"><span>首页</span></router-link>
    <router-link to="/zh-CN/docs" class="tab right"><span>文档</span></router-link>
  </home>
</template>

<script>
  import Home from './home.vue'
  export default {
    components: {
      Home
    }
  }
</script>
<style lang="stylus">
</style>
