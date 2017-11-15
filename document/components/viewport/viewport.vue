<template>
  <div class="docs-view">
    <img v-show="!showCatalog" class="toggle-catalog" @click="toggleCatalog" src="./catalog.svg"/>
    <div class="nav-list-wrapper" :class="{ active: showCatalog }">
      <img v-show="showCatalog" class="active-toggle-catalog" @click="toggleCatalog" src="./catalog.svg"/>
      <side-list :nav-list="navList"></side-list>
    </div>
    <div v-show="showCatalog" class="mask" :class="{ active: showCatalog }" @click="toggleCatalog"></div>
    <router-view class="page-doc md-body" v-highlight></router-view>
    <display></display>
  </div>
</template>

<script>
  import SideList from '../side-list/side-list.vue'
  import Display from '../display/display.vue'
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
    methods: {
      toggleCatalog() {
        this.showCatalog = !this.showCatalog
      }
    },
    components: {
      SideList,
      Display
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  .docs-view
    display: flex
    width: 100%
    height: 100%
    flex-wrap: wrap
    @media screen and (max-width: 960px)
      position: relative
      height: auto
    .toggle-catalog
      display: none
      @media screen and (max-width: 960px)
        display: block
        position: absolute
        right: 20px
        top: 20px
    .nav-list-wrapper
      @media screen and (max-width: 960px)
        width: 100%
        position: absolute
        right: -100%
        top: 0
        height: 100%
        background-color: $color-white
        z-index: 1
        overflow: hidden
        transition: all 250ms ease
        &.active
          transform: translate(-70%, 0)
        .active-toggle-catalog
          margin: 20px 0 0 20px
    .mask
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transition: all 250ms ease
      &.active
        background-color: rgba(0, 0, 0 ,0.2)
  .page-sidelist
    flex: none
    width: 190px
    height: 100%
    padding: 40px 20px
    box-sizing: border-box
    overflow-y: auto
    @media screen and (max-width: 960px)
      width: 70%
      height: 100%
      padding: 5px 20px
  .page-doc
    flex: 1
    height: 100%
    padding: 44px 20px 20px 20px
    box-sizing: border-box
    overflow-y: auto
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: auto
      padding: 20px 20px 0 20px
    h2:first-child
      margin-top: 0
  .page-display
    flex: none
    height: 100%
    width: 420px
    overflow-y: auto
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 800px
</style>
