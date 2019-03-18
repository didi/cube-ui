## create-api module

This module exports a function called `createAPI` with which you can invoke the custom component which has been instantiated in api form. And It could be called both in Vue instance context and [general js file](https://didi.github.io/cube-ui/#/en-US/docs/create-api#cube-HowtouseingeneralJSfilesoruseitinglobal-anchor).


__Notice:__ All cube-ui componnets which used `createAPI` must be registered by `Vue.use`.

### createAPI(Vue, Component, [events, single])

- Parameters:

  - `{Function} Vue` Vue function
  - `{Function | Object} Component` Vue component which must contains `name`
  - `{Array} [events]` the collection of the instantiated Vue Component's event name
  - `{Boolean} [single]` whether singleton

- Usage:

  - This method will add a method which is named `$create{camelize(Component.name)}` to Vue's prototype, so you can instantiate the Vue component by `const instance = this.$createAaBb(config, [renderFn, single])` in other components. The instantiated component's template content will be attached to `body` element.

  - `const instance = this.$createAaBb(config, renderFn, single)`

    **Parameters：**

    | Attribute | Description | Type | Accepted Values | Default |
    | - | - | - | - | - |
    | config | Config options | Object | {} | - |
    | renderFn | Optional, used to generate the VNode child node in the slot scene in general | Function | - | function (createElement) {...} |
    | single | Optional, whether the instantiated component is a singleton or not. If two parameters are provided and the `renderFn`'s type is not function, then the `single` value is the sencond parameter's value. | Boolean | single in createAPI() | - |

    **Config options `config`:**

    It will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props).

    After 1.8.0+, you can set `$props` and `$events` in `config`, `$props` supported reactive properties, these props will be watched.

    | Attribute | Description | Type | Accepted Values | Default |
    | - | - | - | - | - |
    | $props | Component props | Object | - | {<br> title: 'title',<br> content: 'my content',<br> open: false<br>} |
    | $events | Component event handlers | Object | - | {<br> click: 'clickHandler',<br> select: this.selectHandler<br>} |

    `$props` example, `{ [key]: [propKey] }`:

    ```js
    {
      title: 'title',
      content: 'my content',
      open: false
    }
    ```

    `title`, `content` and `open` are keys of the component prop, and the prop' value will be taken by the following steps:

    1. If `propKey` is not a string value, then use `propKey` as the prop value.
    1. If `propKey` is a string value and the caller instance dont have the `propKey` property, then use `propKey` as the prop value.
    1. If `propKey` is a string value and the caller instance have the `propKey` property, then use the caller's `propKey` property value as the prop value. And the prop value will be reactively.

    `$events` example, `{ [eventName]: [eventValue] }`:

    ```js
    {
      click: 'clickHandler',
      select: this.selectHandler
    }
    ```

    `click` and `select` are event names, and the event handlers will be taken by the following steps:

    1. If `eventValue` is not a string value, then use `eventValue` as the event handler.
    1. If `eventValue` is a string value, then use the caller's `eventValue` property value as the event handler.

    After 1.10.0+, you can set [all avaliable properties in Vue](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth), but you need to add prefix `$`, eg:

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

    **The Returned value `instance`:**

    `instance` is a instantiated Vue component.
    > And the `remove` method will be **attached** to this instance.

    You can invoke the `remove` method to destroy the component and detach the component's content from `body` element.

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

  Then we make Hello.vue to an API style component by calling the `createAPI` method.

  ```js
    import Vue from 'vue'
    import Hello from './Hello.vue'

    // import Style to load the base style
    import {
      /* eslint-disable no-unused-vars */
      Style,
      Dialog,
      createAPI
    } from 'cube-ui'

    Vue.use(Dialog)

    // create this.$createHello API
    createAPI(Vue, Hello, ['click'], true)

    // init Vue
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
          /* The first parameter of `$createHello` will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props) */
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
          // Also, the event hanlder can be registered by instance's `$on` method
          instance.$on('click', (e) => {
            const $dialog = this.$createDialog({
              type: 'confirm',
              content: 'click confirm to remove current instance',
              icon: 'cubeic-alert'
            })
            $dialog.show()

            $dialog.$on('confirm', () => {
              // remove instance
              instance.remove()
            }).$on('cancel', () => {
              console.log('cancel')
            })
          })
        }
      }
    })
  ```
  In this example, we create a component `Hello` which needs to be invoked in api form and we invoke it in another component.The focus is what `showHello()` does: invoking method `this.$createHello(config, renderFn)` to instantiate `Hello`.

### How to use in general JS files or use it in global

In vue component, you could call by `this.$createHello(config, renderFn)` because the `this` is just a Vue instance. But in general JS files, you need to use `Hello.$create`. As shown below:

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

Or components in cube-ui, like Dialog:

```js
import Vue from 'vue'
import { Dialog } from 'cube-ui'

Vue.use(Dialog)

Dialog.$create({
  ...
})
```

There is another idea which used the mode of data-driven. For example, in vuex, you could use a global state to label whether to call the component, and watch this state in App.vue to handle this component.
