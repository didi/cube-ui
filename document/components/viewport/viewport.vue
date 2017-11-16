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
    mounted () {
      const mdBodyEle = document.querySelector('.md-body')
      const pattern = /#cube-(.*)-anchor/
      const matcher = window.location.hash.match(pattern)
      if (matcher) {
        const anchor = matcher[1]
        mdBodyEle.querySelector(`#${anchor}`).scrollIntoView()
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
    h2:first-child
      margin-top: 0
  .page-display
    flex: none
    width: 420px
    height: 100%
    overflow-y: auto
</style>
