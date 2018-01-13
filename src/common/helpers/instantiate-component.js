export default function instantiateComponent(Vue, Component, data, renderFn) {
  let renderData
  let childrenRenderFn
  const instance = new Vue({
    render(createElement) {
      let children = childrenRenderFn && childrenRenderFn(createElement)
      if (children && !Array.isArray(children)) {
        children = [children]
      }
      return createElement(Component, renderData, children || [])
    },
    methods: {
      init() {
        document.body.appendChild(this.$el)
      },
      destroy() {
        this.$destroy()
        document.body.removeChild(this.$el)
      }
    }
  })
  instance.updateRenderData = function (data, render) {
    renderData = data
    childrenRenderFn = render
  }
  instance.updateRenderData(data, renderFn)
  instance.$mount()
  instance.init()
  const component = instance.$children[0]
  return component
}
