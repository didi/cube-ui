import { GetPropsAddString, GetTransformFnKeys } from './common'

/** IDialog type */
export interface IDialogBtn {
  text?: string
  active?: boolean
  disabled?: boolean
  href?: string
}
export interface DialogProps {
  type?: string
  icon?: string
  title?: string
  content?: string
  showClose?: boolean
  confirmBtn?: string|IDialogBtn
  cancelBtn?: string|IDialogBtn
  visible?: boolean
  maskClosable?: boolean
  zIndex?: number
  prompt?: {
    value?: string|number
    placeholder?: string
  }
}
type DialogCloseEventHandler = (e: object) => void

type DialogConfirmEventHandler = (e: object, promptValue: string) => void
interface EventsProps {
  cancel?: DialogCloseEventHandler
  confirm?: DialogConfirmEventHandler
  close?: DialogCloseEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<DialogProps>

export interface IDialog extends DialogProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: EventsProps
}