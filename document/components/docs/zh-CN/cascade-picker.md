## CascadePicker组件

`CascadePicker`组件是级联选择器，用于实现多列选择之间的级联变化。比如，在选择省市区时，当省切换到了江苏省，城市列应该变成江苏省的各个城市，同理，如果城市切换到苏州市，区列的选项也应变成苏州市的各个区，这就级联的意义。

### 示例

- 基本用法

  相比普通选择器，级联选择器需要传入的数据结构是不一样的。普通选择器的数据结构是一个二维数组，每一列对应一个固定的数组，而级联选择器，则需要传入的是一个树形结构，第一列数组的每个选项的children属性，对应着切换到该选项时后续列的数据，从而实现对后续列的改变。如下所示：

  ```html
  <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
  ```
  ```js
  const cascadeData = [
    {
      value: 'Fruit',
      text: 'Fruit',
      children: [
        {
          value: 'Apple',
          text: 'Apple',
          children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
        },
        {
          value: 'Orange',
          text: 'Orange',
          children: [{ value: 3, text: 'Three'}, { value: 4, text: 'Four' }]
        }
      ]
    },
    {
      value: 'Drink',
      text: 'Drink',
      children: [
        {
          value: 'Coffee',
          text: 'Coffee',
          children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
        },
        {
          value: 'Tea',
          text: 'Tea',
          children: [{ value: 1, text: 'One' }, { value: 3, text: 'Three'}]
        }
      ]
    }
  ]
  export default {
    mounted () {
      this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
        data: cascadeData,
        selectedIndex: [1, 0, 0],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          console.log('select', selectedVal, selectedIndex, selectedText)
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      }
    }
  }
  ```
  当第一列选中`Fruit`时，第二列的选项是`Apple`、`Orange`。以此类推，当第二列选中`Orange`时，第三列的选项是`Three`、`Four`。

- 省市区选择器

  对于省市区选择器，只需要构造出级联选择器的数据结构传入就可以了。
  
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
