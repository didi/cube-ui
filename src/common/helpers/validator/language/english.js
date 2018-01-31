export default {
  required: 'Required',
  type: {
    string: 'Please input characters.',
    number: 'Please input numbers.',
    array: 'Please select one or more items.',
    date: 'Please select a valid date.',
    email: 'Please input a valid E-mail.',
    tel: 'Please input a valid telphone number.',
    url: 'Please input a valid web site.'
  },
  min: {
    string: (config) => `Please input at least ${config} characters.`,
    number: (config) => `The number could not smaller than ${config}.`,
    array: (config) => `Please select at least ${config} items.`,
    date: (config) => `Please select a date after ${config}`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `Please input at least ${config} characters.`,
    tel: (config) => `Please input at least ${config} characters.`,
    url: (config) => `Please input at least ${config} characters.`
  },
  max: {
    string: (config) => `Please input no more than ${config} characters.`,
    number: (config) => `The number could not bigger than ${config}`,
    array: (config) => `Please select no more than  ${config} items`,
    date: (config) => `Please select a date before ${config}`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `Please input no more than ${config} characters.`,
    tel: (config) => `Please input no more than ${config} characters.`,
    url: (config) => `Please input no more than ${config} characters.`
  },
  len: {
    string: (config) => `Please input ${config} characters.`,
    number: (config) => `The number should equal ${config}`,
    array: (config) => `Please select ${config} items`,
    date: (config) => `Please select ${config}`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `Please input ${config} characters.`,
    tel: (config) => `Please input ${config} characters.`,
    url: (config) => `Please input ${config} characters.`
  },
  pattern: 'The input don"t match pattern.',
  custom: 'Invalid.',
  notWhitespace: 'Whitespace is invalid.'
}
