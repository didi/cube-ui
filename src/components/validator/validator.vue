<template>
  <div class="cube-validator" :class="containerClass">
    <div class="cube-validator-content">
      <slot></slot>
    </div>
    <div class="cube-validator-msg" @click="msgClickHandler">
      <slot
        name="message"
        :message="msg"
        :dirty="dirty"
        :validated="validated"
        :pending="pending"
        :result="result"
      >
        <span class="cube-validator-msg-def">{{ dirtyOrValidated ? msg : '' }}</span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { parallel } from '../../common/helpers/util'
  import { rules, findMessage } from '../../common/helpers/validator'

  const COMPONENT_NAME = 'cube-validator'
  const EVENT_INPUT = 'input'
  const EVENT_MSG_CLICK = 'msg-click'

  export default {
    name: COMPONENT_NAME,
    props: {
      model: {
        required: true
      },
      rules: {
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
      value: {},
      disabled: {
        type: Boolean,
        default: false
      },
      immediate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const value = this.value
      return {
        valid: value,
        validated: false,
        msg: '',
        dirty: false,
        pending: false,
        result: {}
      }
    },
    computed: {
      invalid() {
        const valid = this.valid
        return valid === undefined ? undefined : !valid
      },
      isDisabled() {
        const disabled = this.disabled
        const noRules = Object.keys(this.rules).length <= 0
        return disabled || noRules
      },
      dirtyOrValidated() {
        return this.dirty || this.validated
      },
      containerClass() {
        const disabled = this.isDisabled
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
      model(newVal) {
        if (this.isDisabled) {
          return
        }
        if (!this.dirty) {
          this.dirty = true
        }

        this.validate()
      },
      isDisabled(newVal) {
        if (!newVal && this.trigger && !this.validated) {
          this.validate()
        }
      }
    },
    created() {
      this._validateCount = 0
      if (!this.isDisabled && this.immediate) {
        this.validate()
      }
    },
    methods: {
      validate() {
        if (this.isDisabled) {
          return
        }
        this._validateCount++
        const validateCount = this._validateCount
        const val = this.model
        this.validated = true

        const configRules = this.rules
        const type = configRules.type
        const allTasks = []

        let requiredValid = true
        if (!configRules.required) {
          // treat it as empty, no need to validate other rules
          requiredValid = rules.required(val, true, type)
        }

        if (requiredValid) {
          for (const key in configRules) {
            const ruleValue = configRules[key]
            let ret
            if (typeof ruleValue === 'function') {
              ret = ruleValue(val, configRules[key], type)
            } else {
              ret = !rules[key] || rules[key](val, configRules[key], type)
            }
            allTasks.push((next) => {
              if (typeof ret === 'object' && ret !== null && ret.then) {
                ret.then((_ret) => {
                  next({
                    key: key,
                    valid: true,
                    ret: _ret
                  })
                }).catch((_ret) => {
                  next({
                    key: key,
                    valid: false,
                    ret: _ret
                  })
                })
              } else {
                next({
                  key: key,
                  valid: ret === true,
                  ret: ret
                })
              }
            })
          }
        }
        let isValid = true
        const result = {}
        this.pending = true
        parallel(allTasks, (results) => {
          if (this._validateCount !== validateCount) {
            return
          }
          this.pending = false
          results.forEach(({ key, valid, ret }) => {
            let msg = this.messages[key]
                      ? typeof this.messages[key] === 'function'
                        ? this.messages[key](ret, valid)
                        : this.messages[key]
                      : findMessage(key, configRules[key], type, val)
            if (isValid && !valid) {
              isValid = false
              this.msg = msg
            }
            result[key] = {
              valid: valid,
              invalid: !valid,
              message: msg
            }
          })
          this._updateModel(isValid, result)
        })
      },
      _updateModel(valid, result) {
        this.result = result
        if (result.required && result.required.invalid) {
          // required
          this.msg = result.required.message
        }

        if (valid) {
          this.msg = ''
        }
        this.valid = valid
        this.$emit(EVENT_INPUT, this.valid)
      },
      reset() {
        this._validateCount++
        this.dirty = false
        this.result = {}
        this.msg = ''
        this.validated = false
        this.valid = undefined
        this.$emit(EVENT_INPUT, this.valid)
      },
      msgClickHandler() {
        this.$emit(EVENT_MSG_CLICK)
      }
    }
  }
</script>

<style lang="stylus">
  @require "../../common/stylus/variable.styl"

  .cube-validator
    .cube-checkbox, .cube-radio
      color: inherit
    .cube-input
      input
        color: inherit
    .cube-textarea
      color: inherit
    .cube-select
      color: inherit
  .cube-validator-msg-def
    font-size: $fontsize-medium
    color: $validator-msg-def-color
</style>
