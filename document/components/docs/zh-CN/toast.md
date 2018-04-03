## Toast

`Toast`组件主要用于非模态信息提醒，无需用户交互。

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

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型(对应不同的 icon) | String | loading/correct/error/warn | loading |
| mask | 遮罩 | Boolean | true/false | false |
| txt | 提示信息 | String | - | '' |
| time | 显示时间 | Number | - | 3000 |

### 事件

| 事件名 | 说明 |
| - | - |
| timeout | 当显示时间结束时派发 |
