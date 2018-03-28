<template>
  <form ref="form" class="cube-form" :class="formClass" :action="action" @submit="submitHandler" @reset="resetHandler">
    <slot>
      <cube-form-group v-for="(group, index) in groups" :fields="group.fields" :legend="group.legend" :key="index" />
    </slot>
  </form>
</template>

<script>
  import CubeFormGroup from './form-group.vue'

  const COMPONENT_NAME = 'cube-form'
  const LAYOUTS = {
    STANDARD: 'standard',
    CLASSIC: 'classic',
    FRESH: 'fresh'
  }
  const EVENT_SUBMIT = 'submit'
  const EVENT_RESET = 'reset'
  const EVENT_VALIDATE = 'validate'
  const EVENT_VALID = 'valid'
  const EVENT_INVALID = 'invalid'

  export default {
    name: COMPONENT_NAME,
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
      }
    },
    data() {
      return {
        validatedCount: 0,
        dirty: false,
        valid: undefined,
        firstInvalidField: null,
        firstInvalidFieldIndex: -1
      }
    },
    computed: {
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
      invalid() {
        const valid = this.valid
        return valid === undefined ? valid : !valid
      },
      formClass() {
        const invalid = this.invalid
        const valid = this.valid
        const options = this.options
        const layout = (options && options.layout) || LAYOUTS.STANDARD
        return {
          'cube-form_standard': layout === LAYOUTS.STANDARD,
          'cube-form_groups': this.groups.length > 1,
          'cube-form_valid': valid === true,
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
      submit() {
        this.$refs.form.submit()
      },
      reset() {
        this.$refs.form.reset()
      },
      submitHandler(e) {
        const submitResult = this._submit()
        if (submitResult) {
          this.$emit(EVENT_VALID, this.validity)
          this.$emit(EVENT_SUBMIT, e, this.model)
        } else {
          e.preventDefault()
          this.$emit(EVENT_INVALID, this.validity)
        }
      },
      resetHandler(e) {
        this._reset()
        this.$emit(EVENT_RESET, e)
      },
      _submit() {
        this.validate()
        if (this.invalid) {
          if (this.options.scrollToInvalidField && this.firstInvalidField) {
            this.firstInvalidField.$el.scrollIntoView()
          }
          return false
        }
        return true
      },
      _reset() {
        this.fields.forEach((fieldComponent) => {
          fieldComponent.reset()
        })
        this.setValidity()
      },
      validate() {
        this.fields.forEach((fieldComponent) => {
          fieldComponent.validate()
        })
        return this.valid
      },
      updateValidity(model, valid, result, dirty) {
        const curResult = this.validity[model]
        if (curResult && curResult.valid === valid && curResult.result === result && curResult.dirty === dirty) {
          return
        }
        this.setValidity(model, {
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
          const model = fieldComponent.fieldValue.model
          if (model) {
            const retVal = validity[model]
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
                firstInvalidFieldKey = model
              }
            } else if (fieldComponent.hasRules) {
              if (valid) {
                valid = undefined
              }
              validity[model] = {
                valid: undefined,
                result: {},
                dirty: false
              }
            }
          }
        })
        this.validity = validity
        this.dirty = dirty
        this.valid = valid
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
          if (fieldComponent.fieldValue.model === key) {
            this.firstInvalidField = fieldComponent
            this.firstInvalidFieldIndex = index
            return true
          }
        })
      },
      addField(fieldComponent) {
        this.fields.push(fieldComponent)
      },
      destroyField(fieldComponent) {
        const i = this.fields.indexOf(fieldComponent)
        this.fields.splice(i, 1)
        this.setValidity(fieldComponent.fieldValue.model)
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
      display: flex
      align-items: center
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
