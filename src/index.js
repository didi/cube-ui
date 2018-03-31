import {
  Style,
  Button,
  Scroll,
  Popup,
  TimePicker,
  SegmentPicker,
  DatePicker,
  Select,
  Dialog,
  Tip,
  Toast,
  Input,
  Validator,
  Textarea,
  Rate,
  Form,
  ActionSheet,
  CheckboxGroup,
  RadioGroup,
  Switch,
  Slide,
  IndexList,
  Upload,
  Swipe,
  Drawer,
  BScroll,
  createAPI
} from './module'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [
    Style,
    Button,
    TimePicker,
    SegmentPicker,
    DatePicker,
    Select,
    Dialog,
    Tip,
    Toast,
    Input,
    Validator,
    Textarea,
    Rate,
    CheckboxGroup,
    RadioGroup,
    Switch,
    Form,
    Slide,
    IndexList,
    ActionSheet,
    Scroll,
    Popup,
    Upload,
    Swipe,
    Drawer
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const cube = {
  /* eslint-disable no-undef */
  version: __VERSION__,
  install,
  BScroll,
  createAPI
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default cube
