<template>
  <div class="cube-input" :class="{'cube-input_active': isFocus}">
    <div class="cube-input-clear" v-if="_showClear" @click="handleClear">
      <slot>
        <i class="cubeic-wrong"></i>
      </slot>
    </div>
    <div class="cube-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
      <slot>
        <i :class="eyeClass"></i>
      </slot>
    </div>
    <input
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="_type"
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
      const pwdEye = this.pwdEye
      return {
        inputValue: this.value,
        isFocus: false,
        pwdVisible: typeof pwdEye === 'string' ? !!pwdEye : pwdEye
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
      },
      pwdEye: {
        type: [String, Boolean],
        default: ''
      }
    },
    computed: {
      _type() {
        const type = this.type
        if (type === 'password' && this.pwdVisible) {
          return 'text'
        }
        return type
      },
      _showClear() {
        return this.clearable && this.inputValue && !this.readonly && !this.disabled
      },
      _showPwdEye() {
        const pwdEye = this.pwdEye
        let isShow = false
        if (typeof pwdEye === 'string') {
          isShow = !!pwdEye
        } else {
          isShow = true
        }
        return this.type === 'password' && isShow && !this.disabled
      },
      eyeClass() {
        return this.pwdVisible ? 'cubeic-eye-invisible' : 'cubeic-eye-visible'
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      },
      pwdEye(newValue) {
        this.pwdVisible = typeof newValue === 'string' ? !!newValue : newValue
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
      },
      handlePwdEye() {
        this.pwdVisible = !this.pwdVisible
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-input
    position: relative
    font-size: $fontsize-medium
    line-height: 1.429
    border-1px($input-border-color)
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
  .cube-input_active
    &::after
      border-color: $input-focus-border-color
  .cube-input-clear, .cube-input-eye
    position: absolute
    right: 0
    top: 0
    bottom: 0
    width: 1em
    height: 1em
    line-height: 1
    padding: 10px .8em
    margin: auto
    color: $input-clear-icon-color
    > i
      display: inline-block
      transform: scale(1.2)
    + input
      padding-right: 2.6em
  .cube-input-eye
    >
      .cubeic-eye-invisible, .cubeic-eye-visible
        transform: scale(1.4)
  .cube-input-clear
    + .cube-input-eye
      right: 2.6em
      + input
        padding-right: 5.2em
</style>
