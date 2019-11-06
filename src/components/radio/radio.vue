<template>
  <div class="cube-radio" :class="_containerClass" :data-pos="position">
    <label class="cube-radio-wrap" :class="_wrapClass">
      <input
        class="cube-radio-input"
        type="radio"
        :disabled="option.disabled"
        v-model="radioValue"
        :value="computedOption.value"
      />
      <span class="cube-radio-ui cubeic-round-border">
        <i></i>
      </span>
      <slot>
        <span class="cube-radio-label">{{ computedOption.label }}</span>
      </slot>
    </label>
  </div>
</template>

<script type="text/ecmascript-6">
const COMPONENT_NAME = 'cube-radio'
const EVENT_INPUT = 'input'

export default {
  name: COMPONENT_NAME,
  inject: {
    radioGroup: {
      default: null
    }
  },
  props: {
    value: [String, Number],
    option: {
      type: [String, Object],
      required: true
    },
    position: {
      type: String,
      default: 'left'
    },
    hollowStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioValue: this.value
    }
  },
  created() {
    const radioGroup = this.radioGroup
    if (radioGroup && radioGroup.radioValue !== void 0) {
      this.radioValue = radioGroup.radioValue
      this._cancelWatchGroup = this.$watch(
        () => {
          return radioGroup.radioValue
        },
        newValue => {
          this.radioValue = newValue
        }
      )
    }
  },
  beforeDestroy() {
    this._cancelWatchGroup && this._cancelWatchGroup()
    this._cancelWatchGroup = null
  },
  watch: {
    value(newV) {
      this.radioValue = newV
    },
    radioValue(newV) {
      if (typeof this.value === 'number') {
        newV = Number(newV)
      }
      this.$emit(EVENT_INPUT, newV)
      if (this.radioGroup) {
        this.radioGroup.radioValue = newV
      }
    }
  },
  computed: {
    computedOption() {
      const option = this.option
      if (typeof option === 'string') {
        return {
          value: option,
          label: option
        }
      }
      return option
    },
    _containerClass() {
      const option = this.computedOption
      return {
        'cube-radio-hollow': this.hollowStyle,
        'cube-radio_selected': this.radioValue === option.value,
        'cube-radio_disabled': option.disabled,
        'border-right-1px': this.$parent.horizontal
      }
    },
    _wrapClass() {
      let parent = this.$parent
      if (!(parent.horizontal || parent.$props.colNum > 1)) {
        return 'border-bottom-1px'
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
    &[data-pos="right"]
      .cube-radio-ui
        margin-right: 0
        position: absolute
        right: 0
      .cube-radio-label
        margin-right: $ui-width
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
    background-color: transparent
    border-radius: 50%
    &::before, i
      transition: all .2s
    &::before
      color: $radio-icon-color
      display: inline-block
      transform: scale(1.24)
    i
      position: absolute
      top: 0
      left: 0
      overflow: hidden
      width: 100%
      height: 100%
      border-radius: 50%
      transform: scale(.4)
      &::before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        width: 50%
        height: 50%
        transform: translate(-50%, -50%) scale(.8)
        // background-color: transparent
        border-radius: 50%
  .cube-radio_selected
    .cube-radio-ui
      background-color: $radio-selected-icon-bgc
      &::before
        color: transparent
      i
        transform: scale(1)
        // color: $radio-selected-icon-color
        &::before
          background-color: $radio-selected-icon-color
  .cube-radio_disabled
    .cube-radio-ui
      background-color: $radio-disabled-icon-bgc
      &::before, i
        transition: none
      &::before
        color: transparent
  .cube-radio-hollow
    &.cube-radio_selected, &.cube-radio_disabled
      .cube-radio-ui
        background-color: transparent
        i::before
          transform: translate(-50%, -50%) scale(1)
    &.cube-radio_selected
      .cube-radio-ui
        &::before
          color: $radio-hollow-selected-icon-color
        i
          &::before
            background-color: $radio-hollow-selected-icon-color
    &.cube-radio_disabled
      .cube-radio-ui
        &::before
          color: $radio-hollow-disabled-icon-color
      &.cube-radio_selected
        .cube-radio-ui
          i
            &::before
              background-color: $radio-hollow-disabled-icon-color
</style>

