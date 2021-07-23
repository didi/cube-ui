import { CubeUIComponent } from '../component'

interface IBtns {
  [key: string]: string | number
  text: string | number
  color: string
}

interface IItem {
  [key: string]: string | number
  value: string | number
  text: string | number
}

interface ISwipeItem {
  item?: IItem
  btns?: IBtns[]
}

export declare class CubeSwipe extends CubeUIComponent {
  data?: ISwipeItem[]
  autoShrink?: boolean
}

export declare class CubeSwipeItem extends CubeUIComponent {
  item?: IItem
  btns?: IBtns
  index?: number
  autoShrink?: boolean
  shrink: () => void
}
