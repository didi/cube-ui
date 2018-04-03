<template>
  <cube-page type="drawer-def" title="Drawer">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button @click="showDrawer">Show Drawer</cube-button>
        <cube-drawer
          ref="drawer"
          title="请选择"
          :data="data"
          :selected-index="selectedIndex"
          @change="changeHandler"
          @select="selectHandler"
          @cancel="cancelHandler"></cube-drawer>
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
      changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
        // fake request
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
        }, 200)
      },
      selectHandler(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        console.log('cancel')
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
</style>
