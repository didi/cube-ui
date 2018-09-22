## CascadePicker

> New in 1.2.0+

`CascadePicker` component is used to implement the cascading change between picker columns. What is the effect of cascade? Considering the usage of province-city-area picker, when the province is changed, you may want the city column to display the exact cities of current province, so does the area column. And the `CascadePicker` is here to help you handle this.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  Comparing to `Picker`, the required structure of props data is different for `CascadePicker`. The data structure of `Picker` is a two-dimensional array, and each column corresponds to an array. As in `CascadePicker`, we need a tree structure, that each item of first column has a `children` property which contains the corresponding data of following columns. Here is an example.

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
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
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

  When the first column goes to `Fruit`, the data of second column are `Apple` and `Orange`. And so on, when the second column goes to on `Orange`, the data of third column are `Three` and `Four`.

- Address Picker

  For address picker, the only thing you need to do is constructing the cascading data.

  ```html
  <cube-button @click="showAddressPicker">Address Picker</cube-button>
  ```
  ```js
  import { provinceList, cityList, areaList } from 'example/data/area'

  const addressData = provinceList
  addressData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  export default {
    mounted () {
      this.addressPicker = this.$createCascadePicker({
        title: 'City Picker',
        data: addressData,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showAddressPicker() {
        this.addressPicker.show()
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

- Instance method `setData`

  You could use `setData` to reset the cascading data and selected index of `CascadePicker` instance no matter whether the picker is visible.

  ```html
  <cube-button @click="showSetDataPicker">SetData Picker</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showSetDataPicker() {
        // setData when the picker is invisible.
        this.setDataPicker.setData(cascadeData)

        this.setDataPicker.show()
        setTimeout(() => {
          // setData when the picker is visible.
          this.setDataPicker.setData(addressData, [1, 1, 0])
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

- Async load data

  When the data is too large, it will be really hard to construct the whole cascade data tree at beginning. For this case, you could use the property `async` to enable async load data and update the data at the event `change`. Before the data is updated, we will block the confirm handler temporarily.

  ```html
  <cube-button @click="showAsyncPicker">Async Load Data</cube-button>
  ```
  ```js
  import { provinceList, cityList, areaList } from 'example/data/area'

  const asyncData = provinceList
  const asyncSelectedIndex = [0, 0, 0]
  asyncData[0].children = cityList[asyncData[0].value]
  asyncData[0].children[0].children = areaList[asyncData[0].children[0].value]

  export default {
    mounted () {
      this.asyncPicker = this.$createCascadePicker({
        title: 'Async Load Data',
        async: true,
        data: asyncData,
        selectedIndex: asyncSelectedIndex.slice(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle,
        onChange: this.asyncChangeHandle
      })
    },
    methods: {
      showAsyncPicker() {
        this.asyncPicker.show()
      },
      asyncChangeHandle(i, newIndex) {
        if (newIndex !== asyncSelectedIndex[i]) {
          asyncSelectedIndex[i] = newIndex
          // If the first two column is changed, request the data for rest columns.
          if (i < 2) {
            // Mock async load.
            setTimeout(() => {
              if (i === 0) {
                const current = asyncData[newIndex]
                current.children = current.children || cityList[current.value]
                current.children[0].children = current.children[0].children || areaList[current.children[0].value]
                asyncSelectedIndex[1] = 0
                asyncSelectedIndex[2] = 0
              }

              if (i === 1) {
                const current = asyncData[asyncSelectedIndex[0]].children[newIndex]
                current.children = current.children || areaList[current.value]
                asyncSelectedIndex[2] = 0
              }
              this.asyncPicker.setData(asyncData, asyncSelectedIndex)
            }, 500)
          }
        }
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
| data | the cascading data used to init option items | Array | [] | - |
| selectedIndex | the index of the selected item, corresponding content will be displayed when picker shows | Array | [] | [1] |
| async<sup>1.8.1</sup> | async load data | Boolean | false | - |
| title | title | String | '' | - |
| subtitle<sup>1.8.1</sup> | subtitle | String | '' | - |
| cancelTxt | the text of the cancel button | String | '取消' | - |
| confirmTxt | the text of the confirm button | String | '确定' | - |
| swipeTime | the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms | Number | 2500 | - |
| alias | configure the alias of `value` and `text`, used as same as the alias of `Picker` component | Object | {} | { value: 'id', text: 'name'} |
| visible<sup>1.8.1</sup> | whether visible. Bind to `v-model` | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | whether hide the component when clicked the mask layer | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | the value of the style z-index | Number | 100 | - |

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
| show | show | - | - |
| hide | hide | - | - |
| setData | reset the cascading data and selected index | Array, the cascading data | Array, the indexes of selected item in each column |
