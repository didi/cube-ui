import { CubeUIComponent } from '../component'

interface IOptItem {
  value?: any
  text?: string
}
export declare class CubeSelect extends CubeUIComponent {
  value?: any
  options?: IOptItem[]
  placeholder?: string
  autoPop?: boolean
  disabled?: boolean
  title?: string
  cancelTxt?: string
  confirmTxt?: string
}
