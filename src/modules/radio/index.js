import RadioGroup from '../../components/radio/radio-group.vue'
import Radio from '../../components/radio/radio.vue'

RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Radio.name, Radio)
}

RadioGroup.Radio = Radio

export default RadioGroup
