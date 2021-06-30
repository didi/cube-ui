import { BaseEventHandler } from './common'
import { type } from 'os'

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
export interface ISegmentPicker extends SegmentPickerProps {
  onSelect?: SegmentPickerSelectEventHandler
  onCancel?: BaseEventHandler
  onChange?: SegmentPickerChangeEventHandler
  onNext?: SegmentPickerNextEventHandler
  onPrev?: (pickerIndex: number) => void
  $props?: SegmentPickerProps
  $events?: {
    select?: SegmentPickerSelectEventHandler
    cancel?: BaseEventHandler
    change?: SegmentPickerChangeEventHandler
    next?: SegmentPickerNextEventHandler
    prev?: (pickerIndex: number) => void
  }
}
