## Action Sheet 操作列表

`action-sheet`可看做是`dialog`的延伸，二者都属于模态框，但是`action-sheet`提供了更多的功能按钮，提供给用户更多的操作选择。`action-sheet`组件提供了2中常见的操作列表类型。

### 单独引入

```javascript
  import { ActionSheet } from 'cube-ui'

  export default {
    components: {
      CubeActionSheet: ActionSheet
    }
  }
```

### 调用方式

通过在`action-sheet`组件上添加`ref`属性，获得对于组件的引用，然后调用`action-sheet`组件向外暴露出来的`show`，`hide`方法来控制组件的显示或消失:

```html
  <template>
    <div class="action-sheet">
      <cube-action-sheet ref="actionSheet"></cube-action-sheet>
      <cube-button @click="showActionSheet">拉起 Action Sheet<cube-button>
    </div>
  </template>

  <script>
    export default {
      methods: {
        showActionSheet () {
          this.$refs.actionSheet.show()
        }
      }
    }
  </script>
```

### 示例

```html
  <template>
    <cube-action-sheet
      ref="actionSheet"
      :data="data"
      :active="actionSheetActiveIndex"
      :title="title"
      @select="handleSelect"
      @cancel="handleCancel"></cube-action-sheet>

    <cube-action-sheet
      ref="actionSheet2"
      :data="data2"
      :active="actionSheetActiveIndex2"
      :title="title"
      :style2="true"
      @select="handleSelect2"
      @cancel="handleCancel"></cube-action-sheet>
    <cube-toast
      ref="toast"
      :txt="toastTxt"
      :time=2000></cube-toast>
  </template>

  <script>
    const data = [
      {
        content: '左对齐',
        align: 'left'
      },
      {
        content: '右对齐',
        align: 'right'
      },
      {
        content: '默认居中对齐'
      },
      {
        content: '自定义样式的内容',
        class: 'orange'
      },
      {
        content: '<i class="didi-icons didi-icons-arrow_lift"></i><span>嵌入了HTML的内容</span>'
      },
      {
        content: '点击我打开一个toast',
        showToast: true
      }
    ]
    const data2 = [
      {
        content: '舒适型'
      },
      {
        content: '七座商务'
      },
      {
        content: '豪华型'
      }
    ]

    export default {
      data () {
        return {
          data: data,
          data2: data2,
          toastTxt: '',
          actionSheetActiveIndex: 2,
          actionSheetActiveIndex2: 0
        }
      },
      methods: {
        showActionSheet() {
          this.$refs.actionSheet.show()
        },
        showActionSheet2() {
          this.$refs.actionSheet2.show()
        },
        handleSelect (item, index) {
          console.log(item.content)
          if (item.showToast) {
            this.showToast(item.content)
          }
          this.actionSheetActiveIndex = index
        },
        handleSelect2 (item, index) {
          console.log(item.content)
          this.actionSheetActiveIndex2 = index
        },
        handleCancel() {
          console.log('action sheet canceled')
        },
        showToast(txt) {
          this.toastTxt = txt
          this.$refs.toast.show()
        }
      }
    }
  </script>
```

### Props参数配置

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------:| ---| ---|
| data | 需要展示的数据 | Array | [ ] |
| active | 高亮的选项 | Number | -1 |
| title | 组件的标题 | String | - |
| pickerStyle | 样式类型是否为picker型 | Boolean | false |

此外，在传入的`data`数组中，每一项为一个`object`，其中可配置的字段如下:

| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| -----:| ---| ---|
| content | 展示的文案内容 | String | 纯文本/html文本 | - |
| align | 展示的文案对齐的方式 | String | left/center/right | center |
| class | 展示文案添加的class属性，用来单独定义样式 | String | - |

### Event事件

| 参数        | 说明           | 参数1 | 参数2 |
| ------------- |:-------------:| --- | --- |
| cancel | 点击取消按钮向父组件传递的事件，同时action-sheet消失 | - | - |
| select | 点击action-sheet某项后向父组件传递的事件，同时action-sheet消失 | 选中项 | 选中项的索引值 |

