<template>
  <div class="cube-form-item" :class="itemClass">
    <slot>
      <template v-if="fieldValue.type !== 'button'">
        <div class="cube-form-label" v-show="fieldValue.label">{{fieldValue.label}}</div>
        <cube-validator
          ref="validator"
          v-model="isValid"
          :disabled="validatorDisabled"
          :for="modelValue"
          :rule="fieldValidate.rule"
          :messages="fieldValidate.messages"
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
          return {}
        }
      },
      field: {
        type: Object,
        default() {
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
      itemClass() {
        return {
          // only handle required rule for now
          'cube-form-item_required': this.fieldValidate.rule.required,
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
    padding: 15px 10px
    .cube-validator
      flex: 1
      position: relative
    .cube-validator-msg-def
      position: absolute
      left: 0
      bottom: -1.3em
      font-size: $fontsize-small
    .cube-checkbox-group, .cube-radio-group
      background-color: transparent
    .cube-checkbox, .cube-radio
      color: inherit
  .cube-form-label
    position: relative
    width: 100px
    padding-right: 10px
    word-wrap: break-word
    word-break: break-word
  .cube-form-item_required
    .cube-form-label
      padding-left: .8em
      &::before
        content: "*"
        position: absolute
        left: 0
        color: $validator-msg-def-color
</style>
