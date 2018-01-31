<template>
  <div class="cube-validator" :class="{ 'cube-validator_warn': (dirty || trigger) && !value }">
    <slot></slot>
    <slot name="message" :message="msg" :dirty="dirty" :result="result">
      <span class="cube-validator-msg-def">{{ dirty || trigger ? msg : '' }}</span>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { rules, findMessage } from '../../common/helpers/validator'

  const COMPONENT_NAME = 'cube-validator'
  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        msg: '',
        dirty: false,
        result: {}
      }
    },
    props: {
      for: {
        type: [String, Number, Boolean, Array],
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
        type: Boolean,
        default: true
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
    created() {
      this.validate(this.for)
    },
    watch: {
      for(newVal) {
        if (!this.dirty) {
          this.dirty = true
        }

        this.validate(newVal)
      }
    },
    methods: {
      validate(val) {
        let isValid = true
        const type = this.rule.type
        const result = {}

        for (const key in this.rule) {
          let ret = !rules[key] || rules[key](val, this.rule[key], type)
          let msg = this.messages[key]
                    ? typeof this.messages[key] === 'function' ? this.messages[key](ret) : this.messages[key]
                    : findMessage(key, this.rule[key], type, val)

          if (isValid && ret !== true) {
            isValid = false
            this.msg = msg
          }

          result[key] = {
            valid: ret === true,
            inValid: ret !== true,
            message: msg
          }
        }
        this.result = result

        // valid when the rule is not required and the val is empty
        isValid = !this.rule.required && !rules.required(val, true, type) || isValid

        if (isValid) {
          this.msg = ''
        }
        this.$emit(EVENT_INPUT, isValid)
      }
    }
  }
</script>

<style lang="stylus">
  @require "../../common/stylus/variable.styl"

  .cube-validator
    &.cube-validator_warn
      textarea, input
        border: solid 1px $validator-msg-def-color
    .cube-validator-msg-def
      font-size: $fontsize-medium
      color: $validator-msg-def-color
</style>
