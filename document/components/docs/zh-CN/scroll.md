## Scroll

滚动列表，提供了优质的原生滚动体验，便捷的配置项和事件，是一个基于`better-scroll`进行封装的组件。

### 示例

- 基本使用

  通过设置 `data` 属性为一个数组，即可生成能够在容器内优雅滚动的列表。

  ```html
  <cube-scroll :data="items"></cube-scroll>
  ```

  ```stylus
  .cube-scroll-wrapper
    height: 100px
  ```

- 滚动原理

  由于 better-scroll 的滚动原理为：在滚动方向上，第一个子元素的长度超过了容器的长度。

  那么对于 Scroll 组件，其实就是内容元素`.cube-scroll-content`在滚动方向上的长度必须大于容器元素 `.cube-scroll-wrapper`。根据滚动方向的不同，有以下两种情况：

  1）纵向滚动：内容元素的高度必须大于容器元素。由于容器元素的高度默认会被子元素的高度撑开，所以为了满足我们的滚动前提，你需要给 Scroll 组件的 `.cube-scroll-wrapper`元素一个非弹性高度。

  2）横向滚动：内容元素的宽度必须大于容器元素。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 `.cube-scroll-content` 元素设置大于 `.cube-scroll-wrapper` 的宽度。



- 配置 better-scroll 选项

  通过 options 属性可以配置 better-scroll 的选项，包括滚动条、下拉刷新、上拉加载等，具体可查看 better-scroll 的[官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html)，这里仅对几个常用的配置项进行介绍说明。

  1）滚动条

  默认无滚动条，还可设为淡入淡出滚动条或一直显示滚动条。

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

  2）下拉刷新

  默认无下拉刷新功能，可通过配置项`pullDownRefresh`开启`pulling-down`事件派发和下拉动画，你可以监听`pulling-down`事件更新数据。

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

  需要注意的是，如果请求结果是没有新数据，也就是数据与之前一模一样没有变化，则必须使用 `this.$refs.scroll.forceUpdate()` 结束此次下拉刷新，这样，Scroll 组件才会开始监听下一次下拉刷新操作。

  3）上拉加载

  默认无上拉加载功能，可通过配置项`pullUpLoad`开启`pulling-up`事件派发和上拉动画，你可以监听`pulling-up`事件更新数据。

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

  需要注意的是，如果请求结果是没有新数据，也就是数据与之前一模一样没有变化，则必须使用 `this.$refs.scroll.forceUpdate()` 结束此次上拉加载，这样，Scroll 组件才会开始监听下一次上拉加载操作。

- 自定义下拉刷新和上拉加载动画

  如果你不喜欢内置的下载刷新插槽和上拉加载，还可以用[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽)做自定义动画。下面这个示例，就是用作用域插槽对下拉刷新做了自定义动画，而上拉加载则保留了缺省的内置动画。

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

  通过作用域插槽提供的作用域参数，你可以根据各个状态的变化来控制动画流程。具体的作用域参数及其含义详见下面的插槽。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 用于列表渲染的数据 | Array | - | [] |
| options | better-scroll 配置项 | Object | - | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| direction | 滚动方向 | String | 'vertical', 'horizontal' | 'vertical' |
| listenScroll | 是否派发 scroll 事件 | Boolean | true/false | false |
| listenBeforeScroll | 是否派发 before-scroll-start 事件 | Boolean | true/false | false |
| refreshDelay | data属性的数据更新后，scroll 的刷新延时 | Number | - | 20 |

`options`中 better-scroll 的几个常用配置项，`scrollbar`、`pullDownRefresh`、`pullUpLoad`这三个配置即可设为 `Boolean`（`false` 关闭该功能，`true` 开启该功能，并使用默认子配置），也可设为`Object`，开启该功能并具体定制其子配置项。

- `scrollbar` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| fade | 是否淡入淡出 | Boolean | true/false | false |

- `pullDownRefresh` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| threshold | 下拉刷新动作的下拉距离阈值 | Number | - | 90 |
| stop | 回弹停留的位置 | Number | - | 40 |
| txt | 刷新成功的文案 | String | - | 'Refresh success' |

- `pullUpLoad` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| threshold | 上拉刷新动作的上拉距离阈值 | Number | - | 0 |
| txt | 上拉加载的相关文案 | Object | - | { more: '', noMore: '' } |

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
| scroll | 当 listenScroll 为 true 时，根据 probeType 的值决定派发时机 | Object {x, y} - 滚动的实时坐标 |
| before-scroll-start | 当 listenBeforeScroll 属性为 true 时，在滚动开始之前触发 | - |
| pulling-down | 当 pullDownRefresh 属性为 true 时，在下拉超过阈值时触发 | - |
| pulling-up | 当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发 | - |
