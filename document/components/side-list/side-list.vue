<template>
  <nav class="page-sidelist">
    <side-nav :data="navList"></side-nav>
  </nav>
</template>

<script>
  import SideNav from '../side-nav/side-nav.vue'

  export default {
    props: {
      navList: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {
      SideNav
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"

  .page-sidelist
    font-size: $fontsize-large
</style>
