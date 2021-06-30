import { CreateElement, VNode } from 'vue'

export type IRenderFn = (createElement: CreateElement) => VNode|VNode[]
export interface CreateApiFn<O, V> {
  (options: O, single?: boolean):V
  (options: O, renderFn?: IRenderFn,):V
  (options: O, renderFn: IRenderFn, single: boolean):V
}

export * from './Popup'
export * from './ActionSheet'
export * from './Toast'
export * from './Picker'
export * from './CascadePicker'
export * from './DatePicker'
export * from './TimePicker'
export * from './SegmentPicker'
export * from './Dialog'
export * from './ImagePreview'