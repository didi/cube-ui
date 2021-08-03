import { CubeUIComponent } from '../component'

export interface ICheckerOptionData {
  value?: string | number
  text?: string
  disabled?: boolean
}
export declare class CubeChecker extends CubeUIComponent {
  value?: string | number | ICheckerOptionData[]
  options?: ICheckerOptionData[]
  type?: 'checkbox' | 'radio'
  min?: number
  max?: number
}
