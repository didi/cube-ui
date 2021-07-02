import { Toast } from '../../types/cube-ui'
import Vue from 'vue'

const vm = new Vue()

const timeoutHandler = () => {
  console.log('timeoutHandler')
}
const toast: Toast = vm.$createToast({
  visible: true,
  type: 'error',
  mask: true,
  txt: '加载出错啦',
  time: 0,
  maskClosable: true,
  zIndex: 2,
  onTimeout: timeoutHandler
}, false)

toast.show()
setTimeout(() => {
  if (!toast) {
    return
  }
  toast.hide()
}, 2000)

const toastProps: Toast = vm.$createToast({
  $props: {
    visible: true,
    type: 'error',
    maskClosable: false,
    zIndex: 2
  },
  $events: {
    'timeout': timeoutHandler
  }
})

toastProps.show()
toastProps.hide()
