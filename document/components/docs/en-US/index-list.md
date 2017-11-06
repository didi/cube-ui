## IndexList

`IndexList` component, , which is also encapsulated based on `better-scroll`,  provides functions of index lists.
索引列表，提供了列表索引的功能，也是一个基于`better-scroll`进行封装的组件。

### Example

- Basic usage

Construct data like `cityData` in the example below and pass it into `data` in `cube-index-list` component.

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

### Props configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| title | title | String | - |
| data | data to be displayed | Array | [] |

- `data` sub configuration

`data` is an array, which represents multiple groups of data and each of them can be configured：

| Attribute | Description | Type |
| - | - | - |
| name | the name of the group | String |
| items | data of current group | Array |

Each item of `items` array must be an object that must contains the `name` attribute which is used for displaying the content; For example:  `items`: `[{name: 'xx', ...}, ...]`

### Events

| Event Name | Description | Parameters |
| - | - | - |
| select | triggers when clicking one of the items in IndexList | data of the item |
| title-click | triggers when clicking title(valid only if title has been configured) | the value of title |
