import Vue from 'vue'
import { CubeUIComponent } from './component'
import { IPopup, IToast, IPicker, ICascadePicker, IDatePicker, ITimePicker, ISegmentPicker, IDialog, IActionSheet, IImagePreview, CreateApiFn } from './components'
/**
 * CubeUI 组件
 * CubeUI component common definition
 */
export type Component = CubeUIComponent

/**
 * 版本
 *
 * The version of cube-ui
 */
export const version: string

/**
 * 需通过 `Vue.use(Cube)` 来安装
 *
 * Call `Vue.use(Cube)` to install
 */
export function install (vue: typeof Vue): void

/**
 * BetterScroll, https://github.com/ustbhuangyi/better-scroll
 */
export class BScroll {}

/**
 * 可以通过 `createAPI` 创建自己的通过
 * API 形式实例化的组件
 *
 * You use it to create your own API component
 * more details: https://didi.github.io/cube-ui/#/en-US/docs/create-api
 */
export function createAPI (vue: typeof Vue, Component: CubeUIComponent, events?: string[], single?: boolean) : object

/** Local Module */
export class Locale {
  install (vue: typeof Vue): void
  use (lang: string, messages: object): void
}

/** Style Module */
export class Style {}

// basic
/** Button Component */
export class Button extends CubeUIComponent {}
/** Loading Component */
export class Loading extends CubeUIComponent {}
/** Tip Component */
export class Tip extends CubeUIComponent {}
/** Toolbar Component */
export class Toolbar extends CubeUIComponent {}
/** TabBar Component */
export class TabBar extends CubeUIComponent {}
/** TabPanels Component */
export class TabPanels extends CubeUIComponent {}
// form
/** Checkbox Component */
export class Checkbox extends CubeUIComponent {}
/** Checkbox Group Component */
export class CheckboxGroup extends CubeUIComponent {}
/** Checker Component */
export class Checker extends CubeUIComponent {}
/** Radio Component */
export class Radio extends CubeUIComponent {}
/** Radio Group Component */
export class RadioGroup extends CubeUIComponent {}
/** Input Component */
export class Input extends CubeUIComponent {}
/** Textarea Component */
export class Textarea extends CubeUIComponent {}
/** Select Component */
export class Select extends CubeUIComponent {}
/** Switch Component */
export class Switch extends CubeUIComponent {}
/** Rate Component */
export class Rate extends CubeUIComponent {}
/** Validator Component */
export class Validator extends CubeUIComponent {}
/** Upload Component */
export class Upload extends CubeUIComponent {}
/** Form Component */
export class Form extends CubeUIComponent {}

/** base CreatApi CubeUIComponent */
export class CreateApiCubeUIComponent extends CubeUIComponent {
  show(): any
  hide(): any
  remove(): any
  $updateProps(options: object): any
  static $create(options: object): CreateApiCubeUIComponent
}
/** Popup Component */
export class Popup extends CreateApiCubeUIComponent {
  static $create(options: IPopup): Popup
}
/** Toast Component */
export class Toast extends CreateApiCubeUIComponent {
  static $create(options: IToast): Toast
}
/** Picker Component */
export class Picker extends CreateApiCubeUIComponent {
  setData(data: any[], selectedIndex: number[]): any
  static $create(options: IPicker): Picker
}
/** Cascade Picker Component */
export class CascadePicker extends CreateApiCubeUIComponent {
  setData(data: any[], selectedIndex: number[]): any
  static $create(options: ICascadePicker): CascadePicker
}
/** Date Picker Component */
export class DatePicker extends CreateApiCubeUIComponent {
  static $create(options: IDatePicker): DatePicker
}
/** Time Picker Component */

export class TimePicker extends CreateApiCubeUIComponent {
  setTime(time: string|number): any
  static $create(options: ITimePicker): TimePicker
}

/** Segment Picker Component */
export class SegmentPicker extends CreateApiCubeUIComponent {
  static $create(options: ISegmentPicker): SegmentPicker
}

/** Dialog Component */
export class Dialog extends CreateApiCubeUIComponent {
  static $create(options: IDialog): Dialog
}

/** Action Sheet Component */
export class ActionSheet extends CreateApiCubeUIComponent {
  static $create(options: IActionSheet): ActionSheet
}

/** ImagePreview Component */
export class ImagePreview extends CreateApiCubeUIComponent {
  static $create(options: IImagePreview): ImagePreview
}
/** Drawer Component */
export class Drawer extends CubeUIComponent {
  show(): void
  hide(): void
  static $create(options: object): Drawer
}
// scroll
/** Scroll Component */
export class Scroll extends CubeUIComponent {}
/** Slide Component */
export class Slide extends CubeUIComponent {}
/** Index List Component */
export class IndexList extends CubeUIComponent {}
/** Swipe Component */
export class Swipe extends CubeUIComponent {}
/** Sticky Component */
export class Sticky extends CubeUIComponent {}
/** ScrollNavBar Component */
export class ScrollNavBar extends CubeUIComponent {}
/** ScrollNav Component */
export class ScrollNav extends CubeUIComponent {}
/** RecycleList Component */
export class RecycleList extends CubeUIComponent {}

// Vue prototype $createXx
declare module 'vue/types/vue' {
  interface Vue {
    /** create Popup instance */
    $createPopup: CreateApiFn<IPopup, Popup>
    /** create Toast instance */
    $createToast: CreateApiFn<IToast, Toast>
    /** create Picker instance */
    $createPicker: CreateApiFn<IPicker, Picker>
    /** create CascadePicker instance */
    $createCascadePicker: CreateApiFn<ICascadePicker, CascadePicker>
    /** create DatePicker instance */
    $createDatePicker: CreateApiFn<IDatePicker, DatePicker>
    /** create TimePicker instance */
    $createTimePicker: CreateApiFn<ITimePicker, TimePicker>
    /** create SegmentPicker instance */
    $createSegmentPicker: CreateApiFn<ISegmentPicker, SegmentPicker>
    /** create Dialog instance */
    $createDialog: CreateApiFn<IDialog, Dialog>
    /** create ActionSheet instance */
    $createActionSheet: CreateApiFn<IActionSheet, ActionSheet> 
    /** create ImagePreview instance */
    $createImagePreview: CreateApiFn<IImagePreview, ImagePreview>
  }
}
