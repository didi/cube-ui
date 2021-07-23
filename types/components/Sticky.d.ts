import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

export interface StickySlots {
  default: VNode[]
  fixed: VNode[]
  [key: string]: VNode[]
}

export declare class CubeSticky extends CubeUIComponent {
  pos?: number
  checkTop?: boolean
  fixedShowAni?: string
  offset?: number
  refresh: () => void
  $slots: StickySlots
}
