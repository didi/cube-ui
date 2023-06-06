## Migration Guide

Assuming you have already completed the migration from `Vue2` to `Vue3` before the migration begins; the migration of cube-ui itself is basically seamless, but there are destructive changes in its internal implementation.

### Breaking Change

- `v-model`:`value` to `modelValue`

  Since Vue3 changed the property name of `v-model` from `value` to `modelValue`, if you are using the `value` property, please change it to `modelValue`

  ```html
  - <cube-component :value="value"  @input="doSomeThing"/>
  + <cube-component :modelValue="value" @update:modelValue="doSomeThing"/>
  ```

- `slot`:`slot/slot-scope` to `v-slot`

  Since Vue 2.6.0 introduced the unified syntax `v-slot` for named and scoped slots, replacing `slot` and `slot-scope`

  ```html
  - <template slot="slotName" slot-scope="slotProps">···</template>
  + <template v-slot:slotName="slotProps">···</template>
  ```

- `create-api` has been rewritten based on `Vue3`.

  ```js
  import { render, createVNode, mergeProps, camelize, h, isVNode } from 'vue'

  let seed = 0
  const instances = []

  const createComponent = (componentCtor, options, slots = null, context = null) => {
    let _options = options
    let _slots = slots ? slots(h) : null
    // todo slots
    const container = document ? document.createElement('div') : null
    const id = 'cube_create_component_' + seed++
    const vm = createVNode({
      render() {
        return createVNode(componentCtor, {
          ..._options
        }, _slots)
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

      $cre = vm.component.subTree.component.proxy

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
        ~idx && instances.splice(idx, 1)
      }

      // add $updateProps
      $cre['$updateProps'] = function(props, slots, inherit = true) {
        _options = {...(inherit ? _options : {}), ...props}
        _slots = slots ? {...(_slots || {}), ...slots(h)} : null
        vm.component.proxy.$forceUpdate()
      }

      document.body.appendChild(container)
    }

    return $cre
  }

  function removeFromParent(vm) {
    const hasParent = !!this && !!this._ && isVNode(this._.vnode)

    if (hasParent) {
      const parentVnodeProps = this && this._ && isVNode(this._.vnode) ? this._.vnode.props : null

      this._.vnode.props = mergeProps(parentVnodeProps || {}, {
        onVnodeBeforeUnmount() {
          vm.$remove()
        }
      })
    }
  }

  export default function createAPI(app, Component, events, single) {
    Component.$create = app.config.globalProperties[`$create${camelize(Component.name.replace('cube-', '')).replace(/^\w/, ($) => $.toUpperCase())}`] = function(options, slots = null) {
      if (single && Component._instance) {
        if (options) {
          Component._instance.$updateProps(options, slots, false)
        }

        removeFromParent.call(this, Component._instance)

        return Component._instance
      }
      const vm = Component._instance = createComponent(Component, options, slots, this ? this._.appContext : null)

      removeFromParent.call(this, vm)

      return vm
    }
  }
  ```

- The current build output only supports `.mjs` files.
