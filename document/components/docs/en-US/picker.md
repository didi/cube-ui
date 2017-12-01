## Picker

`Picker` component supports multi-column selectors and linkage data.

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

  ```html
  <cube-button @click="showPicker">Multi-column Picker</cube-button>
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
      this.picker = this.$createPicker({
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
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```

  `data` receives an array, whose length determines the columns of `picker`.

- Linkage Picker

  ```html
  <cube-button @click="showPicker">Linkage Picker</cube-button>
  ```
  ```js
  import { provinceList, cityList, areaList } from '../data/area'

  export default {
    data () {
      return {
        tempIndex: [0, 0, 0]
      }
    },
    mounted () {
      this.picker = this.$createPicker({
        title: 'Linkage Picker',
        data: this.linkageData,
        onChange: (i, newIndex) => {
          if (newIndex !== this.tempIndex[i]) {
            for (let j = 2; j > i; j--) {
              this.tempIndex.splice(j, 1, 0)
              this.linkagePicker.scrollTo(j, 0)
            }

            this.tempIndex.splice(i, 1, newIndex)
            this.linkagePicker.setData(this.linkageData, this.tempIndex)
          }
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
    watch: {
      linkageData() {
        this.picker.refresh()
      }
    },
    computed: {
      linkageData() {
        const provinces = provinceList
        const cities = cityList[provinces[this.tempIndex[0]].value]
        const areas = areaList[cities[this.tempIndex[1]].value]

        return [provinces, cities, areas]
      }
    },
    methods: {
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```

  By monitoring the `change` event triggered by each roller and invoke `setData` method to dynamicly set values of associated rollers to accomplish linkage selectors.

- Instance method `setData`

  ```html
  <cube-button @click="showPicker">SetData Picker</cube-button>
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
      this.picker = this.$createPicker({
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
      showPicker () {
        this.picker.setData([col1Data, col2Data, col3Data], [1, 2, 3])
        this.picker.show()
      }
    }
  }
  ```

  Instance method `setData` accepts two parameters, both of whom are arrays. The first is data that the roller displays and the second is indexs of selected values.
  
- Extended component: Date Picker

  Besides use directly, we could extend many common pickers based on the raw Picker, such as Date Picker and Time Picker. As for Extended pickers, the method of API calling is also recommended. Take Date Picker as an example, We wrote a post-packaging Date Picker component ([source code](https://github.com/didi/cube-ui/blob/dev/example/components/date-picker.vue)) at first. And after `createAPI` for this component, it could be used as following.

  ```html
  <cube-button @click="showDatePicker">Date Picker</cube-button>
  ```
  ```js
    import Vue from 'vue'
    import createAPI from '@/modules/create-api'
    import DatePicker from 'example/components/date-picker.vue'
  
    createAPI(Vue, DatePicker, ['select', 'cancel'], false)
  
    export default {
      mounted () {
        this.datePicker = this.$createDatePicker({
          min: [2008, 8, 8],
          max: [2020, 10, 20],
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
        showDatePicker () {
          this.datePicker.show()
        }
      }
    }
  ```
    
### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| title | title | String | '' | - |
| data | data that passed into picker, whose length determines the columns of picker | Array | [] | - |
| cancelTxt | the text of the left button in picker | String | '取消' | - |
| confirmTxt | the text of the right button in picker | String | '确定' | - |
| selectIndex | the index of the selected value, corresponding content will be displayed when picker shows | Array | [] | [1] |

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
