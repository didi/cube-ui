## 单例模式

通过 API 调用组件的时候，需要涉及到组件的单例、多例模式。

- 1.11 版本之后

  单例是相对于某一个组件上下文的，如果说组件是单例的，在同一个组件内多次实例化的时候，只有一个实例，对应的视图层也只存在一份；如果说组件是多例的，那么每次实例化的时候都会产生一个新的实例，且对应的视图也是有多份的，它们之间互不影响。

- 1.11 版本之前

  如果说组件是单例的，在多次实例化的时候，只有一个实例，对应的视图层也只存在一份；如果说组件是多例的，那么每次实例化的时候都会产生一个新的实例，且对应的视图也是有多份的，它们之间互不影响。

在 cube-ui 中涉及到 API 调用的组件都是弹层类，经常使用的如下：

- [Toast 提醒](#/zh-CN/docs/toast)
- [Picker 选择器](#/zh-CN/docs/picker)
- [TimePicker 时间选择器](#/zh-CN/docs/time-picker)
- [Dialog 弹框](#/zh-CN/docs/dialog)
- [ActionSheet 操作菜单](#/zh-CN/docs/action-sheet)

所有的 API 调用都是使用 [create-api](#/zh-CN/docs/create-api) 模块暴露出的 `createAPI` 函数实现，在定义的时候就决定了该组件是否是单例的，详见 [create-api](#/zh-CN/docs/create-api) 文档。

默认情况下，Toast、Dialog 以及 ActionSheet 是单例的，而 Picker 和 TimePicker 是多例的，因为其场景往往比较复杂，有很多额外的数据处理操作，所以是多例的。如果你想在实例化的时候改变默认行为，可以通过设定 `$createX` 的参数中去修改，例如把 Dialog 改为多例的：

```js
const dialog = this.$createDialog({
  type: 'confirm',
  title: 'title',
  content: 'content'
}, false)
dialog.show()
```

在一般情况下，默认行为即可满足需求，除非特殊场景。

**注：** 限于 Picker 和 TimePicker 的场景，不支持单例模式。
