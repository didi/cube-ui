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
        :validating="validating"
        :result="result"
      >
        <span class="cube-validator-msg-def">{{ dirtyOrValidated ? msg : '' }}</span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { parallel, cb2PromiseWithResolve, isUndef, isFunc, isString, isArray } from '../../common/helpers/util'
  import { rules } from '../../common/helpers/validator'
  import localeMixin from '../../common/mixins/locale'
  import template from '../../common/helpers/string-template'

  const COMPONENT_NAME = 'cube-validator'
  const EVENT_INPUT = 'input'
  const EVENT_VALIDATING = 'validating'
  const EVENT_VALIDATED = 'validated'
  const EVENT_MSG_CLICK = 'msg-click'

  export default {
    name: COMPONENT_NAME,
    mixins: [localeMixin],
    props: {
      model: {
        required: true
      },
      modelKey: {
        type: String,
        default: ''
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
      return {
        valid: this.value,
        validated: false,
        msg: '',
        dirty: false,
        validating: false,
        result: {}
      }
    },
    computed: {
      targetModel() {
        const modelKey = this.modelKey
        const model = this.model
        return modelKey ? model[modelKey] : model
      },
      invalid() {
        const valid = this.valid
        return isUndef(valid) ? undefined : !valid
      },
      isDisabled() {
        const disabled = this.disabled
        const noRules = Object.keys(this.rules).length <= 0
        return disabled || noRules
      },
      dirtyOrValidated() {
        return (this.dirty || this.validated) && !this.validating
      },
      containerClass() {
        const disabled = this.isDisabled
        if (disabled) {
          return
        }
        return {
          'cube-validator_invalid': this.invalid,
          'cube-validator_valid': this.valid,
          'cube-validator_validating': this.validating
        }
      }
    },
    watch: {
      value(newVal) {
        this.valid = newVal
      },
      targetModel: {
        handler() {
          if (this.isDisabled) {
            return
          }
          if (!this.dirty) {
            this.dirty = true
          }

          this.validate()
        },
        sync: true
      },
      rules() {
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
      validate(cb) {
        const promise = cb2PromiseWithResolve(cb)
        if (promise) {
          cb = promise.resolve
        }
        if (this.isDisabled) {
          cb && cb(this.valid)
          return promise
        }
        this._validateCount++
        const validateCount = this._validateCount
        const val = this.targetModel

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
            if (isFunc(ruleValue)) {
              ret = ruleValue(val, configRules[key], type)
            } else {
              ret = !rules[key] || rules[key](val, configRules[key], type)
            }
            allTasks.push((next) => {
              const resolve = (_ret) => {
                next({
                  key: key,
                  valid: _ret === true,
                  ret: _ret
                })
              }
              const reject = (err) => {
                next({
                  key: key,
                  valid: false,
                  ret: err
                })
              }
              if (typeof ret === 'object' && isFunc(ret.then)) {
                ret.then(resolve).catch(reject)
              } else if (isFunc(ret)) {
                ret(resolve, reject)
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
        this._checkTasks(allTasks, validateCount, cb)
        return promise
      },
      _checkTasks(allTasks, validateCount, cb) {
        const configRules = this.rules
        let isValid = true
        const result = {}
        let sync = true
        this.validating = true
        const model = this.targetModel
        parallel(allTasks, (results) => {
          if (this._validateCount !== validateCount) {
            return
          }
          this.validating = false
          results.forEach(({ key, valid, ret }) => {
            const msg = this.messages[key]
              ? isFunc(this.messages[key])
                ? this.messages[key](ret, valid)
                : this.messages[key]
              : this.findMessage(key, configRules[key], configRules.type, model)
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
          if (!sync) {
            this.$emit(EVENT_VALIDATED, isValid)
          }
          this._updateModel(isValid, result)
          cb && cb(this.valid)
        })
        if (this.validating) {
          sync = false
          // only async validate trigger validating
          this.$emit(EVENT_VALIDATING)
          this.valid = undefined
          this.$emit(EVENT_INPUT, this.valid)
        }
      },
      _updateModel(valid, result) {
        this.validated = true
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
        this.validating = false
        this.dirty = false
        this.result = {}
        this.msg = ''
        this.validated = false
        this.valid = undefined
        this.$emit(EVENT_INPUT, this.valid)
      },
      msgClickHandler() {
        this.$emit(EVENT_MSG_CLICK)
      },
      findMessage (key, config, type, val) {
        const messages = this.$cubeMessages
        const lang = this.$cubeLang
        const NAMESPACE = 'validator'
        const target = messages[lang][NAMESPACE][key]
        if (!target) {
          return ''
        }
        if (isString(target)) {
          return target
        } else if (isFunc(target)) {
          return target(config)
        } else {
          if (!target[type]) {
            type = isArray(val) ? 'array' : typeof val
          }
          return typeof target[type] === 'function' ? target[type](config) : template(target[type], config)
        }
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
