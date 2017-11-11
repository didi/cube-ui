<template>
  <div class="docs-view">
    <div class="nav-list-wrapper" :class="{ active: showNavList }">
      <div class="toggle" @click="toggle">
        <img src="https://raw.githubusercontent.com/didi/cube-ui/master/assets/" alt=""> Catalog
      </div>
      <side-list :nav-list="navList"></side-list>
    </div>
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
        showNavList: false
      }
    },
    methods: {
      toggle() {
        this.showNavList = !this.showNavList
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
    .nav-list-wrapper
      @media screen and (max-width: 960px)
        width: 100%
        height: 46px
        overflow: hidden
        &.active
          height: auto
          border-bottom: solid 1px $color-grey-opacity
      .toggle
        @media screen and (min-width: 960px)
          display: none
        @media screen and (max-width: 960px)
          display: block
          line-height: 45px
          margin: 0 20px
          border-bottom: solid 1px $color-grey-opacity
  .page-sidelist
    @media screen and (min-width: 960px)
      flex: none
      width: 190px
      height: 100%
      padding: 40px 20px
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 150px
      margin: 20px
    box-sizing: border-box
    overflow-y: auto
  .page-doc
    @media screen and (min-width: 960px)
      flex: 1
      height: 100%
      padding: 44px 20px 20px 20px
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 600px
      padding: 20px
    box-sizing: border-box
    overflow-y: auto
    h2:first-child
      margin-top: 0
  .page-display
    @media screen and (min-width: 960px)
      flex: 1
      height: 100%
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 800px
    flex: none
    width: 420px
    overflow-y: auto
</style>
