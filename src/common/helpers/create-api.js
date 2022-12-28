import { render, createVNode } from 'vue'

let seed = 0
const instances = []

const createComponent = (componentCtor, options) => {
  const container = document ? document.createElement('div') : null
  const id = 'cube_create_component_' + seed++

  const vm = createVNode(componentCtor, {
    ...options,
    id
  })

  instances.push(vm)

  if (container) {
    render(vm, container)
    document.body.appendChild(container)
  }

  console.log(vm, vm.component)
  return vm
}

export default function createAPI(app, Component, events, single) {
  app.config.globalProperties[`$create${Component.name.replace('cube-', '').replace(/^\w/, ($) => $.toUpperCase())}`] = function(options) {
    if (single && Component._instance) {
      return Component._instance.component.proxy
    }
    const vm = Component._instance = createComponent(Component, options)
    return vm.component.proxy
  }
}
