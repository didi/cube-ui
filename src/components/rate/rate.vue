<template>
  <!-- the preventDefault of touchmove is to prevent any default action caused by any touchmove event associated with the same active touch point, such as scrolling. -->
  <ul ref="rateContainer"
    class="cube-rate"
    :class="rateClass"
    @touchstart.stop="handleStart"
    @touchmove.stop.prevent="handleMove"
    @touchend.stop="handleEnd"
    @mousedown.stop="handleStart"
    @mousemove.stop="handleMove"
    @mouseup.stop="handleEnd">
    <slot>
      <cube-rate-item v-for="n in max" :key="n" :index="n"></cube-rate-item>
    </slot>
  </ul>
</template>

<script type="text/ecmascript-6">
  import CubeRateItem from './rate-item.vue'
  const COMPONENT_NAME = 'cube-rate'
  const EVENT_INPUT = 'input'

  const EVENT_TYPE_MOUSE = 'mouse'
  function isMouseEvent(e) {
    return e.type.indexOf(EVENT_TYPE_MOUSE) > -1
  }
  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 5
      },
      disabled: {
        type: Boolean,
        default: false
      },
      justify: {
        type: Boolean,
        default: false
      },
      allowHalf: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tempValue: 0
      }
    },
    created() {
      this.mousePressed = false
    },
    computed: {
      rateClass() {
        return this.justify && 'cube-rate-justify'
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          if (val !== this.tempValue) {
            this.tempValue = this.handleNum(val)
          }
        }
      }
    },
    methods: {
      handleStart(e) {
        if (!this.disabled) {
          if (isMouseEvent(e)) {
            this.mousePressed = true
            document.addEventListener('mouseup', this.handleEnd)
            document.addEventListener('mousemove', this.handleMove)
          }
          const rect = this.$refs.rateContainer.getBoundingClientRect()
          this.left = rect.left
          this.containerWidth = rect.width
        }
      },
      handleMove(e) {
        if (this.disabled) return

        if (!isMouseEvent(e)) {
          this.computeTempValue(e.touches[0])
        } else if (this.mousePressed) {
          this.computeTempValue(e)
        }
      },
      handleEnd(e) {
        if (this.disabled) return
        if ((!isMouseEvent(e) || this.mousePressed)) {
          if (isMouseEvent(e)) {
            this.mousePressed = false
            document.removeEventListener('mouseup', this.handleEnd)
            document.removeEventListener('mousemove', this.handleMove)
          }
          this.computeTempValue(isMouseEvent(e) ? e : e.changedTouches[0])
          this.$emit(EVENT_INPUT, this.tempValue)
        }
      },
      handleNum(num) {
        if (this.allowHalf) {
          const baseNum = Math.ceil(num) - 0.5
          num = num <= baseNum ? baseNum : baseNum + 0.5
        } else {
          num = Math.ceil(num)
        }
        return num
      },
      computeTempValue(touch) {
        let num = (touch.clientX - this.left) / this.containerWidth * this.max
        num = this.handleNum(num)
        if (num > 0 && num <= this.max) {
          this.tempValue = num
        } else if (num <= 0) {
          this.tempValue = 0
        } else {
          this.tempValue = this.max
        }
      }
    },
    components: {
      CubeRateItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-rate
    list-style: none
    display: inline-flex
    vertical-align: top
    flex-wrap: nowrap
    max-width: 100%
  .cube-rate-justify
    width: 100%
    justify-content: space-between
</style>
