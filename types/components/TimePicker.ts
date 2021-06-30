import { BaseEventHandler, SelectEventHandler, ChangeEventHandler} from './common'

/** ITimePicker type */
export interface TimePickerProps {
  day?: {
    len?: number
    filter?: (string|number)[]
    format?: string
  }
  showNow?: boolean|{
    text?: string
  }
  minuteStep?: number|{
    rule?: string
    step?: number
  }
  delay?: number
  min?: Date|number
  max?: Date|number
  title?: string
  subtitle?: string
  cancelTxt?: string
  confirmTxt?: string
  swipeTime?: number
  visible?: boolean
  maskClosable?: boolean
  format?: string
  zIndex?: number
}
export interface ITimePicker extends TimePickerProps {
  onSelect?: (selectedTime: number, selectText: string, formatedTime: string) => void
  onCancel?: BaseEventHandler
  onChange?: ChangeEventHandler
  $props?: TimePickerProps
  $events?: {
    select?: (selectedTime: number, selectText: string, formatedTime: string) => void
    cancel?: BaseEventHandler
    change?: ChangeEventHandler
  }
}