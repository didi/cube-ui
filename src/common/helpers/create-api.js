import { processComponentName } from './util'
import createAPIComponent from './create-api-component'

export default function createAPI (Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const createName = processComponentName(Component, {
    prefix: '$create-'
  })
  Vue.prototype[createName] = api.create
  Component.$create = api.create
  return api
}
