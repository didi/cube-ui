import { Dialog } from '../../types/cube-ui'
import Vue from 'vue'
import { describe } from './helper'
const vm = new Vue()

const cancleHandler = (e: MouseEvent): void => {
    console.log('cancleHandler', e)
}
const confirmHandler = (e: MouseEvent, val = '') => {
  console.log('confirmHandler', e, 'value: ', val)
}
const closeHandler = (e: MouseEvent) => {
  console.log('closeHandler', e)
}

describe('dialog', () => {
  const dialog: Dialog = vm.$createDialog({
    type: 'prompt',
    icon: 'cubeic-alert',
    title: 'dialog 标题',
    content: '我是正文',
    showClose: true,
    confirmBtn: {
      text: '确认',
      active: false,
      disabled: true,
      href: 'https://didi.github.io/cube-ui/#/zh-CN/docs/dialog'
    },
    cancelBtn: '取消',
    visible: true,
    maskClosable: true,
    zIndex: 2,
    prompt: {
      value: 12,
      placeholder: '请输入'
    },
    onCancel: cancleHandler,
    onConfirm: confirmHandler,
    onClose: closeHandler
  }, (createElement) => {
    return [
      createElement('div', {
        'class': {
          'my-title': true
        },
        slot: 'title'
      }, [
        createElement('div', {
          'class': {
            'my-title-img': true
          }
        }),
        createElement('p', '附近车少,优选出租车将来接您')
      ]),
      createElement('p', {
        'class': {
          'my-content': true
        },
        slot: 'content'
      }, '价格仍按快车计算')
    ]
  }, false)
  dialog.show()
  dialog.hide()
})

describe('dialog $props', () => {
  const dialogProps: Dialog = vm.$createDialog({
    $props: {
      type: 'confirm',
      icon: 'cubeic-alert',
      title: 'dialog 标题',
      content: '我是正文',
      showClose: true,
      confirmBtn: {
        text: '确认'
      },
      cancelBtn: '取消',
      visible: true,
      maskClosable: true
    },
    $events: {
      close: closeHandler,
      confirm: confirmHandler,
      cancel: cancleHandler
    }
  })
  
  dialogProps.show()
  dialogProps.hide()
})
