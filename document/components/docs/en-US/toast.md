## Toast

`Toast` component.You can use it to show non-modal tip message without user interaction.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Duration of display

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

  Set `time` to change the duration of display.If set to 0, the toast will not hide automatically and you must invoke the component's `hide` method manually to hide it.

- Show mask layer

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

  Set `mask` to `true` to display mask.

- Tip type

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
  Set `type` to change the tip icon.You can see accepted types in the following `Props configuration`.

- Show txt only<sup>1.11.0</sup>

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

- Callback

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

  Besides set `onTimeout`.You can pass the callback through `$events` too.

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

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | toast type(different types of icons) | String | loading/correct/error/warn/txt<sup>1.11.0</sup> | loading |
| mask | whether to show mask layer | Boolean | true/false | false |
| txt | tip text | String  | - | '' |
| time | display duration, millisecond | Number | - | 3000 |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | false |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | - | 900 |

### Events

| Event Name | Description |
| - | - |
| timeout | triggers when the display time is out |

### Instance methods

| Method name | Description |
| - | - |
| show | show |
| hide | hide |
