<template>
  <home>
    <router-link to="/en-US" class="tab right"><span>Home</span></router-link>
    <router-link to="/en-US/docs" class="tab right"><span>Docs</span></router-link>
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
