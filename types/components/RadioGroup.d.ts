import { IRadioOptionData } from './common'
import { CubeUIComponent } from '../component'

export declare class CubeRadioGroup extends CubeUIComponent {
  value?: string | number
  options?: IRadioOptionData[] | string
  position?: 'left' | 'right'
  horizontal?: boolean
  colNum?: number
  hollowStyle?: boolean
}
