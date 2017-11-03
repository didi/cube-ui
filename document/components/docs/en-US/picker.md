## Picker组件

`Picker`组件支持多列选择器及数据联动。

### 单独引入

```javascript
  import { Picker } from 'cube-ui'

  export default {
    components: {
      CubePicker: Picker
    }
  }
```

### 调用方式

通过在`picker`组件上添加`ref`属性，获得对于组件的引用，然后调用`picker`组件向外暴露出来的`show`，`hide`方法来控制组件的显示或消失，`show`能接受回调函数:

```html
  <template>
    <div class="picker">
      <cube-picker ref="picker"></cube-picker>
      <cube-button @click="showPicker">拉起picker<cube-button>
    </div>
  </template>

  <script>
    export default {
      methods: {
        showPicker () {
          this.$refs.picker.show(() => {
            // do something
          })
        }
      }
    }
  </script>
```

此外，`picker`还暴露出了`setData`和`setSelectedIndex`2个方法，用以动态设置`picker`需要展示的内容，以及当前被选中的值。

```javascript
  const data = [{ text: 'a', value: 1}, { text: 'b', value: 2}]

  this.$refs.picker.setData(data)
  this.$refs.picker.setSelectedIndex([1])
```

### 示例

#### demo1

```html
  <template>
    <button @click="setData">改变单列选择器数据</button>
    <div class="select" @click="showPicker" ref="select0">单列选择器示例 ...</div>
    <cube-picker
      ref="picker0"
      @select="handleSelect"
      :selected-index="selectedIndex[0]"
      :title="title"></cube-picker>
  </template>

  <script>
    let data1 = [{ text: '剧毒', value: 1 }, { text: '蚂蚁', value: 2 }, { text: '幽鬼', value: 3 }, { text: '主宰', value: 4 }]
    let data2 = [{ text: '输出', value: 'a' }, { text: '控制', value: 'b' }, { text: '核心', value: 'c' }, { text: '爆发', value: 'd' }, { text: '辅助', value: 'e' }]
    export default {
      data () {
        return {
          title: '单列选择器',
          selectedIndex: [0],
          data: [data1]
        }
      },
      mounted () {
        this.$nextTick(() => {
          this.$refs.picker0.setData([data1])
          this.$refs.picker0.setSelectedIndex([1])
        })
      },
      showPicker () {
        this.$refs.picker0.show()
      },
      methods () {
        select (selectedVal, selectedIndex) {
          let text = ''
          for (let i = 0; i < this.data.length; i++) {
            text += this.data[i][selectedIndex[i]].text + ' '
          }
          this.$refs.select0.innerText = text
        },
        setData() {
          this.data[0] = [data2]
          this.$refs.picker0.setData([data2])
          this.$refs.picker0.setSelectedIndex([3])
        }
      }
    }
  </script>
```

#### demo2

```html
  <template>
    <div class="select" @click="showPicker" ref="select1">两列选择器示例 ...</div>
    <cube-picker
      ref="picker1"
      @select="handleSelect"
      :data="data[1]"
      :selected-index="selectedIndex"
      :title="title"
      :cancelTxt="englishTxt.cancelTxt"
      :confirmTxt="englishTxt.confirmTxt"></cube-picker>
  </template>

  <script>
    let data1 = [{ text: '剧毒', value: 1 }, { text: '蚂蚁', value: 2 }, { text: '幽鬼', value: 3 }, { text: '主宰', value: 4 }]
    let data2 = [{ text: '输出', value: 'a' }, { text: '控制', value: 'b' }, { text: '核心', value: 'c' }, { text: '爆发', value: 'd' }, { text: '辅助', value: 'e' }]

    export default {
      data () {
        return {
          data: [data1, data2],
          selectedIndex: [1, 2],
          title: '双列选择器',
          englishTxt: {
            cancelTxt: 'cancel',
            confirmTxt: 'confirm'
          }
        }
      },
      methods: {
        showPicker () {
          this.$refs.pick1.show()
        },
        handleSelect (selectedVal, selectedIndex) {
          let text = ''
          for (let i = 0; i < this.data.length; i++) {
            text += this.data[i][selectedIndex[i]].text + ' '
          }
          this.$refs.select1.innerText = text
        }
      }
    }
  </script>
```

### API

#### Props参数配置

| 参数        | 说明           | 类型  | 默认值 | 示例 |
| ----- |----------| -----|---| --- |
| title | 标题 | String | '' | - |
| data | 传入picker数据，数组的长度决定了picker的列数 | Array | [] | - |
| cancelTxt | picker左侧按钮文案 | String | '取消' | - |
| confirmTxt | picker右侧按钮文案 | String | '确定' | - |
| select-index | 被选中的索引值，拉起picker后显示这个索引值对应的内容 | Array | [] | [1] |

其中传入`picker`的`data`数组中，每一项可配置的属性有：

| 参数        | 说明           | 类型  | 默认值 | 示例 |
| ------------- |-------------| -----| ---| ---|
| text | picker每一列展示的文案 | String/Number | - | - |
| value | picker每一列展示的每项文案对应的值 | String/Number/Boolean | - | - |

#### Event事件

| 事件名 | 说明 | 参数1 | 参数2 |
| ----- | ---- | ----| --- |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 |
| change | 滚轴滚动后触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 |
| value-change | 所确认的值变化时触发此事件 | selectedVal: 当前确认项每一列的值，Array类型 | selectedIndex: 当前确认项每一列的索引，Array类型 |
| cancel | 点击取消按钮触发此事件 | - | - |

#### 组件向外暴露方法

| 方法名 | 说明 | 接受的参数1 |
| ----- | ---- | ---- |
| show | 拉起picker组件 | - |
| hide | 隐藏picker组件 | - |
| setData | 设置picker可选项 | picker每列可选项的文案和值，Array类型 |
| setSelectedIndex | 设置picker选中项 | picker每列选中的索引，Array类型 |
