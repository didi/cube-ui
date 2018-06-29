import Style from './modules/style'

// Basic
import Button from './modules/button'
import Loading from './modules/loading'
import Tip from './modules/tip'
import Toolbar from './modules/toolbar'
import TabBar from './modules/tab-bar'
import TabPanels from './modules/tab-panels'

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
import ImagePreview from './modules/image-preview'

// Scroll
import Scroll from './modules/scroll'
import Slide from './modules/slide'
import IndexList from './modules/index-list'
import Swipe from './modules/swipe'
import Sticky from './modules/sticky'
import ScrollNav from './modules/scroll-nav'
import ScrollNavBar from './modules/scroll-nav-bar'

// module
import BetterScroll from './modules/better-scroll'
import createAPI from './modules/create-api'

const FormGroup = Form.Group
const FormItem = Form.Item
const SlideItem = Slide.Item
const Radio = RadioGroup.Radio
const SwipeItem = Swipe.Item
const DrawerPanel = Drawer.Panel
const DrawerItem = Drawer.Item
const StickyEle = Sticky.Ele
const ScrollNavPanel = ScrollNav.Panel
const Tab = TabBar.Tab
const TabPanel = TabPanels.Panel

export {
  // style
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  Tab,
  TabPanels,
  TabPanel,
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
  ImagePreview,
  // scroll
  Scroll,
  SlideItem,
  Slide,
  IndexList,
  SwipeItem,
  Swipe,
  StickyEle,
  Sticky,
  ScrollNavPanel,
  ScrollNav,
  ScrollNavBar,
  // module
  BetterScroll,
  createAPI
}
