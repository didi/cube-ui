import { GetPropsAddString, GetTransformFnKeys } from './common'

/** Popup type */
export interface PopupProps {
  visible?: boolean
  type?: string
  mask?: boolean
  content?: string
  center?: boolean
  position?: string
  maskClosable?: boolean
  zIndex?: number
}
interface EventsProps {
  'mask-click': Function
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<PopupProps>

export interface IPopup extends PopupProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
