import { render, createVNode, mergeProps, camelize } from 'vue'

let seed = 0
const instances = []

const createComponent = (componentCtor, options, context = null) => {
  // todo slots
  const container = document ? document.createElement('div') : null
  const id = 'cube_create_component_' + seed++
  const vm = createVNode({
    render() {
      return createVNode(componentCtor, {
        ...options,
        ref: '$cre'
      })
    }
  }, { id })

  if (context) {
    vm.appContext = context
  }

  instances.push(vm)

  let $cre

  if (container) {
    // mounted component
    render(vm, container)

    $cre = vm.component.proxy.$refs['$cre']

    // add $remove
    $cre['$remove'] = function(cb) {
      render(null, container)
      componentCtor._instance = null
      cb && cb()

      if (container && document.body.contains(container)) {
        document.body.removeChild(container)
      }

      const idx = instances.findIndex(item => {
        const { id: _id } = item.props
        return id === _id
      })
      instances.splice(idx, 1)
    }

    // add $updateProps
    $cre['$updateProps'] = function(props) {
      // reset default value
      Object.keys(componentCtor.props).forEach(key => {
        $cre._.props[key] = componentCtor.props[key].default
      })
      // set new props
      Object.keys(props).forEach(key => {
        $cre._.props[key] = props[key]
      })
      vm.component.proxy.$forceUpdate()
    }

    document.body.appendChild(container)
  }

  return $cre
}

export default function createAPI(app, Component, events, single) {
  app.config.globalProperties[`$create${camelize(Component.name.replace('cube-', '')).replace(/^\w/, ($) => $.toUpperCase())}`] = function(options) {
    if (single && Component._instance) {
      if (options) {
        Component._instance.$updateProps(options)
      }
      return Component._instance
    }
    const vm = Component._instance = createComponent(Component, options, this ? this._.appContext : null)

    const parentVnodeProps = this ? this._.vnode.props : null
    if (parentVnodeProps) {
      this._.vnode.props = mergeProps(parentVnodeProps || {}, {
        onVnodeBeforeUnmount() {
          vm.$remove()
        }
      })
    }

    return vm
  }
}
