## create-api module

This module exports a function called `createAPI` with which you can invoke the custom component which has been instantiated in api form.

### createAPI(Vue, Component, [events, single])

- Parameters:

  - `{Function} Vue` Vue function
  - `{Function | Object} Component` Vue component which must contains `name`
  - `{Array} [events]` the collection of the instantiated Vue Component's event name
  - `{Boolean} [single]` whether singleton

- Usage:

  - This method will add a method which is named `$create{camelize(Component.name)}` to Vue's prototype, so you can instantiate the Vue component by `const instance = this.$createAaBb(config, [renderFn])` in other components. The instantiated component's template content will be attached to `body` element.The parameters of the `$createAaBb`：
    - `{Object} config` It will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props).
    - `{Function} [renderFn]` Optional, used to generate the VNode child node in the slot scene in general.
  - The return of the method `instance` is a instantiated Vue component，and the `remove` method will be **attached** to this instance.You can invoke the `remove` method to destroy the component and detach the component's content from `body` element.

- Example:

  ```js
  import Vue form 'vue'
  import { createAPI } from 'cube-ui'
  // import Cube from 'cube-ui'
  // const { createAPI } = Cube
  // the Vue component which needs to be instantiated in the api form
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
  // register the MyComponent so it can been invoked in api form
  createAPI(Vue, MyComponent, ['click'], true)
  // invoke the Vue component in api from
  new Vue({
    el: '#app',
    template: '<button @click="showHello">Show Hello</button>',
    methods: {
      showHello() {
        /*
        The first parameter of `$createHello` will be passed to the component as its props except the events in `events`(It will transform by default, eg: If `events` has value `['click']`, then the prop `onClick` will be treated as component's event and not component's props)
        */
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
          console.log('on click', e)
        })
        // destroy the component and detach the component's content from `body` element
        instance.remove()
      }
    }
  })
  ```

  In this example, we create a component `MyComponent` with its name option `hello` which needs to be invoked in api form and we invoke it in another component.The focus is what `showHello()` does: invoking method `this.$createHello(config, renderFn)` to instantiate `MyComponent`.
