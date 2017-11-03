import Vue from 'vue2'

export default function createVue(options = {}, Component, data, renderFn) {
  const methods = options.methods || {}
  delete options.methods
  options = {
    ...options,
    methods: {
      ...methods,
      init() {
        document.body.appendChild(this.$el)
      },
      destroy() {
        this.$destroy()
        document.body.removeChild(this.$el)
      }
    }
  }
  let renderData
  if (Component) {
    options.render = function (createElement) {
      return createElement(Component, renderData, renderFn ? [renderFn(createElement)] : [])
    }
  }
  const instance = new Vue(options)
  instance.updateRenderData = function (data) {
    renderData = data
  }
  instance.updateRenderData(data)
  instance.$mount()
  instance.init()
  const component = instance.$children[0]
  return component
}
