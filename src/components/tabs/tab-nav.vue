<template>
  <div class="cube-tab-nav" :class="[_resolveFixedCls]">
    <slot>
      <cube-tab-nav-item
        ref="navItem"
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab-nav-item>
    </slot>
    <div v-if='showTabBar' ref="tabBar" class="cube-tab-bar"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import CubeTabNavItem from './tab-nav-item.vue'

  const COMPONENT_NAME = 'cube-tab-nav'

  const TRANSITION = prefixStyle('transition')
  const TRANSFORM = prefixStyle('transform')

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeTabNavItem
    },
    props: {
      value: {
        type: [String, Number]
      },
      data: {
        type: Array,
        default () {
          return []
        }
      },
      fixed: {
        type: String,
        default: ''
      },
      inline: {
        type: Boolean,
        default: false
      },
      showTabBar: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _resolveFixedCls () {
        if (!this.fixed) return ''
        return `is-fixed-${this.fixed}`
      }
    },
    mounted () {
      this._updateTabBarStyle()
    },
    methods: {
      _updateTabBarStyle () {
        /* istanbul ignore if */
        if (!this.showTabBar) return
        const tabBar = this.$refs.tabBar
        this.$nextTick(() => {
          const { width, index } = this._getTabBarWidthAndIndex()
          tabBar.style.width = `${width}px`
          tabBar.style[TRANSITION] = `all 0.2s linear`
          this.setTabBarTransform(this._getOffsetLeft(index))
        })
      },
      setTabBarTransform (offset) {
        const tabBar = this.$refs.tabBar
        if (tabBar) tabBar.style[TRANSFORM] = `translateX(${offset}px) translateZ(0px)`
      },
      _getTabBarWidthAndIndex () {
        let width = 0
        let index = 0
        const slots = this.$slots.default
        const navItems = this.$refs.navItem
        if (slots) {
          index = slots.findIndex((vnode) => vnode.componentOptions.propsData && vnode.componentOptions.propsData.label === this.value)
          width = (slots[index].elm && slots[index].elm.clientWidth) || 0
        } else if (navItems) {
          index = navItems.findIndex((instance) => instance.label === this.value)
          width = this.$refs.navItem[index].$el.clientWidth
        }
        return {
          width, index
        }
      },
      _getOffsetLeft (index) {
        let offsetLeft = 0
        const slots = this.$slots.default
        const navItems = this.$refs.navItem
        if (slots) {
          slots.forEach((vnode, i) => {
            if (i < index) offsetLeft += vnode.elm.clientWidth || 0
          })
        } else if (navItems) {
          navItems.forEach((instance, i) => {
            if (i < index) offsetLeft += instance.$el.clientWidth || 0
          })
        }
        return offsetLeft
      }
    },
    watch: {
      value () {
        this._updateTabBarStyle()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-tab-nav
    position: relative
    display: flex
    align-items: center
    justify-content: center
    font-size: 100%
    background-color $color-white
    &.is-fixed-top
      position fixed
      top 0
      right 0
      left 0
      z-index 99
    &.is-fixed-bottom
      position fixed
      bottom 0
      right 0
      left 0
      z-index 99

  .cube-tab-bar
    position absolute
    left 0
    bottom 0
    height 2px
    width 20px
    background-color $color-dark-orange
</style>
