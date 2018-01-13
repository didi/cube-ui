import instantiateComponent from './instantiate-component'
import parseRenderData from './parse-render-data'

export default function createAPIComponent(Vue, Component, events = [], single = false) {
  let singleComponent
  let singleInstance
  const beforeFns = []
  const api = {
    before(fn) {
      beforeFns.push(fn)
    },
    open(data, renderFn, instanceSingle) {
      if (typeof renderFn !== 'function') {
        instanceSingle = renderFn
        renderFn = null
      }
      beforeFns.forEach((before) => {
        before(data, renderFn, instanceSingle)
      })
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
        if (instance.__cube__destroyed) {
          return
        }
        originRemove && originRemove.call(this)
        instance.destroy()
        instance.__cube__destroyed = true
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
      const ownerInstance = this
      const component = api.open(parseRenderData(config, events), renderFn, single)
      if (component.__cube__parent !== ownerInstance) {
        component.__cube__parent = ownerInstance
        const beforeDestroy = function () {
          if (component.__cube__parent === ownerInstance) {
            component.remove()
          }
          ownerInstance.$off('hook:beforeDestroy', beforeDestroy)
          component.__cube__parent = null
        }
        ownerInstance.$on('hook:beforeDestroy', beforeDestroy)
      }
      return component
    }
  }
  return api
}
