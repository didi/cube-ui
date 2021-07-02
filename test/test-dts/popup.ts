import { Popup } from '../../types/cube-ui'
import Vue from 'vue'

const vm = new Vue()

const maskClickHandler = (e) => {
  console.log('maskClickHandler', e)
  if (!Popup) { return }
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
    'mask-click': (e) => {
      console.log('maskClickHandler', e)
    }
  }
})

popupProps.show()
popupProps.hide()
