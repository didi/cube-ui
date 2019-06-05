## ActionSheet

`ActionSheet` provides two common styles and it is flexible.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  ```html
  <cube-button @click="showDefault">action sheet</cube-button>
  ```
  ```js
  export default {
    methods: {
      showDefault() {
        this.$createActionSheet({
          title: '我是标题~~~',
          data: [
            {
              content: '<em>align - center</em>',
              class: 'cube-foo'
            },
            {
              content: 'align - left',
              align: 'left'
            },
            {
              content: 'align - right',
              align: 'right'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  You can create a basic actionsheet by setting `title` and `data` option. Pay attention that `content` in `data` can be a HTML string. Also, setting the custom class by `class` and setting the align of the item's content by `align`.

- Highlight item

  ```html
  <cube-button @click="showActive">ActionSheet - active</cube-button>
  ```
  ```js
  export default {
    methods: {
      showActive() {
        this.$createActionSheet({
          title: '我是标题~~~',
          active: 0,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  You can control the highlighted item by setting the `active` option.

- Picker style setting

  ```html
  <cube-button @click="showPickerStyle">ActionSheet - picker style</cube-button>
  ```
  ```js
  export default {
    methods: {
      showPickerStyle() {
        this.$createActionSheet({
          title: '我是标题~~~',
          pickerStyle: true,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  You can use Picker style by setting `pickerStyle` to be true.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| title | actionsheet's title | String | - | '' |
| cancelTxt<sup>1.9.9</sup> | the text of the cancel button | String | - | '取消' |
| data | the data list to display | Array | - | [] |
| active | the highlighted item's index | Number | - | -1 |
| pickerStyle | Picker style | Boolean | true/false | false |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | - | 100 |

* `data` sub configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| content | the content to display in the actionsheet's item | String | any text, include HTML | '' |
| align | align the content | String | left/right | '' |
| class | custom class | String | - | '' |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| cancel | triggers when clicking the cancel button | - | - |
| select | triggers when clicking some item | the clicked item - data[index] | the index of the clicked item |

### Instance methods

| Method name | Description |
| - | - |
| show | show |
| hide | hide |
