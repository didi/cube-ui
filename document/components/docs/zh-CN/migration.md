## 迁移指南

在迁移开始之前假设您已经完成了 `Vue2` 到 `Vue3` 的迁移工作；`cube-ui` 本身的迁移基本是无缝的，但是内部的实现有破坏性的变更。

### 破坏性变更

- `v-model`:`value`改为`modelValue`

  由于Vue3把`v-model`的属性名从`value`改为`modelValue`，所以如果您使用了`value`属性，请改为`modelValue`

  ```html
  - <cube-component :value="value"  @input="doSomeThing"/>
  + <cube-component :modelValue="value" @update:modelValue="doSomeThing"/>
  ```

- `slot`:`slot/slot-scope`改为`v-slot`

  由于Vue2.6.0为具名插槽和作用域插槽引入了统一语法`v-slot`，取代了`slot`和`slot-scope`

  ```html
  - <template slot="slotName" slot-scope="slotProps">···</template>
  + <template v-slot:slotName="slotProps">···</template>
  ```

- `create-api` 基于 `Vue3` 做了重写

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

- 目前的构建产物只支持 `.mjs`
