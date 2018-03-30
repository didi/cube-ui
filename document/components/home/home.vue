<template>
  <div class="home-view" :class="{'home-view-docs': isDocs}">
    <div class="navigator" :class="{ active: showTabs }">
      <div class="logo">
        <router-link to="/"><img src="./didi-logo.svg" alt="DiDi"></router-link>
      </div>
      <div class="tabs">
        <i></i>
        <slot name="nav"></slot>
        <site-lang></site-lang>
      </div>
      <span class="toggle-nav" @click="toggleNav"><i></i></span>
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
    padding-top: 70px
    transition: all 250ms ease
    @media screen and (max-width: 960px)
      padding-top: 48px
      &.home-view-docs
        overflow: hidden
        height: auto
        .toggle-nav
          display: none!important
    .router-view
      height: 100%
  .navigator
    position: relative
    height: 70px
    line-height: 70px
    padding: 0 100px
    margin-top: -70px
    transition: all 0.3s ease
    @media screen and (max-width: 960px)
      padding: 0
      height: 48px
      line-height: 48px
      margin-top: -48px
      &.active
        .tabs
          transition: transform .2s
          transform: scale(1)
    .toggle-nav
      display: none
      font-size: 0
      i, &::before, &::after
        display: inline-block
        width: 5px
        height: 5px
        border-radius: 50%
        background-color: #646464
      i
        margin: 0 2px
      &::before, &::after
        content: ""
        width: 3px
        height: 3px
      @media screen and (max-width: 960px)
        display: flex
        position: absolute
        right: 0
        top: 0
        padding: 0 16px
        height: 100%
        align-items: center
        justify-content: center
      &:active
        opacity: .6
    .logo
      float: left
      padding: 0 16px
      height: 100%
      @media screen and (max-width: 960px)
        float: none
        text-align: center
        img
          transform: scale(1.6)
      img
        height: 100%
    .tabs
      float: right
      padding: 0 30px
      box-shadow: none
      @media screen and (max-width: 960px)
        position: absolute
        z-index: 10
        right: 10px
        padding: 0 0 0 2px
        margin-top: -12px
        font-size: 12px
        background-color: #fff
        border: 1px solid #e5e5e5
        border-radius: 3px
        transform: scale(0)
        transform-origin: 84% 0
        i
          position: absolute
          top: -5px
          right: 7px
          width: 10px
          height: 5px
          background-color: #fff
          &::before, &::after
            content: ""
            position: absolute
            bottom: 0
            right: 3px
            width: 8px
            border-top: 1px solid #e5e5e5
            transform: rotate(-40deg)
            transform-origin: left bottom
          &::after
            right: 0
            transform: rotate(40deg)
            transform-origin: right bottom
      .tab
        display: inline-block
        margin: 0 18px
        color: #4B4B4C
        transition: color .2s
        @media screen and (max-width: 960px)
          display: block
          line-height: 36px
          color: black
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
