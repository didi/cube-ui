<template>
  <div class="home-view">
    <div class="navigator" :class="{ active: showTabs }">
      <h1 class="logo">
        <router-link to="/"><img src="./didi-logo.svg" alt="DiDi"></router-link>
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
      <nav-loading></nav-loading>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Lang from '../lang/lang.vue'
  import NavLoading from '../nav-loading/nav-loading.vue'
  export default {
    data() {
      return {
        showTabs: false,
        isDocs: this.$route.path.indexOf('/docs') > -1
      }
    },
    watch: {
      $route(val) {
        this.isDocs = val.path.indexOf('/docs') > -1
        this.showTabs = false
      }
    },
    components: {
      SiteLang: Lang,
      NavLoading
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
  @require "~@/common/stylus/variable.styl"

  .home-view
    height: 100%
    box-sizing: border-box
    transition: all 250ms ease
    background: url("./cube.png") no-repeat 520px -31px
    background-size: 1515px 696px
    .router-view
      height: 100%
  .navigator
    height: 70px
    line-height: 70px
    padding: 0 100px
    transition: all 0.3s ease
    overflow: hidden
    @media screen and (max-width: 960px)
      background-color: $color-regular-blue
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
      padding: 0 28px
      @media screen and (max-width: 960px)
        float: none
        text-align: center
      img
        height: 70px
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
        color: #4B4B4C
        transition: color .2s
        @media screen and (max-width: 960px)
          display: block
          line-height: 45px
          margin: 0 20px
          color: $color-white
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
