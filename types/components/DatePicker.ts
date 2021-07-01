import { BaseEventHandler, ChangeEventHandler} from './common'

/** IDatePicker type */
export interface DatePickerProps {
  min?: Date|(number|string)[]
  max?: Date|(number|string)[]
  value?: Date|[]
  startColumn?: string
  columnCount?: number
  format?: {
    year?: string
    month?: string
    date?: string
    hour?: string
    minute?: string
    second?: string
  }
  title?: string
  subtitle?: string
  cancelTxt?: string
  confirmTxt?: string
  swipeTime?: number
  visible?: boolean
  maskClosable?: boolean
  zIndex?: number
  columnOrder?: string[]
}
export interface IDatePicker extends DatePickerProps {
  onSelect?: (date: Date, selectedIndex: [], selectedText: []) => void
  onCancel?: BaseEventHandler
  onChange?: ChangeEventHandler
  $props?: DatePickerProps
  $events?: {
    select?: (date: Date, selectedIndex: [], selectedText: []) => void
    cancel?: BaseEventHandler
    change?: ChangeEventHandler
  }
}