<template>
  <div class="cube-drawer-panel" @click.stop>
    <cube-scroll :data="data">
      <ul class="cube-drawer-list">
        <cube-drawer-item v-for="(item, i) in data" :item="item" :key="i" :index="i" />
      </ul>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeScroll from '../scroll/scroll.vue'
  import CubeDrawerItem from './drawer-item.vue'

  const COMPONENT_NAME = 'cube-drawer-panel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      selectedIndex() {
        return this.$parent.selectedIndex[this.index] || []
      }
    },
    methods: {
      clickItem(item) {
        const multiple = this.$parent.multiple
        let changed = false
        if (multiple) {
          item.active = !item.active
          changed = true
        } else if (!item.active) {
          item.active = true
          changed = true
        }
        changed && this.$emit(EVENT_CHANGE, this.activeItems, item)
      }
    },
    components: {
      CubeScroll,
      CubeDrawerItem
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer-panel
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
</style>
