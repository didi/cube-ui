import { IRadioOptionData } from './common'
import { CubeUIComponent } from '../component'

export declare class CubeCheckboxGroup extends CubeUIComponent {
  value?: []
  options?: IRadioOptionData[] | string
  horizontal?: boolean
  colNum?: number
  shape?: 'circle' | 'square'
  hollowStyle?: boolean
  min?: number
  max?: number
}
