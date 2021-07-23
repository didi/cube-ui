import { IRadioOptionData } from './common'
import { CubeUIComponent } from '../component'

export declare class CubeRadio extends CubeUIComponent {
  value?: string | number
  option?: IRadioOptionData | string
  position?: 'left' | 'right'
  hollowStyle?: boolean
}
