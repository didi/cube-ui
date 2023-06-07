## create-api module

This module exports a function called `createAPI` with which you can invoke the custom component which has been instantiated in api form. And It could be called both in Vue instance context and [general js file](https://didi.github.io/cube-ui/#/en-US/docs/create-api#cube-HowtouseingeneralJSfilesoruseitinglobal-anchor).


__Notice:__ All cube-ui componnets which used `createAPI` must be registered by `Vue.use`.

### createAPI(app, Component, [events, single])

- Parameters:

  - `{Object} app` app instance
  - `{Function | Object} Component` Vue component which must contains `name`
  - ~~`{Array} [events]` the collection of the instantiated Vue Component's event name~~ Deprecated parameters are kept only for position purposes.
  - `{Boolean} [single]` whether singleton

- Usage:

  - This method will add a method which is named `$create{camelize(Component.name)}` to Vue's prototype, so you can instantiate the Vue component by `const instance = this.$createAaBb(options, [slots, context])` in other components. The instantiated component's template content will be attached to `body` element.

  - `const instance = this.$createAaBb(options, slots, context)`

    **Parameters：**

    | Attribute | Description | Type | Accepted Values | Default |
    | - | - | - | - | - |
    | options | component props & emits | Object | {} | - |
    | slots | Optional, used to generate the VNode child node in the slot scene in general | Function | - | function (createElement) {...} |
    | context | Optional, vue appContext | Parent component context | - | - |

    **Config options `options`:**

    By default, all values are treated as props, and event handling is done using the `onEvent` syntax if the custom component declares the `emits` option.

     ```js
    {
      title: 'title',
      content: 'my content',
      open: false,
      onClick: () => { /** do something */ }
    }
    ```

    **The Returned value `instance`:**

    `instance` is a instantiated Vue component, `component.proxy`.
    > And the `$remove` method will be **attached** to this instance.

    You can invoke the `$remove` method to destroy the component and detach the component's content from `body` element.

    If the caller is destroyed and the `instance` will be destroyed too.

- Example:

  First we create Hello.vue component：

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

  Then we make Hello.vue to an API style component by calling the `createAPI` method.

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

  In this example, we create a component `Hello` which needs to be invoked in api form and we invoke it in another component.The focus is what `showHello()` does: invoking method `this.$createHello(options, slots)` to instantiate `Hello`.

### How to use in general JS files or use it in global

In vue component, you could call by `this.$createHello(options, slots)` because the `this` is just a Vue instance. But in general JS files, you need to use `Hello.$create`. As shown below:

```js
import { createApp } from 'vue'
import Hello from './Hello.vue'

import {
  createAPI
} from 'cube-ui'

const app = createApp()

// create this.$createHello and $Hello.create API
createAPI(app, Hello, ['click'], true)

Hello.$create(options, slots)
```

Or components in cube-ui, like Dialog:

```js
import { createApp } from 'vue'
import { Dialog } from 'cube-ui'

const app = createApp()

app.use(Dialog)

Dialog.$create({
  ...
})
```
