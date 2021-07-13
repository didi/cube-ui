import { ActionSheet } from '../../types/cube-ui'
import Vue from 'vue'
import { describe } from './helper'

console.log(Vue)
const root = new Vue()

const data = [
  {
    content: '舒适型',
    align: 'left',
    class: 'self'
  },
  {
    content: '七座商务',
    align: 'left',
    class: 'self'
  },
  {
    content: '豪华型',
    align: 'left',
    class: 'self'
  }
]
let actionSheet: ActionSheet
const selectHandler = (item: any) => {
  root.$createToast({
    txt: `Clicked ${item.content}`,
    type: 'correct',
    time: 1000
  }).show()
}
const cancelHandler = () => {
  root.$createToast({
    txt: 'Clicked canceled',
    type: 'warn',
    time: 1000
  }).show()
}

describe('ActionSheet', () => {
  actionSheet = root.$createActionSheet({
    title: '我是标题~~~',
    active: 2,
    pickerStyle: true,
    cancelTxt: 'cancel',
    data: data,
    visible: true,
    maskClosable: true,
    zIndex: 99,
    onSelect: selectHandler,
    onCancel: cancelHandler
  })
  actionSheet.show()
  actionSheet.hide()
})

describe('ActionSheet $props', () => {
  root.$createActionSheet({
    $props: {
      title: '我是标题~~~',
      active: 2,
      pickerStyle: true,
      cancelTxt: 'cancel',
      data: data,
      visible: true,
      maskClosable: true,
      zIndex: 99
    },
    $events: {
      select: selectHandler,
      cancel: cancelHandler
    }
  })
})