/** IToast type */
export interface ToastProps {
  visible?: boolean
  type?: string
  mask?: boolean
  txt?: string
  time?: number
  maskClosable?: boolean
  zIndex?: number
}
export interface IToast extends ToastProps {
  onTimeout?: Function
  $props?: ToastProps
  $events?: {
    timeout?: Function
  }
}