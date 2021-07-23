import { VNode } from 'vue'
import { CubeUIComponent } from '../component'
import { BsOption } from 'better-scroll'

export interface IndexListSlots {
  title: VNode[]
  pulldown: VNode[]
  pullup: VNode[]
  [key: string]: VNode[]
}

export declare class CubeIndexList extends CubeUIComponent {
  title?: string
  data?: []
  navbar?: boolean
  speed?: number
  options?: BsOption
  pullUpLoad?: boolean | object
  pullDownRefresh?: boolean | object
  $slots: IndexListSlots
}
