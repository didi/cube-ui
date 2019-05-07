## DatePicker

> New in 1.7.0+

DatePicker can be used to choose date, which has flexible configuration for time granularity, such as year - month - date, hour - minute - second, year - month - date - hour - minute - second, year - month, etc.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  You can create a component instance by `$createDatePicker`, and configure `min`, `max` to set the selected date range. the `value` could use to set the current selected date.

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

- Column configuration

  Though column configuration, `DatePicker` get the power of flexible time granularity. There are six columns in total: year, month, date, hour, minute and second. You can configure the starting column and the count of columns by `startColumn` and `columnCount`, such as the default "year - month - date" picker is "three column" starting from "year", and "hour - minute - second" picker is the "three column" starting from "time".

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

- year-month-date-hour-minute-second

  Similarly, if you want year-month-date-hour-minute-second picker, just "six columns" starting from "year"

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

- Format

  You can also configure the date format by the property `format`.

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

  `columnOrder` can be used to change the display order in case where the order is not 'Year-Month-Date Hour-Minute-Second'. For example, we can set the `columnOrder` to `['month', 'date', 'year']` for the display order of 'Month-Date-Year'.

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

  With the `$updateProps` method, you can modify the properties of component instances created by createAPI. For example, in `DatePicker`, we can modify the value of `value` attribute to change the date currently selected.

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

### Props configuration

| Attribute | Description | Type | Accepted Values | Default | Example |
| - | - | - | - | - | - |
| min | the minimum value of optional range | Date, Array | - | new Date(2010, 1, 1) | new Date(2008, 7, 8) |
| max | the maximum value of optional range | Date, Array | - | new Date(2020, 12, 31) | new Date(2020, 9, 20) |
| value | current selected Date | Date, Array | - | the minimum value of optional range | new Date() |
| startColumn | the start column | String | year/month/date/hour/minute/second| year | hour |
| columnCount | the count of column | Number | - | 3 | 6 |
| format<sup>1.8.0+</sup> | date format | Object | - | { year: 'YYYY', month: 'M', date: 'D', hour: 'hh', minute: 'mm', second: 'ss' } | { year: 'YY年', month: 'MM月', date: '第 D 日' } |
| title | title | String | - | '' | - |
| subtitle<sup>1.8.1</sup> | subtitle | String | - | '' | - |
| cancelTxt | the text of the cancel button | String | - | '取消' | - |
| confirmTxt | the text of the confirm button | String | - | '确定' | - |
| swipeTime | the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms | Number | - | 2500 | - |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false | - |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | true | - |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | - | 100 | - |
| columnOrder<sup>1.12.14</sup> | display order | Array | - | ['year', 'month', 'date', 'hour', 'minute', 'second'] | - |

* `format` sub configuration

| Attribute | Description | Type  | Default | Example |
| - | - | - | - | - |
| year | the format of year, `YYYY` represent full year，`YY` only last two digit of year | String | `YYYY` | `YY年` |
| month | the format of month, `M` don't pad 0，`MM` pad 0 | String | `M` | `MM月` |
| date | the format of date, `D` don't pad 0，`DD` pad 0 | String | `D` | `第 D 日` |
| hour | the format of hour, `h` don't pad 0，`hh` pad 0 | String | `hh` | `h点` |
| minute | the format of minute, `m` don't pad 0，`mm` pad 0 | String | `mm` | `mm分` |
| second | the format of second, `s` don't pad 0，`ss` pad 0 | String | `ss` | `ss秒` |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| select | triggers when clicking the confirm button | date: Date, the selected date | selectedVal: Array, the selected value | selectedText: Array, the selected text |
| cancel | triggers when clicking the cancel button | - | - |
| change | triggers when the roller scrolls | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column |

### Methods

| Method name | Description |
| - | - |
| show | show |
| hide | hide |
