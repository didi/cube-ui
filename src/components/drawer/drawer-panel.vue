<template>
  <transition name="cube-drawer-move">
    <div class="cube-drawer-panel" v-show="isVisible">
      <div class="cube-drawer-scroll-wrapper">
        <cube-scroll ref="scroll" :data="data">
          <ul class="cube-drawer-list">
            <slot>
              <cube-drawer-item v-for="(item, i) in data" :item="item" :key="i" :index="i" />
            </slot>
          </ul>
        </cube-scroll>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import visibilityMixin from '../../common/mixins/visibility'
  import CubeScroll from '../scroll/scroll.vue'
  import CubeDrawerItem from './drawer-item.vue'

  const COMPONENT_NAME = 'cube-drawer-panel'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin],
    props: {
      data: {
        type: Array,
        default() {
          /* istanbul ignore next */
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
    watch: {
      data() {
        this.scrollToTop()
      },
      isVisible() {
        this.$nextTick(() => {
          this.refresh()
        })
      }
    },
    mounted() {
      this.$parent.addPanel(this)
    },
    beforeDestroy() {
      this.$parent.removePanel(this)
    },
    methods: {
      refresh() {
        this.$refs.scroll.refresh()
      },
      scrollToTop() {
        this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 0)
      },
      itemClickHandler(item, index) {
        if (this.selectedIndex !== index) {
          this.$parent.changeHandler(this.index, item, index)
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
    z-index: 1
    flex: 1
    width: 170px
    overflow: hidden
    background-color: $drawer-panel-bgc
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2)
    + .cube-drawer-panel
      margin-left: -67px
    &:first-child
      box-shadow: none
  .cube-drawer-scroll-wrapper // fix flex item height: 100% bug in android
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

  .cube-drawer-move-enter, .cube-drawer-move-leave-to
    transform: translate(67px, 0)
  .cube-drawer-move-enter-active, .cube-drawer-move-leave-active
    transition: transform .3s ease-in-out
</style>
