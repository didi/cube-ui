<template>
  <div class="docs-view">
    <div class="nav-list-wrapper">
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
        showCatalog: false
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
    .catalog-toggle
      display: none
      @media screen and (max-width: 960px)
        display: block
        margin: -68px 0 0 20px
    .nav-list-wrapper
      @media screen and (max-width: 960px)
        position: fixed
        left: -190px
        top: 0
        height: 100%
        overflow: hidden
        transition: all 250ms ease
  .page-sidelist
    flex: none
    width: 190px
    height: 100%
    padding: 40px 20px
    box-sizing: border-box
    overflow-y: auto
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
