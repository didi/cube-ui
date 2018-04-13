## IndexList

索引列表，提供了列表索引的功能，也是一个基于`better-scroll`进行封装的组件。

### 示例

- 基本使用

  构造如示例中 `cityData` 这样结构的数据，传入 `cube-index-list` 组件的 `data` 属性。

  ```html
  <cube-index-list
    :data="cityData"
    :title="title"
    @select="selectItem"
    @title-click="clickTitle"></cube-index-list>
  ```
  ```javascript
  const cityData = [
    {
      "name": "★Hot City",
      "items": [
        {
          "name": "BEIJING",
          "value": 1
        },
        {
          "name": "SHANGHAI",
          "value": 2
        }
      ]
    },
    {
      "name": "A",
      "items": [
        {
          "name": "ANSHAN",
          "value": 3
        },
        {
          "name": "ANQING",
          "value": 4
        }
      ]
    }
  ]

  export default {
    data() {
      return {
        title: 'Current City: BEIJING',
        cityData: cityData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }
  ```

- 自定义插槽

  除了默认结构，你还可以根据自己的需要自定义每一项的内容。如下所示，将你的自定义内容项填入`cube-index-list-item`的插槽。除非你真的知道自己在做什么，否则不要修改`cube-index-list-group`和`cube-index-list-item`的用法。

  ```html
  <cube-index-list :data="cityData">
    <cube-index-list-group
      v-for="(group, index) in cityData"
      :key="index"
      :group="group">
      <cube-index-list-item
        v-for="(item, index) in group.items"
        :key="index"
        :item="item"
        @select="selectItem">
        <div class="custom-item">我是自定义 {{item.name}}</div>
      </cube-index-list-item>
    </cube-index-list-group>
  </cube-index-list>
  ```
  ```javascript
  export default {
    data() {
      return {
        cityData: cityData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }
  ```
  ```stylus
  // 自定义项的样式
  .custom-item
    position: relative
    height: 70px
    line-height: 70px
    padding: 0 16px
    font-size: $fontsize-medium

  // 用自定义样式，覆写内置的默认样式
  .cube-index-list-content
    background-color: #222
    color: #909090
  .cube-index-list-anchor
    background-color: #333
    height: 30px
    line-height: 30px
    padding: 0 0 0 20px
  .cube-index-list-nav
    padding: 20px 0
    border-radius: 10px
    background: rgba(0,0,0,.3)
    >ul
      >li
        padding: 3px
        font-size: 12px
        color: #909090
        &.active
          color: #ffcd32
  ```

- 上拉加载

  可以通过 `pullUpLoad` 属性开启上拉加载功能，具体配置同 Scroll 组件的 `options.pullUpLoad`。

  ```html
  <cube-index-list
    ref="indexList"
    :data="data"
    :title="title"
    :pullUpLoad="true"
    @select="selectItem"
    @title-click="clickTitle"
    @pulling-up="onPullingUp">
  </cube-index-list>
  ```
  ```javascript
  export default {
    components: {
      CubePage
    },
    data() {
      return {
        title: 'Current City: BEIJING',
        data: cityData.slice(0, 4)
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      },
      onPullingUp() {
        // Mock async load.
        setTimeout(() => {
          const length = this.data.length
          if (length < cityData.length) {
            // If have new data, just update the data property.
            this.data.push(cityData[length])
          } else {
            // If no new data, you need use the method forceUpdate to tell us the load is done.
            this.$refs.indexList.forceUpdate()
          }
        }, 1000)
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| title | 标题 | String | - |
| data | 需要展示的数据 | Array | [] |
| navbar | 是否需要导航栏 | Boolean | true |
| speed | 点击导航栏索引时，滚动到相应位置的动画时间（单位：ms） | number | 0 |
| pullUpLoad<sup>1.8.0+</sup> | 上拉加载，具体配置参考 scroll 组件的 `options.pullUpLoad` | Boolean/Object | false |

- `data` 子配置项

`data` 是数组，表示的是一组数据，每一项配置：

| 参数 | 说明 | 类型 |
| - | - | - |
| name | 组名 | String |
| items | 当前组下的数据项 | Array |

`items` 数组中的每一项必须是对象，且包含 `name` 属性用于显示内容；例如 `items`: `[{name: 'xx', ...}, ...]`

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| select | 点击 IndexList 的某一项后触发 | 该选项的数据 |
| title-click | 点击 title 后触发(title 必须设置后才有效) | title属性值 |
| pulling-up<sup>1.8.0+</sup> | 当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发 | - |
