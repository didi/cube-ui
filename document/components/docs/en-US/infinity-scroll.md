## InfinityScroll

> New in 1.11.0+

Infinity scroll component, generally is applied to a large number of list data's rendering (recommended when the data length exceeds 500).

### Precautions

You need to know about three concepts about `cube-infinite-scroll`, `tombstone`, `fetch` and `render`.

- tombstone

  Regarded as a placeholder node or CSS skeleton node, the component has a built-in `tombstone` style, but you can create a customized `tombstone` style with `slot`.

- fetch

  The `fetch` function is passed to the `cube-infinity-scroll` component by props. The component will call the `fetch` function at the appropriate time. The first argument of the function is `count`, which is the amount of data needed. the function must return a Promise with data (__the data type must be an Array or a falsy value). Since the amount of data passed in by the user may not equal `count`, fortunately the component is smart enough to always call `fetch` function until the total amount of data you load is not less than `count`, and will store more of your rest data, then wait for the next render. If you want to end infinite scroll, you only need return a Promise with a falsy value.

- render

  You must implement your own `render` function and pass it to the `cube-infinity-scroll` component by props. The first argument to the function is the list item to be rendered, the second argument is the reusable list item DOM element on the page, so this parameter may not exist when there is no reusable item DOM element. Inside the `render` function, you can use the first argument to render the DOM node of the list item, __you must return the element node__. This component can get this element node and add it to the page.

### Example

Demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/infinity-scroll)

- Basic Usage

  The `cube-infinity-scroll` component has a built-in `tombstone` style, which call `fetch` function to notify the user to load data, and must provide a slot named `render`. This slot can be used inside the `render` function. Inside the `render` function you can clone the element node of the render slot, populate the node with the loaded item data and return the element node. Since the asynchronous mechanism of Vue updating DOM is contrary to the mechanism of InfinityScroll synchronously rendering DOM, the element node of the `render` slot is only used for rendering. If you need to do any event binding on the element node, you need to perform it inside the `render` function by yourself.

  ```html
    <template>
      <cube-infinity-scroll
        :fetch="fetch"
        :render="render">
        <!-- DOM to be cloned as render template -->
        <div slot="render" class="render-template" ref="render">
          <div class="bubble">
          </div>
        </div>
      </cube-infinity-scroll>
    </template>
  ```

  ```js
    export default {
      methods: {
        fetch (count) {
          // Load no less than 30 amount of data. If more data is loaded than the component needs, it will be automatically loaded and wait for the next render.
          count = Math.max(30, count)
          let items = []
          for (let i = 0; i < count; i++) {
            items[i] = { text: i }
          }
          // return a Promise, note that items must be an Array
          return Promise.resolve(items)
        },
        render (item, div) {
          div = div || this.$refs.render.cloneNode(true)
          div.querySelector('.bubble').textContent = item.text
          // return the element which is waiting for be added to the page
          return div
        }
      }
    }
  ```

  > If the component scrolls too fast, "White Screen" problem will occur because the browser will optimize when using the CSS3 transition. However, the component accepts `options` as props, which is an object. You can set its first-level property `useTransition` to `false`, and then use javascript to perform the animation, so the fluency of the animation depends on the performance of the phone.

- Customized Tombstone Slot

  In fact, the user often customize the different `tombstone` styles according to the list items to be rendered, so the `cube-infinity-scroll` component also supports the use of `slot`, as follows:

  ```html
    <template>
      <cube-infinity-scroll
        :fetch="fetch"
        :render="render">
        <!-- DOM to be cloned as render template -->
        <div slot="render" class="render-template" ref="render">
          <div class="bubble">
          </div>
        </div>
        <!-- DOM to be cloned as tombstone -->
        <div slot="tombstone" class="tombstone-template">
          <img width="48" height="48" src="unknown.jpg">
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </cube-infinity-scroll>
    </template>
  ```

- Stop Scroll

  Infinity scroll is not really infinite. If you reach certain conditions, you may need to stop it, and the component also constains this ability. The sample code is as follows:

  ```js
    export default {
      methods: {
        fetch (count) {
          // stop scroll
          return Promise.resolve(false)
        }
      }
    }
  ```

### Props

| Attribute | Description | Type | Needed | Default |
| - | - | - | - | - |
| render | render the element node of the list item through the first argument, and returns the element node | Function | yes | - |
| fetch | called when the component needs to render the list item | Function | yes | - |
| options | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  observeDOM: false,<br>  click: true<br>} |


