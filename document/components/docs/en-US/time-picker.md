## TimePicker

`TimePicker` component provides commonly used functions of date selection.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

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
              txt: 'Clicked cancel button',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  `showNow` is uesed to control whether the time "now" is displayed. `minuteStep` is used to control the step of the minute. `delay` represents the time that postponed backwards from now, which determines the minimal optional time.

- Configuration of date options

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
            filter: ['Today', 'Tomorrow'],
            format: 'M year d day'
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
              txt: 'Clicked cancel button',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  `len` attribute in `day` can set the length of date displayed in the first column.

  `filter` attribute can set the text of the date displayed in the first column.

  `format` attribute can set the text in `M year d day` format when the `len` is greater than the length of `filter` array.

- Format<sup>1.10.0+</sup>

  You can use property `format` to configure the format of `formatedTime`, an argument of event `select`.

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

- Min <sup>1.12.6</sup>

  You could use the property `min` to set the min optional time. It could accept a date (Date type) or a timestamp (Number type).

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

- Max <sup>1.12.6</sup>

  You could use the property `max` to set the max optional time. It could accept a date (Date type) or a timestamp (Number type).

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

- Set time manually

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
            filter: ['Today', 'Tomorrow', 'The day after tomorrow'],
            format: 'M year D day'
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
              txt: 'Clicked cancel button',
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

  `timePicker` instance exports `setTime` methos to set time manually with the time stamp as time format. When the time stamp is lower than current time stamp, `timePicker` displays current time by default.


### Props configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| day | date configuration | Object | { len: 3, filter: ['今日'], format: 'M月D日' } |
| showNow | whether to display now; configure the text of option now<sup>1.9.0</sup> | Boolean, Object<sup>1.9.0</sup> | true |
| minuteStep | step of the minute | Number | 10 |
| delay | minutes that postponed backwards from now, which determines the minimal optional time (only effect without setting `min`)| Number | 15 |
| min<sup>1.12.6</sup> | the min optional time | Date, Number | null |
| max<sup>1.12.6</sup> | the max optional time | Date, Number | null |
| title | title | String | '选择时间' |
| subtitle<sup>1.8.1</sup> | subtitle | String | '' |
| cancelTxt<sup>1.8.1</sup> | the text of the cancel button | String | '取消' |
| confirmTxt<sup>1.8.1</sup> | the text of the confirm button | String | '确定' |
| swipeTime | the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms | Number | 2500 |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true |
| format<sup>1.10.0</sup> | the format of formatedTime the third argument of select event | String | 'YYYY/M/D hh:mm' |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | 100 |

* `day` sub configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| len | date column, postpone `len` days backwards from now (only effect without setting `max`) | Number | 3 |
| filter | date column, map time to the text in filter | Array | ['今日'] |
| format | format time | String | 'M月D日' |

* `showNow` sub configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| text<sup>1.9.0</sup> | the text of option now | String | '现在' |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| select | triggers when clicking the confirm button | selectedTime: currently selected timestamp | selectText: text of currently selected time | formatedTime<sup>1.10.0</sup> |
| change | triggers when the roller scrolls | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column | - |
| cancel | triggers when clicking the cancel button | - | - | - |

### Instance methods

| Method name | Description | Parameters |
| - | - | - |
| setTime | manually set time displayed in time-picker with with the time stamp as time format | time stamp |
| show | show | - |
| hide | hide | - |
