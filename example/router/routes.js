import Button from '../pages/button.vue'
import Checkbox from '../pages/checkbox.vue'
import CheckboxGroup from '../pages/checkbox-group.vue'
import Radio from '../pages/radio.vue'
import Switch from '../pages/switch.vue'
import Loading from '../pages/loading.vue'
import Tip from '../pages/tip.vue'
import Popup from '../pages/popup.vue'
import Toast from '../pages/toast.vue'
import Input from '../pages/input.vue'
import Textarea from '../pages/textarea.vue'
import Rate from '../pages/rate.vue'
import Picker from '../pages/picker.vue'
import CascadePicker from '../pages/cascade-picker.vue'
import SegmentPicker from '../pages/segment-picker.vue'
import DatePicker from '../pages/date-picker.vue'
import TimePicker from '../pages/time-picker.vue'
import Select from '../pages/select.vue'
import Dialog from '../pages/dialog.vue'
import ActionSheet from '../pages/action-sheet.vue'
import Scroll from '../pages/scroll.vue'
import Slide from '../pages/slide.vue'
import IndexList from '../pages/index-list/index-list.vue'
import IndexListDefault from '../pages/index-list/default.vue'
import IndexListCustom from '../pages/index-list/custom.vue'
import Upload from '../pages/upload.vue'
import Validator from '../pages/validator.vue'
import Swipe from '../pages/swipe/index.vue'
import SwipeDefault from '../pages/swipe/default.vue'
import SwipeCustom from '../pages/swipe/custom.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/checkbox-group',
    component: CheckboxGroup
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/input',
    component: Input
  },
  {
    path: '/textarea',
    component: Textarea
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/tip',
    component: Tip
  },
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/rate',
    component: Rate
  },
  {
    path: '/picker',
    component: Picker
  },
  {
    path: '/cascade-picker',
    component: CascadePicker
  },
  {
    path: '/segment-picker',
    component: SegmentPicker
  },
  {
    path: '/date-picker',
    component: DatePicker
  },
  {
    path: '/time-picker',
    component: TimePicker
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/action-sheet',
    component: ActionSheet
  },
  {
    path: '/scroll',
    component: Scroll
  },
  {
    path: '/slide',
    component: Slide
  },
  {
    path: '/index-list',
    component: IndexList,
    children: [
      {
        path: 'default',
        component: IndexListDefault
      },
      {
        path: 'custom',
        component: IndexListCustom
      }
    ]
  },
  {
    path: '/upload',
    component: Upload
  },
  {
    path: '/validator',
    component: Validator
  },
  {
    path: '/swipe',
    component: Swipe,
    children: [
      {
        path: 'default',
        component: SwipeDefault
      },
      {
        path: 'custom',
        component: SwipeCustom
      }
    ]
  }
]

export default routes
