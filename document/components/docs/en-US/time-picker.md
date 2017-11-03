## TimerPicker组件

日期选择器。`TimerPicker`组件基于`picker`组件再次封装。第一列为日期，第二列为小时，第三列为分钟数，显示的数据都是依据当前时间，及配置的参数来动态生成。在实现的过程当中，每一列的`picker`都对应一个`better-scroll`的实例，滚轴发生变化后，`picker`向`time-picker`派发`change`事件，再由`time-picker`向父元素派发`change`事件，`cancel`, `select`事件同理。

### 单独引入

```javascript
  import { TimePicker } from 'cube-ui'

  export default {
    components: {
      CubeTimePicker: TimePicker
    }
  }
```

### 调用方式

通过在`time-picker`组件上添加`ref`属性，获得对于组件的引用，然后调用`time-picker`组件向外暴露出来的`show`，`hide`方法来控制组件的显示或消失，`show`能接受回调函数:

```html
  <template>
    <div class="time-picker">
      <cube-time-picker ref="timePicker"></cube-time-picker>
      <cube-button @click="showTimerPicker">拉起time-picker<cube-button>
    </div>
  </template>

  <script>
    export default {
      methods: {
        showTimerPicker () {
          this.$refs.timePicker.show(() => {
            // do something
          })
        }
      }
    }
  </script>
```

### 示例

```html
  <template>
    <div class="select" @click="showTimePicker" ref="selectTime">时间选择器 ...</div>
    <input type="text" v-model="time">
    <button @click="setTime">设置时间</button>
    <cube-time-picker
      ref="timePicker"
      :showNow="showNow"
      :minuteStep="minuteStep"
      @select="handleSelect"
      @change="handleChange"
      @cancel="handleCancel"
      ></cube-time-picker>
  </template>

  <script>
    export default {
      data () {
        return {
          time: 0,
          showNow: true,
          minuteStep: 5,
          day: {
            len: 5,
            filter: ['今天', '明天', '后天'],
            format: 'M月d日'
          }
        }
      },
      methods: {
        setTime () {
          this.$refs.timePicker.setTime(this.time)
        },
        showTimePicker () {
          this.$refs.timePicker.show()
        },
        handleSelect (selectedVal, selectedText) {
          this.$refs.selectTime.innerText = selectedText
        },
        handleChange (selectedVal, selectedText) {
          console.log(selectedVal, selectedText)
        },
        handleCancel () {
          console.log('cancel')
        }
      }
    }
  </script>
```

### API

#### Props参数配置

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------:| -----:| ---|
| title | 标题 | String | '选择时间' |
| delay | 将当前时间向后推算的分钟数，决定了最小可选时间 | 15 |
| day | 日期配置 | Object | { len: 3, filter: ['今日'], format: 'M月d日' } |
| showNow | 是否显示当前时间 | Boolean | true |
| minuteStep | 分钟数的步长 | Number | 10 |

其中`day`属性可配置的参数有：

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------:| ----- | ---|
| len | 日期列，从当前时间算起，往后推len天 | Number | 3 |
| filter | 日期列，将时间映射为filter中的文案内容 | Array | ['今日'] |
| format | 时间格式化 | String | 'M月d日' |

#### Event事件

| 事件名 | 说明 | 参数1 | 参数2 |
| ----- | ---- | ----| --- |
| select | 点击确认按钮触发此事件 | selectedTime: 当前选中的timestamp | selectText: 当前选中的时间文案 |
| change | 滑动改变time-picker滚轴时触发此事件 | selectedTime: 当前选中的timestamp | selectText: 当前选中的时间文案 |
| cancel | 点击取消按钮触发此事件 | - | - |

#### 组件向外暴露方法

| 方法名 | 说明 |
| ----- | ---- |
| show | 拉起time-picker组件 |
| hide | 隐藏time-picker组件 |
| setTime | 手动设置time-picker组件显示的时间，数据格式为unix时间戳 |
