## create-api 模块

该模块默认暴露出一个 `createAPI` 函数，可以实现以 API 的形式调用自定义组件。并且既可以在 Vue 实例上下文中调用，也可以[在普通 js 文件中调用](https://didi.github.io/cube-ui/#/zh-CN/docs/create-api#cube-%E5%A6%82%E4%BD%95%E5%9C%A8%E6%99%AE%E9%80%9Ajs%E6%96%87%E4%BB%B6%E4%B8%AD%E6%88%96%E8%80%85%E5%85%A8%E5%B1%80%E8%B0%83%E7%94%A8-anchor)。

__注：__ 所有通过 `createAPI` 实现的通过 API 的形式调用的自定义组件。

### createAPI(app, Component, [events, single])

- 参数：

  - `{Object} app` app 示例
  - `{Function | Object} Component` Vue 组件，组件必须有 name
  - ~~`{Array} [events]` 组件实例 emit 的事件名集合。~~ 废弃保留位置
  - `{Boolean} [single]` 是否为单例

- 用法：

  - 该方法在 Vue 的 prototype 上增加一个名为 `$create{camelize(Component.name)}` 的方法，这样就可以在其他组件中直接通过 `const instance = this.$createAaBb(options, [slots, context])` 这样来实例化组件了，而且这个实例化组件的元素是被附加到 `body` 元素下的。

  - `const instance = this.$createAaBb(options, slots, context)`

    **参数：**

    | 参数 | 说明 | 类型 | 默认值 | 示例 |
    | - | - | - | - | - |
    | options | props 参数，事件请用 onEvent | Object | {} | - |
    | slots | 可选参数，用于生成子 VNode 节点，一般场景是处理 slot | Function | - | function (createElement) {...} |
    | context | 可选参数，创建的时候是否传入自定义的 vue appContext | Object | 调用的组件的 context | - |

    **配置参数 `options`：**

    默认所有的值都会当做 props，event 事件直接使用 onEvent 即可，前提是自定义组件声明了 `emits` 选项。

    ```js
    {
      title: 'title',
      content: 'my content',
      open: false,
      onClick: () => { /** do something */ }
    }
    ```

    **返回值 `instance`：**

    `instance` 就是组件实例，即 `component.proxy` 。
    > 这个实例会被**附加或代理 `$remove` 方法**

    如果调用了，该实例就会被销毁且会从 `body` 下移除。

    如果说实例化上下文（即 `this.$createXx` 中的 `this`）销毁的话会自动移除销毁该实例元素。

- 示例：

  我们先编写一个 Hello.vue 组件：

  ```html
  <template>
    <div @click="clickHandler">
      {{content}}
      <slot name="other"></slot>
    </div>
  </template>

  <script>
    export default {
      name: 'hello',
      props: {
        content: {
          type: String,
          default: 'Hello'
        }
      },
      emits: ['click'],
      methods: {
        clickHandler(e) {
          this.$emit('click', e)
        }
      }
    }
  </script>
  ```

  然后我们再通过 `createAPI` 把 Hello.vue 变成一个 API 式调用的组件并调用。

  ```js
    import { createApp } from 'vue'
    import Hello from './Hello.vue'

    // 引入 Style 加载基础样式
    import {
      /* eslint-disable no-unused-vars */
      Style,
      Dialog,
      createAPI
    } from 'cube-ui'

    const app = createApp({
       render: function (h) {
        return h('button', {
          on: {
            click: this.showHello
          }
        }, ['Show Hello'])
      },
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
          }, /* slots */ (h) => {
            return {
              other: () => h('p', {}, 'other content')
            }
          })
        }
      }
    })

    app.use(Dialog)

    // 创建 this.$createHello API
    createAPI(app, Hello, ['click'], true)

    app.mount('#app')
  ```

  示例中就是创建了一个需要 API 调用的组件 `Hello`，然后在其他组件中去使用，重点就是 `showHello()` 方法做的事情：调用 `this.$createHello(options, slots)` 实现组件的实例化。

### 如何在普通 js 文件中或者全局调用

一般当你在 Vue 实例中，你可以直接通过 `this.$createHello(options, slots)` 调用该组件。而如果在普通 JS 中`this`不是 Vue 实例，这时就可以通过组件本身的 `$create` 来进行实例化了，比如：

```js
import { createApp } from 'vue'
import Hello from './Hello.vue'

import {
  createAPI
} from 'cube-ui'

const app = createApp()

// 创建 this.$createHello and $Hello.create API
createAPI(app, Hello, ['click'], true)

Hello.$create(options, slots)
```

或者内置的组件，例如 Dialog：

```js
import { createApp } from 'vue'
import { Dialog } from 'cube-ui'

const app = createApp()

app.use(Dialog)

Dialog.$create({
  ...
})
```
