import { GetPropsAddString, GetTransformFnKeys } from './common'

/** IToast type */
export interface ToastProps {
  visible?: boolean
  type?: string
  mask?: boolean
  txt?: string
  time?: number
  maskClosable?: boolean
  zIndex?: number
}
interface EventsProps {
  timeout: Function
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<ToastProps>
export interface IToast extends ToastProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
