## create-api module

This module exports a function called `createAPI` with which you can invoke the custom component which has been instantiated in api form.

### createAPI(Vue, Component, [events, single])

- Parameters:

  - `{Function} Vue` Vue function
  - `{Function | Object} Component` Vue component which must contains `name`
  - `{Array} [events]` the collection of the instantiated Vue Component's event name
  - `{Boolean} [single]` whether singleton

- Usage:

  - This method will add a method which is named `$create{camelize(Component.name)}` to Vue's prototype, so you can instantiate the Vue component by `const instance = this.$createAaBb(config, [renderFn, single])` in other components. The instantiated component's template content will be attached to `body` element.The parameters of the `$createAaBb`：
    - `{Object} config` It will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props).
    - `{Function} [renderFn]` Optional, used to generate the VNode child node in the slot scene in general.
    - `{Boolean} [single]` Optional, whether the instantiated component is a singleton or not. If two parameters are provided and the `renderFn`'s type is not function, then the `single` value is the sencond parameter's value.
  - The return of the method `instance` is a instantiated Vue component，and the `remove` method will be **attached** to this instance.You can invoke the `remove` method to destroy the component and detach the component's content from `body` element.

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

### How to use in general JS files

In vue component, you could call by `this.$createHello(config, renderFn)` because the `this` is just a vue instance. But in general JS files, you need to call `$createHello` method by `Vue.prototype` or create a vue instance. As shown below:

```js
import Vue from 'vue'

Vue.prototype.$createHello(config, renderFn)

// or
const vm = new Vue()
vm.$createHello(config, renderFn)
```

There is another idea which used the mode of data-driven. For example, in vuex, you could use a global state to label whether to call the component, and watch this state in App.vue to handle this component.
