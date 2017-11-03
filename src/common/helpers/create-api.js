import { camelize } from '../lang/string'
import createAPIComponent from './create-api-component'

export default function createAPI (Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const name = Component.name
  const pureName = name.replace(/^cube-/i, '')
  const apiName = `$${camelize(pureName)}`
  const createName = `$${camelize(`create-${pureName}`)}`
  Vue.prototype[apiName] = api
  Vue.prototype[createName] = api.create
  return api
}
