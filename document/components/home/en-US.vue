<template>
  <home>
    <template slot="nav">
      <router-link to="/en-US" class="tab right" exact><span>Home</span></router-link>
      <router-link to="/en-US/docs" class="tab right"><span>Docs</span></router-link>
      <router-link to="/en-US/example" class="tab right"><span>Example</span></router-link>
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
