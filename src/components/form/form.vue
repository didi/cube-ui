<template>
  <form class="cube-form" :class="formClass" :action="action" @submit="submitHandler" @reset="resetHandler">
    <slot>
      <cube-form-group v-for="(group, index) in groups" :data="group" :model="model" :key="index" />
    </slot>
  </form>
</template>

<script>
  import CubeFormGroup from './form-group.vue'

  const COMPONENT_NAME = 'cube-form'
  const EVENT_SUBMIT = 'submit'
  const EVENT_RESET = 'reset'
  const EVENT_VALIDATE = 'validate'
  const EVENT_VALID = 'valid'
  const EVENT_INVALID = 'invalid'

  export default {
    name: COMPONENT_NAME,
    props: {
      action: {
        type: String,
        default: ''
      },
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
            labelRow: false,
            labelTop: false
          }
        }
      },
      newModel: {
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
        if (schema.groups) {
          return schema.groups
        } else if (schema.fields) {
          // to one group
          return [
            {
              fields: schema.fields
            }
          ]
        }
        /* istanbul ignore next */
        return []
      },
      invalid() {
        return this.firstInvalidFieldIndex >= 0
      },
      formClass() {
        const invalid = this.invalid
        const valid = this.valid
        const options = this.options
        return {
          'cube-form_groups': this.groups.length > 1,
          'cube-form_valid': valid === true,
          'cube-form_invalid': invalid,
          'cube-form-label-row': options.labelRow,
          'cube-form-label-top': options.labelTop
        }
      }
    },
    watch: {
      newModel: {
        handler(newVal) {
          if (newVal) {
            this.$nextTick(() => {
              // initial validate
              this.validate()
            })
          }
        },
        immediate: true
      },
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
    created() {
      this.form = this
      this.fields = []
      this.validity = {}
    },
    methods: {
      submitHandler(e) {
        this.validate()
        if (this.invalid) {
          e.preventDefault()
          this.$emit(EVENT_INVALID, this.validity)
          if (this.options.scrollToInvalidField && this.firstInvalidField) {
            this.firstInvalidField.$el.scrollIntoView()
          }
          return
        }
        this.$emit(EVENT_VALID, this.validity)
        this.$emit(EVENT_SUBMIT, e, this.model)
      },
      resetHandler(e) {
        this.reset()
        this.$emit(EVENT_RESET, e)
      },
      reset() {
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
      updateValidity(field, valid, result, dirty) {
        const curResult = this.validity[field.model]
        if (curResult && curResult.valid === valid && curResult.result === result && curResult.dirty === dirty) {
          return
        }
        this.setValidity(field.model, {
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
          const model = fieldComponent.field.model
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
            } else {
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
          if (fieldComponent.field.model === key) {
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
        const model = fieldComponent.field.model
        this.setValidity(model)
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
  .cube-form-label-row
    .cube-form-item
      display: block
      padding: 15px 10px
      .cube-validator-msg
        position: absolute
        right: 0
        bottom: -1.3em
        left: auto
        &::before
          display: none
      .cube-validator-msg-def
        font-size: $fontsize-small
    .cube-form-label
      padding-bottom: 10px
  .cube-form-label-top
    .cube-form-item
      display: block
      padding: 2em 10px 15px
      .cube-validator
        position: static
      .cube-validator-msg
        position: absolute
        top: 1em
        right: 10px
        bottom: auto
        margin-top: -.4em
        &::before
          display: none
      .cube-validator-msg-def
        font-size: $fontsize-small
    .cube-form-label
      position: absolute
      top: 1em
      margin-top: -.4em
      font-size: $fontsize-small
</style>
