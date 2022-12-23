import RadioGroup from '../../components/radio/radio-group.vue'
import Radio from '../../components/radio/radio.vue'

RadioGroup.install = function (app) {
  app.component(RadioGroup.name, RadioGroup)
  app.component(Radio.name, Radio)
}

RadioGroup.Radio = Radio

export default RadioGroup
