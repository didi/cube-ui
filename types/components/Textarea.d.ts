import { CubeUIComponent } from '../component'

interface IIndicator {
  remain?: boolean
  negative?: boolean
}

export declare class CubeTextarea extends CubeUIComponent {
  value?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  placeholder?: string
  autofocus?: boolean
  indicator?: boolean | IIndicator
  autoExpand: boolean
  focus?: (e?: FocusEvent) => void
  blur?: (e?: FocusEvent) => void
}
