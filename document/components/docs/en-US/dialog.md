## Dialog

`Dialog`模态框组件，提供了多种样式及交互形式。

### 单独引入

```javascript
  import { Dialog } from 'cube-ui'

  export default {
    components: {
      CubeDialog: Dialog
    }
  }
```

### 调用方式

通过在`dialog`组件上添加`ref`属性，获得对于组件的引用，然后调用`dialog`组件向外暴露出来的`show`，`hide`方法来控制组件的显示或消失:

```html
  <template>
    <div class="dialog">
      <cube-dialog ref="dialog"></cube-dialog>
      <cube-button @click="showDialog">拉起dialog<cube-button>
    </div>
  </template>

  <script>
    export default {
      methods: {
        showDialog () {
          this.$refs.dialog.show()
        }
      }
    }
  </script>
```


### 示例：确认框

```html
  <template>
    <div class="dialog">
      <cube-dialog
        ref="dialog"
        type="confirm"
        icon="mfic-dialog-unwifi"
        title="我是标题"
        text="我是正文"
        @confirm="dialogConfirm"
        @cancel="dialogCancel"
      ></cube-dialog>
    </div>
  </template>

  <script>
    export default {
      methods: {
        showDialog () {
          this.$refs.dialog.show()
        },
        dialogConfirm () {
          console.log('dialog confirm')
        },
        dialogCancel () {
          console.log('dialog cancel')
        }
      }
    }
  </script>
```

### Props参数配置

| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| -----:| ---| ---|
| type | dialog类型 | String | alert(只有1个按钮)/confirm(2个按钮) | alert |
| icon | icon | String | [参照icon列表](http://localhost:8083/#/icon) | - |
| title | 标题 | String | - | - |
| txt | 正文 | String | - | - |
| show-close | 是否显示关闭按钮 | Boolean | true/false | false |
| check | 是否带checkbox | Object | - | - |
| actions | 平级操作 | Array | - | [ ] |
| txts | 正文为列表形式 | Array | - | [ ] |
| link | 文字链接 | String | - | - |
| cancel-btn-content | 取消按钮文案 | String | - | - |
| confirm-btn-content | 确认按钮文案 | String | - | - |
| cancel-btn-href | 取消按钮跳转链接 | String | - | - |
| confirm-btn-href | 确认按钮跳转链接 | String | - | - |
| is-cancel-btn-active | 取消按钮是否高亮 | Boolean | true/false | false |
| is-confirm-btn-active | 确认按钮是否高亮 | Boolean | true/false | true |

其中`check`可配置的属性有:

| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| -----| ---| ---|
| txt | checkbox提示的文案 | String | - | - |
| value | 是否被选中 | Boolean | true/false | false |

`actions`可配置的属性有:

| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| -----| ---| ---|
| text | 显示的文案 | String | - | - |
| active | 是否高亮 | Boolean | true/false | false |
| href | a标签的href属性 | String | - | - |




### Event事件

| 事件名 | 说明 | 参数1 | 参数2 |
| ----- | ---- | ----| ---- |
| confirm | 点击确认按钮后触发 | e (event事件对象) | - |
| cancel | 点击取消按钮后触发 | e (event事件对象) | - |
| close | 点击关闭按钮后触发 | e (event事件对象) | - |
| link-click | 点击文字链接后触发 | e (event事件对象) | - |
| btn-click | 点击actions中配置的按钮后触发 | 被点击的action | e (event事件对象) |
