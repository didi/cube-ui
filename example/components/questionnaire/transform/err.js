import { setMessages } from './_helper'

export default function transformErrMsg(config, field) {
  const isAgreement = config.type === 'agreement'
  if (!field.messages) {
    field.messages = {}
  }
  setMessages(field, {
    required: config.errMsg || (isAgreement ? '请同意' : '此题为必做题')
  })
}
