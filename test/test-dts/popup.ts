import { Popup } from '../../types/cube-ui'
import Vue from 'vue'
import { describe } from './helper'

const vm = new Vue()

describe('Popup $props', () => {
  const maskClickHandler = (e: object) => {
    console.log('maskClickHandler', e)
    if (!popup) { return }
    popup.hide()
  }
  const popup: Popup = vm.$createPopup({
    visible: true,
    type: 'prompt',
    mask: true,
    content: '我是正文',
    center: true,
    maskClosable: false,
    zIndex: 2,
    position: 'top',
    onMaskClick: maskClickHandler
  }, false)
  
  popup.show()
  popup.hide()
})

describe('Popup $props', () => {
  const popupProps: Popup = vm.$createPopup({
    $props: {
      visible: true,
      type: 'alert',
      mask: false,
      content: 'my popup content',
      center: true,
      maskClosable: true
    },
    $events: {
      'mask-click': (e: object) => {
        console.log('maskClickHandler', e)
      }
    }
  })
  
  popupProps.show()
  popupProps.hide()
})