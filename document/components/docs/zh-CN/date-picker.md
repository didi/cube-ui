## DatePicker组件

日期选择器，可用于日期选择，选择粒度的灵活配置，如年月日、时分秒、年月日时分秒、年月等。

### 示例

- 基本用法

  通过 `$createDatePicker` 创建一个组件实例，配置 `min`、`max` 设定选择的日期范围，还可以通过 `value` 设置当前选择的日期。

  ```html
  <cube-button @click="showDatePicker">Date Picker</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.datePicker = this.$createDatePicker({
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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

- 列的配置

  `DatePicker` 有一个非常灵活的能力，就是可以配置列，总共是年、月、日、时、分、秒六种的列，你可以通过 `beginColumn` 和 `ColumnNumber` 来配置起始列和列是，比如默认的”年月日“选择，是从“年”开始的“三列”，时分秒是从“时”开始的“三列”。
  
  ```html
  <cube-button @click="showCityPicker">City Picker</cube-button>
  ```
  ```js
  import { provinceList, cityList, areaList } from 'example/data/area'
  
  const cityData = provinceList
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })
  
  export default {
    mounted () {
      this.cityPicker = this.$createCascadePicker({
        title: 'City Picker',
        data: cityData,
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
      showCityPicker() {
        this.cityPicker.show()
      }
    }
  }
  ```

- 日期选择器

  日期选择器的原理也是一样，就是构造出级联选择器的数据结构。而且我们还在示例中提供一个[日期选择器组件](https://github.com/didi/cube-ui/blob/dev/example/components/date-picker.vue)，可以传入起始日期和结束日期，帮你生成相应的级联树形数据结构。用法如下：

  ```html
  <cube-button @click="showDatePicker">Date Picker</cube-button>
  ```
  ```js
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
      showDatePicker() {
        this.datePicker.show()
      }
    }
  }
  ```

- 实例方法 `setData`

  `setData`方法，用于重置`CascadePicker`实例的数据和选中的索引。

  ```html
  <cube-button @click="showPicker">SetData Picker</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
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
      showSetDataPicker() {
        // setData when picker is invisible
        this.setDataPicker.setData(cascadeData)
        this.setDataPicker.show()
        setTimeout(() => {
          // setData when picker is visible
          this.setDataPicker.setData(cityData, [1, 1, 0])
        }, 1000)
      }
    }
  }
  ```
  
  值得注意的一点是，虽然不管选择器显示前后，都可以`setData`，但是为了体验，在显示后`setData`，所传入的数据结构，必须与之前的列数相同，也就是说如果之前是三列选择器，显示时`setData`还得是三列。
  
### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| title | 标题 | String | '' | - |
| data | 级联选择器的树形数据，用于初始化选项 | Array | [] | - |
| selectedIndex | 被选中的索引值，拉起选择器后显示这个索引值对应的内容 | Array | [] | [1] |
| cancelTxt | 取消按钮文案 | String | '取消' | - |
| confirmTxt | 确定按钮文案 | String | '确定' | - |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 | - |
| alias | 配置`value`和`text`的别名，用法同`Picker`组件 | Object | {} | { value: 'id', text: 'name'} |

* `data`子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| text | 每个选项展示的文案 | String/Number | - | - |
| value | 每个选项的值 | String/Number/Boolean | - | - |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 |
| cancel | 点击取消按钮触发此事件 | - | - |

### 实例方法

| 方法名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| setData | 重置数据和选中的索引 | 级联树形数据结构，Array类型 | 每列选中的索引，Array类型 |
