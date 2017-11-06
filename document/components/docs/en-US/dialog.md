## Dialog

`Dialog` modal component，provides various styles and interactions.

### Example

- Dialog type

  ```html
  <cube-button @click="showAlert">Dialog - type</cube-button>
  ```
  ```js
  export default {
    methods: {
      showAlert() {
        this.$createDialog({
          type: 'alert',
          title: 'i am title',
          content: 'i am content',
          icon: 'cubeic-alert'
        }).show()
      }
    }
  }
  ```

  `type` will be one of the following: `alert`, `confirm`.

- Button configuration

  ```html
  <cube-button @click="showBtn">Dialog - btn</cube-button>
  ```
  ```js
  export default {
    methods: {
      showBtn() {
        this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          title: 'i am title',
          content: 'i am content',
          confirmBtn: {
            text: 'confirm',
            active: true,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: 'cancel',
            active: false,
            href: 'javascript:;'
          }
        }).show()
      }
    }
  }
  ```

  Button configuration(`confirmBtn`, `cancelBtn`) can be `String` or `Object` type. When given an Object, `text` can be used to set button content，`active` is used to set button highlight state，`href` is used to set the link that will be jumped to when the button is clicked.

- Show close button

  ```html
  <cube-button @click="showClose">Dialog - show close</cube-button>
  ```
  ```js
  export default {
    methods: {
      showClose() {
        this.$createDialog({
          type: 'alert',
          icon: 'cubeic-alert',
          showClose: true,
          title: 'title',
          onClose: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: 'the close button has been clicked'
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  You can change `showClose` to decide whether to show the close button. The `close` event will be dispatched when the close button is clicked and the `onClose` callback will be invoked if it is configured.

- Slot

  ```html
  <cube-button @click="showSlot">Dialog - slot</cube-button>
  ```
  ```js
  export default {
    methods: {
      showSlot() {
        this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: 'got it',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', 'custom title')
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, 'custom content')
          ]
        }).show()
      }
    }
  }
  ```

  The second parameter of `$createDialog` is [render function](https://vuejs.org/v2/guide/render-function.html), generally it is used to handle slots. Dialog component provides 2 named slots `title` and `content` which are used to distribute title and content.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | dialog type | String | alert / confirm | alert |
| icon | icon class name | String | [refer to built-in icons in style module](#/style) | '' |
| title | title | String | - | '' |
| content | content | String | - | '' |
| showClose | whether to show close button | Boolean | true/false | false |
| confirmBtn | confirm button configuration | Object/String | - | { text: '确定', active: true, href: 'javascript:;' } |
| cancelBtn | cancel button configuration | Object/String | - | { text: '取消', active: false, href: 'javascript:;' } |

* `confirmBtn` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| text | button text | String | - | '确认' |
| active | whether to highlight | Boolean | true/false | true |
| href | the link that will be jumped to when the button is clicked | String | - | 'javascript:;' |

* `cancelBtn` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| text | button text | String | - | '取消' |
| active | whether highlight | Boolean | true/false | false |
| href | the link that will be jumped to when the button is clicked | String | - | 'javascript:;' |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| title | title | - |
| content | content | - |

### Events

| Event Name | Description | Parameters |
| - | - | - | - |
| confirm | triggers when the confirm button is clicked | e - event target |
| cancel | triggers when the cancel button is clicked | e - event target |
| close | triggers when the close button is clicked | e - event target |
