## InfinityScroll 组件

> New in 1.11.0+

Infinity scroll component, generally is applied to a large number of list data's rendering (recommended when the data length exceeds 500).

### 注意事项

You need to know about three concepts about `cube-infinity-scroll`，`tombstone` 、`fetch` and `render`。

- tombstone

  Regarded as a placeholder node or css skeleton node, the component has a built-in `tombstone` style, but you can create a customized `tombstone` style with `slot`.

- fetch

  `cube-infinity-scroll` component dispatches a `fetch` event at the appropriate time to notify the user to load new data. The first argument to the function is `count` , which is the amount of data needed. You only need to call the `setItems` method of the component instance after getting the data, and the data will be loaded. __Note that your data type must be Array__. However, the amount of data passed in by the the user may not equal `count`, fortunately the component is smart enough to always dispatch the `fetch` event until the total amount of data you loaded is not less than `count` and will store rest data and wait for the next render. If you want to stop the infinity scroll, you can call the instance's `setItems` method and pass in `false`.

- render

  You must implement your own `render` function and pass it to the `cube-infinity-scroll` component by props. The first argument to the function is the list item to be rendered, the second argument is the reusable list item dom element on the page, so this parameter may not exist when there is no reusable item dom element. Inside the `render` function, you can use the first argument to render the dom node of the list item, __you must return the element node__. This component can get this element node and add it to the page.

### Example

Demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/infinity-scroll)

- Basic Usage

  The `cube-infinity-scroll` component has a built-in `tombstone` style, which dispatches a `fetch` event to notify the user to load data, and loads the data by the component's `saveItems` method, and must provide a slot named `render`. This slot can be used inside the `render` function. Inside the `render` function you can clone the element node of the render slot, populate the node with the loaded item data and return the element node.

  ```html
  <template>
    <cube-infinity-scroll
      ref="infinityScroll"
      @fetch="fetchData"
      :options="options"
      :render="render">
      <!-- dom to be cloned as render template -->
      <div slot="render" class="render-template" ref="render">
        <div class="bubble">
        </div>
      </div>
    </cube-infinity-scroll>
  </template>
  ```

  ```js
    export default {
      data() {
        return {
          options: {
            useTransition: false // Solve the "white screen" problem when using css3 transition
          }
        }
      },
      methods: {
        fetchData (count) {
          // Load no less than 30 amount of data. If more data is loaded than the component needs, it will be automatically loaded and wait for the next render.
          count = Math.max(30, count)
          const infinityScroll = this.$refs.infinityScroll
          let items = []
          for (let i = 0; i < count; i++) {
            items[i] = { text: i }
          }
          // The component must be notified to load the data, note that items must be an Array
          infinityScroll.setItems(items)
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

  > In this example, the `options` configuration sets `useTransition` to `false` because if the component scrolls too fast, "White Screen" problem will occur and the browser will optimize when using css3 transition. This configuration forces the animation to be implemented by js, so the effect of the animation depends on the performance of the phone.

- Customized Tombstone Slot

  In fact, the user often customize the different `tombstone` styles according to the list items to be rendered, so the `cube-infinity-scroll` component also supports the use of `slot`, as follows:

  ```html
  <template>
    <cube-infinity-scroll
      ref="infinityScroll"
      @fetch="fetchData"
      :options="options"
      :render="render">
      <!-- dom to be cloned as render template -->
      <div slot="render" class="render-template" ref="render">
        <div class="bubble">
        </div>
      </div>
      <!-- dom to be cloned as tombstone -->
      <div slot="tombstone" class="tombstone-template">
        <img width="48" height="48" src="./unknown.jpg">
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </cube-infinity-scroll>
  </template>
  ```

- Stop scrolling

  Infinity scroll is not really infinite. If you reach certain conditions, you may need to stop it, and the component also constains this ability. The sample code is as follows:

  ```js
    export default {
      methods: {
        fetchData (count) {
          // stop scrolling
          infinityScroll.setItems(false)
        }
      }
    }
  ```

### Props

| Attribute | Description | Type | Needed | Default |
| - | - | - | - | - |
| render | render the element node of the list item through the first argument, and returns the element node | Function | yes | - |
| options | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  observeDOM: false,<br>  click: true<br>} |

### Events

| Event Name | Description | Parameters | Type |
| - | - | - | - |
| fetch | Dispatched when the component needs to render the list item | count: the amount of data needed | Number |

### Instance methods

| Method Name | Description | Parameters | Type |
| - | - | - | - |
| saveItems | load items data | items: items data | Array / false |

