## Toast

`Toast`组件主要用于非模态信息提醒，无需用户交互。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 显示时间设置

  ```html
  <cube-button @click="showToastTime">Toast - time 1s</cube-button>
  <cube-button @click="showToastTime0">Toast - time 0</cube-button>
  ```
  ```js
  export default {
    methods: {
      showToastTime() {
        const toast = this.$createToast({
          time: 1000,
          txt: 'Toast time 1s'
        })
        toast.show()
      },
      showToastTime0() {
        const toast = this.$createToast({
          time: 0,
          txt: 'Toast time 0'
        })
        toast.show()
        setTimeout(() => {
          toast.hide()
        }, 2000)
      }
    }
  }
  ```

  `time` 字段决定了 Toast 显示的时间，如果设置为 `0`，则不会消失，需要手动调用组件的 `hide` 方法。

- 显示遮罩

  ```html
  <cube-button @click="showToastMask">Toast- with mask</cube-button>
  ```
  ```js
  export default {
    methods: {
      showToastMask () {
        const toast = this.$createToast({
          txt: 'Loading...',
          mask: true
        })
        toast.show()
      }
    }
  }
  ```

  `mask` 设置为 `true` 时会显示遮罩。

- 类型设置

  ```html
  <cube-button @click="showToastType">Toast - type</cube-button>
  ```
  ```js
  export default {
    methods: {
      showToastType() {
        const toast = this.$createToast({
          txt: 'Correct',
          type: 'correct'
        })
        toast.show()
      }
    }
  }
  ```

  `type` 字段决定了 Toast 的显示图标类型，具体对应关系，参见下方的 Props 配置。

- 纯文本类型<sup>1.11.0</sup>

  ```html
  <cube-button @click="showToastTxtOnly">Toast - txt only</cube-button>
  ```
  ```js
  export default {
    methods: {
      showToastTxtOnly() {
        this.toast = this.$createToast({
          txt: 'Plain txt',
          type: 'txt'
        })
        this.toast.show()
      }
    }
  }
  ```

- 事件回调

  ```html
  <cube-button @click="showToastCallback">Toast - callback</cube-button>
  ```

  ```js
  export default {
    methods: {
      showToastCallbak() {
        const toast = this.$createToast({
          txt: 'Timeout',
          time: 1000,
          onTimeout: () => {
            console.log('Timeout')
          }
        })
        toast.show()
      }
    }
  }
  ```

  除了设置 `onTimeout` 的形式，还可以通过 `$events` 传入事件回调。

  ```js
  export default {
    methods: {
      showToastCallbak() {
        const toast = this.$createToast({
          txt: 'Timeout',
          time: 1000,
          $events: {
            timeout: () => {
              console.log('Timeout')
            }
          }
        })
        toast.show()
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| type | 类型(对应不同的 icon) | String  | loading/correct/error/warn/txt<sup>1.11.0</sup> | loading |
| mask | 遮罩 | Boolean | true/false | false |
| txt | 提示信息 | String  | - | '' |
| time | 显示时间 | Number  | - | 3000 |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | false |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | - | 900 |

### 事件

| 事件名 | 说明 |
| - | - |
| timeout | 当显示时间结束时派发 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
