import { BaseEventHandler, SelectEventHandler, ChangeEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

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
interface EventsProps {
  select: SelectEventHandler
  cancel: BaseEventHandler
  change: ChangeEventHandler
  'mask-click': BaseEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<CascadePickerProps>

export interface ICascadePicker extends CascadePickerProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
