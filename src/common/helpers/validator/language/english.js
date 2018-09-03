import { toLocaleDateString } from '../../util'

export default {
  required: 'Required.',
  type: {
    string: 'Please input characters.',
    number: 'Please input numbers.',
    array: 'The data type should be array.',
    date: 'Please select a valid date.',
    email: 'Please input a valid E-mail.',
    tel: 'Please input a valid telphone number.',
    url: 'Please input a valid web site.'
  },
  min: {
    string: /* istanbul ignore next */ (config) => `Please input at least ${config} characters.`,
    number: /* istanbul ignore next */ (config) => `The number could not smaller than ${config}.`,
    array: /* istanbul ignore next */ (config) => `Please select at least ${config} items.`,
    date: /* istanbul ignore next */ (config) => `Please select a date after ${toLocaleDateString(config, 'en')}`,
    email: /* istanbul ignore next */ (config) => `Please input at least ${config} characters.`,
    tel: /* istanbul ignore next */ (config) => `Please input at least ${config} characters.`,
    url: /* istanbul ignore next */ (config) => `Please input at least ${config} characters.`
  },
  max: {
    string: /* istanbul ignore next */ (config) => `Please input no more than ${config} characters.`,
    number: /* istanbul ignore next */ (config) => `The number could not bigger than ${config}`,
    array: /* istanbul ignore next */ (config) => `Please select no more than  ${config} items`,
    date: /* istanbul ignore next */ (config) => `Please select a date before ${toLocaleDateString(config, 'en')}`,
    email: /* istanbul ignore next */ (config) => `Please input no more than ${config} characters.`,
    tel: /* istanbul ignore next */ (config) => `Please input no more than ${config} characters.`,
    url: /* istanbul ignore next */ (config) => `Please input no more than ${config} characters.`
  },
  len: {
    string: /* istanbul ignore next */ (config) => `Please input ${config} characters.`,
    number: /* istanbul ignore next */ (config) => `The length should equal ${config}`,
    array: /* istanbul ignore next */ (config) => `Please select ${config} items`,
    date: /* istanbul ignore next */ (config) => `Please select ${toLocaleDateString(config, 'en')}`,
    email: /* istanbul ignore next */ (config) => `Please input ${config} characters.`,
    tel: /* istanbul ignore next */ (config) => `Please input ${config} characters.`,
    url: /* istanbul ignore next */ (config) => `Please input ${config} characters.`
  },
  pattern: 'The input don"t match pattern.',
  custom: 'Invalid.',
  notWhitespace: 'Whitespace is invalid.'
}
