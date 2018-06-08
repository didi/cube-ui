import Style from './modules/style'

// Basic
import Button from './modules/button'
import Loading from './modules/loading'
import Tip from './modules/tip'
import Toolbar from './modules/toolbar'

// Form
import Checkbox from './modules/checkbox'
import CheckboxGroup from './modules/checkbox-group'
import RadioGroup from './modules/radio-group'
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
import Picker from './modules/picker'
import CascadePicker from './modules/cascade-picker'
import DatePicker from './modules/date-picker'
import TimePicker from './modules/time-picker'
import SegmentPicker from './modules/segment-picker'
import Dialog from './modules/dialog'
import ActionSheet from './modules/action-sheet'
import Drawer from './modules/drawer'

// Scroll
import Scroll from './modules/scroll'
import Slide from './modules/slide'
import IndexList from './modules/index-list'
import Swipe from './modules/swipe'

// module
import BetterScroll from './modules/better-scroll'
import createAPI from './modules/create-api'

// tabs
import TabNav from './modules/tab-nav'
import TabContainer from './modules/tab-container'

const FormGroup = Form.Group
const FormItem = Form.Item
const SlideItem = Slide.Item
const Radio = RadioGroup.Radio
const SwipeItem = Swipe.Item
const DrawerPanel = Drawer.Panel
const DrawerItem = Drawer.Item
const TabNavItem = TabNav.Item
const TabContainerItem = TabContainer.Item

export {
  // style
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // form
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
  FormItem,
  FormGroup,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  DrawerItem,
  DrawerPanel,
  Drawer,
  // scroll
  Scroll,
  SlideItem,
  Slide,
  IndexList,
  SwipeItem,
  Swipe,
  // module
  BetterScroll,
  createAPI,
  // tabs
  TabNav,
  TabNavItem,
  TabContainer,
  TabContainerItem
}
