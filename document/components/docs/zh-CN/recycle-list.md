## RecycleList

> 1.12.0 新增

可回收的滚动列表，始终将 DOM 的数量控制在一个很低的范围。在海量数据的渲染列表中，拥有卓越的性能。

### 注意事项

  - 首先要实现无限滚动，必须保证要有一个固定高度的父容器元素包裹组件。详细可以参考示例。

  - 如果列表内容存在不固定宽高的图片，由于图片加载的机制，每个 item 的 DOM 渲染了，图片可能还未加载，导致每个 item 的位置计算错误，所以作为调用方，需要将未加载的图片用样式固定住，这样就能避免高度计算错误。

  - 内部的实现依赖 Promise，所以你需要引入 Promise polyfill 来做兼容。

### 示例

- **1. 默认使用**

  ```html
  <div class="view-wrapper">
    <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
      <template slot="item" slot-scope="{ data }">
        <div :id="data.id" class="item" @click="handleClick(data)">
          <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
          <div class="bubble">
            <p>{{ data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ data.time }}</time>
            </div>
          </div>
        </div>
      </template>
    </cube-recycle-list>
  </div>
  ```
  ```js
  export default {
    data() {
      return {
        size: 50,
        offset: 100
      }
    },
    methods: {
      onFetch() {
        let items = []
        return new Promise((resolve) => {
          // 模拟请求 50 条数据，因为 size 设置为 50
          setTimeout(() => {
            for (let i = 0; i < 50; i++) {
              items.push({
                id: i,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                msg: '123',
                time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
              })
            }
            resolve(items)
          }, 1000)
        })
      },
      handleClick(data) {
        console.log('Item:' + data)
      }
    }
  }
  ```

  ```stylus
  /* 限制视口 包裹组件*/
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
  ```

    绝大部分的列表交互，都是当用户滚动到底部再去请求下一页数据，组件的默认实现就是根据此交互而来。

    组件接收 `size` 作为 props，用来控制一次渲染多少条数据。`offset` 是配置底部拉取数据的距离，`onFetch` 是一个函数，此属性是必传的，并且函数的返回值必须是一个 Promise，同时调用 resolve 函数的时候必须将 items（**数组**） 传入，这样组件就能拿到 `items`。当然如果想要停止滚动，请传入 `false`。

    组件支持作用域插槽，你可以通过以上示例的解构赋值，拿到组件传给调用方的 `data`（items 的每一个数据项）。

    完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-default.vue)。

- **2. Infinite**

  然而，组件还支持第二种交互方式，无限滚动模式，以 `tombstone` 作为占位符，给用户一种可感知的页面元素，让交互变的更加友好、人性化。
  完整示例代码在[这里](https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-tombstone.vue)。

  ```html
  <div class="view-wrapper">
    <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">
      <!-- tombstone 的作用域插槽 slot-scope 必须声明 -->
      <template slot="tombstone" slot-scope="props">
        <div class="item tombstone">
          <div class="avatar"></div>
          <div class="bubble">
            <p></p>
            <p></p>
            <p></p>
            <div class="meta">
              <time class="posted-date"></time>
            </div>
          </div>
        </div>
      </template>
      <template slot="item" slot-scope="{ data }">
        <div :id="data.id" class="item" @click="handleClick(data)">
          <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
          <div class="bubble">
            <p>{{ data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ data.time }}</time>
            </div>
          </div>
        </div>
      </template>
      <!-- <div slot="spinner">Loading Data</div> -->
      <!-- <div slot="noMore">没有更多数据了</div> -->
    </cube-recycle-list>
  </div>
  ```

  `infinite` 用来开启无限滚动模式。当你开启这个配置的时候，必须通过 `tombstone` 作用域插槽实现个性化样式。支持 `spinner` 与 `noMore` 插槽来定制化显示加载更多以及无更多数据的视图展示。`spinner` 默认是一个 loading 图。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| infinite | 是否无限滚动模式 | Boolean | - | false |
| size | 一次加载的数据量 | Number | - | 20 |
| offset | 底部拉取更多数据的距离 | Number | - | 200 |
| onFetch | 获取更多数据 | Function | 必传 | - |

`onFetch` 函数必须返回一个 Promise，同时 Promise 的 resolve 函数的第一个参数必须是数组或者 `false`，如果是数组并且长度小于 size，那么组件会停止无限滚动，同理，如果是 `false`，也会停止。

### 插槽

| 名字 | 说明 | 参数 |
| - | - | - |
| tombstone | 实现个性化 `tombstone` 样式的作用域插槽 | - |
| item | 列表某项的作用域插槽，通过此插槽实现想要的渲染视图 | data: 调用方传入的数据项集合的某一项 |
| spinner | 加载更多的提示文案的具名插槽 | - |
| noMore | 无更多数据的提示文案的具名插槽 | - |

### 实例方法

| 方法名 | 说明 |
| - | - |
| reset | 清空列表全部内容，重置数据 |
