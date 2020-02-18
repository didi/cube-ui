import Select from '../../select/select.vue'
import Agreement from '../components/agreement.vue'

const componentMap = {
  switch: 'radio-group', // 是 否
  date: Select,
  time: Select,
  select: Select,
  city: Select,
  radio: 'radio-group',
  checkbox: 'checkbox-group',
  tel: 'input',
  agreement: Agreement
}

export default function transformType(config, field) {
  const realComponent = componentMap[config.type] || config.type
  field[typeof realComponent === 'string' ? 'type' : 'component'] = realComponent
}
