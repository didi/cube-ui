<template>
  <div class="cube-switch">
    <input class="cube-switch-input" type="checkbox" v-model="checkboxValue" :disabled="disabled">
    <span class="cube-switch-icon"></span>
    <label class="cube-switch-label"><slot></slot></label>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-switch'

  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        checkboxValue: this.value
      }
    },
    watch: {
      checkboxValue: function (newVal) {
        this.$emit(EVENT_INPUT, newVal)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  $switch-width = 48px
  $switch-height = 28px

  .cube-switch
    display: flex
    position: relative
    align-items: center
    .cube-switch-input
      position: absolute
      z-index: 1
      width: $switch-width
      height: $switch-height
      opacity: 0
      &:checked + .cube-switch-icon
        border-color: $switch-on-bgc
        &:before
          transform: scale(0)
        &:after
          transform: translateX($switch-width - $switch-height)
      &:disabled + .cube-switch-icon
        opacity: 0.3
    .cube-switch-icon
      position: relative
      display: inline-block
      width: $switch-width
      height: $switch-height
      border: 1px solid $switch-off-border-color
      border-radius: $switch-height
      background-color: $switch-on-bgc
      transition: border .3s
      &:before, &:after
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        border-radius: $switch-height
        background-color: $switch-off-bgc
        transition: transform .3s
      &:after
        width: $switch-height
        background-color: $color-white
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4)
    .cube-switch-label
      display: inline-block
      margin-left: 10px
      &:empty
        margin-left: 0
</style>
