<template>
  <transition name="cube-drawer-panel-show">
    <div class="cube-drawer-panel" v-show="isVisible">
      <cube-scroll :data="data">
        <ul class="cube-drawer-list">
          <slot>
            <cube-drawer-item v-for="(item, i) in data" :item="item" :key="i" :index="i" @click="itemClickHandler" />
          </slot>
        </ul>
      </cube-scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import apiMixin from '../../common/mixins/api'
  import CubeScroll from '../scroll/scroll.vue'
  import CubeDrawerItem from './drawer-item.vue'

  const COMPONENT_NAME = 'cube-drawer-panel'
  const EVENT_CHANGE = 'change'

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
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      selectedIndex() {
        const selectedIndex = this.$parent.selected[this.index]
        return selectedIndex === undefined ? -1 : selectedIndex
      }
    },
    methods: {
      itemClickHandler(item, index) {
        if (this.selectedIndex !== index) {
          this.$emit(EVENT_CHANGE, this.index, item, index)
        }
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
    position: relative
    height: 100%
    flex: 1
    padding-right: 5px
  .cube-drawer-panel-show-enter, .cube-drawer-panel-show-leave-active
    max-width: 100%

  .cube-drawer-panel-show-enter-active, .cube-drawer-panel-show-leave-active
    max-width: 0
    transition: max-width .4s ease-in-out
</style>
