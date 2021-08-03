import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

export interface ITabBarData {
  label: string | number
  value?: string | number
  icon?: string
}

export interface TabBarSlots {
  default: VNode[]
  icon: VNode[]
  [key: string]: VNode[]
}

export declare class CubeTabBar extends CubeUIComponent {
  value?: string | number
  data?: ITabBarData[]
  showSlider?: boolean
  inline?: boolean
  useTransition?: boolean
  setSliderTransform: (offset: string | number) => void
  $slots: TabBarSlots
}
