import { deepAssign, toArray } from '../util'

function addMessage () {
  const args = toArray(arguments)
  const NAMESPACE = 'validator'
  const vueProto = this._base.prototype
  const lang = vueProto.$cubeLang
  const baseMessages = vueProto.$cubeMessages[lang][NAMESPACE]

  if (typeof args[0] === 'string') {
    args[0] = {
      [args[0]]: args[1]
    }
  }

  deepAssign(baseMessages, args[0])
}

export { addMessage }
