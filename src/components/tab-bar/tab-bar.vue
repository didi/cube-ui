<template>
  <div class="cube-tab-bar" :class="resolveFixedCls">
    <slot>
      <cube-tab
        ref="tab"
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab>
    </slot>
    <div v-if='showSlider' ref="slider" class="cube-tab-bar-slider"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import { findIndex } from '../../common/helpers/util'
  import CubeTab from './tab.vue'

  const COMPONENT_NAME = 'cube-tab-bar'

  const TRANSFORM = prefixStyle('transform')
  const TRANSITION = prefixStyle('transition')

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeTab
    },
    data () {
      return {
        tabs: []
      }
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
      addTab (childVm) {
        this.tabs.push(childVm)
      },
      removeTab (childVm) {
        const index = this.tabs.indexOf(childVm)
        if (index > -1) this.tabs.splice(index, 1)
      },
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
        if (typeof offset === 'number') {
          offset = `${offset}px`
        }
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = `all 0.2s linear`
          slider.style[TRANSFORM] = `translateX(${offset}) translateZ(0px)`
        }
      },
      _getSliderWidthAndIndex () {
        let width = 0
        let index = 0
        if (this.tabs.length > 0) {
          index = findIndex(this.tabs, (tab) => tab.label === this.value)
          width = this.tabs[index].$el.clientWidth
        }
        return {
          width,
          index
        }
      },
      _getOffsetLeft (index) {
        let offsetLeft = 0
        this.tabs.forEach((tab, i) => {
          if (i < index) offsetLeft += tab.$el.clientWidth
        })
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

  .cube-tab-bar
    position: relative
    display: flex
    align-items: center
    justify-content: center
    font-size: 100%
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

  .cube-tab-bar-slider
    position: absolute
    left: 0
    bottom: 0
    height: 2px
    width: 20px
    background-color: $color-dark-orange


</style>
