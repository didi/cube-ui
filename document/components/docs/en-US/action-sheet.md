## ActionSheet

`ActionSheet` provides two common styles and it is flexible.

### Example

- Basic usage

```html
<cube-button @click="showActionSheet">action sheet</cube-button>
```
```js
export default {
  methods: {
    showDefault() {
      this.$createActionSheet({
        title: '我是标题~~~',
        data: [
          {
            content: '<em>舒适型</em>',
            class: 'cube-foo'
          },
          {
            content: '七座商务',
            align: 'left'
          },
          {
            content: '豪华型',
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
        ]
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
        ]
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
| data | the data list to display | Array | - | [] |
| active | the highlighted item's index | Number | - | -1 |
| pickerStyle | Picker style | Boolean | true/false | false |

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
