<template>
  <div class="cube-radio" :class="_containerClass" :data-pos="position">
    <label class="cube-radio-wrap" :class="_wrapClass(option)">
      <input class="cube-radio-input" type="radio" :disabled="option.disabled" v-model="radioValue"   :value="option.value || option">
      <span class="cube-radio-ui cubeic-round-border">
        <i></i>
      </span>
      <slot>
        <span class="cube-radio-label">{{option.label || option}}</span>
      </slot>
    </label>
  </div>
</template>

<script  type="text/ecmascript-6">
const COMPONENT_NAME = 'cube-radio'
const EVENT_INPUT = 'input'

export default {
  name: COMPONENT_NAME,
  props: {
    value: String,
    option: {
      type: [String, Object],
      required: true
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      radioValue: this.value
    }
  },
  watch: {
    value(newV) {
      this.radioValue = newV
    },
    radioValue(newV) {
      this.$emit(EVENT_INPUT, newV)
    }
  },
  computed: {
    _containerClass() {
      if (this.$parent.horizontal) {
        return 'border-right-1px'
      }
    }
  },
  methods: {
    _wrapClass(option) {
      return {
        'cube-radio_selected': this.radioValue === (option.value || option),
        'cube-radio_disabled': option.disabled,
        'border-bottom-1px': !this.$parent.horizontal
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"
  $ui-width = 1.42em
  .cube-radio
    position: relative
    padding: 0 16px
    text-align: left
    font-size: 100%
    color: $radio-color
    background-color: $radio-bgc
    &[data-pos="right"]
      .cube-radio-ui
        margin-right: 0
        position: absolute
        right: 0
      .cube-radio-label
        margin-right: $ui-width
    &:last-child
      .cube-radio-wrap
        border-none()
  .cube-radio-wrap
    position: relative
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 11px 0
    line-height: 1.5
    word-break: break-word
    word-wrap: break-word
  .cube-radio-input
    z-index: 1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0
  .cube-radio-ui
    position: relative
    width: 1em
    height: 1em
    margin-right: $ui-width - 1em
    line-height: 1
    color: transparent
    border-radius: 50%
    &::before, i
      transition: all .2s
    &::before
      color: $radio-icon-color
      display: inline-block
      transform: scale(1.2)
    i
      position: absolute
      top: 0
      left: 0
      overflow: hidden
      width: 100%
      height: 100%
      border-radius: 50%
      background-color: currentColor
      transform: scale(.4)
      &::before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        width: 50%
        height: 50%
        transform: translate(-50%, -50%) scale(.8)
        background-color: currentColor
        border-radius: 50%
  .cube-radio_selected
    .cube-radio-ui
      color: $radio-selected-icon-color
      &::before
        color: transparent
      i
        transform: scale(1)
        &::before
          background-color: $radio-selected-icon-bgc
  .cube-radio_disabled
    .cube-radio-ui
      color: $radio-disabled-icon-color
      background-color: $radio-disabled-icon-bgc
      &::before, i
        transition: none
      &::before
        color: transparent
</style>

