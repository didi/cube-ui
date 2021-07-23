import { VNode } from 'vue'
import { CubeUIComponent } from '../component'
import { BsOption } from 'better-scroll'

type IScrollEvents = 'scroll' | 'before-scroll-start' | 'scroll-end'

export interface ScrollSlots {
  default: VNode[]
  pulldown: VNode[]
  pullup: VNode[]
  [key: string]: VNode[]
}

export declare class CubeScroll extends CubeUIComponent {
  data?: []
  direction?: 'vertical' | 'horizontal'
  options?: BsOption
  scrollEvents?: IScrollEvents[]
  listenScroll?: boolean
  listenBeforeScroll?: boolean
  refreshDelay?: number
  nestMode?: 'none' | 'native' | 'free'
  scrollTo: (x?: number, y?: number, time?: number, ease?: object) => void
  forceUpdate: (dirty?: boolean, nomore?: boolean) => void
  disable: () => void
  enable: () => void
  resetPullUpTxt: () => void
  refresh: () => void
  $slots: ScrollSlots
}
