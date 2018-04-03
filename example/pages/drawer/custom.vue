<template>
  <cube-page type="drawer-def" title="Drawer">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button @click="showDrawer">Show Drawer</cube-button>
        <cube-drawer
          ref="drawer"
          :data="data"
          :selected-index="selectedIndex"
          @change="changeHandler"
          @select="selectHandler"
          @cancel="cancelHandler">
          <span slot="title">{{province.text}}</span>
          <cube-drawer-panel
            v-for="(panel, index) in data"
            :key="index"
            :index="index"
            :data="panel"
          >
            <cube-drawer-item v-for="(item, i) in panel" :item="item" :key="i" :index="i">
              <i class="cubeic-round-border"></i>
              <span>{{item.text}}</span>
            </cube-drawer-item>
          </cube-drawer-panel>
        </cube-drawer>
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
        province: {},
        selectedIndex: [],
        data: [
          [],
          []
        ]
      }
    },
    methods: {
      showDrawer() {
        const randomIndex = Math.round(Math.random() * provinceList.length)
        const randomProvince = provinceList[randomIndex]
        this.province = randomProvince
        this.$refs.drawer.refill(0, cityList[randomProvince.value])
        this.$refs.drawer.show()
      },
      changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
        setTimeout(() => {
          // city change, get area data
          const data = areaList[item.value]
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
    .cube-drawer-item_active
      color: #fc9153
      background-color: transparent
</style>
