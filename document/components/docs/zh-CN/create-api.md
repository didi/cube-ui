## create-api 模块

该模块默认暴露出一个 `createAPI` 函数，可以实现以 API 的形式调用自定义组件。

### createAPI(Vue, Component, [events, single])

- 参数：

  - `{Function} Vue` Vue 函数
  - `{Function | Object} Component` 组件类或者组件对象，组件必须有 name
  - `{Array} [events]` 组件实例 emit 的事件名集合
  - `{Boolean} [single]` 是否为单例

- 用法：

  - 该方法主要是在 Vue 的 prototype 上增加一个名为 `$create{camelize(Component.name)}` 的方法，这样就可以在其他组件中直接通过 `const instance = this.$createAaBb(config, [renderFn])` 这样来实例化组件了，而且这个实例化组件的元素是被附加到 `body` 元素下的；关于 `$createAaBb` 的参数：
    - `{Object} config` 组件配置参数，默认所有的值都会当做 props 传给组件，但是要排除 `events` 中的事件（默认会做转换，例如：`events` 的值为 `['click']`，那么 `config` 中的 `onClick` 就是作为 `click` 事件的回调函数，而不是作为 props 传递给组件）。
    - `{Function} [renderFn]` 是可选的参数，用于生成子 VNode 节点，一般场景是处理 slot。
  - 注意调用后的返回值 `instance` 就是组件实例，这个实例会被**附加**或者**代理** `remove` 方法，如果调用了，该实例就会被销毁且会从 `body` 下移除。

- 示例：

  ```js
  import Vue form 'vue'
  // 得到 createAPI
  import { createAPI } from 'cube-ui'
  // or import Cube from 'cube-ui'
  // const { createAPI } = Cube
  // 需要提供 API 方式实例化的组件
  const MyComponent = Vue.extend({
    name: 'hello',
    props: {
      content: {
        type: String,
        default: 'Hello'
      }
    },
    template: '<div @click="clickHandler">{{content}}<slot name="other"></slot></div>',
    methods: {
      clickHandler(e) {
        this.$emit('click', e)
      }
    }
  })
  // 调用
  createAPI(Vue, MyComponent, ['click'], true)
  // 在其他组件中使用
  new Vue({
    el: '#app',
    template: '<button @click="showHello">Show Hello</button>',
    methods: {
      showHello() {
        // 直接调用
        // 传入配置对象，默认传入的所有对象全都当做 props 传入组件
        // 除了在调用 createAPI 的时候传入了 events，这里对应的就是
        // on{event name} 会被当做事件回调处理
        const instance = this.$createHello({
          content: 'My Hello Content',
          onClick(e) {
            console.log('Hello component clicked.')
          }
        }, /* renderFn */ (createElement) => {
          return [
            createElement('p', {
              slot: 'other'
            }, 'other content')
          ]
        })
        // 通过 Vue 组件的 $on 也是可以监听的，看使用场景
        instance.$on('click', (e) => {
          console.log('on click', e)
        })
        // 移除销毁
        instance.remove()
      }
    }
  })
  ```

  示例中就是创建了一个需要 API 调用的组件 `MyComponent`，名字为 `hello`，然后在其他组件中去使用，重点就是 `showHello()` 方法做的事情：调用 `this.$createHello(config, renderFn)` 实现组件的实例化。
