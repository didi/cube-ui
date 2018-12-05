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
          onSelect: (selectedTime, selectedText, formatedTime) => {
            this.$createDialog({
              type: 'warn',
              title: `selected time: ${selectedTime}`,
              content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
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
          onSelect: (selectedTime, selectedText, formatedTime) => {
            this.$createDialog({
              type: 'warn',
              title: `selected time: ${selectedTime}`,
              content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
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

- Format 配置<sup>1.10.0+</sup>

  通过 `format` 属性可配置 `select` 事件的 `formatedTime` 参数的格式。

  ```html
  <cube-button @click="showFormatPicker">Config format</cube-button>
  ```

  ```js
  export default {
    methods: {
      showFormatPicker() {
        if (!this.formatPicker) {
          this.formatPicker = this.$createTimePicker({
            format: 'hh:mm',
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.formatPicker.show()
      },
      selectHandler(selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- 分钟数的步长

  通过 `minuteStep` 属性可配置分钟数的步长，默认为 10 分钟，这样的话，可选的分钟就是 10、20、30、40、50。另外在 v1.10.5+，`minuteStep` 还支持传入一个对象，你可以通过子属性 `rule` 配置取整的规则，是向上取整 `ceil`，向下取整 `floor`，又或是四舍五入`round`。而子属性 `step` 则代表步长。

  ```html
  <cube-button @click="showMinuteStepPicker">Config minute step</cube-button>
  ```

  ```js
  export default {
    methods: {
      showFormatPicker() {
        if (!this.minuteStepPicker) {
          this.minuteStepPicker = this.$createTimePicker({
            minuteStep: {
              rule: 'ceil',
              step: 15
            },
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.minuteStepPicker.show()
      },
      selectHandler(selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```
- 最小可选时间 min <sup>1.12.6</sup>

  你可以通过 `min` 属性设置最小可选时间。它可以接受 Date 类型的日期时间，也可以 Number类型的时间戳。

  ```html
  <cube-button @click="showMinPicker">Config min</cube-button>
  ```

  ```js
  export default {
    methods: {
      showMinPicker() {
        if (!this.minPicker) {
          this.minPicker = this.$createTimePicker({
            min: +new Date() - (2 * 60 + 20) * 60 * 1000,
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.minPicker.show()
      },
      selectHandler(selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- 最大可选时间 max <sup>1.12.6</sup>

  你可以通过 `max` 属性设置最大可选时间。它可以接受 Date 类型的日期时间，也可以 Number类型的时间戳。

  ```html
  <cube-button @click="showMaxPicker">Config max</cube-button>
  ```

  ```js
  export default {
    methods: {
      showMaxPicker() {
        if (!this.maxPicker) {
          this.maxPicker = this.$createTimePicker({
            delay: 0,
            max: +new Date() + ((2 * 24 + 2) * 60 + 20) * 60 * 1000,
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.maxPicker.show()
      },
      selectHandler(selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

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
            format: 'M月D日'
          },
          onSelect: (selectedTime, selectedText, formatedTime) => {
            this.$createDialog({
              type: 'warn',
              title: `selected time: ${selectedTime}`,
              content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
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
| day | 日期配置 | Object | { len: 3, filter: ['今日'], format: 'M月D日' } |
| showNow | 是否显示现在；以及现在选项的文案<sup>1.9.0</sup> | Boolean, Object<sup>1.9.0</sup> | true |
| minuteStep | 分钟数的步长。 当为 Object 时还可以配置取整规则，详见后续 `minuteStep` 子配置项说明<sup>1.10.5</sup> | Number, Object<sup>1.10.5</sup> | 10 |
| delay | 将当前时间向后推算的分钟数，决定了最小可选时间（注：仅当未设置 `min` 时有效） | Number | 15 |
| min<sup>1.12.6</sup> | 最小可选时间 | Date, Number | null |
| max<sup>1.12.6</sup> | 最大可选时间 | Date, Number | null |
| title | 标题 | String | '选择时间' |
| subtitle<sup>1.8.1</sup> | 副标题 | String | '' |
| cancelTxt<sup>1.8.1</sup> | 取消按钮文案 | String | '取消' |
| confirmTxt<sup>1.8.1</sup> | 确定按钮文案 | String | '确定' |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true |
| format<sup>1.10.0</sup> | select 事件参数 formatedTime 的格式 | String | 'YYYY/M/D hh:mm' |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | 100 |

* `day` 子配置项

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| len | 日期列，从当前时间算起，往后推len天（注：仅当未设置 `max` 时有效） | Number | 3 |
| filter | 日期列，将时间映射为filter中的文案内容 | Array | ['今日'] |
| format | 时间格式化 | String | 'M月D日' |

* `showNow` 子配置项<sup>1.9.0</sup>

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| text | 现在选项的文案 | String | '现在' |

* `minuteStep` 子配置项<sup>1.10.5</sup>

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| rule | 取整的规则（仅用于设置最小可选时间的取整规则，对于最大时间，固定为 floor） | String | floor/ceil/round | 'floor' |
| step | 分钟数的步长 | Number | - | 10 |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedTime: 当前选中的timestamp | selectText: 当前选中的时间文案 | formatedTime: 格式化日期<sup>1.10.0</sup> |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 | - |
| cancel | 点击取消按钮触发此事件 | - | - | - |

### 实例方法

| 方法名 | 说明 | 参数 |
| - | - | - |
| setTime | 手动设置time-picker组件显示的时间，数据格式为时间戳 | 时间戳 |
| show | 显示 | - |
| hide | 隐藏 | - |
