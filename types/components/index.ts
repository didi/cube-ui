import { CreateElement, VNode } from 'vue'

export type IRenderFn = (createElement: CreateElement) => VNode|VNode[]
export interface CreateAPIFn<O, V> {
  (options: O, single?: boolean):V
  (options: O, renderFn?: IRenderFn,):V
  (options: O, renderFn: IRenderFn, single: boolean):V
}

// basic
export * from './Button'
export * from './Loading'
export * from './Tip'
export * from './Toolbar'
export * from './TabBar'
export * from './TabPanels'
export * from './Checkbox'
export * from './CheckboxGroup'
export * from './Radio'
export * from './RadioGroup'
export * from './Checker'
export * from './Input'
export * from './Textarea'
export * from './Select'
export * from './Switch'
export * from './Rate'
export * from './Validator'
export * from './Upload'
export * from './Form'
export * from './Drawer'
export * from './Scroll'
export * from './Slide'
export * from './IndexList'
export * from './Swipe'
export * from './Sticky'
export * from './ScrollNavBar'
export * from './ScrollNav'
export * from './RecycleList'

// create-API
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
