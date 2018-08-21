## Picker

`Picker` component supports multi-column selectors and linkage data.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  ```html
  <cube-button @click="showPicker">Picker</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  export default {
    mounted () {
      this.picker = this.$createPicker({
        title: 'Picker',
        data: [col1Data],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
              - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```

- Multi-column Picker

  `data` receives an array, whose length determines the columns of `picker`.

  ```html
  <cube-button @click="showMutiPicker">Multi-column Picker</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const col2Data = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }, { text: '辅助', value: '辅助' },
    { text: '打野', value: '打野' }, { text: '逃生', value: '逃生' }, { text: '先手', value: '先手' }]
  const col3Data =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' },
    { text: '金箍棒', value: '金箍棒' }]
  export default {
    mounted () {
      this.mutiPicker = this.$createPicker({
        title: 'Multi-column Picker',
        data: [col1Data, col2Data, col3Data],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
              - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showMutiPicker() {
        this.mutiPicker.show()
      }
    }
  }
  ```

- Alias

  You can configure the `alias` of `value` and `text`, such as, use `id` to represent `value`, `name` to represent `text`.

  ```html
  <cube-button @click="showAliasPicker">Use Alias</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.aliasPicker = this.$createPicker({
        title: 'Use Alias',
        data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
        alias: {
          value: 'id',
          text: 'name'
        },
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
              - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showAliasPicker() {
        this.aliasPicker.show()
      }
    }
  }
  ```

- Instance method `setData`

  Instance method `setData` accepts two parameters, both of whom are arrays. The first is data that the roller displays and the second is indexs of selected values.

  ```html
  <cube-button @click="showSetDataPicker">Use SetData</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const col2Data = [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' },
    { text: '金箍棒', value: '金箍棒' }]
  const col3Data = [{ text: '输出', value: '输出'}, { text: '控制', value: '控制' },
    { text: '核心', value: '核心' }, { text: '爆发', value: '爆发'}, { text: '辅助', value: '辅助' }]
  export default {
    mounted () {
      this.setDataPicker = this.$createPicker({
        title: 'Use SetData',
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
              - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showSetDataPicker () {
        this.setDataPicker.setData([col1Data, col2Data, col3Data], [1, 2, 3])
        this.setDataPicker.show()
      }
    }
  }
  ```

- Subtitle

  You could configure subtitle by the property `subtitle`.

  ```html
  <cube-button @click="showSubtitlePicker">Use subtitle</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  export default {
    mounted () {
      this.subtitlePicker = this.$createPicker({
        title: 'Picker',
        subtitle: 'subtitle',
        data: [col1Data],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showSubtitlePicker () {
        this.subtitlePicker.show()
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
