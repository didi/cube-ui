## InfinityScroll 组件

> 1.11.0 新增

无限滚动组件，一般是应用于大量的列表数据渲染（建议数据量超过500时使用）。

### 注意事项

`cube-infinity-scroll` 有三个概念必须了解，`tombstone` 、`fetch` 与 `render`。

- tombstone

  即“墓碑”的意思，可以理解为占位符节点或者 CSS skeleton，组件内置了默认的 `tombstone` 样式，当然你可以通过 `slot` 来制定个性化的 `tombstone`。

- fetch

  `fetch` 函数，通过props传给 `cube-infinity-scroll` 组件，组件会在合适的时机调用 `fetch` 函数，函数的第一个参数是 `count`，即需要的数据量，同时必须返回一个带有数据（__数据类型必须是数组或假值__）的 Promise，由于调用方每次传入的数据量可能与 `count` 不匹配，幸好组件足够的智能，会一直调用 `fetch` 函数，直至你装载的数据总量不少于 `count`，并且会将你多传入的数据存储起来，等待下次渲染。如果你想要结束无限滚动，你只需返回一个带有假值的 Promise。

- render

  你必须实现自己的 `render` 函数，并且通过 props 传给 `cube-infinity-scroll` 组件，函数的第一个参数是待渲染的列表项
  的数据 `item`，第二个参数是页面上可复用的列表项 DOM 元素，因此该参数可能不存在。在 `render` 函数内部，你可以根据 `item` 来渲染列表项的 DOM 节点，__并且必须返回该节点__。这样组件可以得到此元素节点并且添加到页面上去。

### 示例

示例相关代码在[这里](https://github.com/didi/cube-ui/tree/master/example/pages/infinity-scroll)

- 基本使用

  `cube-infinity-scroll` 组件内置了默认的 `tombstone` 样式，调用 `fetch` 函数获取数据，同时必须提供名为 `render` 的插槽。此插槽可以用于 `render` 函数内部，只需要在 `render` 函数内部克隆 render 插槽的元素节点，拿到装载的 item 数据填充该节点并返回。

  ```html
    <template>
      <cube-infinity-scroll
        ref="infinityScroll"
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
          // 每次加载不少于30条数据，如果加载数据多于组件需要的，会自动被装载并等待下次渲染
          count = Math.max(30, count)
          const infinityScroll = this.$refs.infinityScroll
          let items = []
          for (let i = 0; i < count; i++) {
            items[i] = { text: i }
          }
          // 返回一个带有数据的 Promise， 注意 items 必须是一个数组
          return Promise.resolve(items)
        },
        render (item, div) {
          div = div || this.$refs.render.cloneNode(true)
          div.querySelector('.bubble').textContent = item.text
          // 必须返回 div， 因为组件需要将此元素节点添加至页面
          return div
        }
      }
    }
  ```

  > 组件如果滚动过快，会出现“白屏”的情况，是因为浏览器在使用 CSS3 transition 过渡时候会有优化。不过组件接受 `options` 作为props，它是一个对象，只要将它的第一级属性 `useTransition` 设置为 false，即可用 js 来执行动画，因此动画的流畅性依赖于手机的性能。

- 自定义 Tombstone 插槽

  实际上你经常会根据待渲染的列表项定制不同的 `tombstone` 样式，因此 `cube-infinity-scroll` 组件也支持了插槽的使用方式，如下：

  ```html
    <template>
      <cube-infinity-scroll
        ref="infinityScroll"
        :fetch="fetch"
        :render="render">
        <!-- DOM to be cloned as render template -->
        <div slot="render" class="render-template" ref="render">
          <div class="bubble">
          </div>
        </div>
        <!-- DOM to be cloned as tombstone -->
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

- 结束 InfinityScroll 滚动

  无限滚动并非真正意义上的无限滚动，如果达到某种条件，你可能需要结束无限滚动，那么组件也是提供了这种能力。示例代码如下：
  ```js
    export default {
      methods: {
        fetch (count) {
          // 组件结束无限滚动
          return Promise.resolve(false)
        }
      }
    }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 是否必传 | 默认值 |
| - | - | - | - | - |
| render | 通过组件传入的 item 数据项来渲染列表项的元素节点，并且返回该元素节点 | Function | 必传 | - |
| fetch | 当组件需要渲染列表项的时候调用 | Function | 必传 | - |
| options | better-scroll 配置项，具体请参考[BS 官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  observeDOM: false,<br>  click: true<br>} |


