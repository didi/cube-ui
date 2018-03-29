<template>
  <cube-page type="drawer-def" title="Drawer">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button @click="showDrawer">Show Drawer</cube-button>
        <cube-drawer ref="drawer" :data="data" :selected-index="selectedIndex" @change="changeHandler" @select="selectHandler"></cube-drawer>
      </div>
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
        selectedIndex: [],
        data: [
          provinceList,
          [],
          []
        ]
      }
    },
    methods: {
      showDrawer() {
        this.$refs.drawer.show()
      },
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      },
      changeHandler(index, item, selectedVal, selectedIndex) {
        setTimeout(() => {
          let data
          if (index === 0) {
            // procince change, get city data
            data = cityList[item.value]
          } else {
            // city change, get area data
            data = areaList[item.value]
          }
          this.$refs.drawer.refill(index + 1, data)
        }, 500)
      },
      selectHandler(selectedVal, selectedIndex) {
        console.log('select', selectedVal, selectedIndex)
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
