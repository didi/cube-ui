import { CubeUIComponent } from '../component'

interface ITabPanelsData {
  label: string | number // 必选
  value?: string | number
}

export declare class CubeTabPanels extends CubeUIComponent {
  value?: string | number
  data?: ITabPanelsData[]
}

export declare class CubeTabPanel extends CubeUIComponent {
  label?: string | number
  value?: string | number
}