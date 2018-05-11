import Style from './modules/style'

// Basic
import Tip from './modules/tip'
import Toolbar from './modules/toolbar'

// Form
import CheckboxGroup from './modules/checkbox-group'
import RadioGroup from './modules/radio'
import Input from './modules/input'
import Textarea from './modules/textarea'
import Select from './modules/select'
import Switch from './modules/switch'
import Rate from './modules/rate'
import Validator from './modules/validator'
import Upload from './modules/upload'
import Form from './modules/form'

// Popup
import Popup from './modules/popup'
import Toast from './modules/toast'
import Dialog from './modules/dialog'
import ActionSheet from './modules/action-sheet'
import Drawer from './modules/drawer'
import DatePicker from './modules/date-picker'
import TimePicker from './modules/time-picker'
import SegmentPicker from './modules/segment-picker'

// Scroll
import Scroll from './modules/scroll'
import Slide from './modules/slide'
import IndexList from './modules/index-list'
import Swipe from './modules/swipe'

// Others
import BScroll from './modules/better-scroll'
import createAPI from './modules/create-api'

const Button = Toolbar.Button
const Loading = Toast.Loading
const Checkbox = CheckboxGroup.Checkbox
const Radio = RadioGroup.Radio
const FormGroup = Form.Group
const FormItem = Form.Item
const DrawerPanel = Drawer.Panel
const DrawerItem = Drawer.Item
const Picker = SegmentPicker.Picker
const CascadePicker = SegmentPicker.CascadePicker
const SlideItem = Slide.Item
const SwipeItem = Swipe.Item

export {
  Style,
  // Basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // Form
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  FormGroup,
  FormItem,
  // Popup
  Popup,
  Toast,
  Picker,
  TimePicker,
  CascadePicker,
  SegmentPicker,
  DatePicker,
  Dialog,
  ActionSheet,
  Drawer,
  DrawerPanel,
  DrawerItem,
  // Scroll
  Scroll,
  Slide,
  SlideItem,
  IndexList,
  Swipe,
  SwipeItem,
  // Others
  BScroll,
  createAPI
}
