## DatePicker 组件

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
| title | 标题 | String | - | '' | - |
| cancelTxt | 取消按钮文案 | String | - | '取消' | - |
| confirmTxt | 确定按钮文案 | String | - | '确定' | - |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | - | 2500 | - |
| alias | 配置`value`和`text`的别名，用法同`Picker`组件 | Object | - | {} | { value: 'id', text: 'name'} |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | date: 当前选中日期，Date 类型 | selectedVal: 当前选中项每一列的值，Array 类型 | selectedText: 当前选中项每一列的文案，Array 类型 |
| cancel | 点击取消按钮触发此事件 | - | - |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number 类型 | selectedIndex: 当前列选中项的索引，Number 类型 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示选择器 |
| hide | 隐藏选择器 |
