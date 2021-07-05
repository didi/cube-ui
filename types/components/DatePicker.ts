import { BaseEventHandler, ChangeEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

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
interface EventsProps {
  select?: (date: Date, selectedIndex: [], selectedText: []) => void
  cancel?: BaseEventHandler
  change?: ChangeEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<DatePickerProps>

export interface IDatePicker extends DatePickerProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: EventsProps
}