
import { CubeUIComponent } from '../component'

export declare class CubeDrawer extends CubeUIComponent {
  title?: string
  data?: any[]
  selectedIndex?: number[]
  visible?: boolean
  refill: (index?: number, data?: any[], item?: any[]) => void
  show: () => void
  hide: () => void
}
