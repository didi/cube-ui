import { CubeUIComponent } from '../component'

export type DirectionType = 'top' | 'bottom' | 'left' | 'right'

export declare class CubeTip extends CubeUIComponent {
  direction?: DirectionType
  offsetTop?: number | string
  offsetBottom?: number | string
  offsetLeft?: number | string
  offsetRight?: number | string
  visible?: boolean
  close: () => void
  show: () => void
  hide: () => void
}
