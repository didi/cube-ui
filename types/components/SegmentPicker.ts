import { BaseEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

/** ISegmentPicker type */
export interface SegmentPickerProps {
  data?: object
  nextTxt?: string
  prevTxt?: string
  title?: string
  subtitle?: string
  cancelTxt?: string
  confirmTxt?: string
  swipeTime?: number
  visible?: boolean
  maskClosable?: boolean
  zIndex?: number
}

type SegmentPickerNextEventHandler = (index: number, selectedDate: Date, selectedVals: [], selectedTexts: []) => void

type SegmentPickerChangeEventHandler = (pickerIndex: number, index: number, selectedIndex: number) => void

type SegmentPickerSelectEventHandler = (selectedDates: [], selectedVals: [], selectedTexts: []) => void
interface EventsProps {
  select: SegmentPickerSelectEventHandler
  cancel: BaseEventHandler
  change: SegmentPickerChangeEventHandler
  next: SegmentPickerNextEventHandler
  prev: (pickerIndex: number) => void
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<SegmentPickerProps>

export interface ISegmentPicker extends SegmentPickerProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
