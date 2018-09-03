## Picker 选择器

`Picker` 组件也就是选择器，可以用于实现单列或多列选项的选择。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保你基本了解过 [create-api](#/zh-CN/docs/create-api) 的用法。

### 示例

  对于选择器，最基本的是需要定义它可以选择的选项，定义选项的属性是 `data` ，它是一个二维数组，第一维度代表了有多少列，第二维度则代表了每列有哪些选项。

#### 1）单列选择器

  首先，是一个单列选择器的例子：

  ```html
  <cube-button @click="showPicker">Picker</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]

  export default {
    methods: {
      showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: 'Picker',
            data: [column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
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

#### 2）多列选择器

  如果传入了多列数据，则会生成相应的多列选择器。比如以下是一个三列的选择器：

  ```html
  <cube-button @click="showMutiPicker">Multi-column Picker</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const column2 = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }]
  const column3 =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }]

  export default {
    methods: {
      showMutiPicker() {
        if (!this.mutiPicker) {
          this.mutiPicker = this.$createPicker({
            title: 'Multi-column Picker',
            data: [column1, column2, column3],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.mutiPicker.show()
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

#### 3）选项的子属性别名

  有时你可能不希望以 `value` 和 `text` 去定义选项的值和文案，而用别的命名，比如当你的数据来源的命名为 `id` 和 `name` 时，你可能希望直接用  `id` 和 `name` 来定义值和文案。这个时候，你可以使用 `alias` 属性去配置。比如，配置 `value` 的别名为 `id`，`text` 的别名为 `name`。

  ```html
  <cube-button @click="showAliasPicker">Use Alias</cube-button>
  ```
  ```js
  export default {
    methods: {
      showAliasPicker() {
        if (!this.aliasPicker) {
          this.aliasPicker = this.$createPicker({
            title: 'Use Alias',
            data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
            alias: {
              value: 'id',
              text: 'name'
            },
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.aliasPicker.show()
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

#### 4）实例方法 `$updateProps`

  当你需要修改 Picker 某些配置项时，你可以使用实例方法 `$updateProps`，传入你需要更新的属性。

  ```html
  <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
  ```
  ```js
  const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  const column2 = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }]
  const column3 =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }]

  export default {
    methods: {
      showUpdatePropsPicker() {
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createPicker({
            title: 'Use $updateProps',
            data: [column1],
            selectedIndex: [0],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'Updated',
            data: [column1, column2, column3],
            selectedIndex: [1, 2, 3]
          })
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

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| data | 传入 picker 数据，数组的长度决定了 picker 的列数 | Array | [] | - |
| selectedIndex | 被选中的索引值，拉起 picker 后显示这个索引值对应的内容 | Array | [] | [1] |
| title | 标题 | String | '' | - |
| subtitle<sup>1.8.1</sup> | 副标题 | String | '' | - |
| cancelTxt | 取消按钮文案 | String | '取消' | - |
| confirmTxt | 确定按钮文案 | String | '确定' | - |
| swipeTime | 快速滑动 picker 滚轮时，惯性滚动动画的时长，单位：ms | Number | 2500 | - |
| alias | 配置`value`和`text`的别名 | Object | {} | { value: 'id', text: 'name'} |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | 100 | - |

* `data`子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| text | picker每一列展示的文案 | String/Number | - | - |
| value | picker每一列展示的每项文案对应的值 | String/Number/Boolean | - | - |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 |
| value-change | 所确认的值变化时触发此事件 | selectedVal: 当前确认项每一列的值，Array类型 | selectedIndex: 当前确认项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |
| cancel | 点击取消按钮触发此事件 | - | - |

### 实例方法

| 方法名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| setData | 设置picker可选项 | picker每列可选项的文案和值，Array类型 | picker每列选中的索引，Array类型 |
| show | 显示 | - | - |
| hide | 隐藏 | - | - |
