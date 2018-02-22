<template>
  <div class="cube-input-wrapper" :class="{'active': isFocus}">
    <div class="cube-input-clear" v-if="_showClear" @click="handleClear">
      <slot>
        <i class="cubeic-wrong"></i>
      </slot>
    </div>
    <input
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
    >
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-input'
  const EVENT_INPUT = 'input'
  const EVENT_BLUR = 'blur'
  const EVENT_FOCUS = 'focus'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        inputValue: this.value,
        isFocus: false
      }
    },
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: Boolean,
        default: false
      },
      name: String,
      id: String,
      form: String,
      minlength: Number,
      maxlength: Number,
      resize: String,
      min: Number,
      max: Number,
      step: Number,
      tabindex: String,
      clearable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _showClear() {
        return this.clearable && this.inputValue && !this.readonly && !this.disabled
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      }
    },
    methods: {
      handleFocus(e) {
        this.$emit(EVENT_FOCUS, e)
        this.isFocus = true
      },
      handleBlur(e) {
        this.$emit(EVENT_BLUR, e)
        this.isFocus = false
      },
      handleClear(e) {
        this.inputValue = ''
        this.$refs.input.focus()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-input-wrapper
    position: relative
    font-size: $fontsize-large
    line-height: 1
    border-1px($input-border-color)
    &.active
      &::after
        border-color: $input-focus-border-color
    input
      width: 100%
      padding: 10px
      box-sizing: border-box
      color: $input-color
      line-height: inherit
      background-color: $input-bgc
      border-radius: 2px
      outline: none
      &::-webkit-input-placeholder
        color: $input-placeholder-color!important
        text-overflow: ellipsis
  .cube-input-clear
    position: absolute
    right: 0
    top: 0
    bottom: 0
    width: 1em
    height: 1em
    padding: 10px 8px
    margin: auto
    color: $input-clear-icon-color
    + input
      padding-right: 32px
</style>
