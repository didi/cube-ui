## Singleton Pattern

You need to take the singleton and multiton pattern of components into account when invoking the component by API.

- After 1.11

  If the component is singleton, then there will be only one instance when instantiating it multiple times **in same component**, and there is only one corresponding view layer; If the component is multiton, then a new instance will be created each time you instantiate it, and there are multiple corresponding view layers which don't affect each other.

- Below 1.11

  If the component is singleton, then there will be only one instance when instantiating it multiple times, and there is only one corresponding view layer; If the component is multiton, then a new instance will be created each time you instantiate it, and there are multiple corresponding view layers which don't affect each other.

The components that are involved with api-invoking in cube-ui are all popups. Frequently used ones among them are listed below:

- [Toast](#/en-US/docs/toast)
- [Picker](#/en-US/docs/picker)
- [TimePicker](#/en-US/docs/time-picker)
- [Dialog](#/en-US/docs/dialog)
- [ActionSheet](#/en-US/docs/action-sheet)

All the api-invokings are implemented with the `createAPI` function exported by the [create-api](#/en-US/docs/create-api) module. It is decided whether the component is singleton in definition. See details in [create-api](#/en-US/docs/create-api).

By default, Toast, Dialog and ActionSheet is singleton, while Picker and TimePicker is multiton because their scenes tend to be more complex with a lot of extra data processing. If you want to change the default behavior at the time of instantiation,you can modify the parameter of `$createX`. For example, we change the Dialog into multiton:

```js
const dialog = this.$createDialog({
  type: 'confirm',
  title: 'title',
  content: 'content'
}, false)
dialog.show()
```

In general cases, default behavior can meet the demand, except you have special need.

**Note:** Considering the scenes of Picker and TimePicker, neither of them support singleton pattern.
