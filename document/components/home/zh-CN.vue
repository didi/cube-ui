<template>
  <home>
    <template slot="nav">
      <router-link to="/zh-CN/docs" class="tab"><span>文档</span></router-link>
      <router-link to="/zh-CN/example" class="tab"><span>示例</span></router-link>
    </template>
    <div slot="home">home</div>
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
