## create-api 模块

该模块默认暴露出一个 `createAPI` 函数，可以实现以 API 的形式调用自定义组件。并且既可以在 Vue 实例上下文中调用，也可以[在普通 js 文件中调用](https://didi.github.io/cube-ui/#/zh-CN/docs/create-api#cube-%E5%A6%82%E4%BD%95%E5%9C%A8%E6%99%AE%E9%80%9Ajs%E6%96%87%E4%BB%B6%E4%B8%AD%E6%88%96%E8%80%85%E5%85%A8%E5%B1%80%E8%B0%83%E7%94%A8-anchor)。

__注：__ 所有通过 `createAPI` 实现的通过 API 的形式调用的自定义组件（cube-ui 内置的组件）都需要通过 `Vue.use` 注册才可以。

### createAPI(Vue, Component, [events, single])

- 参数：

  - `{Function} Vue` Vue 函数
  - `{Function | Object} Component` Vue 组件，组件必须有 name
  - `{Array} [events]` 组件实例 emit 的事件名集合
  - `{Boolean} [single]` 是否为单例

- 用法：

  - 该方法在 Vue 的 prototype 上增加一个名为 `$create{camelize(Component.name)}` 的方法，这样就可以在其他组件中直接通过 `const instance = this.$createAaBb(config, [renderFn, single])` 这样来实例化组件了，而且这个实例化组件的元素是被附加到 `body` 元素下的。

  - `const instance = this.$createAaBb(config, renderFn, single)`

    **参数：**

    | 参数 | 说明 | 类型 | 默认值 | 示例 |
    | - | - | - | - | - |
    | config | 配置参数，经处理后传给组件 | Object | {} | - |
    | renderFn | 可选参数，用于生成子 VNode 节点，一般场景是处理 slot | Function | - | function (createElement) {...} |
    | single | 可选参数，创建的时候决定是否是单例的，优先级更高，如果没有传入 renderFn 的话，single 的值就是第二个参数的值 | Boolean | createAPI() 中传入的 single | - |

    **配置参数 `config`：**

    默认所有的值都会当做 props，但是要排除 createAPI 传入的 `events` 中的事件（默认会做转换，例如：`events` 的值为 `['click']`，那么 `config` 中的 `onClick` 就是作为 `click` 事件的回调函数，而不是作为 props 传递给组件）。

    1.8.0 版本后 `config` 中可以直接设置 `$props` 和 `$events`，`$props` 中的值是**响应式**的，自动监控当前实例化上下文（即 `this.$createXx` 中的 `this`）的上对应的属性值：

    | 参数 | 说明 | 类型 | 默认值 | 示例 |
    | - | - | - | - | - |
    | $props | 传递给组件的 Props | Object | - | {<br> title: 'title',<br> content: 'my content',<br> open: false<br>} |
    | $events | 组件的 Events 事件回调 | Object | - | {<br> click: 'clickHandler',<br> select: this.selectHandler<br>} |

    `$props` 示例，约定结构 `{ [key]: [propKey] }`：

    ```js
    {
      title: 'title',
      content: 'my content',
      open: false
    }
    ```

    `title`、`content`、`open` 就是传递给组件的 Prop 的 key，而对应 Prop 的值则按照如下规则获取：

    1. 如果是非字符串，则直接取配置的 `propKey` 作为值
    1. 如果是字符串，且配置的 `propKey` 不在当前实例上下文属性上，则直接取 `propKey` 作为值
    1. 是字符串，且在当前实例上下文属性上，那么直接获取当前实例上下文对应的 `propKey` 的值，且会监控这个值的变化实时更新到组件实例上

    `$events` 示例，约定结构 `{ [eventName]: [eventValue] }`：

    ```js
    {
      click: 'clickHandler',
      select: this.selectHandler
    }
    ```

    `click`、`select` 就是事件名，而对应的事件回调则按照如下规则获取：

    1. 如果 `eventValue` 是非字符串，则直接取配置的 `eventValue` 作为值
    1. 如果 `eventValue` 是字符串，则直接获取当前实例上下文对应的 `eventValue` 的值

    1.10.0 版本以后 `config` 中可以设置 Vue 支持的所有的[配置值](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth)，但是必须要加 `$`，例如：

    ```js
    this.$createAaBb({
      $attrs: {
        id: 'id'
      },
      $class: {
        'my-class': true
      }
    })
    ```

    **返回值 `instance`：**

    `instance` 就是组件实例。
    > 这个实例会被**附加或代理 `remove` 方法**

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

  <script type="text/ecmascript-6">
    export default {
      name: 'hello',
      props: {
        content: {
          type: String,
          default: 'Hello'
        }
      },
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
    import Vue from 'vue'
    import Hello from './Hello.vue'

    // 引入 Style 加载基础样式
    import {
      /* eslint-disable no-unused-vars */
      Style,
      Dialog,
      createAPI
    } from 'cube-ui'

    Vue.use(Dialog)

    // 创建 this.$createHello API
    createAPI(Vue, Hello, ['click'], true)

    // 初始化 Vue
    new Vue({
      el: '#app',
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
          }, /* renderFn */ (createElement) => {
            return [
              createElement('p', {
                slot: 'other'
              }, 'other content')
            ]
          })
          // 通过 Vue 组件的 $on 也是可以监听的，看使用场景
          instance.$on('click', (e) => {
            const $dialog = this.$createDialog({
              type: 'confirm',
              content: '点击确定关闭当前实例',
              icon: 'cubeic-alert'
            })
            $dialog.show()

            $dialog.$on('confirm', () => {
              // 销毁实例
              instance.remove()
            }).$on('cancel', () => {
              console.log('cancel')
            })
          })
        }
      }
    })
  ```

  示例中就是创建了一个需要 API 调用的组件 `Hello`，然后在其他组件中去使用，重点就是 `showHello()` 方法做的事情：调用 `this.$createHello(config, renderFn)` 实现组件的实例化。

### 如何在普通 js 文件中或者全局调用

一般当你在 Vue 实例中，你可以直接通过 `this.$createHello(config, renderFn)` 调用该组件。而如果在普通 JS 中`this`不是 Vue 实例，这时就可以通过组件本身的 `$create` 来进行实例化了，比如：

```js
import Vue from 'vue'
import Hello from './Hello.vue'

import {
  createAPI
} from 'cube-ui'

// 创建 this.$createHello and $Hello.create API
createAPI(Vue, Hello, ['click'], true)

Hello.$create(config, renderFn)
```

或者内置的组件，例如 Dialog：

```js
import Vue from 'vue'
import { Dialog } from 'cube-ui'

Vue.use(Dialog)

Dialog.$create({
  ...
})
```

还有一种思路是通过数据驱动，比如用 vuex 维护一个全局 state，在需要调用该组件时更新状态，然后在 App.vue 里去 watch 这个状态变化来调用该组件。
