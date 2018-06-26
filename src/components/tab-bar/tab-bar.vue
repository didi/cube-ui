<template>
  <div class="cube-tab-bar" :class="{'cube-tab-bar_inline': inline}">
    <slot>
      <cube-tab
        v-for="(item, index) in data"
        :label="item.label"
        :icon="item.icon"
        :key="item.label">
      </cube-tab>
    </slot>
    <div v-if="showSlider" ref="slider" class="cube-tab-bar-slider"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import { findIndex } from '../../common/helpers/util'
  import CubeTab from './tab.vue'

  const COMPONENT_NAME = 'cube-tab-bar'

  const EVENT_INPUT = 'input'
  const EVENT_CHANGE = 'change'
  const EVENT_CLICK = 'click'

  const TRANSFORM = prefixStyle('transform')
  const TRANSITION = prefixStyle('transition')

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeTab
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      data: {
        type: Array,
        default () {
          return []
        }
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
    created () {
      this.tabs = []
    },
    mounted () {
      this._updateSliderStyle()
    },
    methods: {
      addTab (tab) {
        this.tabs.push(tab)
      },
      removeTab (tab) {
        const index = this.tabs.indexOf(tab)
        if (index > -1) this.tabs.splice(index, 1)
      },
      trigger (label) {
        // emit click event as long as tab is clicked
        this.$emit(EVENT_CLICK, label)
        // only when value changed, emit change & input event
        if (label !== this.value) {
          const changedEvents = [EVENT_INPUT, EVENT_CHANGE]
          changedEvents.forEach((eventType) => {
            this.$emit(eventType, label)
          })
        }
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
          slider.style[TRANSFORM] = `translateX(${offset}) translateZ(0)`
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

  .cube-tab-bar_inline
    .cube-tab
      display: flex
      align-content: center
      justify-content: center

  .cube-tab-bar-slider
    position: absolute
    left: 0
    bottom: 0
    height: 2px
    width: 20px
    background-color: $tab-slider-bgc
</style>
