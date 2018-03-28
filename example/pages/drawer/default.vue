<template>
  <cube-page type="drawer-def" title="Drawer">
    <div slot="content">
      <cube-drawer :data="data"></cube-drawer>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import { provinceList, cityList, areaList } from '../../data/area'

  export default {
    data() {
      return {
        title: 'Current City: BEIJING',
        data: [
          provinceList,
          cityList,
          areaList
        ]
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
    .drawer-def
      height: 98%
      width: 94%
      margin: 0 auto
      overflow: hidden
</style>
