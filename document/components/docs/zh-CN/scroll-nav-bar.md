## ScrollNavBar 组件

> 1.10.0 新增

滚动导航条组件，效果类似于滴滴打车业务线切换。

### 示例

- 横向，默认

  ```html
  <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
  ```
  ```js
  export default {
    data() {
      return {
        current: '快车',
        labels: [
          '快车',
          '小巴',
          '专车',
          '顺风车',
          '代驾',
          '公交',
          '自驾租车',
          '豪华车',
          '二手车',
          '出租车'
        ]
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    }
  }
  ```

  可以通过 `current` 指定 active 的 key 值，`labels` 则是所有的 key 值的集合；当 active 的值发生变化后，会触发 `change` 事件。

- 竖向

  ```html
  <div class="side-container">
    <cube-scroll-nav-bar
      direction="vertical"
      :current="current"
      :labels="labels"
      :txts="txts"
      @change="changeHandler">
      <i slot-scope="props">{{props.txt}}</i>
    </cube-scroll-nav-bar>
  </div>
  ```
  ```js
  export default {
    data() {
      return {
        current: '快车',
        labels: [
          '快车',
          '小巴',
          '专车',
          '顺风车',
          '代驾',
          '公交',
          '自驾租车',
          '豪华车',
          '二手车',
          '出租车'
        ],
        txts: [
          '1快车',
          '2小巴',
          '3专车',
          '4顺风车',
          '5代驾',
          '6公交',
          '7自驾租车',
          '8豪华车',
          '9二手车',
          '10出租车'
        ]
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    }
  }
  ```
  ```stylus
  .side-container
    height: 300px
    margin-top: 20px
  ```

  这是一个竖向的示例，`direction` 设置为 `vertical` 代表是一个竖向导航条样式；这里还使用了 `txts` Prop 用于指定展示文案，顺序是和 `labels` 一一对应的，如果没传入 `txts`，则默认 `txts` 就等于 `labels`。

  该示例中还展示了默认作用域插槽的使用，`props.txt` 就是当前项的 txt 的值。

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| direction | 方向，默认横向，horizontal | String | horizontal/vertical | horizontal |
| labels | 所有的 key 值集合 | Array | - | [] |
| txts | 显示所有文案集合，和 labels 一一对应，每项可以是 HTML 字符串 | Array | - | 默认等于 labes |
| current | 当前 active 的 key 值 | String/Number | - | '' |
| options | better-scroll 配置项，具体请参考[BS 官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {} |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认内容 | txt: 当前项文案 txt 的值<br>index: 当前索引值<br>active: 当前 active 的 key 值<br>label: 当前项 label 值，即 key 值 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | 当 active 项发生改变的时候触发 | active - 当前 active 的 key 值 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| refresh | 刷新，当内容发生变化时可用于刷新 scroll 以及重新适应位置 |
