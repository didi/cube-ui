<template>
  <div class="home-view">
    <div class="navigator" :class="{ active: showTabs }">
      <h1 class="logo">
        <router-link to="/"><span>cube-ui</span></router-link>
      </h1>
      <div class="tabs">
        <slot name="nav"></slot>
        <site-lang></site-lang>
      </div>
      <span class="toggle-nav" @click="toggleNav">
        <img src="./nav.svg">
      </span>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Lang from '../lang/lang.vue'
  export default {
    data() {
      return {
        showTabs: false,
        isDocs: this.$route.path.includes('/docs')
      }
    },
    watch: {
      $route(val) {
        this.isDocs = val.path.includes('/docs')
        this.showTabs = false
      }
    },
    components: {
      SiteLang: Lang
    },
    methods: {
      toggleNav() {
        this.showTabs = !this.showTabs
      },
      toggleCatalog() {
        this.showCatalog = !this.showCatalog
      }
    }
  }
</script>
<style lang="stylus">
  @import "~@/common/stylus/variable.styl"

  .home-view
    height: 100%
    padding-top: 70px
    box-sizing: border-box
    transition: all 250ms ease
    .router-view
      height: 100%
  .navigator
    height: 70px
    line-height: 70px
    margin-top: -70px
    background-color: $color-regular-blue
    transition: all 0.3s ease
    overflow: hidden
    .toggle-nav
      display: none
      @media screen and (max-width: 960px)
        display: flex
        position: absolute
        left: 10px
        top: 0
        width: 40px
        height: 70px
        align-items: center
        justify-content: center
      &:active
        opacity: .6
      img
        width: 20px
        height: 20px
    &.active
      height: 255px
    .logo
      float: left
      background-color: $color-orange
      @media screen and (max-width: 960px)
        float: none
        background-color: transparent
        text-align: center
      a
        display: block
        padding: 0 28px
        color: $color-white
        font-size: $fontsize-large-xx
        @media screen and (max-width: 960px)
          display: inline-block
        &::before
          content: ""
          display: inline-block
          background-image: url("//static.galileo.xiaojukeji.com/static/tms/shield/z/mofang/mofang/images/didi-logo.png")
          width: 36px
          height: 29px
          margin-right: 10px
          vertical-align: middle
    .tabs
      float: right
      padding: 0 30px
      @media screen and (max-width: 960px)
        float: none
        padding: 0
        border-top: solid 1px rgba(255, 255, 255, 0.5)
      .tab
        display: inline-block
        margin: 0 10px
        @media screen and (max-width: 960px)
          display: block
          line-height: 45px
          margin: 0 20px
        color: $color-white
        transition: color .2s
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
