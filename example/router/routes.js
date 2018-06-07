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
import Form from '../pages/form/index.vue'
import FormDefault from '../pages/form/default.vue'
import FormCustom from '../pages/form/custom.vue'
import FormClassic from '../pages/form/classic.vue'
import FormFresh from '../pages/form/fresh.vue'
import Picker from '../pages/picker.vue'
import CascadePicker from '../pages/cascade-picker.vue'
import SegmentPicker from '../pages/segment-picker.vue'
import DatePicker from '../pages/date-picker.vue'
import TimePicker from '../pages/time-picker.vue'
import Select from '../pages/select.vue'
import Dialog from '../pages/dialog.vue'
import ActionSheet from '../pages/action-sheet.vue'
import Scroll from '../pages/scroll/index.vue'
import ScrollDefault from '../pages/scroll/default.vue'
import ScrollConfig from '../pages/scroll/config.vue'
import ScrollJd from '../pages/scroll/jd.vue'
import ScrollHerizontal from '../pages/scroll/herizontal.vue'
import ScrollToutiao from '../pages/scroll/toutiao.vue'
import IndexList from '../pages/index-list/index.vue'
import IndexListDefault from '../pages/index-list/default.vue'
import IndexListCustom from '../pages/index-list/custom.vue'
import IndexListPullUpLoad from '../pages/index-list/pull-up-load.vue'
import IndexListPullDownRefresh from '../pages/index-list/pull-down-refresh.vue'
import Upload from '../pages/upload/index.vue'
import UploadDefault from '../pages/upload/default.vue'
import UploadCompress from '../pages/upload/compress.vue'
import UploadCustom from '../pages/upload/custom.vue'
import Validator from '../pages/validator.vue'
import Swipe from '../pages/swipe/index.vue'
import SwipeDefault from '../pages/swipe/default.vue'
import SwipeCustom from '../pages/swipe/custom.vue'
import Drawer from '../pages/drawer/index.vue'
import DrawerDefault from '../pages/drawer/default.vue'
import DrawerCustom from '../pages/drawer/custom.vue'
import Slide from '../pages/slide/index.vue'
import SlideVertical from '../pages/slide/vertical.vue'
import SlideHorizontal from '../pages/slide/horizontal.vue'
import Toolbar from '../pages/toolbar.vue'
import ImagePreview from '../pages/image-preview.vue'

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
    path: '/form',
    component: Form,
    children: [
      {
        path: 'default',
        component: FormDefault
      },
      {
        path: 'custom',
        component: FormCustom
      },
      {
        path: 'classic',
        component: FormClassic
      },
      {
        path: 'fresh',
        component: FormFresh
      }
    ]
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
    path: '/toolbar',
    component: Toolbar
  },
  {
    path: '/image-preview',
    component: ImagePreview
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
    component: Scroll,
    children: [
      {
        path: 'default',
        component: ScrollDefault
      },
      {
        path: 'config',
        component: ScrollConfig
      },
      {
        path: 'jd',
        component: ScrollJd
      },
      {
        path: 'herizontal',
        component: ScrollHerizontal
      },
      {
        path: 'toutiao',
        component: ScrollToutiao
      }
    ]
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
      },
      {
        path: 'pull-up-load',
        component: IndexListPullUpLoad
      },
      {
        path: 'pull-down-refresh',
        component: IndexListPullDownRefresh
      }
    ]
  },
  {
    path: '/upload',
    component: Upload,
    children: [
      {
        path: 'default',
        component: UploadDefault
      },
      {
        path: 'compress',
        component: UploadCompress
      },
      {
        path: 'custom',
        component: UploadCustom
      }
    ]
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
  },
  {
    path: '/drawer',
    component: Drawer,
    children: [
      {
        path: 'default',
        component: DrawerDefault
      },
      {
        path: 'custom',
        component: DrawerCustom
      }
    ]
  },
  {
    path: '/slide',
    component: Slide,
    children: [
      {
        path: 'vertical',
        component: SlideVertical
      },
      {
        path: 'horizontal',
        component: SlideHorizontal
      }
    ]
  }
]

export default routes
