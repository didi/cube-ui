import { BaseEventHandler, ChangeEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

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
interface EventsProps {
  select?: (selectedTime: number, selectText: string, formatedTime: string) => void
  cancel?: BaseEventHandler
  change?: ChangeEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<TimePickerProps>
export interface ITimePicker extends TimePickerProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: EventsProps
}