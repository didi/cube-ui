## Toolbar

> 1.9.0 新增

工具栏，可以组合多个按钮，复选框操作为一个工具栏。

### 示例

- 基础使用

  将每个操作的类型和文本传入 `actions` 属性。

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

- 更多操作

  你还可以通过 `moreActions` 属性传入更多操作，就会把工具栏扩展成可展开收起的双层工具栏。

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

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| actions | 定义一组操作 | Array | [] | [ {text: '完成订单' } ] |
| moreActions | 定义更多的一组操作 | Array | [] | [ {text: '完成订单' } ] |

* `actions` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型，包括 button 和 checkbox | String | button/checkbox | button |
| text | 文案，支持写入 html | String | - | '' |
| checked | 当为 checkbox 类型时，checkbox的初始状态 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击某一项触发 | 该项 item 的值 |
| more-click | 当有更多操作时，点击更多按钮时触发 | 更多操作是否是显示状态 |
