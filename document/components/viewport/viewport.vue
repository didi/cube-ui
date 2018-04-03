<template>
  <div class="docs-view">
    <img class="menu" v-show="showCatalog" @click="toggleCatalog" src="./close.svg">
    <img class="menu" v-show="!showCatalog" @click="toggleCatalog" src="./menu.svg">
    <back />
    <div v-show="showCatalog" class="mask" :class="{ active: showCatalog }" @click="toggleCatalog"></div>
    <div class="nav-list-wrapper" :class="{ active: showCatalog }">
      <side-list :nav-list="navList"></side-list>
    </div>
    <router-view class="page-doc md-body" v-highlight></router-view>
    <display></display>
  </div>
</template>

<script>
  import SideList from '../side-list/side-list.vue'
  import Display from '../display/display.vue'
  import Back from '../back/back.vue'
  import menuConfig from '../../common/config/menu'

  export default {
    props: {
      lang: {
        type: String,
        default: 'zh-CN'
      }
    },
    data() {
      return {
        navList: menuConfig[this.lang],
        showCatalog: false
      }
    },
    watch: {
      $route() {
        this.showCatalog = false
        window.scrollTo(0, 0)
      },
      showCatalog(newVal) {
        document.documentElement.className = newVal ? 'ov-hidden' : ''
      }
    },
    methods: {
      toggleCatalog() {
        this.showCatalog = !this.showCatalog
      }
    },
    mounted () {
      const mdBodyEle = document.querySelector('.md-body')
      const pattern = /#cube-(.*)-anchor/
      const matcher = window.location.hash.match(pattern)
      if (matcher) {
        const anchor = decodeURIComponent(matcher[1])
        const el = mdBodyEle.querySelector(`#${anchor}`)
        el && el.scrollIntoView()
      }
      window.scrollTo(0, 0)
    },
    components: {
      SideList,
      Display,
      Back
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "~@/common/stylus/variable.styl"

  .docs-view
    display: flex
    width: 100%
    height: 100%
    box-sizing: border-box
    flex-wrap: wrap
    @media screen and (max-width: 960px)
      position: relative
      height: auto
      &::before
        position: fixed
        top: 48px
    .menu
      display: none
      @media screen and (max-width: 960px)
        display: block
        z-index: 5
        position: fixed
        right: 6px
        top: 4px
        width: 20px
        height: 20px
        padding: 10px
      &:active
        opacity: .6
    .nav-list-wrapper
      width: 279px
      height: 100%
      border-right: 1px solid #e3e3e3
      @media screen and (max-width: 960px)
        position: fixed
        right: 0
        top: 48px
        bottom: 0
        height: auto
        background-color: $color-white
        z-index: 1
        overflow: hidden
        transform: translate(100%, 0)
        transition: all 0.4s ease
        border-right: none
        &.active
          transform: translate(0, 0)
    @media screen and (max-width: 960px)
      .mask
        z-index: 1
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: transparent
        &.active
          background-color: rgba(0, 0, 0 ,0.05)
          transition: all 0.4s ease
    .page-sidelist
      height: 100%
      padding: 50px 0
      margin-right: -1px
      box-sizing: border-box
      overflow-y: auto
      @media screen and (max-width: 960px)
        height: 100%
        padding: 30px 0
        font-size: 12px
        .nav-li
          .nav-name
            font-size: 15px
          .angle
            font-size: 12px
          .arrow
            top: 27px
    .page-doc
      position: relative
      flex: 1
      height: 100%
      padding: 54px 30px 30px
      box-sizing: border-box
      overflow-y: auto
      @media screen and (max-width: 960px)
        flex: 1 1 100%
        height: auto
        padding: 20px
        font-size: 13px
      h2:first-child
        margin-top: 0
    .page-display
      flex: none
      height: 100%
      overflow-y: auto
      @media screen and (max-width: 960px)
        flex: 1 1 100%
        height: 680px
</style>
