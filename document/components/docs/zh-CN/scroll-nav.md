## ScrollNav 组件

> 1.10.0 新增

滚动导航组件。

### 示例

- 基本使用 - Default

  ```html
  <cube-scroll-nav @change="changeHandler">
    <cube-scroll-nav-panel
      v-for="item in data"
      :key="item.name"
      :label="item.name">
      <ul>
        <li v-for="food in item.foods">
          <div>
            <img :src="food.icon">
            <p>{{food.name}}</p>
          </div>
        </li>
      </ul>
    </cube-scroll-nav-panel>
  </cube-scroll-nav>
  ```
  ```js
  import goodsData from 'example/data/goods-list.json'

  const goods = goodsData.goods

  export default {
    data() {
      return {
        data: goods
      }
    },
    methods: {
      changeHandler(label) {
        console.log('changed to:', label)
      }
    }
  }
  ```

  `goods` 的结构类似于这样：
  ```js
  "goods": [
    {
      "name": "热销榜",
      "type": -1,
      "foods": [
        {
          "name": "皮蛋瘦肉粥",
          // ...
          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        // ...
      ]
    },
    // ...
  ]
  ```

  `cube-scroll-nav` 需要和 `cube-scroll-nav-panel` 组件配合使用，`cube-scroll-nav-panel` 就是每一个需要导航定位到的面板组件。

  `cube-scroll-nav-panel` 组件需要一个必须的 Prop：`label`，唯一标示 key 值。

  当导航 active 项发生变化的时候就会触发 `change` 事件。

- 侧边式 - Side Style

  ```html
  <cube-scroll-nav
    :side="true"
    :data="data"
    :current="current"
    @change="changeHandler"
    @sticky-change="stickyChangeHandler">
    <ul class="prepend-header" slot="prepend">
      <li>11</li>
      <li>22</li>
      <li>333</li>
    </ul>
    <cube-scroll-nav-panel
      v-for="item in data"
      :key="item.name"
      :label="item.name"
      :title="item.name">
      <ul>
        <li v-for="food in item.foods">
          <div>
            <img :src="food.icon">
            <p>{{food.name}}</p>
          </div>
        </li>
      </ul>
    </cube-scroll-nav-panel>
  </cube-scroll-nav>
  ```
  ```js
  import goodsData from 'example/data/goods-list.json'

  const goods = goodsData.goods

  export default {
    components: {
      CubePage
    },
    data() {
      return {
        data: goods,
        current: goods[3].name
      }
    },
    methods: {
      changeHandler(label) {
        console.log('changed to:', label)
      },
      stickyChangeHandler(current) {
        console.log('sticky-change', current)
      }
    }
  }
  ```

  `side` 设置为 `true` 代表是一个侧边样式效果；

  `data` 则是默认传入的数据，这个数据会被传入内部使用的 `cube-scroll` 组件，当 `data` 发生变化时，scroll 组件会自动刷新；

  `current` 是导航默认值，如果有值则会默认滚动到相对应的面板 Panel 的位置。

  `sticky-change` 就是当前导航条的吸附状态发生改变的时候触发，参数可能的值目前只有两个，一个是 `''` 一个是 `'cube-scroll-nav-bar'`。

  此外，这里还在 `cube-scroll-nav-panel` 之前插入了一些内容，利用 `prepend` 插槽实现。

### Props

#### CubeScrollNav

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 数据源，可选 | Array | - | - |
| side | 是否是侧边样式 | Boolean | true/false | false |
| current | 当前导航 active 项的 key 值 | String/Number | - | '' |
| speed | 点击导航切换到指定位置的速度 | Number | - | 300 |

#### CubeScrollNavPanel

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| label | 必须，面板的唯一标示的值 | String/Number | - | - |
| title | 面板标题内容，可以是 HTML 字符串 | String/Number | - | 默认等于 label |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认面板内容 | - |
| prepend | 前置内容，在导航之前 | - |
| bar | 导航内容，如果需要自定义导航结构的话使用，里边放置 cube-scroll-nav-bar 组件 | labels: 所有面板的 label 值集合<br>txts: 所有面板的 title 值集合<br>current: 当前导航 active 项的 key 值 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | 当导航 active 项发生变化的时候 | active - 当前 active 的 key 值 |
| sticky-change | 当前导航条的吸附状态发生改变的时候触发 | current - 如果未吸附，则值为 '' 否则为 'cube-scroll-nav-bar' |

### 实例方法

| 方法名 | 说明 |
| - | - |
| refresh | 刷新，当内容或高度发生变化时可用于重新计算整体内容、位置 |
