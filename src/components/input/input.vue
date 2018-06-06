<template>
  <div class="cube-input" :class="{'cube-input_active': isFocus}">
    <div class="cube-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="cube-input-field"
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
      @change="changeHander"
    >
    <div class="cube-input-append" v-if="$slots.append || _showClear || _showPwdEye">
      <div class="cube-input-clear" v-if="_showClear" @click="handleClear">
        <i class="cubeic-wrong"></i>
      </div>
      <div class="cube-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-input'
  const EVENT_INPUT = 'input'
  const EVENT_CHANGE = 'change'
  const EVENT_BLUR = 'blur'
  const EVENT_FOCUS = 'focus'

  export default {
    name: COMPONENT_NAME,
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
        type: [Boolean, String],
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
      eye: {
        type: [Boolean, Object],
        default: false
      }
    },
    data() {
      return {
        inputValue: this.value,
        isFocus: false,
        formatedEye: {
          open: false,
          reverse: false
        }
      }
    },
    computed: {
      _type() {
        const type = this.type
        if (type === 'password' && this.eye && this.pwdVisible) {
          return 'text'
        }
        return type
      },
      _showClear() {
        return this.clearable && this.inputValue && !this.readonly && !this.disabled
      },
      _showPwdEye() {
        return this.type === 'password' && this.eye && !this.disabled
      },
      pwdVisible() {
        const eye = this.formatedEye
        return eye.reverse ? !eye.open : eye.open
      },
      eyeClass() {
        return this.formatedEye.open ? 'cubeic-eye-visible' : 'cubeic-eye-invisible'
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      },
      eye: {
        handler() {
          this.formateEye()
        },
        immediate: true
      }
    },
    methods: {
      changeHander(e) {
        this.$emit(EVENT_CHANGE, e)
      },
      formateEye() {
        if (typeof this.eye === 'boolean') {
          this.formatedEye.open = this.eye
        } else {
          Object.assign(this.formatedEye, this.eye)
        }
      },
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
        this.formatedEye.open = !this.formatedEye.open
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-input
    display: flex
    align-items: center
    font-size: $fontsize-medium
    line-height: 1.429
    background-color: $input-bgc
    border-1px($input-border-color)
  .cube-input-field
    display: block
    flex: 1
    width: 100%
    padding: 10px
    box-sizing: border-box
    color: $input-color
    line-height: inherit
    background-color: inherit
    border-radius: 2px
    outline: none
    &::-webkit-input-placeholder
      color: $input-placeholder-color!important
      text-overflow: ellipsis
    + .cube-input-append
      margin-left: -5px
  .cube-input_active
    &::after
      border-color: $input-focus-border-color
  .cube-input-prepend, .cube-input-append
    display: flex
    align-items: center
  .cube-input-prepend
    + .cube-input-field
      margin-left: -5px
  .cube-input-clear, .cube-input-eye
    width: 1em
    height: 1em
    line-height: 1
    padding: 10px
    box-sizing: content-box
    color: $input-clear-icon-color
    > i
      display: inline-block
      transform: scale(1.2)
  .cube-input-eye
    >
      .cubeic-eye-invisible, .cubeic-eye-visible
        transform: scale(1.4)
</style>
