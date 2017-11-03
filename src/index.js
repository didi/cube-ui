import {
  Style,
  Button,
  Scroll,
  Popup,
  TimePicker,
  Dialog,
  Tip,
  Toast,
  ActionSheet,
  CheckboxGroup,
  Slide,
  IndexList,
  BScroll,
  createAPI
} from './module'

function install(Vue) {
  if (install.installed) {
    return
  }
  const components = [
    Style,
    Button,
    TimePicker,
    Dialog,
    Tip,
    Toast,
    CheckboxGroup,
    Slide,
    IndexList,
    ActionSheet,
    Scroll,
    Popup
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
