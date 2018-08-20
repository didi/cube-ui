## Picker组件

`Picker`组件支持多列选择器及数据联动。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法

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

- 多列选择器

  `data`字段接收一个数组，其长度决定了`picker`的列数。

  ```html
  <cube-button @click="showMutiPicker">Multi-column Picker</cube-button>
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
      this.mutiPicker = this.$createPicker({
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
      showMutiPicker() {
        this.mutiPicker.show()
      }
    }
  }
  ```

- 配置别名

  可通过`alias`属性配置`value`和`text`的别名。如，用`id`代表`value`，用`name`代表`text`。

  ```html
  <cube-button @click="showAliasPicker">Use Alias</cube-button>
  ```
  ```js
  export default {
    mounted () {
      this.aliasPicker = this.$createPicker({
        title: 'Use Alias',
        data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
        alias: {
          value: 'id',
          text: 'name'
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
    methods: {
      showAliasPicker() {
        this.aliasPicker.show()
      }
    }
  }
  ```

- 实例方法 `setData`

  ```html
  <cube-button @click="showSetDataPicker">Use SetData</cube-button>
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
      this.setDataPicker = this.$createPicker({
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
      showSetDataPicker () {
        this.setDataPicker.setData([col1Data, col2Data, col3Data], [1, 2, 3])
        this.setDataPicker.show()
      }
    }
  }
  ```

  实例方法`setData`可接受2个参数，都为数组类型。第一个参数为滚轴需要显示的数据，第二个参数为选中值的索引。

- 副标题

  通过 `subtitle` 属性，设置副标题。

  ```html
  <cube-button @click="showSubtitlePicker">Use subtitle</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' }]
  export default {
    mounted () {
      this.subtitlePicker = this.$createPicker({
        title: 'Picker',
        subtitle: 'subtitle',
        data: [col1Data],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showSubtitlePicker () {
        this.subtitlePicker.show()
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
