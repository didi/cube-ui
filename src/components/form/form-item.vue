<template>
  <div class="cube-form-item border-bottom-1px" :class="itemClass">
    <slot>
      <template v-if="!isBtnField">
        <div class="cube-form-label" v-show="fieldValue.label"><span>{{fieldValue.label}}</span></div>
        <cube-validator
          ref="validator"
          v-model="isValid"
          :disabled="validatorDisabled"
          :for="modelValue"
          :rule="fieldValidate.rule"
          :messages="fieldValidate.messages"
          @msg-click="msgClick"
        >
          <component :is="componentName" v-model="modelValue" v-bind="componentProps"></component>
        </cube-validator>
      </template>
      <cube-button v-bind="componentProps" v-else>{{fieldValue.label}}</cube-button>
    </slot>
  </div>
</template>

<script>
  import { resetTypeValue } from '../../common/helpers/util'
  import CubeValidator from '../validator/validator.vue'
  import { processField } from './fields/index'
  import { getResetValueByType } from './fields/reset'
  import components from './components'
  components.CubeValidator = CubeValidator

  const COMPONENT_NAME = 'cube-form-item'
  export default {
    name: COMPONENT_NAME,
    props: {
      model: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      },
      field: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      }
    },
    data() {
      return {
        validatorDisabled: false,
        isValid: undefined,
        modelValue: this.field.model ? this.model[this.field.model] : null
      }
    },
    computed: {
      isBtnField() {
        return this.fieldValue.type === 'button'
      },
      itemClass() {
        return {
          // only handle required rule for now
          'cube-form-item_required': this.fieldValidate.rule.required,
          'cube-form-item_btn': this.isBtnField,
          'cube-form-item_valid': this.isValid,
          'cube-form-item_invalid': this.isValid === false
        }
      },
      _modelVal() {
        return this.model[this.field.model]
      },
      fieldValue() {
        return processField(this.field)
      },
      componentName() {
        const component = this.fieldValue.component
        if (component) {
          return component
        }
        const type = this.fieldValue.type
        const cubeType = `cube-${type}`
        if (components[cubeType]) {
          return cubeType
        }
        return type
      },
      componentProps() {
        return this.fieldValue.props || {}
      },
      fieldValidate() {
        const validate = this.fieldValue.validate || {}
        if (!validate.rule) {
          validate.rule = {}
        }
        if (!validate.messages) {
          validate.messages = {}
        }
        return validate
      }
    },
    watch: {
      _modelVal(newModel) {
        if (this.modelValue !== newModel) {
          this.modelValue = newModel
        }
      },
      modelValue(newModel) {
        // update form model
        this.model[this.field.model] = newModel
      },
      isValid(newValue) {
        if (this.validatorDisabled) {
          return
        }
        this.validate(true)
      }
    },
    created() {
      this.form = this.$parent.form
      this.form.addField(this)
    },
    methods: {
      validate(skipValidate) {
        const validator = this.$refs.validator
        if (validator) {
          if (!skipValidate) {
            validator.validate()
          }
          // sync update validaty
          this.form.updateValidity(this.field, validator.valid, validator.result, validator.dirty)
        }
      },
      reset() {
        const field = this.field
        const model = field.model
        if (model) {
          const defValue = getResetValueByType(field)
          this.validatorDisabled = true
          resetTypeValue(this, 'modelValue', defValue)
          this.$refs.validator.reset()
          this.$nextTick(() => {
            this.validatorDisabled = false
          })
        }
      },
      msgClick() {
        /* istanbul ignore next */
        this.$createToast && this.$createToast({
          type: 'warn',
          txt: this.$refs.validator.msg,
          time: 1000
        }).show()
      }
    },
    beforeDestroy() {
      this.form.destroyField(this)
      this.form = null
    },
    components
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-form-item
    position: relative
    display: flex
    align-items: center
    padding: 0 15px
    min-height: 46px
    &:last-child
      &::after
        display: none
    .cube-validator
      flex: 1
      position: relative
    .cube-validator-msg-def
      font-size: 0
    .cube-validator_invalid
      .cube-validator-msg
        &::before
          content: "\e614"
          padding-left: 5px
          font-family: "cube-icon"!important
          font-size: $fontsize-large-xxx
          font-style: normal
          -webkit-font-smoothing: antialiased
          -webkit-text-stroke-width: 0.2px
          -moz-osx-font-smoothing: grayscale
    .cube-checkbox-group, .cube-radio-group
      background-color: transparent
      &::before, &::after
        display: none
    .cube-checkbox, .cube-radio
      padding-left: 0
      padding-right: 0
    .cube-input
      input
        padding: 13px 0
        background-color: transparent
      &::after
        display: none
    .cube-textarea-wrapper
      padding: 13px 0
      height: 20px
      &.cube-textarea_expanded
        height: 60px
        padding-bottom: 20px
        .cube-textarea-indicator
          bottom: 2px
      .cube-textarea
        padding: 0
        background-color: transparent
      &::after
        display: none
    .cube-select
      padding-left: 0
      background-color: transparent
      &::after
        display: none
    .cube-upload-def
      padding: 5px 0
      .cube-upload-btn, .cube-upload-file
        margin: 5px 10px 5px 0
  .cube-form-item_btn
    margin: 10px 0
    &::after
      display: none
  .cube-form-label
    display: flex
    align-items: center
    width: 100px
    padding-right: 10px
    word-wrap: break-word
    word-break: break-word
  .cube-form-item_required
    .cube-form-label
      &::before
        content: "*"
        margin-top: 1px
        margin-right: .3em
        color: $validator-msg-def-color
</style>
