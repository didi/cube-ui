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
    open(data, renderFn, options) {
      if (typeof renderFn !== 'function' && options === undefined) {
        options = renderFn
        renderFn = null
      }
      let instanceSingle = options
      if (typeof options === 'object') {
        instanceSingle = options.single
        delete options.single
      }

      beforeFns.forEach((before) => {
        before(data, renderFn, instanceSingle)
      })
      if (instanceSingle === undefined) {
        instanceSingle = single
      }
      if (instanceSingle && singleComponent) {
        singleInstance.updateRenderData(data, renderFn)
        // visibility mixin watch visible should not hide
        singleComponent._createAPI_reuse = true
        singleInstance.$forceUpdate()
        const oldVisible = singleComponent.visible
        singleComponent.$nextTick(() => {
          singleComponent._createAPI_reuse = false
          // prop visible true -> to
          if (oldVisible && singleComponent.visible) {
            singleComponent.show()
          }
        })
        // singleComponent.show && singleComponent.show()
        return singleComponent
      }
      const component = instantiateComponent(Vue, Component, data, renderFn, options)
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
      const isInVueInstance = !!ownerInstance.$on

      if (typeof renderFn !== 'function' && single === undefined) {
        single = renderFn
        renderFn = null
      }

      // to get Vue options
      // store router i18n ...
      const options = {
        single: single
      }
      if (isInVueInstance) {
        options.parent = ownerInstance
        if (!ownerInstance.__createAPI_watchers) {
          ownerInstance.__createAPI_watchers = []
        }
      }

      const renderData = parseRenderData(config, events)

      processProps()
      processEvents()
      process$()

      const eventBeforeDestroy = 'hook:beforeDestroy'

      let component = api.open(renderData, renderFn, options)
      let oldOwnerInstance = component.__cube__parent
      if (oldOwnerInstance !== ownerInstance) {
        if (oldOwnerInstance && oldOwnerInstance.$on) {
          cancelWatchProps(oldOwnerInstance)
          oldOwnerInstance.$off(eventBeforeDestroy, oldOwnerInstance.__cube_destroy_handler)
          oldOwnerInstance.__cube_destroy_handler = null
        }
        oldOwnerInstance = component.__cube__parent = ownerInstance
        const beforeDestroy = function () {
          cancelWatchProps(ownerInstance)
          if (oldOwnerInstance === ownerInstance) {
            component.remove()
            oldOwnerInstance = component.__cube__parent = null
            component = null
          }
          ownerInstance.$off(eventBeforeDestroy, beforeDestroy)
        }
        if (isInVueInstance) {
          ownerInstance.__cube_destroy_handler = beforeDestroy
          ownerInstance.$on(eventBeforeDestroy, beforeDestroy)
        }
      }
      return component

      function processProps() {
        const $props = renderData.props.$props
        if ($props) {
          delete renderData.props.$props

          const watchKeys = []
          const watchPropKeys = []
          Object.keys($props).forEach((key) => {
            const propKey = $props[key]
            if (typeof propKey === 'string' && propKey in ownerInstance) {
              // get instance value
              renderData.props[key] = ownerInstance[propKey]
              watchKeys.push(key)
              watchPropKeys.push(propKey)
            } else {
              renderData.props[key] = propKey
            }
          })
          if (isInVueInstance) {
            const cancelWatcher = ownerInstance.$watch(function () {
              const props = {}
              watchKeys.forEach((key, i) => {
                props[key] = ownerInstance[watchPropKeys[i]]
              })
              return props
            }, function (newProps) {
              component && component.$updateProps(newProps)
            })
            ownerInstance.__createAPI_watchers.push(cancelWatcher)
          }
        }
      }

      function processEvents() {
        const $events = renderData.props.$events
        if ($events) {
          delete renderData.props.$events

          Object.keys($events).forEach((event) => {
            let eventHandler = $events[event]
            if (typeof eventHandler === 'string') {
              eventHandler = ownerInstance[eventHandler]
            }
            renderData.on[event] = eventHandler
          })
        }
      }

      function process$() {
        const props = renderData.props
        Object.keys(props).forEach((prop) => {
          if (prop.charAt(0) === '$') {
            renderData[prop.slice(1)] = props[prop]
            delete props[prop]
          }
        })
      }

      function cancelWatchProps(ownerInstance) {
        if (ownerInstance.__createAPI_watchers) {
          ownerInstance.__createAPI_watchers.forEach((watcher) => {
            watcher()
          })
          ownerInstance.__createAPI_watchers = null
        }
      }
    }
  }
  return api
}
