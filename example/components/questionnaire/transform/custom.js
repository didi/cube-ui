import { setRules, setMessages } from './_helper'

const createRulesAndMessages = (rule, message) => {
  return {
    rules: {
      custom: rule
    },
    messages: {
      custom: message
    }
  }
}

const customMap = {
  tel(config) {
    const rule = function (val) {
      return typeof val === 'string' && /^1[0-9]{10}$/.test(val)
    }
    const message = config.errMsg || '请输入正确的手机号码'
    return createRulesAndMessages(rule, message)
  },
  upload(config) {
    const rule = function (files) {
      if (files.length) {
        return Promise.all(files.map((file) => {
          return new Promise((resolve, reject) => {
            // check 状态
            const check = () => {
              if (file.status === 'error') {
                reject(file)
              } else if (file.status === 'success') {
                resolve(file)
              } else {
                // waiting
                setTimeout(check, 100)
              }
            }
            check()
          })
        })).then(() => {
          return true
        })
      } else {
        return true
      }
    }
    const message = config.errMsg || '上传失败'
    return createRulesAndMessages(rule, message)
  }
}

export default function transformCustom(config, field) {
  const custom = customMap[config.type]
  if (custom) {
    const { rules, messages } = custom(config)
    setRules(field, config.model, rules)
    setMessages(field, messages)
  }
}
