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

### Props 配置

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| title | 标题 | String | - |
| data | 需要展示的数据 | Array | [] |

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
