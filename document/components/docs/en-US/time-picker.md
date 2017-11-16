## TimePicker

`TimePicker` component provides commonly used functions of date selection.

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
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `selected timestamp ${selectedTime}`,
              content: `selected content ${selectedText}`,
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
          onSelect(selectedTime, selectedText) {
            console.log(selectedTime, selectedText)
          },
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `selected timestamp ${selectedTime}`,
              content: `selected content ${selectedText}`,
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
            format: 'M year d day'
          },
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `selected timestamp: ${selectedTime}`,
              content: `selected content ${selectedText}`,
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
| title | title | String | '选择时间' |
| delay | minutes that postponed backwards from now, which determines the minimal optional time| Number | 15 |
| day | date configuration | Object | { len: 3, filter: ['今日'], format: 'M月d日' } |
| showNow | whether to display current time | Boolean | true |
| minuteStep | step of the minute | Number | 10 |

* `day` sub configuration

| Attribute | Description | Type | Default |
| - | - | - | - |
| len | date column, postpone `len` days backwards from now | Number | 3 |
| filter | date column, map time to the text in filter | Array | ['今日'] |
| format | format time | String | 'M月d日' |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| select | triggers when clicking the confirm button | selectedTime: currently selected timestamp | selectText: text of currently selected time |
| change | triggers when sliding to change time-picker roller | selectedTime: currently selected timestamp | selectText: text of currently selected time |
| cancel | triggers when clicking the cancel button | - | - |

### Instance methods

| Method name | Description | Parameters |
| - | - | - |
| setTime | manually set time displayed in time-picker with with the time stamp as time format | time stamp |
