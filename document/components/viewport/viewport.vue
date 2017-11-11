<template>
  <div class="docs-view">
    <side-list :nav-list="navList"></side-list>
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
        navList: menuConfig[this.lang]
      }
    },
    components: {
      SideList,
      Display
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .docs-view
    display: flex
    width: 100%
    height: 100%
    flex-wrap: wrap
  .page-sidelist
    @media screen and (min-width: 960px)
      flex: none
      width: 190px
      height: 100%
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 40px
    padding: 40px 20px
    box-sizing: border-box
    overflow-y: auto
  .page-doc
    @media screen and (min-width: 960px)
      flex: 1
      height: 100%
    @media screen and (max-width: 960px)
      flex: 1 1 100%
      height: 600px
    padding: 44px 20px 20px 20px
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
    height: 100%
    overflow-y: auto
</style>
