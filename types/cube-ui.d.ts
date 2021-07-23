import Vue from 'vue'
import { CubeUIComponent } from './component'
import {
  // basic
  CubeButton,
  CubeLoading,
  CubeTip,
  CubeToolbar,
  CubeTabBar,
  CubeTabPanels,
  CubeCheckbox,
  CubeCheckboxGroup,
  CubeRadio,
  CubeRadioGroup,
  CubeChecker,
  CubeInput,
  CubeTextarea,
  CubeSelect,
  CubeSwitch,
  CubeRate,
  CubeValidator,
  CubeUpload,
  CubeForm,
  CubeDrawer,
  CubeScroll,
  CubeSlide,
  CubeIndexList,
  CubeSwipe,
  CubeSticky,
  CubeScrollNavBar,
  CubeScrollNav,
  CubeRecycleList,
  // create-API
  IPopup,
  IToast,
  IPicker,
  ICascadePicker,
  IDatePicker,
  ITimePicker,
  ISegmentPicker,
  IDialog,
  IActionSheet,
  IImagePreview,
  CreateAPIFn
} from './components'
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
export class Button extends CubeButton {}
/** Loading Component */
export class Loading extends CubeLoading {
}
/** Tip Component */
export class Tip extends CubeTip {}
/** Toolbar Component */
export class Toolbar extends CubeToolbar {
}
/** TabBar Component */
export class TabBar extends CubeTabBar {
}
/** TabPanels Component */
export class TabPanels extends CubeTabPanels {}
// form
/** Checkbox Component */
export class Checkbox extends CubeCheckbox {
  ICheckbox: CubeCheckbox
}
/** Checkbox Group Component */
export class CheckboxGroup extends CubeCheckboxGroup {
  ICheckboxGroup: CubeCheckboxGroup
}
/** Checker Component */
export class Checker extends CubeChecker {
  IChecker: CubeChecker
}
/** Radio Component */
export class Radio extends CubeRadio {
  IRadio: CubeRadio
}
/** Radio Group Component */
export class RadioGroup extends CubeRadioGroup {
  IRadioGroup: CubeRadioGroup
}
/** Input Component */
export class Input extends CubeInput {
}
/** Textarea Component */
export class Textarea extends CubeTextarea {}
/** Select Component */
export class Select extends CubeSelect {}
/** Switch Component */
export class Switch extends CubeSwitch {}
/** Rate Component */
export class Rate extends CubeRate {}
/** Validator Component */
export class Validator extends CubeValidator {}
/** Upload Component */
export class Upload extends CubeUpload {}
/** Form Component */
export class Form extends CubeForm {}

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
export class Drawer extends CubeDrawer {}
// scroll
/** Scroll Component */
export class Scroll extends CubeScroll {}
/** Slide Component */
export class Slide extends CubeSlide {}
/** Index List Component */
export class IndexList extends CubeIndexList {}
/** Swipe Component */
export class Swipe extends CubeSwipe {}
/** Sticky Component */
export class Sticky extends CubeSticky {}
/** ScrollNavBar Component */
export class ScrollNavBar extends CubeScrollNavBar {}
/** ScrollNav Component */
export class ScrollNav extends CubeScrollNav {}
/** RecycleList Component */
export class RecycleList extends CubeRecycleList {}

// Vue prototype $createXx
declare module 'vue/types/vue' {
  interface Vue {
    /** create Popup instance */
    $createPopup: CreateAPIFn<IPopup, Popup>
    /** create Toast instance */
    $createToast: CreateAPIFn<IToast, Toast>
    /** create Picker instance */
    $createPicker: CreateAPIFn<IPicker, Picker>
    /** create CascadePicker instance */
    $createCascadePicker: CreateAPIFn<ICascadePicker, CascadePicker>
    /** create DatePicker instance */
    $createDatePicker: CreateAPIFn<IDatePicker, DatePicker>
    /** create TimePicker instance */
    $createTimePicker: CreateAPIFn<ITimePicker, TimePicker>
    /** create SegmentPicker instance */
    $createSegmentPicker: CreateAPIFn<ISegmentPicker, SegmentPicker>
    /** create Dialog instance */
    $createDialog: CreateAPIFn<IDialog, Dialog>
    /** create ActionSheet instance */
    $createActionSheet: CreateAPIFn<IActionSheet, ActionSheet> 
    /** create ImagePreview instance */
    $createImagePreview: CreateAPIFn<IImagePreview, ImagePreview>
  }
}
