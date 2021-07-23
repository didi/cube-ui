import { VNode } from 'vue'
import { CubeUIComponent } from '../component'
import { BsOption } from 'better-scroll'

export interface ScrollNavSlots {
  default: VNode[]
  prepend: VNode[]
  bar: VNode[]
  [key: string]: VNode[]
}


export declare class CubeScrollNav extends CubeUIComponent {
  data?: []
  side?: boolean
  current?: string | number
  speed?: number
  options?: BsOption
  refresh: () => void
  $slots: ScrollNavSlots
}
