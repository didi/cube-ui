import { VNode } from 'vue'
import { CubeUIComponent } from '../component'
import { BsOption } from 'better-scroll'

interface SlideItem {
  url?: string
  image?: string
}

export interface SlideSlots {
  default: VNode[]
  dots: VNode[]
  [key: string]: VNode[]
}

export declare class CubeSlide extends CubeUIComponent {
  data?: SlideItem[]
  initialIndex?: number
  loop?: boolean
  showDots?: boolean
  autoPlay?: boolean
  interval?: number
  direction?: 'horizontal' | 'vertical'
  options?: BsOption
  threshold?: number
  speed?: number
  allowVertical?: boolean
  stopPropagation?: boolean
  refreshResetCurrent?: boolean
  refresh: () => void
  $slots: SlideSlots
}
