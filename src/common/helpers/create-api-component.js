import instantiateComponent from './instantiate-component'
import parseRenderData from './parse-render-data'

export default function createAPIComponent(Vue, Component, events = [], single = false) {
  let singleComponent
  let singleInstance
  const api = {
    open(data, renderFn) {
      if (singleComponent) {
        singleInstance.updateRenderData(data)
        singleInstance.$forceUpdate()
        // singleComponent.show && singleComponent.show()
        return singleComponent
      }
      const component = instantiateComponent(Vue, Component, data, renderFn)
      const instance = component.$parent
      const originRemove = component.remove

      component.remove = function () {
        originRemove && originRemove.call(this)
        instance.destroy()
        singleComponent = null
        singleInstance = null
      }
      if (single) {
        singleComponent = component
        singleInstance = instance
      }
      // component.show && component.show()
      return component
    },
    create(config, renderFn) {
      return api.open(parseRenderData(config, events), renderFn)
    }
  }
  return api
}
