import { CubeUIComponent } from '../component'

interface IActions {
  type?: 'button' | 'checkbox'
  text?: string
  checked?: boolean
  action?: string
  icon?: string
}
export declare class CubeToolbar extends CubeUIComponent {
  actions?: IActions[]
  moreActions?: IActions[]
}
