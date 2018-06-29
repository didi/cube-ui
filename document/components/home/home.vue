<template>
  <div class="home-view" :class="{'home-view-docs': isDocs, 'home-view-demo': isExample, opacity1: opacity1}">
    <div class="navigator" ref="navigator" :class="{ active: showTabs }">
      <div class="logo">
        <router-link to="/"><img src="./logo.png" alt="Cube-UI"></router-link>
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
  import throttle from 'lodash-es/throttle'

  export default {
    data() {
      return {
        showTabs: false,
        opacity1: false,
        isDocs: this.$route.path.indexOf('/docs') > -1,
        isExample: this.$route.path.indexOf('/example') > -1
      }
    },
    computed: {
      isIndex() {
        return !this.isDocs && !this.isExample
      }
    },
    watch: {
      $route(val) {
        this.isDocs = val.path.indexOf('/docs') > -1
        this.isExample = val.path.indexOf('/example') > -1
        this.showTabs = false
      },
      isIndex: {
        handler: function (newVal) {
          if (newVal) {
            document.addEventListener('touchmove', this.checkScrollTop, false)
            window.addEventListener('scroll', this.checkScrollTop, false)
          } else {
            document.removeEventListener('touchmove', this.checkScrollTop, false)
            window.removeEventListener('scroll', this.checkScrollTop, false)
            this.$refs.navigator && (this.$refs.navigator.style.backgroundColor = '')
          }
        },
        immediate: true
      }
    },
    beforeCreate() {
      this.checkScrollTop = throttle(() => {
        const y = window.scrollY
        const h = 48
        const opacity = y / h
        this.opacity1 = opacity >= 0.98
        this.$refs.navigator.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`
      }, 10, {
        leading: true
      })
    },
    mounted() {
      setTimeout(() => {
        this.isIndex && this.checkScrollTop()
      })
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
      &.home-view-docs, &.home-view-demo
        overflow: hidden
        height: auto
        .toggle-nav
          display: none!important
    .router-view
      height: 100%
  .home-view-docs, .home-view-demo, .opacity1
    .navigator
      box-shadow: 0 1px 2px rgba(0, 0, 0, .15)
  .navigator
    z-index: 5
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 70px
    line-height: 70px
    padding: 0 100px
    margin-top: 0
    background-color: #fff
    @media screen and (max-width: 960px)
      padding: 0
      height: 48px
      line-height: 48px
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
      a
        display: block
        height: 100%
        margin: 0 80px
      img
        height: 100%
        transform: scale(.5)
        transform-origin: 0 center
      @media screen and (max-width: 960px)
        float: none
        a
          float: none
          text-align: center
          img
            transform-origin: center center
    .tabs
      float: right
      padding: 0 30px
      box-shadow: none
      @media screen and (max-width: 960px)
        position: fixed
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
          line-height: 45px
          color: black
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
