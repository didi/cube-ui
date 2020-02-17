<template>
  <form ref="form" class="cube-form" :class="formClass" :action="action" @submit="submitHandler" @reset="resetHandler">
    <slot>
      <cube-form-group
        v-for="(group, index) in groups"
        :fields="group.fields"
        :legend="group.legend"
        :key="group.key || index" />
    </slot>
  </form>
</template>

<script>
  import { dispatchEvent } from '../../common/helpers/dom'
  import { cb2PromiseWithResolve } from '../../common/helpers/util'
  import CubeFormGroup from './form-group.vue'
  import LAYOUTS from './layouts'
  import mixin from './mixin'

  const COMPONENT_NAME = 'cube-form'
  const EVENT_SUBMIT = 'submit'
  const EVENT_RESET = 'reset'
  const EVENT_VALIDATE = 'validate'
  const EVENT_VALID = 'valid'
  const EVENT_INVALID = 'invalid'

  export default {
    name: COMPONENT_NAME,
    mixins: [mixin],
    props: {
      action: String,
      model: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      },
      schema: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      },
      options: {
        type: Object,
        default() {
          return {
            scrollToInvalidField: false,
            layout: LAYOUTS.STANDARD
          }
        }
      },
      immediateValidate: {
        type: Boolean,
        default: false
      },
      submitAlwaysValidate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        validatedCount: 0,
        dirty: false,
        firstInvalidField: null,
        firstInvalidFieldIndex: -1
      }
    },
    computed: {
      fieldsModel() {
        const model = {}
        this.fields.forEach((fieldComponent) => {
          if (!fieldComponent.isBtnField) {
            model[fieldComponent.fieldValue.modelKey] = fieldComponent.modelValue
          }
        })
        return model
      },
      groups() {
        const schema = this.schema
        const groups = schema.groups || []
        if (schema.fields) {
          groups.unshift({
            fields: schema.fields
          })
        }
        return groups
      },
      fieldsData() {
        return this.groups.reduce((fields, group) => {
          group.fields.reduce((fields, field) => {
            fields.push(field)
            return fields
          }, fields)
          return fields
        }, [])
      },
      layout() {
        const options = this.options
        const layout = (options && options.layout) || LAYOUTS.STANDARD
        return layout
      },
      formClass() {
        const invalid = this.invalid
        const valid = this.valid
        const layout = this.layout
        return {
          'cube-form_standard': layout === LAYOUTS.STANDARD,
          'cube-form_groups': this.groups.length > 1,
          'cube-form_validating': this.validating,
          'cube-form_pending': this.pending,
          'cube-form_valid': valid,
          'cube-form_invalid': invalid,
          'cube-form_classic': layout === LAYOUTS.CLASSIC,
          'cube-form_fresh': layout === LAYOUTS.FRESH
        }
      }
    },
    watch: {
      validatedCount() {
        this.$emit(EVENT_VALIDATE, {
          validity: this.validity,
          valid: this.valid,
          invalid: this.invalid,
          dirty: this.dirty,
          firstInvalidFieldIndex: this.firstInvalidFieldIndex
        })
      }
    },
    beforeCreate() {
      this.form = this
      this.fields = []
      this.validity = {}
    },
    mounted() {
      if (this.immediateValidate) {
        this.validate()
      }
    },
    methods: {
      submit(skipValidate = false) {
        this.skipValidate = skipValidate
        dispatchEvent(this.$refs.form, 'submit')
        this.skipValidate = false
      },
      reset() {
        dispatchEvent(this.$refs.form, 'reset')
      },
      submitHandler(e) {
        // sync all fields value because of trigger: blur or debounce
        this.syncValidatorValues()
        if (this.skipValidate) {
          this.$emit(EVENT_SUBMIT, e, this.model, this.fieldsModel)
          return
        }
        const submited = (submitResult) => {
          if (submitResult) {
            this.$emit(EVENT_VALID, this.validity)
            this.$emit(EVENT_SUBMIT, e, this.model, this.fieldsModel)
          } else {
            // scrollToInvalidField
            if (this.options.scrollToInvalidField && this.firstInvalidField) {
              this.firstInvalidField.$el.scrollIntoView()
            }
            e.preventDefault()
            this.$emit(EVENT_INVALID, this.validity)
          }
        }
        if (this.submitAlwaysValidate || this.valid === undefined) {
          this._submit(submited)
          if (this.validating || this.pending) {
            // async validate
            e.preventDefault()
          }
        } else {
          submited(this.valid)
        }
      },
      resetHandler(e) {
        this._reset()
        this.$emit(EVENT_RESET, e)
      },
      _submit(cb) {
        this.validate(() => {
          cb && cb(this.valid)
        })
      },
      _reset() {
        this.fields.forEach((fieldComponent) => {
          fieldComponent.reset()
        })
        this.setValidity()
        this.setValidating()
        this.setPending()
      },
      syncValidatorValues() {
        this.fields.forEach((fieldComponent) => {
          fieldComponent.syncValidatorValue()
        })
      },
      validate(cb) {
        const promise = cb2PromiseWithResolve(cb)
        if (promise) {
          cb = promise.resolve
        }
        let doneCount = 0
        const len = this.fields.length
        this.originValid = undefined
        this.fields.forEach((fieldComponent) => {
          fieldComponent.validate(() => {
            doneCount++
            if (doneCount === len) {
              // all done
              cb && cb(this.valid)
            }
          })
        })
        return promise
      },
      updateValidating() {
        const validating = this.fields.some((fieldComponent) => fieldComponent.validating)
        this.setValidating(validating)
      },
      updatePending() {
        const pending = this.fields.some((fieldComponent) => fieldComponent.pending)
        this.setPending(pending)
      },
      setValidating(validating = false) {
        this.validating = validating
      },
      setPending(pending = false) {
        this.pending = pending
      },
      updateValidity(modelKey, valid, result, dirty) {
        const curResult = this.validity[modelKey]
        if (curResult && curResult.valid === valid && curResult.result === result && curResult.dirty === dirty) {
          return
        }
        this.setValidity(modelKey, {
          valid,
          result,
          dirty
        })
      },
      setValidity(key, val) {
        let validity = {}
        if (key) {
          Object.assign(validity, this.validity)
          if (val === undefined) {
            delete validity[key]
          } else {
            validity[key] = val
          }
        }

        let dirty = false
        let invalid = false
        let valid = true
        let firstInvalidFieldKey = ''
        this.fields.forEach((fieldComponent) => {
          const modelKey = fieldComponent.fieldValue.modelKey
          if (modelKey) {
            const retVal = validity[modelKey]
            if (retVal) {
              if (retVal.dirty) {
                dirty = true
              }
              if (retVal.valid === false) {
                valid = false
              } else if (valid && !retVal.valid) {
                valid = retVal.valid
              }

              if (!invalid && retVal.valid === false) {
                // invalid
                invalid = true
                firstInvalidFieldKey = modelKey
              }
            } else if (fieldComponent.hasRules) {
              if (valid) {
                valid = undefined
              }
              validity[modelKey] = {
                valid: undefined,
                result: {},
                dirty: false
              }
            }
          }
        })
        this.validity = validity
        this.dirty = dirty
        this.originValid = valid
        this.setFirstInvalid(firstInvalidFieldKey)
        this.validatedCount++
      },
      setFirstInvalid(key) {
        if (!key) {
          this.firstInvalidField = null
          this.firstInvalidFieldIndex = -1
          return
        }
        this.fields.some((fieldComponent, index) => {
          if (fieldComponent.fieldValue.modelKey === key) {
            this.firstInvalidField = fieldComponent
            this.firstInvalidFieldIndex = index
            return true
          }
        })
      },
      addField(fieldComponent) {
        const i = this.fieldsData.indexOf(fieldComponent.field)
        this.fields.splice(i, 0, fieldComponent)
        const modelKey = fieldComponent.fieldValue.modelKey
        modelKey && this.setValidity(modelKey)
      },
      destroyField(fieldComponent) {
        const i = this.fields.indexOf(fieldComponent)
        this.fields.splice(i, 1)
        const modelKey = fieldComponent.fieldValue.modelKey
        modelKey && this.setValidity(modelKey)
      }
    },
    beforeDestroy() {
      this.form = null
      this.firstInvalidField = null
    },
    components: {
      CubeFormGroup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-form
    position: relative
    font-size: $fontsize-large
    line-height: 1.429
    color: $form-color
    background-color: $form-bgc
  .cube-form_groups
    .cube-form-group-legend
      padding: 10px 15px
      &:empty
        padding-top: 5px
        padding-bottom: 5px
  .cube-form_standard
    .cube-form-item
      min-height: 46px
    .cube-form-field
      flex: 1
      font-size: $fontsize-medium
    .cube-validator
      display: flex
      align-items: center
      position: relative
    .cube-validator_invalid
      color: $form-invalid-color
    .cube-validator-content
      flex: 1
    .cube-validator-msg-def
      font-size: 0
    .cube-validator_invalid
      .cube-validator-msg
        &::before
          content: "\e614"
          padding-left: 5px
          font-family: "cube-icon"!important
          font-size: $fontsize-large-xx
          font-style: normal
          -webkit-font-smoothing: antialiased
          -webkit-text-stroke-width: 0.2px
          -moz-osx-font-smoothing: grayscale
    .cube-form-label
      width: 100px
      padding-right: 10px
    .cube-checkbox-group, .cube-radio-group
      &::before, &::after
        display: none
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
  .cube-form_classic
    .cube-form-item
      display: block
      padding: 15px
      &:last-child
        padding-bottom: 30px
      &::after
        display: none
      .cube-validator-msg
        position: absolute
        margin-top: 3px
        &::before
          display: none
      .cube-validator-msg-def
        font-size: $fontsize-small
    .cube-form-item_btn
      padding-top: 0
      padding-bottom: 0
      &:last-child
        padding-bottom: 0
    .cube-form-label
      padding-bottom: 15px
  .cube-form_fresh
    .cube-form-item
      display: block
      padding: 2em 15px 10px
      &::after
        display: none
      .cube-validator-msg
        position: absolute
        top: 1em
        right: 15px
        bottom: auto
        margin-top: -.4em
        font-size: $fontsize-small
        &::before
          display: none
      .cube-validator-msg-def
        font-size: 100%
    .cube-form-item_btn
      padding-top: 0
      padding-bottom: 0
      &:last-child
        padding-bottom: 0
    .cube-form-label
      position: absolute
      top: 1em
      margin-top: -.4em
      font-size: $fontsize-small
</style>
