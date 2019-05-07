## DatePicker 组件

> 1.7.0 新增

日期选择器，可用于日期选择，选择粒度的灵活配置，如年月日、时分秒、年月日时分秒、年月等。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法

  通过 `$createDatePicker` 创建一个组件实例，配置 `min`、`max` 设定选择的日期范围，还可以通过 `value` 设置当前选择的日期。

  ```html
  <cube-button @click="showDatePicker">Date Picker</cube-button>
  ```
  ```js
  export default {
    methods: {
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: 'Date Picker',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.datePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- 列的配置

  `DatePicker` 有一个非常灵活的能力，就是可以配置列，总共是年、月、日、时、分、秒六种的列，你可以通过 `startColumn` 和 `columnCount` 来配置起始列和列数，比如默认的”年月日“选择，是从“年”开始的“三列”，而时分秒，则是从“时”开始的“三列”。

  ```html
  <cube-button @click="showTimePicker">Time Picker</cube-button>
  ```
  ```js
  export default {
    methods: {
      showTimePicker() {
        if (!this.timePicker) {
          this.timePicker = this.$createDatePicker({
            title: 'Time Picker',
            min: [8, 0, 0],
            max: [20, 59, 59],
            value: new Date(),
            startColumn: 'hour',
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.timePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- 年月日时分秒选择器

  同理，如果想要年月日时分秒选择器，则是以“年”开始的六列。

  ```html
  <cube-button @click="showDateTimePicker">Date Time Picker</cube-button>
  ```
  ```js
  export default {
    methods: {
      showDateTimePicker() {
        if (!this.dateTimePicker) {
          this.dateTimePicker = this.$createDatePicker({
            title: 'Date Time Picker',
            min: new Date(2008, 7, 8, 8, 0, 0),
            max: new Date(2020, 9, 20, 20, 59, 59),
            value: new Date(),
            columnCount: 6,
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.dateTimePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- 日期格式

  你还可以通过 `format` 属性配置日期格式。

  ```html
  <cube-button @click="showFormatPicker">Use format</cube-button>
  ```
  ```js
  export default {
    methods: {
      showFormatPicker() {
        if (!this.formatPicker) {
          this.formatPicker = this.$createDatePicker({
            title: 'Use format',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            format: {
              year: 'YY年',
              month: 'MM月',
              date: '第 D 日'
            },
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.formatPicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

- `columnOrder` <sup>1.12.14</sup>

  针对日期展示格式顺序不是 "年-月-日 小时-分钟-秒" 的场景，可以通过 `columnOrder` 来修改展示顺序。例如日期展示顺序为 “月-日-年”，可配置 `columnOrder` 值为 `['month', 'date', 'year']`

  ```html
  <cube-button @click="showChangeOrderPicker">Date Picker(Change order)</cube-button>
  ```
  ```js
  export default {
    methods: {
      showChangeOrderPicker() {
         if (!this.changeOrderPicker) {
           this.changeOrderPicker = this.$createDatePicker({
             title: 'Date Picker',
             min: new Date(2008, 7, 8),
             max: new Date(2020, 9, 20),
             value: new Date(),
             columnOrder: ['month', 'date', 'year'],
             onSelect: this.selectHandle,
             onCancel: this.cancelHandle
           })
         }
         this.changeOrderPicker.show()
       }
    }
  }
  ```

- `$updateProps`

  通过`$updateProps`方法，可以修改用 createAPI 创建的组件实例的属性。比如 `DatePicker`中，我们可以修改 `value` 属性的值改变当前选择的日期。

  ```html
  <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
  ```
  ```js
  export default {
    methods: {
      showUpdatePropsPicker() {
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createDatePicker({
            title: 'Use $updateProps',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'updated',
            value: new Date(2010, 9, 1)
          })
        }, 1000)
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 示例 |
| - | - | - | - | - | - |
| min | 可选范围的最小值 | Date, Array | - | new Date(2010, 1, 1) | new Date(2008, 7, 8) |
| max | 可选范围的最大值 | Date, Array | - | new Date(2020, 12, 31) | new Date(2020, 9, 20) |
| value | 当前选择的日期 | Date, Array | - | 可选范围的最小值 | new Date() |
| startColumn | 起始列 | String | year/month/date/hour/minute/second| year | hour |
| columnCount | 列数 | Number | - | 3 | 6 |
| format<sup>1.8.0+</sup> | 日期格式 | Object | - | { year: 'YYYY', month: 'M', date: 'D', hour: 'hh', minute: 'mm', second: 'ss' } | { year: 'YY年', month: 'MM月', date: '第 D 日' } |
| title | 标题 | String | - | '' | '时间选择' |
| subtitle<sup>1.8.1</sup> | 副标题 | String | - | '' | - |
| cancelTxt | 取消按钮文案 | String | - | '取消' | '返回' |
| confirmTxt | 确定按钮文案 | String | - | '确定' | '选择' |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | - | 2500 | - |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false | - |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | true | - |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | - | 100 | - |
| columnOrder<sup>1.12.14</sup> | 列的展示顺序 | Array | - | ['year', 'month', 'date', 'hour', 'minute', 'second'] | - |

* `format` 子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| year | 年的格式，`YYYY` 代表完整年份，`YY` 仅年份后两位 | String | `YYYY` | `YY年` |
| month | 月的格式，`M` 不补 0，`MM` 补 0 | String | `M` | `MM月` |
| date | 日的格式，`D` 不补 0，`DD` 补 0 | String | `D` | `第 D 日` |
| hour | 时的格式，`h` 不补 0，`hh` 补 0 | String | `hh` | `h点` |
| minute | 分的格式，`m` 不补 0，`mm` 补 0 | String | `mm` | `mm分` |
| second | 秒的格式，`s` 不补 0，`ss` 补 0 | String | `ss` | `ss秒` |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | date: 当前选中日期，Date 类型 | selectedVal: 当前选中项每一列的值，Array 类型 | selectedText: 当前选中项每一列的文案，Array 类型 |
| cancel | 点击取消按钮触发此事件 | - | - |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number 类型 | selectedIndex: 当前列选中项的索引，Number 类型 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
