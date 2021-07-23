import { VNode } from 'vue'
import { CubeUIComponent } from '../component'

export interface RecycleListSlots {
  default: VNode[]
  tombstone: VNode[]
  item: VNode[]
  spinner: VNode[]
  noMore: VNode[]
  [key: string]: VNode[]
}

export declare class CubeRecycleList extends CubeUIComponent {
  infinite?: boolean
  size?: number
  offset?: number
  onFetch: Promise<any[] | false>
  reset: () => void
  $slots: RecycleListSlots
}
