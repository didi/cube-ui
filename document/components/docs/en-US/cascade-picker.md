## CascadePicker

`CascadePicker` component is used to implement the cascading change between picker columns. What is the effect of cascade? Considering the usage of province-city-area picker, when province is changed, you may want the city column display the exactly cities of current province, so does the area column. And the `CascadePicker` is here to help you handle this.

### Example

- Basic usage

  Comparing to `Picker`, the required structure of props data is different for `CascadePicker`. The data structure of `Picker` is a two-dimensional array, and each column corresponds to an array. As in `CascadePicker`, there is a tree, that each item of first column has a `children` property which contains the counterpart data of following columns. Here is an example.

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
  When first column is on `Fruit`, the options of second column are `Apple` and `Orange`. And so on, when second column is on `Orange`, the options of third column are `Three` and `Four`.

- Province-city-area Picker

  For province-city-area picker, the only thing you need to do is constructing the cascading data.

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
          console.log('select', selectedVal, selectedIndex, selectedText)
        },
        onCancel: () => {
          console.log('cancel')
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

- Date Picker

  It's same to date picker. Just construct the cascading data. Besides, we have written a [`DatePicker` component in example](https://github.com/didi/cube-ui/blob/dev/example/components/date-picker.vue), which could help you constructing the cascade date with start date and end date.

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
          console.log('select', selectedVal, selectedIndex, selectedText)
        },
        onCancel: () => {
          console.log('cancel')
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

- Instance method `setData`

  You could use `setData` to reset the data and selected index of the `CascadePicker` instance whether it's visible.

  ```html
  <cube-button @click="showPicker">SetData Picker</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          console.log('select', selectedVal, selectedIndex, selectedText)
        },
        onCancel: () => {
          console.log('cancel')
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
  One more thing, although `setData` is available when visible. But considering user experience, it is demand to maintain the number of column unchanging when picker is visible.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| title | title | String | '' | - |
| data | the cascading data used to init option items | Array | [] | - |
| selectIndex | the index of the selected item, corresponding content will be displayed when picker shows | Array | [] | [1] |

* `data` sub configuration

| Attribute | Description | Type  | Default | Example |
| - | - | - | - | - |
| text | the displayed text of each item | String/Number | - | - |
| value | the value of each item | String/Number/Boolean | - | - |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| select | triggers when clicking the confirm button | selectedVal: Array, values of each columns in current selected item | selectedIndex: Array, indexes of each columns in current selected item | selectedText: Array, texts of each columns in current selected item |
| change | triggers when the roller scrolls | index: Number, index of current scrolling roller | selectedIndex: Number, index of selected item in current column |
| cancel | triggers when clicking the cancel button | - | - |

### Instance methods

| Method name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| setData | set options in picker| Array, the cascading data | Array, the indexes of selected item in each column |
