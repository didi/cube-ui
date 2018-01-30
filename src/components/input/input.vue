<template>
  <div
    class="cube-input-wrapper">
    <div class="cube-input-clear" v-show="_showClear" @click="handleClear">
      <slot>
        <i class="cubeic-wrong"></i>
      </slot>
    </div>
    <input
      ref="input"
      v-model="inputValue"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :maxlength="maxlength"
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
        isFocus: false,
        inputValue: this.value
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 60
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: Boolean,
        default: false
      },
      useClear: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      _showClear() {
        return this.useClear && this.inputValue && !this.readonly && !this.disabled
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
      },
      handleBlur(e) {
        this.$emit(EVENT_BLUR, e)
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
    .cube-input-wrapper
      position: relative
      font-size: $fontsize-large
      line-height: 1
      color: $input-font-color
      background-color: $input-bgc
      width: 100%
      input
        width: 100%
        padding: 10px
        box-sizing: border-box
        color: inherit
        line-height: inherit
        outline: none
        &:focus
          outline: $input-outline-color solid 1px
          outline-offset: -1px
    .cube-input-clear
      position: absolute
      width: 1em
      height: 1em
      right: 0
      padding: 10px 8px
      top: 0
      bottom: 0
      margin: auto
      color: $input-clear-icon-color
      + input
        padding-right: 32px
</style>
