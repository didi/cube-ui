## ScrollNavBar

> New in 1.10.0+

Scroll navigation bar component, like DiDi business navigation.

### Example

- Default horizontal

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

  You can set the active item by `current` Prop. `labels` is the collection if all the item's keys. The `change` events will be triggered when active item changed.

- Vertical

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

  If the `direction` Prop is `vertical` then the ScrollNavBar will be vertical style.

  You can use `txts` Prop to defined the text of showcases, it's order is correspondence with `labels` Prop. The default `txts` value is `labels`.

  You can also use default scoped slot to defined your own item content.

### Props

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| direction | direction, default horizontal | String | horizontal/vertical | horizontal |
| labels | the collection if all the item's keys | Array | - | [] |
| txts | the text of showcases, it's order is correspondence with `labels`, the item can be a HTML string value | Array | - | default equals to `labels` Prop |
| current | the key of the active item | String/Number | - | '' |
| options | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/en/options.html) | Object | - | {} |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | default content | txt: item's text<br>index: item's index<br>active: the key of active item<br>label: item's label |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| change | triggers when active item changed | active - the key of active item |

### Instance methods

| Method name | Description |
| - | - |
| refresh | You can call this method when content updated |
