import '../../types'
import Vue from 'vue'

const root = new Vue()

let datePicker
function selectHandle(date: Date, selectedVal: [], selectedText: []) {
  console.log('date: ', date.getTime())
  root.$createDialog({
    type: 'warn',
    content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
    icon: 'cubeic-alert'
  }).show()
}
function cancelHandle() {
  root.$createToast({
    type: 'correct',
    txt: 'Picker canceled',
    time: 1000
  }).show()
}
function showDatePicker() {
  if (!datePicker) {
    datePicker = root.$createDatePicker({
      min: new Date(2008, 7, 8),
      max: new Date(2020, 9, 20),
      title: 'Date Picker',
      value: new Date(),
      startColumn: 'year',
      columnCount: 3,
      format: {
        year: 'YYYY年',
        month: 'MM月',
        date: '第 D 日',
        hour: 'hh',
        minute: 'mm',
        second: 's'
      },
      subtitle: 'no props',
      cancelTxt: '返回',
      confirmTxt: '选择',
      swipeTime: 2300,
      visible: true,
      maskClosable: true,
      zIndex: 90,
      columnOrder: ['month', 'date', 'year'],
      onSelect: selectHandle,
      onCancel: cancelHandle,
      onChange: (i, si) => {
        console.log('change', i, si)
      }
    })
  }
  datePicker.show()
  setTimeout(() => {
    if (!datePicker) {
      return
    }
    datePicker.$updateProps({
      title: 'updated',
      value: new Date(2010, 9, 1)
    })
  }, 1000)
}
showDatePicker()
function showPropsDatePicker() {
  root.$createDatePicker({
    $props: {
      title: 'Date Picker',
      min: [2008, 7, 8],
      max: [new Date().getFullYear() + 1, 12, 31, 23, 59, 59],
      value: new Date(),
      format: {
        year: 'YY年',
        month: 'MM月',
        date: '第 D 日'
      },
      columnOrder: ['month', 'date', 'year']
    },
    $events: {
      select: selectHandle,
      cancel: cancelHandle,
      change: (i, si) => {
        console.log('change', i, si)
      }
    }
  }).show()
}
showPropsDatePicker()