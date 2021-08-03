import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

type ValidatorType = 'string' | 'number' | 'array' | 'date' | 'email' | 'tel' | 'url'
export interface IValidatorRules {
  required: boolean
  type?: ValidatorType
  min?: number
  max?: number
  len?: number
  notWhitespace?: boolean
  pattern?: RegExp
  custom?: Function
}

export interface ValidatorSlots {
  default: VNode[]
  message: VNode[]
  [key: string]: VNode[]
}

export declare class CubeValidator extends CubeUIComponent {
  model?: any
  value?: any
  rules?: IValidatorRules
  messages?: object | string
  immediate?: boolean
  disabled?: boolean
  validate?: (cb?: Function) => any
  addRule?: Function
  addMessage?: Function
  addType?: Function
  addHelper?: Function
  $slots: ValidatorSlots
}
