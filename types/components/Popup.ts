/** Popup type */
export interface PopupProps {
  visible?: boolean
  type?: string
  mask?: boolean
  content?: string
  center?: boolean
  position?: string
  maskClosable?: boolean
  zIndex?: number
}
export interface IPopup extends PopupProps {
  onMaskClick?: Function
  $props?: PopupProps
  $events?: {
    'mask-click'?: Function
  }
}