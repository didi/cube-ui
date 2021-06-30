import { BaseEventHandler, SelectEventHandler, ChangeEventHandler} from './common'
/** IPicker type */
export interface PickerProps {
  data?: any[]
  selectedIndex?: number[]
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
export interface IPicker extends PickerProps {
  onSelect?: SelectEventHandler
  onCancel?: BaseEventHandler
  onChange?: ChangeEventHandler
  onValueChange?: SelectEventHandler
  $props?: PickerProps
  $events?: {
    select?: SelectEventHandler
    cancel?: BaseEventHandler
    change?: ChangeEventHandler
    'value-change'?: SelectEventHandler
  }
}