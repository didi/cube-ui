import { BaseEventHandler, SelectEventHandler, ChangeEventHandler} from './common'

/** ICascadePicker type */
export interface CascadePickerProps {
  data?: any[]
  selectedIndex?: number[]
  async?: boolean
  title?: string
  subtitle?: string
  cancelTxt?: string
  confirmTxt?: string
  swipeTime?: number
  alias?: {
    value?: string
    text?: string
  }
  visible?: boolean
  maskClosable?: boolean
  zIndex?: number
}
export interface ICascadePicker extends CascadePickerProps {
  onSelect?: SelectEventHandler
  onCancel?: BaseEventHandler
  onChange?: ChangeEventHandler
  onMaskClick?: BaseEventHandler
  $props?: CascadePickerProps
  $events?: {
    select?: SelectEventHandler
    cancel?: BaseEventHandler
    change?: ChangeEventHandler
    'mask-click'?: BaseEventHandler
  }
}