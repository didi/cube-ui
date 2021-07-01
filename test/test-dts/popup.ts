import '../../types'
import Vue from 'vue'

console.log(Vue)
const vm = new Vue()

const maskClickHandler = (e) => {
  console.log('maskClickHandler', e)
  if (!Popup) { return }
  Popup.hide()
}
const Popup = vm.$createPopup({
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

Popup.show()
Popup.hide()

const PopupProps = vm.$createPopup({
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

PopupProps.show()
PopupProps.hide()
