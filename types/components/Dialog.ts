import { BaseEventHandler } from './common'

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
  prompt?: object
}
type DialogCloseEventHandler = (e: object) => void

type DialogConfirmEventHandler = (e: object, promptValue: string) => void
export interface IDialog extends DialogProps {
  onCancel?: DialogCloseEventHandler
  onConfirm?: DialogConfirmEventHandler
  onClose?: DialogCloseEventHandler
  $props?: DialogProps
  $events?: {
    cancel?: DialogCloseEventHandler
    confirm?: DialogConfirmEventHandler
    close?: DialogCloseEventHandler
  }
}