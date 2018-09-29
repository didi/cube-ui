## Picker

`Picker` could use to implementing single or multi-column picker.

__Notice:__ Cause this component used create-api, so you should have basically knowledge of [create-api](#/en-US/docs/create-api) first.

### Example

  As for Picker, the most important thing is how to define the options. The property `data` is used to define options. It's a two-dimensional array, the first dimensional means which columns the picker has, while the second dimensional represent the options of each column.

#### 1\) Single-column Picker

  firstly, there is an example of Single-column Picker:

  ```html
  <cube-button @click="showPicker">Picker</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]

  export default {
    methods: {
      showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: 'Picker',
            data: [column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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

#### 2\) Multi-column Picker

  You can genarate Multi-column Picker by input the data of several columns. For example, here is a three-colunms picker:

  ```html
  <cube-button @click="showMutiPicker">Multi-column Picker</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const column2 = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }]
  const column3 =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }]

  export default {
    methods: {
      showMutiPicker() {
        if (!this.mutiPicker) {
          this.mutiPicker = this.$createPicker({
            title: 'Multi-column Picker',
            data: [column1, column2, column3],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.mutiPicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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

#### 3\) Alias for the sub properties of option

  Sometimes, you may want to use alias to config the value and text of options, instead of `value` and `text`. Think about this, when the name origin data is `id` and `name`, you could use `id` 和 `name` to define value and text directly by using property `alias` to config the alias of `value` as `id`, `text` as `name`.

  ```html
  <cube-button @click="showAliasPicker">Use Alias</cube-button>
  ```
  ```js
  export default {
    methods: {
      showAliasPicker() {
        if (!this.aliasPicker) {
          this.aliasPicker = this.$createPicker({
            title: 'Use Alias',
            data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
            alias: {
              value: 'id',
              text: 'name'
            },
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.aliasPicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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

#### 4\) Method `$updateProps`

  When you need to change some properties of Picker, you could use the method `$updateProps` to input the new properties.

  ```html
  <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const column2 = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }]
  const column3 =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }]

  export default {
    methods: {
      showUpdatePropsPicker() {
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createPicker({
            title: 'Use $updateProps',
            data: [column1],
            selectedIndex: [0],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'Updated',
            data: [column1, column2, column3],
            selectedIndex: [1, 2, 3]
          })
        }, 1000)
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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

| Attribute | Description | Type | Default | Accepted Values |
| - | - | - | - | - |
| data | data that passed into picker, whose length determines the columns of picker | Array | [] | - |
| selectedIndex | the index of the selected value, corresponding content will be displayed when picker shows | Array | [] | [1] |
| title | title | String | '' | - |
| subtitle<sup>1.8.1</sup> | subtitle | String | '' | - |
| cancelTxt | the text of the cancel button | String | '取消' | - |
| confirmTxt | the text of the confirm button | String | '确定' | - |
| swipeTime | the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms | Number | 2500 | - |
| alias | configure the alias of `value` and `text` | Object | {} | { value: 'id', text: 'name'} |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | 100 | - |

* `data` sub configuration

| Attribute | Description | Type  | Default | Example |
| - | - | - | - | - |
| text | the text displayed in each column of picker | String/Number | - | - |
| value | corresponding value of the text displayed in each column of picker | String/Number/Boolean | - | - |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| select | triggers when clicking the confirm button | selectedVal: Array, values of each columns in current selected item | selectedIndex: Array, indexes of each columns in current selected item | selectedText: Array, texts of each columns in current selected item |
| change | triggers when the roller scrolls | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column |
| value-change | triggers when confirmed value changes| selectedVal: Array, values of each columns in current confirmed item | selectedIndex: Array, indexes of each columns in current confirmed item |
| cancel | triggers when clicking the cancel button | - | - |

### Instance methods

| Method name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| setData | set options in picker| Array, texts and values of options of each columns of picker | Array, indexes of selected item in each column of picker |
| show | show | - | - |
| hide | hide | - | - |
