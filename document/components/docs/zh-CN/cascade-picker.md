## CascadePicker组件

> 1.2.0 新增

`CascadePicker`组件是级联选择器，用于实现多列选择之间的级联变化。比如，在选择省市区时，当省切换到了江苏省，城市列应该变成江苏省的各个城市，同理，如果城市切换到苏州市，区列的选项也应变成苏州市的各个区，这就级联的意义。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

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

  当第一列选中`Fruit`时，第二列的选项是`Apple`、`Orange`。以此类推，当第二列选中`Orange`时，第三列的选项是`Three`、`Four`。

- 地址选择器

  对于地址选择器，只需要构造出级联选择器的数据结构传入就可以了。

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

- 实例方法 `setData`

  `setData`方法，用于重置`CascadePicker`实例的数据和选中的索引。

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

- 异步加载数据

  当数据量太大时，可能难以在最开始就生成完整的级联数据树。这时，你可以配置 `async` 属性开启异步加载级联数据，在 `change` 事件时，去更新数据，并且在你更新完数据之前，用户点击确认会是无效的。

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

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| data | 级联选择器的树形数据，用于初始化选项 | Array | [] | - |
| selectedIndex | 被选中的索引值，拉起选择器后显示这个索引值对应的内容 | Array | [] | [1] |
| async<sup>1.8.1</sup> | 异步加载数据 | Boolean | false | - |
| title | 标题 | String | '' | - |
| subtitle<sup>1.8.1</sup> | 副标题 | String | '' | - |
| cancelTxt | 取消按钮文案 | String | '取消' | - |
| confirmTxt | 确定按钮文案 | String | '确定' | - |
| swipeTime | 快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 | - |
| alias | 配置`value`和`text`的别名，用法同`Picker`组件 | Object | {} | { value: 'id', text: 'name'} |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | false | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | 100 | - |

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
| show | 显示 | - | - |
| hide | 隐藏 | - | - |
