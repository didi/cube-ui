## Dialog

`Dialog`模态框组件，提供了多种样式及交互形式。

### 示例

- 类型设置

  ```html
  <cube-button @click="showAlert">Dialog - type</cube-button>
  ```
  ```js
  export default {
    methods: {
      showAlert() {
        this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '我是内容',
          icon: 'cubeic-alert'
        }).show()
      }
    }
  }
  ```

  `type` 可选的值为 `alert` (对应为提示框)、`confirm` (对应为确认框)。

- 按钮设置

  ```html
  <cube-button @click="showBtn">Dialog - btn</cube-button>
  ```
  ```js
  export default {
    methods: {
      showBtn() {
        this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          title: '我是标题',
          content: '我是内容',
          confirmBtn: {
            text: '确定按钮',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消按钮',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击确认按钮'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击取消按钮'
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  按钮设置可接受 `String` 或 `Object` 类型数据，当传入 `Object` 类型的数据时，可通过 `text` 字段来设置按钮文案内容、`active` 字段来设置按钮文案是否高亮、`disabled` 字段来设置按钮是否禁用、`href` 字段为按钮的跳转链接。

- 关闭按钮

  ```html
  <cube-button @click="showClose">Dialog - show close</cube-button>
  ```
  ```js
  export default {
    methods: {
      showClose() {
        this.$createDialog({
          type: 'alert',
          icon: 'cubeic-alert',
          showClose: true,
          title: '标题',
          onClose: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击关闭按钮'
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  `showClose` 字段决定是否需要显示关闭按钮，同时点击关闭按钮会触发 `close` 事件，如果传入了 `onClose` 则会被调用。

- 插槽

  ```html
  <cube-button @click="showSlot">Dialog - slot</cube-button>
  ```
  ```js
  export default {
    methods: {
      showSlot() {
        this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: '我知道了',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', '附近车少,优选出租车将来接您')
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, '价格仍按快车计算')
          ]
        }).show()
      }
    }
  }
  ```

  `$createDialog` 的第二个参数是 [render 函数](https://vuejs.org/v2/guide/render-function.html)，一般用于处理插槽的场景；Dialog 组件提供了 2 个具名的插槽 `title` 和 `content`，分别用来分发标题和内容。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型 | String | 提示框 alert / 确认框 confirm | alert |
| icon | 图标的 class 名 | String | [参照 style 模块下的内置 icon 部分](#/style) | '' |
| title | 标题 | String | - | '' |
| content | 正文 | String | - | '' |
| showClose | 是否显示关闭按钮 | Boolean | true/false | false |
| confirmBtn | 确认按钮参数配置 | Object/String | - | { text: '确定', active: true, href: 'javascript:;' } |
| cancelBtn | 取消按钮参数配置 | Object/String | - | { text: '取消', active: false, href: 'javascript:;' } |

* `confirmBtn` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| text | 按钮文案 | String | - | '确认' |
| active | 是否高亮 | Boolean | true/false | true |
| disabled | 是否禁用 | Boolean | true/false | false |
| href | 点击按钮后的跳转链接 | String | - | 'javascript:;' |

* `cancelBtn` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| text | 按钮文案 | String | - | '取消' |
| active | 是否高亮 | Boolean | true/false | false |
| disabled | 是否禁用 | Boolean | true/false | false |
| href | 点击按钮后的跳转链接 | String | - | 'javascript:;' |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| title | 标题 | - |
| content | 内容 | - |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - | - |
| confirm | 点击确认按钮后触发 | 事件对象 e |
| cancel | 点击取消按钮后触发 | 事件对象 e |
| close | 点击关闭按钮后触发 | 事件对象 e |
