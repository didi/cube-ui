import { VNode } from 'vue'
import { CubeUIComponent } from '../component'
import { BsOption } from 'better-scroll'

export interface ScrollNavBarSlots {
  default: VNode[]
  [key: string]: VNode[]
}

export declare class CubeScrollNavBar extends CubeUIComponent {
  direction?: 'horizontal' | 'vertical'
  labels?: []
  txts?: []
  current?: string | number
  options?: BsOption
  refresh: () => void
  $slots: ScrollNavBarSlots
}
