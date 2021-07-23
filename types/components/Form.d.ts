import { CubeUIComponent } from '../component'

interface IField {
  type?: string
  component?: string | object
  modelKey?: string
  label?: string
  props?: object
  events?: object
  rules?: object
  trigger?: 'blur' | 'change'
  debounce?: number | boolean
  messages?: string
  key?: string
}

interface IFields {
  fields: IField[]
}

interface IGroups {
  groups: {
    legend?: string
    fields?: IField[]
  }
}

interface IValidity {
  valid?: boolean | undefined
  result?: {}
  dirty?: boolean
}

interface IValidateParams {
  validity?: IValidity
  valid?: boolean | undefined
  invalid?: boolean
  dirty?: boolean
  firstInvalidFieldIndex?: number
}

export declare class CubeForm extends CubeUIComponent {
  model?: object
  schema?: IFields | IGroups
  immediateValidate?: boolean
  action?: string | undefined
  options?: {
    scrollToInvalidField?: boolean
    layout?: 'standard' | 'classic' | 'fresh'
  }
  submitAlwaysValidate?: boolean
  submit: (skipValidate?: boolean) => void
  reset: () => void
  validate: (cb?: Function) => Promise<boolean | undefined> | undefined
}
