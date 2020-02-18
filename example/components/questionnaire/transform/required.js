import { setRules } from './_helper'

export default function transformRequired(config, field) {
  let required = config.required
  const isAgreement = config.type === 'agreement'
  if (isAgreement) {
    required = true
  }
  if (required) {
    const rules = {}
    if (isAgreement) {
      rules.required = function (val) {
        return val
      }
    } else {
      rules.required = required
    }
    setRules(field, config.model, rules)
  }
}
