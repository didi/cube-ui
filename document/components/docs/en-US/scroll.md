## Scroll

`Scroll` component, which is encapsulated based on `better-scroll`, provides high-quality native scrolling experience and has convenient configuration along with events.

### Scrolling principle
The better-scroll's scrolling principle is, the length of the first child element exceeds the length of the container in the scroll direction.

So for the Scroll component, The length of `.cube-scroll-content`, the scroll-content, must be larger than `.cube-scroll-wrapper`, the container element. Depending on the direction of scrolling, there are two situations:

1）Scrolling vertically: **The height of the content element must be greater than the container element.** Since the height of the container element will be stretched by the height of the child element by default, in order to satisfy our scrolling premise, you need to give the Scroll component's `.cube-scroll-wrapper` element an fixed height.

2）Scrolling horizontally: **The width of the content element must be greater than the container element.** Since the child element's width does not exceed the container element by default, the Scroll component's `.cube-scroll-content` element needs to be set to a width greater than the `.cube-scroll-wrapper`.

### Example

Five sample code to quickly understand how to use the Scroll component.

- **Basic usage - Default**

  By setting the data property to an array, you can generate an elegantly scrolling list. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/default.vue).

  ```html
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options">
    </cube-scroll>
  </div>
  ```

  ```stylus
  .scroll-list-wrap
    height: 350px
  ```

  > **Note**: As the scrolling principle above, it is necessary to provide a fixed height to the scroll container, and scroll only when the height of the scroll content is greater than the height of the container.

  In the prop `options`, you are able to control the scroll bar seen or not via `scrollbar`, and configure the initial position by `startX/startY`.

  Scroll component provide a `scrollTo()` method that allows you to manually control the list scroll position.

  ```javascript
  scrollTo() {
    this.$refs.scroll.scrollTo(
      0,
      this.scrollToY,
      this.scrollToTime,
      ease[this.scrollToEasing]
    )
  },
  ```

  In fact, this is a very useful method, such as when we want to achieve "click different anchor, list scroll to the corresponding position to show different content", you can use the `scrollTo ()` method.

- **Scrolling horizontally - Horizontal**

  Scroll component support horizontal scrolling by specifying `direction = 'horizental'`. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal.vue)

  ```html
  <div class="horizontal-scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      direction="horizontal">
      <ul class="list-wrapper">
        <li v-for="item in items" class="list-item">{{ item }}</li>
      </ul>
    </cube-scroll>
  </div>
  ```

  ```stylus
  .cube-scroll-content
    display: inline-block
    .list-wrapper
      padding: 0 10px
      line-height: 60px
      white-space: nowrap
      .list-item
        display: inline-block
  ```

  > **Note**：As the scrolling principle above, the CSS style setting here is required, and scrolling is possible only when the scrolling content is wider than the container width.

- **Custom content - Customized**

  The Scroll component supports the customization of list content through default slot. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/config.vue).

  ```html
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      ... // custom content
    </cube-scroll>
  </div>
  ```

  Scroll components also support **pull-down refresh** and **pull-up load** capabilities. By default, there is no pulldown refresh/pullup load. You can enable corresponding functions by `pullDownRefresh` and `pullUpLoad`. After opening, when pulling down, the Scroll component will show the default pulldown animation and dispatch pulldown events. You can monitor the `pull-down` event to update the data. Similarly, after the pull-up load is enabled, the data can be updated by the `pull-up` event.

  `pullDownRefresh`'s related configurations include: drop threshold (threshold), rebound position (stop), update successful copy (txt) and copy display time (stopTime). See the [Props configuration](#/en-US/docs/scroll#cube-Propsconfiguration-anchor) for all the configuration items and meanings of the `pullDownRefresh` and `pullUpLoad` objects.

  ```javascript
  ... // ignore 
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    },
    ...
  },
  methods: {
    onPullingDown() {
      // simulate asynchronous request data
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // if data update
          this.items.unshift(_foods[1])
        } else {
          // if no data update
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp() {
      // simulate asynchronous request data
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // if data update
          let newPage = _foods.slice(0, 5)
          this.items = this.items.concat(newPage)
        } else {
          // if no data update
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    ...
  }
  ```

  > **Note**: If a pulldown refresh has no data update, you must manually call the Scroll component's `forceUpdate()` method to end the pulldown refresh so that Scroll will restart listening for the next pulldown refresh operation. When the data is updated, the Scroll component will invoke `forceUpate()` method internally.

- **Custom pull-down refresh animation - Fake JD App**

  If you don't like the built-in pull-down refresh and pull-up loading animations, you can also use the scope slots for custom animations. The variables exposed by [the scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) of the Scroll component are perfect to meet the needs of custom pull-down/pull-up animations in most scenarios. The following example imitates the pull-down refresh animation of Jingdong App's homepage. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/jd.vue).

  ```html
  <cube-scroll
    ref="scroll"
    :scroll-events="['scroll']"
    :options="scrollOptions"
    @scroll="onScrollHandle"
    @pulling-down="onPullingDown">
    <img src="http://om0jxp12h.bkt.clouddn.com/jd_content.JPG">
    <template slot="pulldown" slot-scope="props">
      <div v-if="props.pullDownRefresh"
        class="cube-pulldown-wrapper"
        :style="pullDownStyle">
        <div class="pulldown-content">
          <img src="http://om0jxp12h.bkt.clouddn.com/pulldow-img.jpg">
          <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
          <template v-else>
            <span v-if="props.isPullingDown">正在更新...</span>
            <span v-else>更新成功</span>
          </template>
        </div>
      </div>
    </template>
  </cube-scroll>
  ```
  ```javascript
  data() {
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      ...
    }
  },
  computed: {
    pullDownTip() {
      if (this.pullDownY <= 60) {
        return '下拉刷新...'
      } else if (this.pullDownY <= 90) {
        return '继续下拉有惊喜...'
      } else {
        return '松手得惊喜！'
      }
    },
    headerStyle() {
      return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
    }
  },
  methods: {
    onScrollHandle(pos) {
      this.pullDownY = pos.y
      if (pos.y > 0) {
        this.pullDownStyle = `top:${pos.y}px`
        this.triggerSurpriseFlag = false
        if (this.pullDownY > 90) {
          this.triggerSurpriseFlag = true
        }
      }
      this.$refs.topHeader.style.opacity = this.headerStyle
    },
    onPullingDown() {
      if (this.triggerSurpriseFlag) {
        this.triggerSurprise = true
        this.$refs.scroll.forceUpdate()
        return
      }
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    ...
  }
  ```
  Through the scope parameters provided by the scoped slots, such as: `beforePulldown` and `isPullingDown`, allows you control the animation process. Tht other scope parameters, see [slots](#/en-US/docs/scroll#cube-Slot-anchor). In a complete pulldown refresh, the status of `beforePullDown` and `isPullingDown` changes as follows:

  | step | beforePulldown | isPullingDown | note
  | - | - | - | - |
  | 1. Untrigger pull-down refresh | true | - | Show pattern guide user continues to  pull down |
  | 2. Trigger pull-down refresh | false | true | Asynchronous request data，show loading |
  | 3. Request data success | false | false | invoke `forceUpdate()`, show success copy |
  | 4. A pull-down refresh complete | true | - | after invoke `forceUpdate()`, delay stopTime to step 4 |

- **Advanced usage - Fake TouTiao App**

Scroll components can meet the scrolling needs of most mobile applications. In this example, using two Scroll components, one  vertical and one horizontal, to imitates the Toutiao App's home page. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/toutiao.vue).

```html
  <div class="nav-scroll-list-wrap">
    <cube-scroll ref="navScroll" direction="horizontal">
      <ul class="nav-wrapper">
        <li v-for="(item, index) in navTxts" :key="index" class="nav-item">{{ item }}</li>
      </ul>
    </cube-scroll>
    <div class="more-wrapper">
      <span class="more"></span>
    </div>
  </div>
  <div class="content-scroll-wrapper">
    <div class="content-scroll-list-wrap" ref="scrollWrapper">
      <cube-scroll
        ref="contentScroll"
        :data="content"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">
        <ul class="imgs-wrapper">
          <li v-for="(item, index) in content" :key="index" class="imgs-item">
            <img :src="item.url">
          </li>
        </ul>
        <template slot="pulldown" slot-scope="props">
          <div v-if="props.pullDownRefresh"
            class="cube-pulldown-wrapper"
            :style="props.pullDownStyle">
            <div v-if="props.beforePullDown"
              class="before-trigger"
              :style="{paddingTop: props.bubbleY + 'px'}">
              <span :class="{rotate: props.bubbleY > options.pullDownRefresh.threshold - 60}">↓</span>
            </div>
            <div class="after-trigger" v-else>
              <div v-show="props.isPullingDown" class="loading">
                <cube-loading></cube-loading>
              </div>
              <transition name="success">
                <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">今日头条推荐引擎有x条更新</span></div>
              </transition>
            </div>
          </div>
        </template>
      </cube-scroll>
    </div>
  </div>
  ```

  In contrast to faking JD App example, pulldown refreshing custom animations use `pullDownStyle` and `bubbleY` in pulldown scope slots to facilitate pulldown animations.

  The `pullDownStyle` is used to control the position of the pull-down content. The value is the string `top: n px` (n represents a number). The Scroll component controls the position of the pull-down content via the absolutely positioned `top` value. The initial state has a negative `top` value, and the value is just the height of the pull-down content, so the drop-down content is hidden above the scroll area. When the pull-down process is started, the Scroll component will gradually increase the `top` value and update the pull-down content position in real time. The maximum value of `top` is 0, that is, the `top` value no longer increases when the pull-down content is completely displayed. So, `pullY - height <= top <= 0`. (pullY is the drop-down distance, height is the drop-down content height)

  `bubbleY` is used to help implement custom animations. In the default animation, `bubbleY` is used to control the length of the bubble tail; in the Toutiao example, is used to control the padding-top value of the arrow, to indirectly control the arrow position. The minimum value of `bubbleY` is 0. In the pull-down process, when the pull-down distance is greater than the height of the pull-down content, `bubbleY` starts to increase. That is, `0 <= bubbleY <= pullY - height`.

  > **Note:** In this example, the `pullDownRefresh` configuration item does not have a `stop` value, but it is still able to bounce back to the correct location after the pulldown. The reason is that when the Scroll component is initialized, the pulldown height will be used as the `stop` default value when `beforePullDown === false && isPullingDown === true`.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | data used for list rendering | Array | - | [] |
| direction | scrolling direction | String | 'vertical', 'horizontal' | 'vertical' |
| options | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| scrollEvents<sup>1.9.0</sup> | configure which scroll events need be triggered | Array | could include: 'scroll', 'before-scroll-start', 'scroll-end' | [] |
| listenScroll | whether to dispatch scroll event. `Deprecated`, please use the property `scroll-events` instead. | Boolean | true/false | false |
| listenBeforeScroll | whether to dispatch  before-scroll-start event. `Deprecated`, please use the property `scroll-events` instead. | Boolean | true/false | false |
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
| stop | the position where rebounding stays | Number | - | Scroll component will calculate the height of pulldown element as default `stop` value |
| stopTime | the time that keep showing the text of refreshing success | Number | - | 600 |
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
| scroll | if `scroll-events` includes `scroll`, it will be triggered according to the value of probeType, if listenScroll is true | Object {x, y} - real-time scrolling coordinates |
| before-scroll-start | if `scroll-events` includes `before-scroll-start`, it will be triggered before scrolling start | - |
| scroll-end<sup>1.9.0</sup> | if `scroll-events` includes `scroll-end`, it will be triggered when scroll end. | Object {x, y} - real-time scrolling coordinates |
| pulling-down | triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true | - |
| pulling-up | triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true | - |


### methods

| Method Name | Description | Parameters |
| - | - | - |
| scrollTo | Scroll to specific position. | x: horizontal position<br> y: vertical position<br> time: transition time<br> ease: easing function |
| disable | Disable scroll. | - |
| enable | Enable scroll. It's enabled by default | - |
| forceUpdate | If a pulldown/pullup refresh has no data update, you should call `forceUpdate()` method to force update pullUp/pullDown state | - |
| resetPullUpTxt | Reset pull up txt when pull up state changed from no data to data updated | - |
| refresh | Refresh, computed height and called BetterScroll instance's refresh | - |
