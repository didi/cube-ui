import { BaseEventHandler } from './common'

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
export interface IImagePreview extends ImagePreviewProps {
  onHide?: BaseEventHandler
  onChange?: (index: number) => void
  $props?: ImagePreviewProps
  $events?: {
    hide?: BaseEventHandler
    change?: (index: number) => void
  }

}