## SegmentPicker 组件

> 1.7.0 新增

段选择器，用于实现多段的选择，比如选择时间段：2010年9月1日 - 2014年6月30日。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法

  通过 `data` 属性定义每个节点选择器的类型和属性，`is` 代表该选择器是用哪种 Picker 组件，既可以是 Cube UI 的 Picker 类组件，也可以是你自己定义的 Picker 组件。比如下面是我们用两个 DatePicker 组件来做时间段选择。

  ```html
  <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button>
  ```
  ```js
  const dateSegmentData = [
    {
      is: 'cube-date-picker',
      title: '入学时间',
      min: new Date(2000, 0, 1),
      max: new Date(2030, 11, 31)
    },
    {
      is: 'cube-date-picker',
      title: '毕业时间',
      min: new Date(2000, 0, 1),
      max: new Date(2030, 11, 31)
    }
  ]

  export default {
    mounted () {
      this.dateSegmentPicker = this.$createSegmentPicker({
        data: dateSegmentData,
        onSelect: (selectedDates, selectedVals, selectedTexts) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Items: <br/> - 入学时间: ${selectedTexts[0].join('')} <br/> - 毕业时间: ${selectedTexts[1].join('')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onNext: (i, selectedDate, selectedValue, selectedText) => {
          dateSegmentData[1].min = selectedDate
          if (i === 0) {
            this.dateSegmentPicker.$updateProps({
              data: dateSegmentData
            })
          }
        }
      })
    },
    methods: {
      showDateSegmentPicker() {
        this.dateSegmentPicker.show()
      }
    }
  }
  ```

  并且为了实现两个选择器之间的联动，我们可以在 next 下一步的事件处理函数中，根据第一个的选择，更新第二个选择器，比如这里是，将结束时间的最小值 = 所选的开始时间。

- 快递 - 寄件地址 - 收件地址

  ```html
  <cube-button @click="showCitySegmentPicker">Express - From - To</cube-button>
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
      this.citySegmentPicker = this.$createSegmentPicker({
        data: [{
          title: '选择快递',
          data: [expressData],
          selectedIndex: [1]
        }, {
          is: 'cube-cascade-picker',
          title: '寄件地址',
          data: cityData,
          selectedIndex: [0, 0, 0],
          cancelTxt: '返回'
        }, {
          is: 'cube-cascade-picker',
          title: '收件地址',
          data: cityData,
          selectedIndex: [0, 0, 0]
        }],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
        nextTxt: 'Next',
        prevTxt: 'Prev',
        onSelect: (selectedVals, selectedIndexs, selectedTexts) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Items: <br/> - 所选快递:  ${selectedTexts[0].join('')} <br/> - 寄件地址: ${selectedTexts[1].join('')} <br/> - 收件地址: ${selectedTexts[2].join('')}`,
            icon: 'cubeic-alert'
          }).show()
        }
      })
    },
    methods: {
      showCitySegmentPicker() {
        this.citySegmentPicker.show()
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| data | 定义各个选择器的组件名和属性 | Array | [] | - |
| nextTxt | 下一步按钮文案 | String | '下一步' | - |
| prevTxt | 上一步按钮文案 | String | '下一步' | - |
| title | 标题 | String | '' | - |
| subtitle<sup>1.8.1</sup> | 副标题 | String | '' | - |
| cancelTxt | 取消按钮文案 | String | '取消' | - |
| confirmTxt | 确定按钮文案 | String | '确定' | - |
| swipeTime<sup>1.8.1</sup> | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 | - |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | 100 | - |

* `data` 子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| is | 该节点选择器的组件名 | String | cube-picker | cube-date-picker |
| 其它 | 该节点选择器的属性 | - | - | - |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | 各个选择器的 select 事件的参数1，Array 类型 | 各个选择器的 select 事件的参数2，Array 类型 | 各个选择器的 select 事件的参数3，Array 类型 |
| cancel | 点击取消按钮触发此事件 | - | - | - |
| next | 点击下一步按钮触发此事件 | 当前 picker 的索引，Number类型 | 其余参数为，当前 picker select 时间的参数 | ··· | ··· |
| prev | 点击上一步按钮触发此事件 | 当前 picker 的索引，Number类型 | - | - | - |
| change | 滚轴滚动后触发此事件 | pickerIndex: 当前滚动 picker 的索引，Number类型 |index: 当前滚动列索引，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 |


### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
