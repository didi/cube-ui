import Radio from '../../components/radio/radio.vue'
import RadioItem from '../../components/radio/radio-item.vue'

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
  Vue.component(RadioItem.name, RadioItem)
}

export default Radio
