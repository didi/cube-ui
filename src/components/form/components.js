import CubeButton from '../button/button.vue'
import CubeCheckbox from '../checkbox/checkbox.vue'
import CubeCheckboxGroup from '../checkbox-group/checkbox-group.vue'
import CubeChecker from '../checker/checker.vue'
import CubeInput from '../input/input.vue'
import CubeRadio from '../radio/radio.vue'
import CubeRadioGroup from '../radio/radio-group.vue'
import CubeRate from '../rate/rate.vue'
import CubeSelect from '../select/select.vue'
import CubeSwitch from '../switch/switch.vue'
import CubeTextarea from '../textarea/textarea.vue'
import CubeUpload from '../upload/upload.vue'

const allComponents = [
  CubeButton,
  CubeCheckbox,
  CubeCheckboxGroup,
  CubeChecker,
  CubeInput,
  CubeRadio,
  CubeRadioGroup,
  CubeRate,
  CubeSelect,
  CubeSwitch,
  CubeTextarea,
  CubeUpload
]

const components = {}
allComponents.forEach((Component) => {
  components[Component.name] = Component
})

export default components
