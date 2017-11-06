<template>
  <div class="home-view">
    <div class="navigator">
      <h1 class="logo">
        <router-link to="/"><span>cube-ui</span></router-link>
      </h1>
      <div class="tabs">
        <slot name="nav"></slot>
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
    min-width: 800px
    height: 100%
    padding-top: 70px
    box-sizing: border-box
    .router-view
      height: 100%
  .navigator
    height: 70px
    line-height: 70px
    margin-top: -70px
    background-color: $color-regular-blue
    .logo
      float: left
      background-color: $color-orange
      a
        display: block
        padding: 0 28px
        color: $color-white
        font-size: $fontsize-large-xx
        &::before
          content: ""
          display: inline-block
          background-image: url("//static.galileo.xiaojukeji.com/static/tms/shield/z/mofang/mofang/images/didi-logo.png")
          width: 36px
          height: 29px
          margin-right: 10px
          vertical-align: middle
    .tabs
      padding: 0 30px
      float: right
      .tab
        display: inline-block
        color: $color-white
        margin: 0 10px
        transition: color .2s
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
