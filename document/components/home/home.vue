<template>
  <div class="home-view">
    <div class="navigator">
      <router-link to="/" class="brand"><span>cube-ui</span></router-link>
      <div class="tabs">
        <slot></slot>
        <site-lang></site-lang>
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Lang from '../lang/lang.vue'
  export default {
    components: {
      SiteLang: Lang
    }
  }
</script>
<style lang="stylus">
  @import "~@/common/stylus/variable.styl"

  .home-view
    height: 100%
    .router-view
      height: 93%
  .navigator
    height: 50px
    line-height: 50px
    padding: 0 30px
    background-color: #20232a
    a
      color: $color-orange
    .tabs
      float: right
      display: flex
      .tab
        flex: 0 0 auto
        margin-left: 20px
</style>
