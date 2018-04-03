## IndexList

`IndexList` component, , which is also encapsulated based on `better-scroll`,  provides functions of index lists.

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

- Custom item content

  Beside default usage, you could customise the content of each item as required by inserting your custom DOM into the slot of `cube-index-list-item` as shown below. And please don't modify the usage of `cube-index-list-group` and `cube-index-list-item` unless you really know what you are doing.

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
        <div class="custom-item">I am the custom {{item.name}}</div>
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
  // Style of the custom item.
  .custom-item
    position: relative
    height: 70px
    line-height: 70px
    padding: 0 16px
    font-size: $fontsize-medium

  // Use custom style to cover default style.
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

### Props configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| title | title | String | - |
| data | data to be displayed | Array | [] |
| navbar | whether need navbar | Boolean | true |
| speed | when click the navigator, the transition time of scrolling to the specific anchor (unit: ms). | number | 0 |

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
