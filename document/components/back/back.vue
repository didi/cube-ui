<template>
  <img class="to-home" @click="toHome" src="./back.svg">
</template>
<script>
  export default{
    methods: {
      toHome() {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="stylus">
  .to-home
    display: none
  @media screen and (max-width: 960px)
    .to-home
      display: block
      z-index: 5
      position: fixed
      right: auto
      top: 4px
      left: 3px
      width: 20px
      height: 20px
      padding: 10px
</style>
