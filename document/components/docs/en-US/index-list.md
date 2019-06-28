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

- Pull Up Load

  Beside, you could use `pullUpLoad` to enable pull-up-load, the detail config is same as the `options.pullUpLoad` of Scroll.

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
            // Update data.
            this.data.push(cityData[length])
          }
          // Call forceUpdate after finishing data load.
          this.$refs.indexList.forceUpdate()
        }, 1000)
      }
    }
  }
  ```

  - Pull Down Refresh

  Beside, you could use `pullDownRefresh` to enable pull-down-refresh, the detail config is same as the `options.pullDownRefresh` of Scroll.

  ```html
  <cube-index-list
    ref="indexList"
    :data="data"
    :title="title"
    :pullDownRefresh="pullDownRefresh"
    @select="selectItem"
    @title-click="clickTitle"
    @pulling-down="onPullingDown">
  </cube-index-list>
  ```
  ```javascript
  export default {
    data() {
      return {
        title: 'Current City: BEIJING',
        data: cityData,
        pullDownRefresh: {
          stop: 55
        }
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      },
      onPullingDown() {
        // Mock async load.
        setTimeout(() => {
          // Update data.
          this.data[1].items.push(...cityData[1].items)
          // Call forceUpdate after finishing data load.
          this.$refs.indexList.forceUpdate(true)
        }, 1000)
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| title | title | String | - |
| data | data to be displayed | Array | [] |
| navbar | whether need navbar | Boolean | true |
| speed | when click the navigator, the transition time of scrolling to the specific anchor (unit: ms). | number | 0 |
| options<sup>1.9.8+</sup> | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/en/options.html) | Object | {<br>  observeDOM: true,<br>  click: true,<br>  probeType: 1,<br>  scrollbar: false,<br>  pullDownRefresh: false,<br>  pullUpLoad: false<br>} |
| pullUpLoad<sup>1.8.0+</sup> | pull-up-load, the detail config is same as the `options.pullUpLoad` of Scroll. `Deprecated`, please use the property `options` instead. | Boolean/Object | false |
| pullDownRefresh<sup>1.8.0+</sup> | pull-down-refresh, the detail config is same as the `options.pullDownRefresh` of Scroll. `Deprecated`, please use the property `options` instead. | Boolean/Object | false |

- `data` sub configuration

`data` is an array, which represents multiple groups of data and each of them can be configured：

| Attribute | Description | Type |
| - | - | - |
| name | the name of the group | String |
| items | data of current group | Array |

Each item of `items` array must be an object that must contains the `name` attribute which is used for displaying the content; For example:  `items`: `[{name: 'xx', ...}, ...]`

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| title<sup>1.12.25+</sup> | title slot | - |
| pulldown<sup>1.9.4+</sup> | located above the list and shown when pulling down refreshing | the detail is the same as Scroll component's pulldown slot scope parameters |
| pullup<sup>1.9.4+</sup> | located below the list and shown when pulling up loading | the detail is the same as Scroll component's pullup slot scope parameters |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| select | triggers when clicking one of the items in IndexList | data of the item |
| title-click | triggers when clicking title(valid only if title has been configured) | the value of title |
| pulling-up<sup>1.8.0+</sup> | triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true | - |
| pulling-down<sup>1.8.0+</sup> | triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true | - |
