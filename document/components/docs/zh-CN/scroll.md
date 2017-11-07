## Scroll

滚动列表，提供了优质的原生滚动体验，便捷的配置项和事件，是一个基于`better-scroll`进行封装的组件。

### 示例

- 基本使用

  通过设置 `data` 属性为一个数组，即可生成能够在容器内优雅滚动的列表。

  ```html
  <div class="scroll-wrapper">
    <cube-scroll :data="items"></cube-scroll>
  </div>
  ```

- 滚动条

  默认无滚动条，还可设为淡入淡出滚动条或一直显示滚动条。

  ```html
  <!-- 淡入淡出滚动条 -->
  <cube-scroll :data="items" :scrollbar="true"></cube-scroll>
  <!-- 一直显示滚动条 -->
  <cube-scroll :data="items" :scrollbar="scrollbar"></cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        scrollbar: {
          fade: false
        }
      }
    }
  }
  ```

- 下拉刷新

  默认无下拉刷新功能，可通过配置`pull-down-refresh`属性开启`pulling-down`事件派发和下拉动画，你可以监听`pulling-down`事件更新数据。

  ```html
  <!-- 开启下拉刷新功能，并使用默认参数 -->
  <cube-scroll
    ref="scroll"
    :data="items"
    :pull-down-refresh="true"
    @pulling-down="onPullingDown"></cube-scroll>
  <!-- 开启下拉刷新功能，并使用自定义参数 -->
  <cube-scroll
    ref="scroll"
    :data="items"
    :pull-down-refresh="pullDownRefresh"
    @pulling-down="onPullingDown"></cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: 'Refresh success'
        }
      }
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift('I am new data: ' + +new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      }
    }
  }
  ```

- 上拉加载

  默认无上拉加载功能，可通过配置`pull-up-load`属性开启`pulling-up`事件派发和上拉动画，你可以监听`pulling-up`事件更新数据。

  ```html
  <!-- 开启上拉加载功能，并使用默认参数 -->
  <cube-scroll
    ref="scroll"
    :data="items"
    :pull-up-load="true"
    @pulling-up="onPullingUp"></cube-scroll>
  <!-- 开启上拉加载功能，并使用自定义参数 -->
  <cube-scroll
    ref="scroll"
    :data="items"
    :pull-up-load="pullUpLoad"
    @pulling-up="onPullingUp"></cube-scroll>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5],
        itemIndex: 5,
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: 'Load more',
            noMore: 'No more data'
          }
        }
      }
    },
    methods: {
      onPullingUp() {
        // 更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = [
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex
            ]

            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      }
    }
  }
  ```

- 自定义下拉刷新和上拉加载动画

  如果你不喜欢内置的下载刷新插槽和上拉加载，还可以用[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽)做自定义动画。下面这个示例，就是用作用域插槽对下拉刷新做了自定义动画，而上拉加载则保留了缺省的内置动画。
  ```html
  <cube-scroll
    ref="scroll"
    :data="items"
    :pull-down-refresh="pullDownRefresh"
    :pull-up-load="pullUpLoad"
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
| direction | 滚动方向 | String | 'vertical', 'horizontal' | 'vertical' |
| scrollbar | 滚动条配置项 | Boolean/Object | - | false |
| pullDownRefresh | 下拉刷新配置项 | Boolean/Object | - | false |
| pullUpLoad | 上拉加载配置项 | Boolean/Object | - | false |
| listenScroll | 是否派发 scroll 事件 | Boolean | true/false | false |
| probeType | scroll 事件的派发时机 <br> 1为非实时派发; <br> 2为滚动操作过程实时派发; <br> 3为包括惯性滚动的整个滚动过程实时派发 | Number | 1, 2, 3 | 0 |
| listenBeforeScroll | 是否派发 before-scroll-start 事件 | Boolean | true/false | false |

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
| txt | 上拉加载的相关文案 | Object | - | { more: 'Load more', noMore: 'No more data' } |

### 插槽

| 名字 | 说明 | 作用域参数
| - | - | - |
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
