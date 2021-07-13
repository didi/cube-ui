import { BaseEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

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
interface EventsProps {
  cancel: BaseEventHandler
  select: ActionSheetSelectEventHandler
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<ActionSheetProps>

export interface IActionSheet extends ActionSheetProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
