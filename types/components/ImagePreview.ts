import { BaseEventHandler, GetPropsAddString, GetTransformFnKeys } from './common'

/** IImagePreview type */
export interface ImagePreviewProps {
  imgs?: any[]
  initialIndex?: number
  'initial-index'?: number
  loop?: boolean
  speed?: number
  zIndex?: number
  preventDefault?: boolean
}
interface EventsProps {
  hide: BaseEventHandler
  change: (index: number) => void
}
type TransfromEventsProps = GetTransformFnKeys<EventsProps>
type AddStringProps = GetPropsAddString<ImagePreviewProps>

export interface IImagePreview extends ImagePreviewProps, TransfromEventsProps {
  $props?: AddStringProps
  $events?: Partial<EventsProps>
}
