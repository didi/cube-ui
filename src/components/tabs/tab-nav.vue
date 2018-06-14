<template>
  <div class="cube-tab-nav" :class="resolveFixedCls">
    <slot>
      <cube-tab-nav-item
        ref="navItem"
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab-nav-item>
    </slot>
    <div v-if='showSlider' ref="slider" class="cube-tab-slider"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import { findIndex } from '../../common/helpers/util'
  import CubeTabNavItem from './tab-nav-item.vue'

  const COMPONENT_NAME = 'cube-tab-nav'

  const TRANSFORM = prefixStyle('transform')
  const TRANSITION = prefixStyle('transition')

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
      showSlider: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      resolveFixedCls () {
        if (!this.fixed) return ''
        return `is-fixed-${this.fixed}`
      }
    },
    mounted () {
      this._updateSliderStyle()
    },
    methods: {
      _updateSliderStyle () {
        /* istanbul ignore if */
        if (!this.showSlider) return
        const slider = this.$refs.slider
        this.$nextTick(() => {
          const { width, index } = this._getSliderWidthAndIndex()
          slider.style.width = `${width}px`
          this.setSliderTransform(this._getOffsetLeft(index))
        })
      },
      setSliderTransform (offset) {
        const slider = this.$refs.slider
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = `all 0.2s linear`
          slider.style[TRANSFORM] = `translateX(${offset}px) translateZ(0px)`
        }
      },
      _getSliderWidthAndIndex () {
        let width = 0
        let index = 0
        const slots = this.$slots.default
        const navItems = this.$refs.navItem
        if (slots) {
          index = findIndex(slots, (vnode) => vnode.componentOptions.propsData && vnode.componentOptions.propsData.label === this.value)
          width = (slots[index].elm && slots[index].elm.clientWidth)
        } else if (navItems) {
          index = findIndex(navItems, (instance) => instance.label === this.value)
          width = this.$refs.navItem[index].$el.clientWidth
        }
        return {
          width,
          index
        }
      },
      _getOffsetLeft (index) {
        let offsetLeft = 0
        const slots = this.$slots.default
        const navItems = this.$refs.navItem
        if (slots) {
          slots.forEach((vnode, i) => {
            if (i < index) offsetLeft += vnode.elm.clientWidth
          })
        } else if (navItems) {
          navItems.forEach((instance, i) => {
            if (i < index) offsetLeft += instance.$el.clientWidth
          })
        }
        return offsetLeft
      }
    },
    watch: {
      value () {
        this._updateSliderStyle()
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
    background-color: $color-white
    &.is-fixed-top
      position: fixed
      top: 0
      right: 0
      left: 0
      z-index: 99
    &.is-fixed-bottom
      position: fixed
      bottom: 0
      right: 0
      left: 0
      z-index: 99

  .cube-tab-slider
    position: absolute
    left: 0
    bottom: 0
    height: 2px
    width: 20px
    background-color: $color-dark-orange


</style>
