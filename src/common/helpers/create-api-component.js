import instantiateComponent from './instantiate-component'
import parseRenderData from './parse-render-data'

export default function createAPIComponent(Vue, Component, events = [], single = false) {
  let singleComponent
  let singleInstance
  const api = {
    open(data, renderFn, instanceSingle) {
      if (typeof renderFn !== 'function') {
        instanceSingle = renderFn
        renderFn = null
      }
      if (instanceSingle === undefined) {
        instanceSingle = single
      }
      if (instanceSingle && singleComponent) {
        singleInstance.updateRenderData(data, renderFn)
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
        if (instanceSingle) {
          singleComponent = null
          singleInstance = null
        }
      }
      const originShow = component.show
      component.show = function () {
        originShow && originShow.call(this)
        return this
      }
      const originHide = component.hide
      component.hide = function () {
        originHide && originHide.call(this)
        return this
      }
      if (instanceSingle) {
        singleComponent = component
        singleInstance = instance
      }
      // component.show && component.show()
      return component
    },
    create(config, renderFn, single) {
      return api.open(parseRenderData(config, events), renderFn, single)
    }
  }
  return api
}
