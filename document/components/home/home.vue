<template>
  <div class="home-view" :class="{ right: showCatalog}">
    <div class="navigator" :class="{ active: showTabs }">
      <img v-show="isDocs" class="toggle-catalog" @click="toggleCatalog" src="./catalog.svg"/>
      <h1 class="logo">
        <router-link to="/"><span>cube-ui</span></router-link>
      </h1>
      <div class="tabs">
        <slot name="nav"></slot>
        <site-lang></site-lang>
      </div>
      <span class="toggle-nav" @click="toggleNav">
        <img src="./nav.svg"/>
      </span>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Lang from '../lang/lang.vue'
  export default {
    data() {
      return {
        showTabs: false,
        isDocs: this.$route.path.includes('/docs'),
        showCatalog: false
      }
    },
    watch: {
      $route(val) {
        this.isDocs = val.path.includes('/docs')
        Vue.nextTick(() => {
        })
        setTimeout(() => {
          this.showTabs = false
          this.showCatalog = false
        }, 100)
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
    @media screen and (min-width: 960px)
      min-width: 800px
    &.right
      transform: translate(190px, 0)
    .router-view
      height: 100%
  .navigator
    height: 70px
    line-height: 70px
    margin-top: -70px
    background-color: $color-regular-blue
    transition: all 0.4s ease
    overflow: hidden
    .toggle-catalog
      display: none
      @media screen and (max-width: 960px)
        display: block
        padding: 10px 10px
        position: absolute
        left: 10px
        top: 10px
    .toggle-nav
      display: none
      @media screen and (max-width: 960px)
        display: block
        padding: 10px 10px
        position: absolute
        right: 10px
        top: 0
        color: $color-white
    &.active
      height: 255px

    .logo
      @media screen and (min-width: 960px)
        float: left
        background-color: $color-orange
      @media screen and (max-width: 960px)
        text-align: center
      a
        @media screen and (min-width: 960px)
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
      @media screen and (min-width: 960px)
        float: right
        padding: 0 30px
      @media screen and (max-width: 960px)
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
