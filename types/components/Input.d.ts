import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

interface IClearable {
  visible?: boolean
  blurHidden?: boolean
}

interface IEye {
  open?: boolean
  reverse?: boolean
}

export interface InputSlots {
  prepend: VNode[]
  append: VNode[]
  [key: string]: VNode[]
}

export declare class CubeInput extends CubeUIComponent {
  value?: string | number
  type?: 'text' | 'number' | 'password' | 'date'
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  placeholder?: string
  autofocus?: boolean
  autocomplete?: boolean
  clearable?: boolean | IClearable
  eye?: boolean | IEye
  focus: (e?: FocusEvent) => void
  blur: (e?: FocusEvent) => void
  $slots: InputSlots
}
