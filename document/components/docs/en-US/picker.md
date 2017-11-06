## Picker

`Picker` component supports multi-column selectors and linkage data.

### Example

- Basic usage

```html
<cube-button @click="showPicker">Picker</cube-button>
```
```js
const col1Data = [{ text: '剧毒', value: 1}, { text: '蚂蚁', value: 2 }, { text: '幽鬼', value: 2 }]
export default {
  mounted () {
    this.picker = this.$createPicker({
      title: 'Picker selectors - single column',
      data: [col1Data]
    })
  },
  methods: {
    showPicker () {
      this.picker.show()
    }
  }
}
```

- Multi-column selectors

```html
<cube-button @click="showPicker">Picker - multiple Columns</cube-button>
```
```js
const col1Data = [{ text: '剧毒', value: 1}, { text: '蚂蚁', value: 2 }, { text: '幽鬼', value: 3 }]
const col2Data = [{ text: '梅肯', value: 's'}, { text: '秘法鞋', value: 'ss' }, { text: '假腿', value: 'sss' }, { text: '飞鞋', value: 'ssss' }, { text: '辉耀', value: 'sssss' }, { text: '金箍棒', value: 'ssssss' }]
export default {
  mounted () {
    this.picker = this.$createPicker({
      title: 'Picker selectors - multiple columns',
      data: [col1Data, col2Data]
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

- Linkage selectors

```html
<cube-button @click="showPicker">Picker - linkage</cube-button>
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
      title: 'Picker - linkage data',
      data: this.linkageData,
      onChange: (i, newIndex) => {
        if (newIndex !== this.tempIndex[i]) {
          for (let j = 2; j > i; j--) {
            this.tempIndex.splice(j, 1, 0)
            this.picker.scrollTo(j, 0)
          }

          this.tempIndex.splice(i, 1, newIndex)
          this.picker.setData(this.linkageData, this.tempIndex)
        }
      },
      onSelect: (selectedVal) => {
        console.log(selectedVal)
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
  }
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
<cube-button @click="showPicker">Picker - setData</cube-button>
```
```js
const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
const col2Data = [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' }, { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' }, { text: '金箍棒', value: '金箍棒' }]
const col3Data = [{ text: '输出', value: '输出'}, { text: '控制', value: '控制' }, { text: '核心', value: '核心' }, { text: '爆发', value: '爆发'}, { text: '辅助', value: '辅助' }]
export default {
  mounted () {
    this.picker = this.$createPicker({
      title: 'Picker-setData'
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

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| select | triggers when clicking the confirm button | selectedVal: Array, values of each columns in current selected item | selectedIndex: Array, indexes of each columns in current selected item |
| change | triggers when the roller scrolls | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column |
| value-change | triggers when confirmed value changes| selectedVal: Array, values of each columns in current confirmed item | selectedIndex: Array, indexes of each columns in current confirmed item |
| cancel | triggers when clicking the cancel button | - | - |

### Instance methods

| Method name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| setData | set options in picker| Array, texts and values of options of each columns of picker | Array, indexes of selected item in each column of picker |
