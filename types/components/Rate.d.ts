import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

export interface RateSlots {
  default: VNode[]
  [key: string]: VNode[]
}

export declare class CubeRate extends CubeUIComponent {
  value?: number
  max?: number
  disabled?: boolean
  justify?: boolean
  $slots: RateSlots
}
