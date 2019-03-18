export default {
  cancel: 'Cancel',
  confirm: 'Confirm',
  ok: 'OK',
  prev: 'Prev',
  next: 'Next',
  selectText: 'Please select',
  now: 'Now',
  selectTime: 'Select time',
  today: 'Today',
  formatDate: 'M-D',
  hours: '',
  minutes: '',
  validator: {
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
      string: 'Please input at least {{config}} characters.',
      number: 'The number could not smaller than {{config}}.',
      array: 'Please select at least {{config}} items.',
      date: 'Please select a date after {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: 'Please input at least {{config}} characters.',
      tel: 'Please input at least {{config}} characters.',
      url: 'Please input at least {{config}} characters.'
    },
    max: {
      string: 'Please input no more than {{config}} characters.',
      number: 'The number could not bigger than {{config}}',
      array: 'Please select no more than  {{config}} items',
      date: 'Please select a date before {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: 'Please input no more than {{config}} characters.',
      tel: 'Please input no more than {{config}} characters.',
      url: 'Please input no more than {{config}} characters.'
    },
    len: {
      string: 'Please input {{config}} characters.',
      number: 'The length should equal {{config}}',
      array: 'Please select {{config}} items',
      date: 'Please select {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: 'Please input {{config}} characters.',
      tel: 'Please input {{config}} characters.',
      url: 'Please input {{config}} characters.'
    },
    pattern: 'The input don"t match pattern.',
    custom: 'Invalid.',
    notWhitespace: 'Whitespace is invalid.'
  }
}
