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
      }
    },
    data() {
      return {
        tempValue: this.value
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
      value(val) {
        if (val !== this.tempValue) {
          this.tempValue = val
        }
      }
    },
    methods: {
      handleStart(e) {
        if (!this.disabled) {
          if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
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
        if (!this.disabled && (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)) {
          this.computeTempValue(e.type.indexOf(EVENT_TYPE_MOUSE) === -1 ? e.touches[0] : e)
        }
      },
      handleEnd(e) {
        if (!this.disabled && (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)) {
          if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
            this.mousePressed = false
            document.removeEventListener('mouseup', this.handleEnd)
            document.removeEventListener('mousemove', this.handleMove)
          }
          this.computeTempValue(e.type.indexOf(EVENT_TYPE_MOUSE) > -1 ? e : e.changedTouches[0])
          this.$emit(EVENT_INPUT, this.tempValue)
        }
      },
      computeTempValue(touch) {
        let leftAmount = Math.ceil((touch.clientX - this.left) / this.containerWidth * this.max)
        if (leftAmount > 0 && leftAmount <= this.max) {
          this.tempValue = leftAmount
        } else if (leftAmount <= 0) {
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
