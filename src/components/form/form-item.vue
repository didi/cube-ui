<template>
  <div class="cube-form-item border-bottom-1px" ref="formItem" :class="itemClass">
    <template v-if="!isBtnField">
      <slot name="label">
        <div class="cube-form-label" v-show="fieldValue.label"><span>{{fieldValue.label}}</span></div>
      </slot>
      <cube-validator
        class="cube-form-field"
        v-if="hasRules"
        ref="validator"
        v-model="originValid"
        :disabled="validatorDisabled"
        :model="validatorModel"
        :model-key="validatorModelKey"
        :rules="fieldValue.rules"
        :messages="fieldValue.messages"
        @input="validatorChangeHandler"
        @validating="validatingHandler"
        @validated="validatedHandler"
        @msg-click="msgClick"
      >
        <slot>
          <component :is="componentName" v-model="modelValue" v-bind="fieldValue.props" v-on="fieldValue.events"></component>
        </slot>
      </cube-validator>
      <div class="cube-form-field" v-else>
        <slot>
          <component :is="componentName" v-model="modelValue" v-bind="fieldValue.props" v-on="fieldValue.events"></component>
        </slot>
      </div>
    </template>
    <cube-button v-bind="fieldValue.props" v-on="fieldValue.events" v-else>{{fieldValue.label}}</cube-button>
  </div>
</template>

<script>
  import { processField } from './fields/index'
  import { resetTypeValue, cb2PromiseWithResolve, debounce } from '../../common/helpers/util'
  import CubeValidator from '../validator/validator.vue'
  import LAYOUTS from './layouts'
  import { getResetValueByType } from './fields/reset'
  import mixin from './mixin'
  import components from './components'
  components.CubeValidator = CubeValidator

  const COMPONENT_NAME = 'cube-form-item'
  const EVENT_FOCUSIN = 'focusin'
  const EVENT_FOCUSOUT = 'focusout'

  export default {
    name: COMPONENT_NAME,
    mixins: [mixin],
    props: {
      field: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      }
    },
    data() {
      const validatorModelKey = 'value'
      const modelKey = this.field.modelKey
      const modelValue = modelKey ? this.form.model[modelKey] : null
      return {
        validatorDisabled: false,
        validatorModelKey,
        modelValue: modelValue,
        validatorModel: {
          [validatorModelKey]: modelValue
        }
      }
    },
    computed: {
      fieldValue() {
        return processField(this.field)
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
          'cube-form-item_validating': this.validating,
          'cube-form-item_pending': this.pending,
          'cube-form-item_valid': this.valid,
          'cube-form-item_invalid': this.invalid
        }
      },
      modelVal() {
        return this.form.model[this.fieldValue.modelKey]
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
      modelVal(newModel) {
        if (this.modelValue !== newModel) {
          this.modelValue = newModel
        }
      },
      modelValue: {
        handler(newModel) {
          // update form model
          this.form.model[this.fieldValue.modelKey] = newModel
          this.updateValidatorModel()
        },
        sync: true
      },
      originValid(newVal) {
        this.lastOriginValid = newVal
      }
    },
    beforeCreate() {
      this.form = this.$parent.form
    },
    created() {
      this.form.addField(this)
      this.getValidatorModel = (modelValue) => {
        this.pending = false
        return modelValue
      }
    },
    mounted() {
      this.initDebounce()
      this.initFocusEvents()
    },
    methods: {
      initDebounce() {
        let debounceTime = this.fieldValue.debounce
        if (debounceTime === true) {
          debounceTime = 200
        }
        if ((!debounceTime && debounceTime !== 0) || debounceTime < 0 || this.fieldValue.trigger === 'blur') return
        this.getValidatorModel = debounce((modelValue) => {
          this.syncValidatorValue()
          // this.validate()
          return modelValue
        }, debounceTime, false, this.validatorModel[this.validatorModelKey])
      },
      focusInHandler() {
        this.focused = true
      },
      focusOutHandler() {
        this.focused = false
        this.updateValidatorModel()
        // this.validate()
      },
      initFocusEvents() {
        if (this.fieldValue.trigger === 'blur') {
          const formItem = this.$refs.formItem
          formItem.addEventListener(EVENT_FOCUSIN, this.focusInHandler, false)
          formItem.addEventListener(EVENT_FOCUSOUT, this.focusOutHandler, false)
          this.getValidatorModel = (modelValue) => {
            if (this.focused) {
              return this.validatorModel[this.validatorModelKey]
            } else {
              this.pending = false
              this.form.updatePending()
              return modelValue
            }
          }
        }
      },
      removeFocusEvents() {
        const formItem = this.$refs.formItem
        formItem.removeEventListener(EVENT_FOCUSIN, this.focusInHandler, false)
        formItem.removeEventListener(EVENT_FOCUSOUT, this.focusOutHandler, false)
      },
      updateValidatorModel() {
        this.pending = true
        this.validatorModel[this.validatorModelKey] = this.getValidatorModel(this.modelValue)
        if (this.pending) {
          this.form.setPending(this.pending)
          this.originValid = undefined
        }
      },
      syncValidatorValue() {
        this.pending = false
        this.validatorModel[this.validatorModelKey] = this.modelValue
        this.form.updatePending()
      },
      validatorChangeHandler() {
        // disabled or true to true no update validity
        if (this.validatorDisabled || (this.originValid && this.lastOriginValid)) {
          return
        }
        this.updateValidity()
      },
      validatingHandler() {
        this.validating = true
        this.form.setValidating(true)
      },
      validatedHandler() {
        this.validating = false
        this.form.updateValidating()
      },
      updateValidity() {
        const validator = this.$refs.validator
        if (validator) {
          // sync update validaty
          this.form.updateValidity(this.fieldValue.modelKey, validator.valid, validator.result, validator.dirty)
        }
      },
      validate(cb) {
        const promise = cb2PromiseWithResolve(cb)
        if (promise) {
          cb = promise.resolve
        }
        const validator = this.$refs.validator
        if (validator) {
          validator.validate(() => {
            this.validatorDisabled = true
            this.updateValidity()
            cb && cb()
            this.$nextTick(() => {
              this.validatorDisabled = false
            })
          })
        } else {
          cb && cb()
        }
        return promise
      },
      reset() {
        const fieldValue = this.fieldValue
        if (fieldValue.modelKey) {
          const defValue = getResetValueByType(fieldValue.type)
          this.validatorDisabled = true
          resetTypeValue(this, 'modelValue', defValue)
          // need to sync validator value too, because of trigger blur or debounce
          this.syncValidatorValue()
          this.$refs.validator && this.$refs.validator.reset()
          this.$nextTick(() => {
            this.validatorDisabled = false
          })
        }
        this.validating = false
        this.pending = false
      },
      msgClick() {
        /* istanbul ignore if */
        if (this.form.layout !== LAYOUTS.STANDARD) {
          return
        }
        /* istanbul ignore next */
        this.$createToast && this.$createToast({
          type: 'warn',
          txt: this.$refs.validator.msg,
          time: 1000
        }).show()
      }
    },
    beforeDestroy() {
      this.removeFocusEvents()
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
    display: flex
    align-items: center
    word-wrap: break-word
    word-break: break-word
  .cube-form-item_required
    .cube-form-label
      &::before
        content: "*"
        display: block
        margin-top: 1px
        margin-right: .3em
        color: $form-label-required-color
</style>
