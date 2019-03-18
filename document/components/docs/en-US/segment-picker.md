## SegmentPicker

> New in 1.7.0+

SegmentPicker is used to achieve multi segment choose, for example, the choose of time period: September 1, 2010 - 2014 June 30th.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  Using the `data` attribute to define the component name and properties of each node picker, `is` represents which Picker component is used, either a Picker component of a Cube UI, or a Picker component defined by yourself. For example, we use two DatePicker components to make time period choose.

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

  In order to implement the Cascade between the two pickers, we can update the second picker in the handle function of the `next` event, according to the first choice. As in here, the minimum value of the end time = the selected start time.

- Express - From - To

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

### Props configuration

| Attribute | Description | Type | Default | Accepted Values |
| - | - | - | - | - |
| data | define the component name and properties of each node picker | Array | [] | - |
| title | title | String | '' | - |
| subtitle<sup>1.8.1</sup> | subtitle | String | '' | - |
| cancelTxt | the text of the cancel button | String | '取消' | - |
| confirmTxt | the text of the confirm button | String | '确定' | - |
| nextTxt | the text of the next button | String | '下一步' | - |
| prevTxt | the text of the prev button | String | '下一步' | - |
| swipeTime<sup>1.8.1</sup> | the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms | Number | 2500 | - |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | 100 | - |

* `data` sub configuration

| Attribute | Description | Type  | Default | Example |
| - | - | - | - | - |
| is | the component name of each node picker | String | cube-picker | cube-date-picker |
| ...rest | the properties of each node picker | - | - | - |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| select | triggers when clicking the confirm button | the parameter 1 of each picker's select event, Array | the parameter 2 of each picker's select event, Array | the parameter 3 of each picker's select event, Array |
| cancel | triggers when clicking the cancel button | - | - | - |
| next | triggers when clicking the next button | the index of current picker, Number | ...rest, is the parameters of current picker's select event | ··· | ··· |
| prev | triggers when clicking the prev button | the index of current picker, Number | - | - | - |
| change | triggers when the roller scrolls | pickerIndex: Number, the index of current picker | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column |

### Methods

| Method name | Description |
| - | - |
| show | show |
| hide | hide |
