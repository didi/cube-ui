## Toolbar

> 1.9.0 新增

工具栏，可以组合多个按钮，复选框操作为一个工具栏。

### 示例

- 基础使用

  将每个操作的类型和处理函数传入 `actions` 属性。

  ```html
  <cube-toolbar :actions="actions"></cube-toolbar>
  ```
  ```js
  export default {
    data() {
      let money = 10
      return {
        actions: [
          {
            text: '完成订单',
            clickHandler: this.clickHandler
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            clickHandler(event, data) {
              money += 10
              data.text = '一口价<span class="orange">' + money + '元</span>'
            }
          }
        ]
      }
    },
    methods: {
      clickHandler(event, action) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + action.text,
          time: 1000
        }).show()
      }
    }
  }
  ```

- 更多操作

  你还可以通过 `moreActions` 属性传入更多操作，就会把工具栏扩展成可展开收起的双层工具栏。

  ```html
  <cube-toolbar :actions="actions" :moreActions="moreActions"></cube-toolbar>
  ```
  ```js
  export default {
    data() {
      let money = 10
      return {
        actions: [
          {
            text: '完成订单',
            clickHandler: this.clickHandler
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            clickHandler(event, data) {
              money += 10
              data.text = '一口价<span class="orange">' + money + '元</span>'
            }
          }
        ],
        moreActions: [
          {
            text: '操作a',
            clickHandler: this.clickHandler
          },
          {
            text: '操作b',
            clickHandler: this.clickHandler
          },
          {
            text: '操作c',
            icon: 'dd-cubeic-right',
            clickHandler: this.clickHandler
          }
        ]
      }
    },
    methods: {
      clickHandler(event, action) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + action.text,
          time: 1000
        }).show()
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| actions | 定义一组操作 | Array | [] | [ {text: '完成订单', clickHandler: (event, action) => {}} |
| moreActions | 定义更多的一组操作 | Array | [] | [ {text: '完成订单', clickHandler: (event, action) => {}} |

* `actions` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型，包括 button 和 checkbox | String | button/checkbox | button |
| text | 文案，支持写入 html | String | - | '' |
| clickHandler | 点击的处理函数，参数1：点击事件 event；参数2：点击项的操作配置 action | Function | - | - |
| checked | 当为 checkbox 类型时，checkbox的初始状态 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| more-click | 当有更多操作时，点击更多按钮时触发 | 更多操作的显示状态 |
