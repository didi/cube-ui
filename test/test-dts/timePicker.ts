import { TimePicker } from '../../types/cube-ui'
import Vue from 'vue'

const root = new Vue()

let timePicker: TimePicker
const selectHandler = (selectedTime: number, selectedText: string, formatedTime: string) => {
  console.log(selectedTime, selectedText, formatedTime)
  root.$createDialog({
    type: 'warn',
    title: `selected time: ${selectedTime}`,
    content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
    icon: 'cubeic-alert'
  }).show()
}
const cancelHandler = () => {
  root.$createToast({
    type: 'correct',
    txt: 'Picker canceled',
    time: 1000
  }).show()
}
const changeHandler = (index: number, selectedIndex: number) => {
  console.log('当前滚动列次序: ', index, '当前列选中项的索引: ', selectedIndex)
}

function showTimePicker() {
  const time = new Date().valueOf() + 1 * 60 * 60 * 1000
  if (!timePicker) {
    timePicker = root.$createTimePicker({
      day: {
        len: 5,
        filter: ['今天', '明天', '后天'],
        format: 'M月D日'
      },
      showNow: true,
      minuteStep: 10,
      delay: 15,
      min: +new Date() - (2 * 60 + 20) * 60 * 1000,
      max: +new Date() + ((5 * 24 + 2) * 60 + 20) * 60 * 1000,
      title: 'timepicker',
      subtitle: 'subtitle',
      cancelTxt: 'cancel',
      confirmTxt: 'ok',
      swipeTime: 2300,
      visible: true,
      maskClosable: true,
      format: 'YY/MM/D hh:mm',
      zIndex: 99,
      onSelect: selectHandler,
      onCancel: cancelHandler,
      onChange: changeHandler
    })
  }
  timePicker.show()
  setTimeout(() => {
    if (!timePicker) {
      return
    }
    timePicker.setTime(time)
    timePicker.$updateProps({
      title: 'updated',
      cancelTxt: '取消'
    })
  }, 3000)
}

function propsClickShow() {
  timePicker = root.$createTimePicker({
    $props: {
      showNow: {
        text: 'now at'
      },
      minuteStep: {
        rule: 'ceil',
        step: 15
      },
      delay: 15,
      day: {
        len: 5,
        filter: ['今天', '明天', '后天'],
        format: 'M月D日'
      }
    },
    $events: {
      select: selectHandler,
      cancel: cancelHandler,
      change: changeHandler
    }
  }).show()
}