## Toolbar

> New in 1.9.0+

Toolbar, with actions & more-actions.

### Example

- Basic

  You can use `actions` to define the toolbar actions.

  ```html
  <cube-toolbar :actions="actions" @click="clickHandler"></cube-toolbar>
  ```
  ```js
  export default {
    data() {
      return {
        money: 10,
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            action: 'moreMoney'
          }
        ]
      }
    },
    methods: {
      showText(item) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + item.text,
          time: 1000
        }).show()
      },
      moreMoney(item) {
        this.money += 10
        item.text = '一口价<span class="orange">' + this.money + '元</span>'
      },
      clickHandler(item) {
        if (item.action) {
          this[item.action](item)
        }
      }
    }
  }
  ```
  ```stylus
  .orange
    color: #fc9153
  ```

  You can use handle the action in `click` event handler.

- More actions

  You can use `moreActions` to define more actions.

  ```html
  <cube-toolbar
    :actions="actions"
    :more-actions="moreActions"
    @click="clickHandler"></cube-toolbar>
  ```
  ```js
  export default {
    data() {
      return {
        money: 10,
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            action: 'moreMoney'
          }
        ],
        moreActions: [
          {
            text: '操作a',
            action: 'showText'
          },
          {
            text: '操作b',
            action: 'showText'
          },
          {
            text: '操作c',
            icon: 'cubeic-right',
            action: 'showText'
          }
        ]
      }
    },
    methods: {
      showText(item) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + item.text,
          time: 1000
        }).show()
      },
      moreMoney(item) {
        this.money += 10
        item.text = '一口价<span class="orange">' + this.money + '元</span>'
      },
      clickHandler(item) {
        if (item.action) {
          this[item.action](item)
        }
      }
    }
  }
  ```
  ```stylus
  .orange
    color: #fc9153
  ```

### Props

| Attribute | Description | Type | Accepted Values | Demo |
| - | - | - | - | - |
| actions | actions description | Array | [] | [ {text: '完成订单' } ] |
| moreActions | more actions | Array | [] | [ {text: '完成订单' } ] |

* `actions` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | type, button or checkbox | String | button/checkbox | button |
| text | text, support html string | String | - | '' |
| checked | if type is checkbox, then this value will be the Checkbox's model alue | Boolean | true/false | false |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| click | clicked one item | item value |
| more-click | clicked more item | whether more actions is visible |
