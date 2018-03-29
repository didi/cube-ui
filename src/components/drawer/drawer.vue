<template>
  <transition name="cube-drawer-move">
    <div class="cube-drawer" @click="drawerClick" v-show="isVisible">
      <div class="cube-drawer-panels" @click.stop>
        <slot>
          <cube-drawer-panel
            ref="panels"
            v-for="(panel, index) in data"
            :key="index"
            :index="index"
            :data="panel"
            @change="changeHandler" />
        </slot>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import CubeDrawerPanel from './drawer-panel.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'cube-drawer'
  const EVENT_CHANGE = 'change'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        index: -1,
        selectedVal: [],
        selected: [...this.selectedIndex]
      }
    },
    watch: {
      selectedIndex(newVal) {
        this.selected = [...newVal]
      },
      index(newIndex) {
        this.showPanel()
      }
    },
    mounted() {
      let len = this.data.length
      for (let i = 0; i < len; i++) {
        this.index = i
        if (this.selected[i] < 0 || this.selected[i] === undefined) {
          // if (i > 0) {
          //   const lastIndex = i - 1
          //   const index = this.selected[lastIndex]
          //   this.changeHandler(lastIndex, this.data[lastIndex][index], index)
          // }
          break
        }
      }
    },
    methods: {
      refill(columnIndex, data, index) {
        this.$set(this.data, columnIndex, data)
        this.index = columnIndex
        this.selected = this.selected.slice(0, columnIndex)
        if (index >= 0) {
          this.$set(this.selected, columnIndex, index)
          this.changeHandler(columnIndex, this.data[columnIndex][index], index)
        }
      },
      showPanel() {
        const len = this.data.length
        const index = this.index
        let i = 0
        while (i < len) {
          this.$refs.panels[i][i <= index ? 'show' : 'hide']()
          i++
        }
      },
      changeHandler(columnIndex, item, index) {
        this.selectedVal[columnIndex] = item
        this.selected[columnIndex] = index
        this.selected = [...this.selected]
        if (columnIndex === (this.data.length - 1)) {
          // last column
          this.$emit(EVENT_SELECT, this.selectedVal, this.selected)
        } else {
          this.$emit(EVENT_CHANGE, columnIndex, item, this.selectedVal, this.selected)
        }
      },
      drawerClick() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      }
    },
    components: {
      CubeDrawerPanel
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
  .cube-drawer-panels
    z-index: 5
    position: absolute
    top: 0
    right: 0
    bottom: 0
    display: flex
    overflow: hidden
    background-color: $color-white
  .cube-drawer-move-enter, .cube-drawer-move-leave-active
    transform: translate3d(100%, 0, 0)

  .cube-drawer-move-enter-active, .cube-drawer-move-leave-active
    transition: transform .3s ease-in-out
</style>
