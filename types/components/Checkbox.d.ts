import { CubeUIComponent } from '../component'
import { IRadioOptionData } from './common'

export declare class CubeCheckbox extends CubeUIComponent {
  option?: IRadioOptionData | string | boolean
  position?: 'left' | 'right'
  shape?: 'circle' | 'square'
  hollowStyle?: boolean
  label?: string | boolean
  value?: string | boolean
  disabled?: boolean
}
