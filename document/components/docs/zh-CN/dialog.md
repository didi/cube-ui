## Dialog

`Dialog`模态框组件，提供了多种样式及交互形式。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- alert 类型

  ```html
  <cube-button @click="showAlert">Dialog - alert</cube-button>
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

  `type` 可选的值为 `alert` (对应为提示框)、`confirm` (对应为确认框)、`prompt` （对应提示输入框）<sup>1.11.0</sup>。

- 提示输入类型

  ```html
  <cube-button @click="showPrompt">Dialog - prompt</cube-button>
  ```
  ```js
  export default {
    methods: {
      showAlert() {
        this.dialog = this.$createDialog({
          type: 'prompt',
          title: '我是标题',
          prompt: {
            value: '',
            placeholder: '请输入'
          },
          onConfirm: (e, promptValue) => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: `Prompt value: ${promptValue || ''}`
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  可通过在 confirm 的事件回调的第二个参数获得输入的值。`prompt` 的值为一个对象，内容会被当做 props 传入 [Input 组件](#/zh-CN/docs/input)。

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
| type | 类型 | String | 提示框 alert / 确认框 confirm / 提示输入框 prompt<sup>1.11.0</sup> | alert |
| icon | 图标的 class 名 | String | [参照 style 模块下的内置 icon 部分](#/zh-CN/docs/style) | '' |
| title | 标题 | String | - | '' |
| content | 正文 | String | - | '' |
| showClose | 是否显示关闭按钮 | Boolean | true/false | false |
| confirmBtn | 确认按钮参数配置 | Object/String | - | { text: '确定', active: true, href: 'javascript:;' } |
| cancelBtn | 取消按钮参数配置 | Object/String | - | { text: '取消', active: false, href: 'javascript:;' } |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | false |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | - | 100 |
| prompt<sup>1.11.0</sup> | prompt 配置，可配置的都是 [Input 组件](#/zh-CN/docs/input) 的 prop | Object | - | {} |

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

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| confirm | 点击确认按钮后触发 | 事件对象 e | 类型为 prompt 时，输入的值 promptValue |
| cancel | 点击取消按钮后触发 | 事件对象 e | - |
| close | 点击关闭按钮后触发 | 事件对象 e | - |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
