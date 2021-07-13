import { BaseEventHandler, SelectEventHandler, ChangeEventHandler, GetPropsAddString, GetTransformFnKeys} from './common'
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
interface EventsProps {
  select: SelectEventHandler
  cancel: BaseEventHandler
  change: ChangeEventHandler
  'value-change': SelectEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<PickerProps>

export interface IPicker extends PickerProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
