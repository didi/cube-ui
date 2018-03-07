<template>
  <div class="cube-textarea-wrapper" :class="{'cube-textarea_expanded': expanded, 'cube-textarea_active': isFocus}">
    <textarea
      class="cube-textarea"
      v-model="textareaValue"
      v-bind="$props"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur">
    </textarea>
    <span v-show="expanded" class="cube-textarea-indicator">{{remain}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-textarea'
  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        textareaValue: this.value,
        expanded: false,
        isFocus: false
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      cols: Number,
      rows: Number,
      readonly: Boolean,
      wrap: String,
      required: Boolean,
      placeholder: {
        type: String,
        default: 'please type here...'
      },
      dirname: String,
      form: String,
      name: String,
      autofocus: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 60
      }
    },
    computed: {
      remain() {
        return this.maxlength - this.value.length
      }
    },
    watch: {
      value(newValue) {
        this.textareaValue = newValue
      },
      textareaValue(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      }
    },
    methods: {
      handleFocus(e) {
        this.$emit('focus', e)
        this.expanded = true
        this.isFocus = true
      },
      handleBlur(e) {
        this.$emit('blur', e)
        if (this.textareaValue.length === 0) {
          this.expanded = false
        }
        this.isFocus = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-textarea-wrapper
    position: relative
    transition: height 200ms
    height: 40px
    font-size: $fontsize-medium
    line-height: 1.429
    textarea::-webkit-input-placeholder
      color: $textarea-placeholder-color !important
      text-overflow: ellipsis
    border-1px($textarea-border-color)
  .cube-textarea_expanded
    height: 80px
  .cube-textarea_active
    border-1px($textarea-focus-border-color)
  .cube-textarea-indicator
    position: absolute
    bottom: 7px
    right: 10px
    color: $textarea-indicator-color
  .cube-textarea
    width: 100%
    height: 100%
    text-align: left
    padding: 10px
    box-sizing: border-box
    font-size: 100%
    line-height: inherit
    color: $textarea-color
    background-color: $textarea-bgc
    border-radius: 2px
    resize: none
    border: none
    outline: none
</style>
