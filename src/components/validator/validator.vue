<template>
  <div class="cube-validator" :class="containerClass">
    <slot></slot>
    <slot name="message" :message="msg" :dirty="dirty" :validated="validated" :result="result">
      <span class="cube-validator-msg-def">{{ dirtyOrValidated ? msg : '' }}</span>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { rules, findMessage } from '../../common/helpers/validator'

  const COMPONENT_NAME = 'cube-validator'
  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      for: {
        required: true
      },
      rule: {
        type: Object,
        default() {
          return {}
        }
      },
      messages: {
        type: [Object, String],
        default() {
          return {}
        }
      },
      value: {
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      trigger: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const value = this.value
      const isValueUndefined = value === undefined
      return {
        valid: value,
        invalid: value ? false : isValueUndefined ? undefined : true,
        validated: false,
        msg: '',
        dirty: false,
        result: {}
      }
    },
    computed: {
      dirtyOrValidated() {
        return this.dirty || this.validated
      },
      containerClass() {
        const disabled = this.disabled
        // const dirtyOrValidated = this.dirtyOrValidated
        if (disabled) {
          return
        }
        return {
          'cube-validator_invalid': this.invalid,
          'cube-validator_valid': this.valid
        }
      }
    },
    watch: {
      valid(newVal) {
        this.$emit(EVENT_INPUT, newVal)
      },
      for(newVal) {
        if (this.disabled) {
          return
        }
        if (!this.dirty) {
          this.dirty = true
        }

        this.validate()
      },
      trigger: {
        handler(newVal) {
          if (!this.disabled && newVal) {
            this.validate()
          }
        },
        immediate: true
      },
      disabled(newVal) {
        if (!newVal && this.trigger && !this.validated) {
          this.validate()
        }
      }
    },
    methods: {
      validate() {
        if (this.disabled) {
          return
        }
        const val = this.for
        this.validated = true

        let valid = true
        const type = this.rule.type
        const result = {}

        for (const key in this.rule) {
          const ruleValue = this.rule[key]
          let ret
          if (typeof ruleValue === 'function') {
            ret = ruleValue(val, this.rule[key], type)
          } else {
            ret = !rules[key] || rules[key](val, this.rule[key], type)
          }
          let msg = this.messages[key]
                    ? typeof this.messages[key] === 'function' ? this.messages[key](ret) : this.messages[key]
                    : findMessage(key, this.rule[key], type, val)

          if (valid && ret !== true) {
            valid = false
            this.msg = msg
          }

          result[key] = {
            valid: ret === true,
            invalid: ret !== true,
            message: msg
          }
        }
        this.result = result

        // valid when the rule is not required and the val is empty
        valid = !this.rule.required && !rules.required(val, true, type) || valid

        if (valid) {
          this.msg = ''
        }
        this.valid = valid
        this.invalid = !valid
      },
      reset() {
        this.dirty = false
        this.result = {}
        this.msg = ''
        this.validated = false
        this.valid = undefined
        this.invalid = undefined
      }
    }
  }
</script>

<style lang="stylus">
  @require "../../common/stylus/variable.styl"

  .cube-validator
    &.cube-validator_invalid
      textarea, input
        border: solid 1px $validator-msg-def-color
  .cube-validator-msg-def
    font-size: $fontsize-medium
    color: $validator-msg-def-color
</style>
