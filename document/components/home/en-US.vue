<template>
  <home>
    <template #nav>
      <router-link to="/en-US/docs" class="tab"><span>Docs</span></router-link>
      <router-link to="/en-US/example" class="tab"><span>Example</span></router-link>
    </template>
    <template #home>
      <div>home</div>
    </template>
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
