<template>
  <div class="cube-checkbox" :class="_containerClass" :data-pos="position">
    <label class="cube-checkbox-wrap" :class="_wrapClass">
      <input class="cube-checkbox-input" type="checkbox" :disabled="computedOption.disabled" v-model="checkValue">
      <span class="cube-checkbox-ui" :class="_borderIconClass">
        <i :class="_rightIconClass"></i>
      </span>
      <span class="cube-checkbox-label">
        <slot>{{computedOption.label}}</slot>
      </span>
    </label>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-checkbox'

  const EVENT_INPUT = 'input'
  const EVENT_CHECKED = 'checked'
  const EVENT_CANCLE_CHECKED = 'cancel-checked'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [Boolean, String]
      },
      label: {
        type: [Boolean, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      option: {
        type: [Boolean, String, Object],
        default () {
          return {
            _def_option: true
          }
        }
      },
      position: {
        type: String,
        default: 'left'
      },
      shape: {
        type: String,
        default: 'circle'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      }
    },
    data () {
      const parent = this.$parent
      const isInGroup = parent.$data._checkboxGroup
      const isInHorizontalGroup = isInGroup && (parent.$props.horizontal || parent.$props.colNum > 1)
      return {
        isInGroup,
        isInHorizontalGroup
      }
    },
    computed: {
      computedOption() {
        let option = this.option
        const label = this.label
        const disabled = this.disabled
        if (option._def_option === true) {
          option = {
            label,
            value: label,
            disabled
          }
        } else if (typeof option === 'string') {
          option = {
            label: option,
            value: option,
            disabled: false
          }
        }
        return option
      },
      checkValue: {
        get () {
          if (this.isInGroup) {
            return this.$parent.value.indexOf(this.computedOption.value) > -1
          } else {
            return Boolean(this.value)
          }
        },
        set (newValue) {
          const value = this.computedOption.value
          const emitValue = value && newValue ? value : newValue
          const parentEmitEvent = newValue ? EVENT_CHECKED : EVENT_CANCLE_CHECKED
          this.$emit(EVENT_INPUT, emitValue)
          if (this.isInGroup) {
            this.$parent.$emit(parentEmitEvent, value || newValue)
          }
        }
      },
      _containerClass() {
        return {
          'cube-checkbox-hollow': this.hollowStyle,
          'cube-checkbox_checked': this.checkValue,
          'cube-checkbox_disabled': this.computedOption.disabled,
          'border-right-1px': this.isInHorizontalGroup
        }
      },
      _wrapClass() {
        if (this.isInGroup && !this.isInHorizontalGroup) {
          return 'border-bottom-1px'
        }
      },
      isSquare() {
        return this.shape === 'square' || this.hollowStyle
      },
      _borderIconClass() {
        return this.isSquare ? 'cubeic-square-border' : 'cubeic-round-border'
      },
      _rightIconClass() {
        return this.isSquare ? 'cubeic-square-right' : 'cubeic-right'
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  $ui-width = 1.42em
  .cube-checkbox
    position: relative
    padding: 0 16px
    text-align: left
    font-size: 100%
    color: $checkbox-color
    &[data-pos="right"]
      .cube-checkbox-ui
        margin-right: 0
        position: absolute
        right: 0
      .cube-checkbox-label
        margin-right: $ui-width
  .cube-checkbox-wrap
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
  .cube-checkbox-input
    z-index: 1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0
  .cube-checkbox-ui
    position: relative
    width: 1em
    height: 1em
    margin-right: $ui-width - 1em
    line-height: 1
    border-radius: 50%
    &.cubeic-square-border
      border-radius: 2px
    &::before, i
      transition: all .2s
    &::before
      color: $checkbox-icon-color
      display: inline-block
      transform: scale(1.24)
    i
      position: absolute
      top: 0
      left: 0
      color: transparent
      transform: scale(.4)
  .cube-checkbox_checked
    .cube-checkbox-ui
      &::before
        color: transparent
      i
        color: $checkbox-checked-icon-color
        transform: scale(1.23)
  .cube-checkbox_disabled
    .cube-checkbox-ui
      background-color: $checkbox-disabled-icon-bgc
      &::before, i
        transition: none
      &::before
        color: transparent
      i
        color: $checkbox-disabled-icon-color
  .cube-checkbox_checked.cube-checkbox_disabled
    .cube-checkbox-ui
      background-color: $checkbox-checked-icon-bgc
  .cube-checkbox-hollow
    i
      width: 100%
      height: 100%
      &::before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        width: 50%
        height: 50%
        transform: translate(-50%, -50%)
        background-color: currentColor
        border-radius: 2px
    &.cube-checkbox_checked
      .cube-checkbox-ui
        &::before
          color: $checkbox-hollow-checked-icon-color
        i
          transform: scale(1)
          color: $checkbox-hollow-checked-icon-color
    &.cube-checkbox_disabled
      .cube-checkbox-ui
        background-color: transparent
        &::before
          color: $checkbox-hollow-disabled-icon-color
        i
          transform: scale(1)
          color: transparent
      &.cube-checkbox_checked
        .cube-checkbox-ui
          i
            color: $checkbox-hollow-disabled-icon-color
</style>
