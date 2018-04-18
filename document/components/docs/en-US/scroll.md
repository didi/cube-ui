## Scroll

`Scroll` component, which is encapsulated based on `better-scroll`, provides high-quality native scrolling experience and has convenient configuration along tith events.

### Example

- Basic usage

  By setting `data` to an array, you can generate the list which can scrolls elegantly in the container.

  ```html
  <div class="scroll-wrapper">
    <cube-scroll :data="items"></cube-scroll>
  </div>
  ```

- Config the options of better-scroll

  By setting `options`, you can config the options of better-scroll, includes scrollbar, pull-down-to-refresh, pull-up-to-load etc. Detailed options are shown in [the Document of better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/en/options.html). We just introduce several common options here.

  1  Scroll bar

  Default is without scroll bar. You can set it to fade-in-fade-out or always-show style.

  ```html
  <cube-scroll :data="items" :options="options"></cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        options: {
          scrollbar: {
            fade: false
          }
        }
      }
    }
  }
  ```

  2  Pull down to refresh

  There is no pull-down-to-refresh function by default. Configuring `pullDownRefresh` option can turn on the dispatching of the event `pulling-down` and the animation of pulling down. You can listen to `pulling-down` event to update data.

  ```html
  <cube-scroll
    ref="scroll"
    :data="items"
    :options="options"
    @pulling-down="onPullingDown">
  </cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        options: {
          pullDownRefresh: {
            threshold: 90,
            stop: 40,
            txt: 'Refresh success'
          }
        }
      }
    },
    methods: {
      onPullingDown() {
        // Mock async load.
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // If have new data, just update the data property.
            this.items.unshift('I am new data: ' + +new Date())
          } else {
            // If no new data, you need use the method forceUpdate to tell us the load is done.
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      }
    }
  }
  ```

- Pulling up to load

  There is no pull-up-to-load function by default. Configuring `pullUpLoad` option can turn on the dispatching of the event `pulling-up` and the animation of pulling up. You can listen to `pulling-up` event to update data.

  ```html
  <cube-scroll
    ref="scroll"
    :data="items"
    :options="options"
    @pulling-up="onPullingUp"></cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        itemIndex: 5,
        options: {
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: 'Load more',
              noMore: 'No more data'
            }
          }
        }
      }
    },
    methods: {
      onPullingUp() {
        // Mock async load.
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // If have new data, just update the data property.
            let newPage = [
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex
            ]

            this.items = this.items.concat(newPage)
          } else {
            // If no new data, you need use the method forceUpdate to tell us the load is done.
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      }
    }
  }
  ```

- Customize the animation of pulling down refreshing and pulling up loading

  If you don't like the built-in slots of pulling down refreshing and pulling up loading, you can use [scoped slots](https://vuejs.org/v2/guide/components.html#Scoped-Slots) to customize animation. The example below uses scoped slots to customize animation of pulling down refreshing, while pulling up loading keeps default built-in animation.

  ```html
  <cube-scroll
    ref="scroll"
    :data="items"
    :options="options"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp">
    <template slot="pulldown" slot-scope="props">
      <div
        v-if="props.pullDownRefresh"
        class="cube-pulldown-wrapper"
        :style="props.pullDownStyle">
        <div
          v-if="props.beforePullDown"
          class="before-trigger"
          :style="{paddingTop: props.bubbleY + 'px'}">
          <span :class="{rotate: props.bubbleY > 40}">↓</span>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="props.isPullingDown" class="loading">
            <cube-loading></cube-loading>
          </div>
          <div v-else><span>Refresh success</span></div>
        </div>
      </div>
    </template>
  </cube-scroll>
  ```

  With the parameters that scoped slots provide, you can control the process of animation according to the change of the state. Detailed scope parameters and their meaning are shown below in 'Slots'.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | data used for list rendering | Array | - | [] |
| options | the options of better-scroll | Object | - | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| direction | scrolling direction | String | 'vertical', 'horizontal' | 'vertical' |
| listenScroll | whether to dispatch scroll event | Boolean | true/false | false |
| listenBeforeScroll | whether to dispatch  before-scroll-start event | Boolean | true/false | false |
| refreshDelay | the delay of scroll refresh after `data` updating | Number | - | 20 |

In `options`, there are three frequently-used options, `scrollbar`、`pullDownRefresh`、`pullUpLoad`, which could set as `Boolean`(`false` to disable the feature, `true` to enable the feature and use default sub configuration), or `Object` to enable the feature and customize the sub configuration.

- `scrollbar` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| fade | whether to have fade-in-fade-out style | Boolean | true/false | false |

- `pullDownRefresh` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| threshold | the threshold of  distance that pulling down for  refreshing | Number | - | 90 |
| stop | the position where rebounding stays | Number | - | 40 |
| txt | the text shown when refreshing successfully | String | - | 'Refresh success' |

- `pullUpLoad` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| threshold | the threshold of  distance that pulling up for  loading | Number | - | 0 |
| txt | the text shown when pulling up loading | Object | - | { more: '', noMore: '' } |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | the list, rendering based on the value of property `data` | - |
| pulldown | located above the list and shown when pulling down refreshing | pullDownRefresh: whether to turn on pulling-down-refreshing function<br>pullDownStyle: the style of showing and fading<br>beforePullDown: whether in pulling down operation<br>isPullingDown: whether in the process of pulling in data<br>bubbleY: the distance of pulling down currently - 50 |
| pullup | located below the list and shown when pulling up loading | pullUpLoad: whether to turn on pulling-up-loading function<br>isPullUpLoad: whether the data is being loaded |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| click | triggers when clicking the list item | item - the data of the list item |
| scroll | triggers according to the value of probeType, if listenScroll is true | Object {x, y} - real-time scrolling coordinates |
| before-scroll-start | triggers before scrolling start, if  listenBeforeScroll | - |
| pulling-down | triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true | - |
| pulling-up | triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true | - |
