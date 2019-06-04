## Scroll

滚动列表，提供了优质的原生滚动体验，便捷的配置项和事件，是一个基于`better-scroll`进行封装的组件。

### 滚动原理

  由于 better-scroll 的滚动原理为：在滚动方向上，第一个子元素的长度超过了容器的长度。

  那么对于 Scroll 组件，其实就是内容元素`.cube-scroll-content`在滚动方向上的长度必须大于容器元素 `.cube-scroll-wrapper`。根据滚动方向的不同，有以下两种情况：

  1）纵向滚动：**内容元素的高度必须大于容器元素**。由于容器元素的高度默认会被子元素的高度撑开，所以为了满足我们的滚动前提，你需要给 Scroll 组件的 `.cube-scroll-wrapper`元素一个非弹性高度。

  2）横向滚动：**内容元素的宽度必须大于容器元素**。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 `.cube-scroll-content` 元素设置大于 `.cube-scroll-wrapper` 的宽度。

  > 注意：任何时候如果出现无法滚动的情况，都应该首先查看内容元素`.cube-scroll-content`的元素高度/宽度是否大于容器元素`.cube-scroll-wrapper`的高度/宽度。这是内容能够滚动的前提条件。**如果内容存在图片的情况，可能会出现 DOM 元素渲染时图片还未下载，因此内容元素的高度小于预期，出现滚动不正常的情况。此时你应该在图片加载完成后，比如 onload 事件回调中，手动调用 Scroll 组件的 `refresh()` 方法，它会重新计算滚动距离。** Scroll 相关常见问题可以查看 [Cube-UI/Question-Answer](https://github.com/cube-ui/question-answer/issues?utf8=✓&q=is%3Aissue+is%3Aopen+scroll).

### 示例

7 个示例代码快速了解如何使用 Scroll 组件。

- **1. 基本使用 - Default**

  通过设置 `data` 属性为一个数组，即可生成能够在容器内优雅滚动的列表。完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/default.vue)。

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

  > **注意**：由上面的滚动原理可知，这里给滚动容器提供一个固定高度是必须的，同时只有在滚动内容的高度大于容器高度时才可滚动。

  在`options`中可以设置滚动条是否可见以及初始滚动位置`startY/startX`。

  Scroll 组件提供了一个`scrollTo()`方法，可以手动控制列表滚动位置。

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

  实际上这是一个非常有用的方法，如当我们想要实现“点击不同锚点，列表滚动到相应位置展现不同内容”时，可以使用`scrollTo()`方法。

- **2. 横向滚动 - Horizontal**

  Scroll 组件支持横向滚动，只需指定`direction="horizontal"`，同时需要添加相应样式如下。完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal.vue)。

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

  > **注意**：1. 由上面的滚动原理可知，这里的 CSS 样式设置是必须的，只有在滚动内容的宽度大于容器宽度时才可滚动。2. 有时候我们希望横向滚动使用`Scroll`组件来模拟，纵向保留浏览器原生滚动，或者相反的情况。这时你需要传递 better-scroll 配置项 [eventPassthrough](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#eventpassthrough)。

  这里对样式的设定做简要的解释，为`list-item`元素添加`display: inline-block`是希望元素能够不换行，单行显示。`list-wrapper`添加`white-space: nowrap`是希望遇到父元素边界，依然不换行。另外，关键是`cube-scroll-content`元素添加`display: inline-block`样式，此时`cube-scroll-content`元素的宽度为能够包裹子孙元素的最小宽度，即为连续内联`list-item`元素的宽度之和子元素的最大宽度。具有同样性质的样式还有，浮动元素和绝对定位元素，在不设置具体宽度时，其宽度为包裹子孙元素的最小宽度。

- **3. 自定义内容和上拉刷新下拉加载 - Customized**

  `Scroll`组件支持通过插槽自定义列表内容和样式。完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/config.vue)。

  ```html
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      ... // 自定义内容
    </cube-scroll>
  </div>
  ```

  Scroll 组件还支持下拉刷新和上拉加载的能力。默认无下拉刷新/上拉加载，可通过`options`传递配置项`pullDownRefresh`和`pullUpLoad`开启相应功能。开启后，下拉时，Scroll 组件会展示默认下拉动画以及派发`pulling-down`事件，你可以监听`pulling-down`事件更新数据。同理，开启上拉加载后，可通过`pulling-up`事件更新数据。

  `pullDownRefresh`的相关配置有：下拉阈值（threshold）, 回弹位置（stop）, 更新成功文案（txt）和文案显示时间（stopTime）。`pullDownRefresh`和`pullUpLoad`对象的所有配置项和含义见 [Props 配置](#/zh-CN/docs/scroll#cube-Props配置-anchor)

  ```javascript
  ... // 省略非核心代码
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
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(_foods[1])
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = _foods.slice(0, 5)
          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    ...
  }
  ```

  > **注意**：如果请求结果没有数据更新，则必须调用 Scroll 组件的`forceUpdate()`方法结束此次下拉刷新/上拉加载，这样 Scroll 组件才会开始监听下一次下拉刷新/上拉加载操作。在上例中数据更新时，没有调用`forceUpdate()`方法，原因为：**如果你向`Scroll`组件传递了`data`属性，那么当`Scroll`组件监听到`data`有更新时会自行调用`forceUpate(true)`方法**，因此推荐传递`data`属性。

- **4. 自定义下拉刷新动画 - 仿京东 App 首页**

  如果你不喜欢内置的下拉刷新和上拉加载动画，还可以用[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽)做自定义动画。Scroll 组件的作用域插槽暴露出的变量非常完善，可以满足绝大多数场景下自定义下拉/上拉动画的需求。下面的例子模仿了京东 App 首页的下拉刷新动画。完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/jd.vue)。

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

  通过作用域插槽提供的作用域参数，如：`beforePulldown`和`isPullingDown`，你可以根据状态的变化来控制动画流程，其他作用域参数及其含义详见下面的[插槽](#/zh-CN/docs/scroll#cube-插槽-anchor)。在一个完整的下拉刷新过程中，`beforePullDown`和`isPullingDown`的状态变化如下：

  | 流程 | beforePulldown | isPullingDown | 备注 |
  | - | - | - | - |
  | 1. 未触发下拉刷新 | true | - | 展示继续下拉引导图案 |
  | 2. 触发下拉刷新 | false | true | 异步请求数据，显示 loading |
  | 3. 获取数据成功 | false | false | 调用 `forceUpdate(true)`, 显示成功文案, 延迟 stopTime 时间进入步骤 4  |
  | 4. 下拉刷新完成 | true | - | - |

- **5. 高级使用 - 仿头条 App 首页**

  Scroll 组件能够满足绝大多数移动端应用的滚动需求。本例中通过横向和纵向的两个 Scroll 组件快速实现了模仿头条 App 首页的滚动体验。完整的示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/toutiao.vue)。

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

  和“仿京东 APP”示例不同的是，在下拉刷新的自定义动画中，使用了`pulldown`作用域插槽中的`pullDownStyle`和`bubbleY`更方便的实现下拉动画。

  `pullDownStyle`用来控制下拉内容的位置，值为字符串`top: n px`（n 代表数值）。Scroll 组件是通过绝对定位的`top`值来控制下拉内容位置的。初始状态`top`值为负值，大小刚好为下拉内容的高度，因此下拉内容被隐藏到滚动区域上方，当下拉过程中，Scroll 组件会逐渐增大`top`值，实时更新下拉内容的位置。`top`最大值为0，即当下拉内容完全显示后`top`值不再增加。即 `pullY - height <= top <= 0`。（pullY 为下拉距离，height 为下拉内容高度）

  `bubbleY`用来辅助实现自定义动画。在默认动画中，`bubbleY`用来控制气泡尾巴长度；在头条例子中，用来控制箭头的`padding-top`值，间接控制箭头位置。`bubbleY`的最小值为 0，下拉过程中，当下拉距离大于下拉内容高度后，`bubbleY`开始增大。即 `0 <= bubbleY <= pullY - height`。

  > 在本例中，`pullDownRefresh`配置项没有传入`stop`值，但是下拉后依然能够回弹到正确位置，原因是 Scroll 组件初始化时会将 `beforePullDown === false && isPullingDown === true` 时下拉内容高度作为 `stop` 默认值。

- **6. 嵌套纵向滚动 - Vertical Scrolls**<sup>1.12.0</sup>

  `Scroll`组件还支持嵌套的场景(目前只支持两层嵌套)。当遇到嵌套场景时，你需要给内层`scroll`组件设置 Prop nestMode，可选值有 'native' 和 'free'。当设置为 'native' 时，嵌套`Scroll`与浏览器原生嵌套场景的滚动行为相同。下面是`Scroll`组件实现纵向嵌套滚动的例子。完整的示例代码在这里[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/vertical-scrolls.vue)。

  ```html
  <cube-scroll
    ref="scroll1"
    class="scroll-list-outer-wrap">
    ...
    <cube-scroll
      ref="scroll2"
      class="scroll-list-inner-wrap"
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

- **7. 嵌套横向滚动 - Horizontal Scrolls**<sup>1.12.0</sup>

  你还可以实现横向的嵌套滚动。这里同时设置`nestMode`为`free`，与`native`模式不同的是，`free`模式下，内层滚动过程中只要触发边界，便会开启外层滚动。而`native`模式下，只在开始滚动时判断是否到达边界，与浏览器原生的嵌套滚动保持一致。完整的示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal-scrolls.vue)。

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

<!-- - **8. Scroll 中嵌套 textarea - Textarea**

  有时候我们需要在 `Scroll` 组件中包含 teatarea 输入框。然而由于我们在使用 `Scroll` 时禁用了浏览器 'touch' 事件的默认行为，因此我们无法在 textarea 输入框中使用浏览器的原生滚动。

  现在我们希望通过这个例子，介绍两种解决这个问题的方法。核心都是利用了 `Scroll` 支持嵌套的能力，我们将内部的输入框用 `Scroll` 进行包装，通过 `Scroll` 去模拟滚动行为。但是有一个要求是，输入框内容区域必须是高度自适应，即高度随内容增加或减少。

  1）利用 div 标签模拟 textarea，实现内容区域高度自适应。

  2）利用 textarea 配合 js，实现高度自适应。

  最后，我们还需要一些额外的工作保证输入过程中，光标能始终在视线内，保持与原生输入框的行为一致。完整的示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/scroll/textarea.vue)

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

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 用于列表渲染的数据 | Array | - | [] |
| direction | 滚动方向 | String | 'vertical', 'horizontal' | 'vertical' |
| options | better-scroll 配置项，具体请参考[BS 官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| scrollEvents<sup>1.9.0</sup> | 配置需要派发的 scroll 事件 | Array | 可包含子项：'scroll', 'before-scroll-start', 'scroll-end' | [] |
| listenScroll | 是否派发 scroll 事件。`即将废弃`，推荐使用 `scroll-events` 属性 | Boolean | true/false | false |
| listenBeforeScroll | 是否派发 before-scroll-start 事件。`即将废弃`，推荐使用 `scroll-events` 属性 | Boolean | true/false | false |
| refreshDelay | data属性的数据更新后，scroll 的刷新延时 | Number | - | 20 |
| nestMode<sup>1.12.0</sup> | 嵌套滚动模式，默认是`none`，即不做嵌套处理。`native`只在开始滚动时判断是否到达边界并开启外层滚动，与浏览器原生的嵌套滚动保持一致。`free`模式下，内层滚动过程中只要触发边界，便会开启外层滚动。| String | 'none', 'native', 'free' | 'none' |

`options`中 better-scroll 的几个常用配置项，`scrollbar`、`pullDownRefresh`、`pullUpLoad`这三个配置即可设为 `Boolean`（`false` 关闭该功能，`true` 开启该功能，并使用默认子配置），也可设为`Object`，开启该功能并具体定制其子配置项。

- `scrollbar` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| fade | 是否淡入淡出 | Boolean | true/false | false |

- `pullDownRefresh` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| threshold | 下拉刷新动作的下拉距离阈值 | Number | - | 90 |
| stop | 回弹停留的位置 | Number | - | 组件会自动计算回弹时显示的元素高度作为默认值 |
| stopTime | 刷新成功的文案显示时间 | Number | - | 600 |
| txt | 刷新成功的文案 | String | - | 'Refresh success' |

- `pullUpLoad` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| threshold | 上拉刷新动作的上拉距离阈值 | Number | - | 0 |
| txt | 上拉加载的相关文案 | Object | - | { more: '', noMore: '' } |
| visible<sup>1.12.21</sup> | 内容不满一屏时，txt 文案是否可见 | Boolean | true/false | false |

> 当开启 pullUpLoad，且内容较少，内容高度小于容器时，默认情况下，`pullUpLoad.txt` 配置的文案如“上滑加载更多”，需要上拉后才能看到。如果希望无需上拉即可看到提示文案，可以设置 `pullUpLoad.visible` 为 `true`。

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 基于`data`属性渲染的列表 | - |
| pulldown | 位于列表上方，会在下拉刷新时显示 | pullDownRefresh: 是否开启了下拉刷新功能 <br> pullDownStyle: 移入移出的样式 <br> beforePullDown: 是否正在做下拉操作 <br> isPullingDown: 是否正在拉取数据 <br> bubbleY: 当前下拉的距离 - 50|
| pullup | 位于列表下方，会在上拉加载时显示 | pullUpLoad: 是否开启了上拉加载功能 <br> isPullUpLoad: 是否正在加载数据 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击列表项时触发 | item - 该列表项的数据 |
| scroll | 当 `scroll-events` 包含 `scroll` 时，根据 probeType 的值决定派发时机 | Object {x, y} - 实时滚动位置的坐标 |
| before-scroll-start | 当 `scroll-events` 包含 `before-scroll-start` 时，在滚动开始之前触发 | - |
| scroll-end<sup>1.9.0</sup> | 当 `scroll-events` 包含 `scroll-end` 时，在滚动结束时触发 | Object {x, y} - 实时滚动位置的坐标 |
| pulling-down | 当 pullDownRefresh 属性为 true 时，在下拉超过阈值时触发 | - |
| pulling-up | 当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发 | - |

### 方法

| 方法名 | 说明 | 参数 |
| - | - | - |
| scrollTo(x, y, time, ease) | 滚动到指定位置 | x: number, 横向位置<br> y: number, 纵向位置<br> time: number, 过渡动画时间 (ms)<br> ease: EasingFn, 缓动曲线 |
| forceUpdate(dirty, nomore<sup>1.12.21</sup>) | 标记上拉下拉结束，强制重新计算可滚动距离 | dirty: boolean, 标识有数据更新，默认为 false。<br>nomore: boolean, pullUpLoad 中标识没有更多数据，默认为 false。1.12.21版本后支持 nomore 参数，当 nomore 为 true 时，上拉加载展示 `pullUpLoad.txt.nomore` 值，但当 dirty 为 false 时，nomore 无效。|
| disable() | 禁用滚动 | - |
| enable() | 启用滚动，默认是开启滚动的。 | - |
| resetPullUpTxt() | 当从无更多切换到有更多时，重置上拉文本内容 | - |
| refresh() | 刷新，重新计算高度且刷新 BetterScroll 实例 | - |


### 内部属性

| 属性名 | 说明 |
| - | - |
| scroll | 可以通过该属性获得内部实现滚动核心的 BScoll 实例，从而获得更多 BScoll 的底层能力，如监听`touchEnd`事件，获得滚动中的中间状态等，具体可查看[ better-scroll 文档](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/) |
