## Scroll

`Scroll` component, which is encapsulated based on `better-scroll`, provides high-quality native scrolling experience and has convenient configuration along with events.

### Scrolling principle
The better-scroll's scrolling principle is, the length of the first child element exceeds the length of the container in the scroll direction.

So for the Scroll component, The length of `.cube-scroll-content`, the scroll-content, must be larger than `.cube-scroll-wrapper`, the container element. Depending on the direction of scrolling, there are two situations:

1）Scrolling vertically: **The height of the content element must be greater than the container element.** Since the height of the container element will be stretched by the height of the child element by default, in order to satisfy our scrolling premise, you need to give the Scroll component's `.cube-scroll-wrapper` element an fixed height.

2）Scrolling horizontally: **The width of the content element must be greater than the container element.** Since the child element's width does not exceed the container element by default, the Scroll component's `.cube-scroll-content` element needs to be set to a width greater than the `.cube-scroll-wrapper`.

> Note: If there is any situation where scrolling is not possible, you should first check if the height/width of the content element `.cube-scroll-content` is greater than the height/width of the container element `.cube-scroll-wrapper`. This is a prerequisite for content to scroll. **If there is  images in the content, the scrolling should be not normal. The reason is images may not be downloaded when the DOM element is rendered, so the height of the content element is less than expected. At this point you should manually call the Scroll component's `refresh()` method after the image has been loaded, such as calling in the onload event callback, which will recalculate the scroll distance.** Scroll related FAQs can seek [Cube-UI/Question-Answer].


### Example

Seven sample code to quickly understand how to use the Scroll component.

- **1. Basic usage - Default**

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

  In the prop `options`, you are able to control the scrollbar seen or not via `scrollbar`, and configure the initial position by `startX/startY`.

  Scroll component provides a `scrollTo()` method that allows you to manually control the list scroll position.

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

- **2. Scrolling horizontally - Horizontal**

  Scroll component supports horizontal scrolling. All you need to do is specifying `direction = 'horizontal'` and giving some styles. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal.vue)

  ```html
  <cube-scroll
    ref="scroll"
    :data="items"
    direction="horizontal"
    class="horizontal-scroll-list-wrap">
    <ul class="list-wrapper">
      <li v-for="item in items" class="list-item">{{ item }}</li>
    </ul>
  </cube-scroll>
  ```

  ```stylus
  .horizontal-scroll-list-wrap
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px
    .cube-scroll-content
      display: inline-block
    .list-wrapper
      padding: 0 10px
      line-height: 60px
      white-space: nowrap
    .list-item
      display: inline-block
  ```

  > **Note**：1. As the scrolling principle above, the CSS style setting here is required, and scrolling is possible only when the scrolling content is wider than the container width. 2. Sometimes we want to use the `Scroll` component to simulate the horizontal scroll, vertically retaining the browser's native scrolling, or vice versa. At this point you need to pass the better-scroll configuration item [eventPassthrough](http://ustbhuangyi.github.io/better-scroll/doc/en/options.html#eventpassthrough)

  Here giving a brief explanation of the style settings. `list-item` items with `display: inline-block` lead to all `list-item` elements showing on one line. `list-wrapper` adds `white-space: nowrap` hope `list-item` also showing on one line when reaching the outer element boundary. And the most important is setting `cube-scroll-content` with `display: inline-block`， which make the width of `cube-scroll-content` bigger enough so that `cube-scroll-content` can wrap descendants elements. Styles with the same properties are floating elements and absolutely positioned elements. When no specific width is set, the width is the minimum width of the wrapped descendant element.

- **3. Custom content - Customized**

  The Scroll component supports the customization of list content through default slot. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/config.vue).

  ```html
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      ... // custom content
    </cube-scroll>
  </div>
  ```

  Scroll components also support **pull-down refresh** and **pull-up load** capabilities. By default, there is no pulldown refresh/pull-up load. You can enable corresponding functions by `pullDownRefresh` and `pullUpLoad`. After opening, when pulling down, the Scroll component will show the default pulldown animation and dispatch pulldown events. You can monitor the `pull-down` event to update the data. Similarly, after the pull-up load is enabled, the data can be updated by the `pull-up` event.

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

  > **Note**: If a pulldown-refresh/pullup-loading has no data update, you must manually call the Scroll component's `forceUpdate()` method to end the pulldown-refresh/pullup-loading so that Scroll will restart listening for the next pulldown-refresh/pullup-loading operation. In the above example, when the data is updated, we did not invoke the `forceUpdate()` method. The reason is: ** If you pass the `data` attribute to the `Scroll` component, then when the `Scroll` component listens to the `data` update, the `forceUpate(true)` method will be called automatically. ** so it is recommended to pass the `data` attribute.

- **4. Custom pull-down refresh animation - Fake JD App**

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
  | 3. Request data success | false | false | invoke `forceUpdate(true)`, show success copy. And delay 'stopTime' into step 4 |
  | 4. A pull-down refresh complete | true | - | - |

- **5. Advanced usage - Fake TouTiao App**

Scroll components can meet the scrolling needs of most mobile applications. In this example, using two Scroll components, one vertical and one horizontal, to imitates the Toutiao App's home page. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/toutiao.vue).

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

  **6. Vertical nested scrolls - Vertical Scrolls**<sup>1.12.0</sup>

  The `Scroll` component also supports nested scenes (currently only supports two levels of nesting). when there is scroll nest, you need to config the inner `scroll` component's `nestMode` prop，the options can be 'native' or 'free'. when set to 'native', nested `Scroll` has the same scrolling behavior as the browser's native nested scene. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/vertical-scrolls.vue).

  ```html
  <cube-scroll
    ref="scroll1"
    class="scroll-list-outer-wrap">
    ...
    <cube-scroll
      ref="scroll2"
      class="scroll-list-outer-wrap"
      nest-mode="native">
      <ul class="cube-scroll-list">
        <li class="cube-scroll-item border-bottom-1px"
          v-for="(item, index) in items2"
          :key="index">{{item}}</li>
      </ul>
    </cube-scroll>
    ...
  </cube-scroll>
  ```

  **7. Horizontal nested scrolls - Horizontal Scrolls**<sup>1.12.0</sup>

  You can also implement horizontal nested scrolling. In this example, we also set `nestMode` to `free`. Different from `native` mode, in `free` mode, as long as the boundary is triggered during the inner scrolling process, the outer scroll will be started. In the `native` mode, it is only when the scrolling starts to determine whether it reaches the boundary, which is consistent with the browser's native nested scrolling. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal-scrolls.vue).

  ```html
  <cube-scroll
    ref="scroll"
    :data="items1"
    direction="horizontal"
    class="outer-horizontal-scroll">
    <ul class="list-wrapper">
      <li v-for="item in items1" class="list-item">{{ item }}</li>
      <li class="list-item inner-horizontal-scroll">
        <cube-scroll
          ref="scroll"
          :data="items2"
          direction="horizontal"
          nest-mode="free">
          <ul class="list-wrapper">
            <li v-for="item in items2" class="list-item">{{ item }}</li>
          </ul>
        </cube-scroll>
      </li>
      <li v-for="item in items1" class="list-item">{{ item }}</li>
    </ul>
  </cube-scroll>
  ```

  <!-- **8. Textarea within scroll - Textarea**

    Sometimes we need to include the teatarea input box in the `Scroll` component. However, since we disabled the default behavior of the browser 'touch' event when using `Scroll`, we were unable to use the browser's native scrolling in the textarea input box.

    Now through this example, we hope to introduce two ways to solve this problem. The core is to take advantage of `Scroll` to support nesting. We wrap the internal input box with `Scroll` and simulate the scrolling behavior with `Scroll`. But there is a requirement that the input box content area must be highly adaptive, ie the height increases or decreases with the content.

    1）using div to simulate textarea to achieve content area's height adaptation.

    2）using js and textarea to achieve content area's height adaptation.

    Finally, we need some extra work to ensure that the cursor is always in line of sight and consistent with the behavior of the native input box during the input process. The complete sample code is [here](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/textarea.vue)

    ```html
    <cube-scroll
      ref="scrollOuter"
      :options="optionsOuter"
      class="scroll-outer">
      ...
      <div class="editable-div-wrapper" :class="{'editable-div_active': isFocusDiv}">
        <cube-scroll
          ref="divWrapScroll"
          :options="options">
          <div ref="editablediv" contenteditable="true" class="editable-div"
            @focus="onFocusDiv"
            @blur="onBlurDiv"
            @input="onInputDiv">
          </div>
        </cube-scroll>
        <span class="editable-div-indicator">{{divValueCount}}</span>
      </div>
      <div class="cube-textarea-wrapper" :class="{'cube-textarea_active': isFocusNative}">
        <cube-scroll
          ref="nativeWrapScroll"
          :options="options">
          <textarea
            ref="textarea"
            v-model="textareaValue"
            @input="onInputNative"
            @focus="onFocusNative"
            @blur="onBlurNative"
            :placeholder="placeholder"
            class="cube-textarea">
          </textarea>
        </cube-scroll>
        <span class="cube-textarea-indicator">{{textareaValueCount}}</span>
      </div>
      ...
    </cube-scroll>
    ``` -->

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | data used for list rendering | Array | - | [] |
| direction | scrolling direction | String | 'vertical', 'horizontal' | 'vertical' |
| options | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/en/options.html) | Object | - | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| scrollEvents<sup>1.9.0</sup> | configure which scroll events need be triggered | Array | could include: 'scroll', 'before-scroll-start', 'scroll-end' | [] |
| listenScroll | whether to dispatch scroll event. `Deprecated`, please use the property `scroll-events` instead. | Boolean | true/false | false |
| listenBeforeScroll | whether to dispatch  before-scroll-start event. `Deprecated`, please use the property `scroll-events` instead. | Boolean | true/false | false |
| refreshDelay | the delay of scroll refresh after `data` updating | Number | - | 20 |
| nestMode<sup>1.12.0</sup> | Nested scroll mode, the default is `none` mode that do no thing when there is scroll nest. In `native` mode, only to determine whether to reach the boundary and start the outer scroll when starting scrolling, consistent with the browser's native nested scrolling. In the `free` mode, as long as the boundary is triggered during the inner scrolling process, the outer scrolling is turned on. In extreme cases, you can specify the `none` mode for the inner Scroll to disable nested processing logic.  | String | 'none', 'native', 'free' | 'none' |

In `options`, there are three frequently-used options, `scrollbar`、`pullDownRefresh`、`pullUpLoad`, which could set as `Boolean`(`false` to disable the feature, `true` to enable the feature and use default sub configuration), or `Object` to enable the feature and customize the sub configuration.

- `scrollbar` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| fade | whether to have fade-in-fade-out style | Boolean | true/false | false |

- `pullDownRefresh` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| threshold | the threshold of distance that pulling down for refreshing | Number | - | 90 |
| stop | the position where rebounding stays | Number | - | Scroll component will calculate the height of pulldown element as default `stop` value |
| stopTime | the time that keeps showing the text of refreshing success | Number | - | 600 |
| txt | the text is shown when refreshing successfully | String | - | 'Refresh success' |

- `pullUpLoad` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| threshold | the threshold of  distance that pulling up for  loading | Number | - | 0 |
| txt | the text shown when pulling up loading | Object | - | { more: '', noMore: '' } |
| visible<sup>1.12.21</sup> | txt visible or not when content is not more enough | Boolean | true/false | false |

> When pullUpLoad is enabled and the content height is smaller than the container, by default, the copy `pullUpLoad.txt` needs to be pulled up to be seen. If you want to see the prompt copy without pulling up, you can set `pullUpLoad.visible` to `true`。

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
| scrollTo(x, y, time, ease) | Scroll to specific position. | x: number, horizontal position<br> y: number, vertical position<br> time: number, transition time(ms)<br> ease: easingFn, easing function |
| forceUpdate(dirty, nomore<sup>1.12.21</sup>) | Mark pull-up or pull-down end, force recalculation of scrollable distance | dirty: boolean, default to false, if true express has data update。<br>nomore<sup>1.12.21</sup>: boolean, default to false, if true represent has no more data. When params nomore is true, when pullup shows the value of `pullUpLoad.txt.nomore`, but when dirty is false, nomore is invalid.|
| disable() | Disable scroll. | - |
| enable() | Enable scroll. It's enabled by default | - |
| resetPullUpTxt() | Reset pull up txt when pull up state changed from no data to data updated | - |
| refresh() | Refresh, computed height and called BetterScroll instance's refresh | - |
