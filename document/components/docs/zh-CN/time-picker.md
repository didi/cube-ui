## TimePicker组件

`TimePicker`组件提供了常用的日期选择功能。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法
  ```html
  <cube-button @click="showTimePicker">TimePicker</cube-button>
  ```

  ```js
  export default {
    methods: {
      showTimePicker () {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 15,
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `选中的时间戳是 ${selectedTime}`,
              content: `选中的内容是 ${selectedText}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              txt: 'Picker canceled',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```
  `showNow` 用于控制是否显示“现在”时间，`minuteStep` 用于控制分钟的步长，`delay` 则表示的是当前时间向后推迟的时间，决定了最小可选时间。

- 日期选项配置
  ```html
  <cube-button @click="showTimePicker">TimePicker - day options</cube-button>
  ```

  ```js
  export default {
    methods: {
      showTimePicker () {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 10,
          delay: 10,
          day: {
            len: 5,
            filter: ['今天', '明天'],
            format: 'M月d日'
          },
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `选中的时间戳是 ${selectedTime}`,
              content: `选中的内容是 ${selectedText}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              txt: 'Picker canceled',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```
  `day`字段的`len`属性可以设置第一列需要展示的日期长度；

  `filer`属性设置第一列日期展示的文案；

  `format`属性用以格式化日期显示的方式，当`len`的数量大于`filter`的数组长度时，会以`M月d日`的格式显示文案。

- 手动设置时间
  ```html
  <cube-button @click="showTimePicker">TimePicker - setTime(next hour)</cube-button>
  ```

  ```js
  export default {
    methods: {
      const time = new Date().valueOf() + 1 * 60 * 60 * 1000
      showTimePicker () {
        const timePicker = this.$createTimePicker({
          showNow: true,
          minuteStep: 10,
          delay: 15,
          day: {
            len: 5,
            filter: ['今天', '明天', '后天'],
            format: 'M月d日'
          },
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `选中的时间戳是 ${selectedTime}`,
              content: `选中的内容是 ${selectedText}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              txt: 'Picker canceled',
              time: 1000
            }).show()
          }
        })

        timePicker.setTime(time)
        timePicker.show()
      }
    }
  }
  ```
  `timePicker`实例向外暴露`setTime`方法用以手动设置时间，时间格式为时间戳。当时间戳小于当前时间戳时，`timePicker`实例会默认显示当前时间。

### Props 配置

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| delay | 将当前时间向后推算的分钟数，决定了最小可选时间 | Number | 15 |
| day | 日期配置 | Object | { len: 3, filter: ['今日'], format: 'M月D日' } |
| showNow | 是否显示当前时间 | Boolean | true |
| minuteStep | 分钟数的步长 | Number | 10 |
| title | 标题 | String | '选择时间' |
| subtitle<sup>1.8.1</sup> | 副标题 | String | '' |
| cancelTxt<sup>1.8.1</sup> | 取消按钮文案 | String | '取消' |
| confirmTxt<sup>1.8.1</sup> | 确定按钮文案 | String | '确定' |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | false |

* `day`子配置项

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| len | 日期列，从当前时间算起，往后推len天 | Number | 3 |
| filter | 日期列，将时间映射为filter中的文案内容 | Array | ['今日'] |
| format | 时间格式化 | String | 'M月D日' |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedTime: 当前选中的timestamp | selectText: 当前选中的时间文案 |
| change | 滑动改变time-picker滚轴时触发此事件 | selectedTime: 当前选中的timestamp | selectText: 当前选中的时间文案 |
| cancel | 点击取消按钮触发此事件 | - | - |

### 实例方法

| 方法名 | 说明 | 参数 |
| - | - | - |
| setTime | 手动设置time-picker组件显示的时间，数据格式为时间戳 | 时间戳 |
| show | 显示 | - |
| hide | 隐藏 | - |
