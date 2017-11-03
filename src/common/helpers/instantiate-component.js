export default function instantiateComponent(Vue, Component, data, renderFn) {
  let renderData
  const instance = new Vue({
    render(createElement) {
      return createElement(Component, renderData, renderFn ? [renderFn(createElement)] : [])
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
  instance.updateRenderData = function (data) {
    renderData = data
  }
  instance.updateRenderData(data)
  instance.$mount()
  instance.init()
  const component = instance.$children[0]
  return component
}
