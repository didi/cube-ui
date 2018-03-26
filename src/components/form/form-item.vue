<template>
  <div class="cube-form-item border-bottom-1px" :class="itemClass">
    <template v-if="!isBtnField">
      <slot name="label">
        <div class="cube-form-label" v-show="fieldValue.label"><span>{{fieldValue.label}}</span></div>
      </slot>
      <cube-validator
        class="cube-form-field"
        v-if="hasRules"
        ref="validator"
        v-model="isValid"
        :disabled="validatorDisabled"
        :model="modelValue"
        :rules="fieldValue.rules"
        :messages="fieldValue.messages"
        @msg-click="msgClick"
      >
        <slot>
          <component :is="componentName" v-model="modelValue" v-bind="fieldValue.props"></component>
        </slot>
      </cube-validator>
      <div class="cube-form-field" v-else>
        <slot>
          <component :is="componentName" v-model="modelValue" v-bind="fieldValue.props"></component>
        </slot>
      </div>
    </template>
    <cube-button v-bind="fieldValue.props" v-else>{{fieldValue.label}}</cube-button>
  </div>
</template>

<script>
  import { processField } from './fields/index'
  import { resetTypeValue } from '../../common/helpers/util'
  import CubeValidator from '../validator/validator.vue'
  import { getResetValueByType } from './fields/reset'
  import components from './components'
  components.CubeValidator = CubeValidator

  const COMPONENT_NAME = 'cube-form-item'
  export default {
    name: COMPONENT_NAME,
    props: {
      field: Object,
      model: {
        type: String,
        default: ''
      },
      type: String,
      label: String,
      component: [Object, String],
      props: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      },
      rules: Object,
      messages: [Object, String]
    },
    data() {
      const model = this.field ? this.field.model : this.model
      return {
        validatorDisabled: false,
        isValid: undefined,
        modelValue: model ? this.form.model[model] : null
      }
    },
    computed: {
      fieldValue() {
        const field = this.field || {
          model: this.model,
          type: this.type,
          component: this.component,
          label: this.label,
          props: this.props,
          rules: this.rules,
          messages: this.messages
        }
        return processField(field)
      },
      hasRules() {
        return Object.keys(this.fieldValue.rules || {}).length > 0
      },
      isBtnField() {
        return this.fieldValue.type === 'button'
      },
      itemClass() {
        const rules = this.fieldValue.rules
        return {
          // only handle required rule for now
          'cube-form-item_required': rules && rules.required,
          'cube-form-item_btn': this.isBtnField,
          'cube-form-item_valid': this.isValid,
          'cube-form-item_invalid': this.isValid === false
        }
      },
      _modelVal() {
        return this.form.model[this.fieldValue.model]
      },
      componentName() {
        const fieldValue = this.fieldValue
        const component = fieldValue.component
        if (component) {
          return component
        }
        const type = fieldValue.type
        const cubeType = `cube-${type}`
        if (components[cubeType]) {
          return cubeType
        }
        return type
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
        this.form.model[this.fieldValue.model] = newModel
      },
      isValid(newValue) {
        if (this.validatorDisabled) {
          return
        }
        this.validate(true)
      }
    },
    beforeCreate() {
      this.form = this.$parent.form
    },
    created() {
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
          this.form.updateValidity(this.fieldValue.model, validator.valid, validator.result, validator.dirty)
        }
      },
      reset() {
        const fieldValue = this.fieldValue
        if (fieldValue.model) {
          const defValue = getResetValueByType(fieldValue.type)
          this.validatorDisabled = true
          resetTypeValue(this, 'modelValue', defValue)
          this.$refs.validator && this.$refs.validator.reset()
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
    &:last-child
      &::after
        display: none
    .cube-checkbox-group, .cube-radio-group
      background-color: transparent
    .cube-checkbox, .cube-radio
      padding-left: 0
      padding-right: 0
  .cube-form-item_btn
    margin: 15px 0
    &::after
      display: none
  .cube-form-label
    word-wrap: break-word
    word-break: break-word
  .cube-form-item_required
    .cube-form-label
      &::before
        content: "*"
        margin-top: 1px
        margin-right: .3em
        color: $form-label-required-color
</style>
