## ScrollNav

> New in 1.10.0+

ScrollNav component. You can use it to sticky your navigation bar and content.

### Example

- Basic usage - Default

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

  `goods`:
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

  `cube-scroll-nav` should contains `cube-scroll-nav-panel` which is the navigation target panel content.

  `cube-scroll-nav-panel` required Prop: `label`(the key of panel).

  The `change` event will be triggered when navigation active item changed.

- Side Style

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

  If set `side` to `true` then the navigation bar will be at the side position.

  `data` is the data source, it will be passed to `cube-scroll` component, if the `data` updated then `cube-scroll` will be auto refreshed.

  `current` is the default navigation value(label of panel), if set this value then the target panel will be auto scrolled to the top of container.

  The `sticky-change` event will be triggered when the navigation bar's sticky state changed. The parameter is one of `''`, `'cube-scroll-nav-bar'`.

  You can use `prepend` slot to insert your own content before the main content.

### Props

#### CubeScrollNav

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | optional, data source | Array | - | - |
| side | If set to `true` then the navigation bar will be at the side position | Boolean | true/false | false |
| current | the default navigation value(label of panel) | String/Number | - | '' |
| speed | speed of navigating to target panel | Number | - | 300 |

#### CubeScrollNavPanel

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| label | required, the key of panel | String/Number | - | - |
| title | the title of panel, can be a HTML string value | String/Number | - | default equal to `label` Prop |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | default panel content | - |
| prepend | prepend content | - |
| bar | navigation bar content, you should use `cube-scroll-nav-bar` component to define your own navigation bar content | labels: the collection of all panel labels<br>txts: the collection of all panel titles<br>current: current active navigation value(label of panel) |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| change | triggers when navigation active item changed | active - active navigation value(label of panel) |
| sticky-change | triggers when the navigation bar's sticky state changed | current - if navigation bar is fixed then this value will be 'cube-scroll-nav-bar', otherwise this value will be '' |

### Instance methods

| Method name | Description |
| - | - |
| refresh | You can call this method when content updated |
