import { BaseEventHandler } from './common'
import { type } from 'os'

/** IActionSheet type */
export interface IActionSheetItem {
  content?: string
  align?: string
  class?: string
}
export interface ActionSheetProps {
  title?: string
  cancelTxt?: string
  data?: IActionSheetItem[]
  active?: number
  pickerStyle?: boolean
  visible?: boolean
  maskClosable?: boolean
  zIndex?: number
}
type ActionSheetSelectEventHandler = (item: IActionSheetItem, index: number) => void
export interface IActionSheet extends ActionSheetProps {
  onCancel?: BaseEventHandler
  onSelect?: ActionSheetSelectEventHandler
  $props?: ActionSheetProps
  $events?: {
    cancel?: BaseEventHandler
    select?: ActionSheetSelectEventHandler
  }
}