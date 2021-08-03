
import { CubeUIComponent } from '../component'

export type ButtonType = 'button' | 'submit'

export declare class CubeButton extends CubeUIComponent {
  type?: ButtonType
  active?: boolean
  disabled?: boolean
  icon?: string
  light?: string
  inline?: boolean
  outline?: boolean
  primary?: boolean
}
