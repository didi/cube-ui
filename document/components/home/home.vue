<template>
  <div class="home-view">
    <div class="navigator" :class="{ active: showTabs }">
      <span class="toggle" @click="toggle"><img src="https://raw.githubusercontent.com/didi/cube-ui/master/assets/" alt="Nav"></span>
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
    data() {
      return {
        showTabs: false
      }
    },
    components: {
      SiteLang: Lang
    },
    methods: {
      toggle() {
        this.showTabs = !this.showTabs
      }
    }
  }
</script>
<style lang="stylus">
  @import "~@/common/stylus/variable.styl"

  .home-view
    @media screen and (min-width: 960px)
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
    transition: all 0.4s ease
    overflow: hidden
    .toggle
      @media screen and (min-width: 960px)
        display: none
      @media screen and (max-width: 960px)
        padding: 0 10px
        position: absolute
        left: 10px
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
        @media screen and (min-width: 960px)
          display: inline-block
          margin: 0 10px
        @media screen and (max-width: 960px)
          display: block
          line-height: 45px
          padding: 0 20px
        color: $color-white
        transition: color .2s
        &:hover
          color: $color-orange
      .router-link-active
        color: $color-orange
</style>
