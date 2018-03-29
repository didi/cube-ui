## Form

CubeForm is a schema-based form generator component.

### Example

- default usage

  This demo includes all cube-ui form fields.

  ```html
  <cube-form
    :model="model"
    :schema="schema"
    :immediate-validate="true"
    :options="options"
    @validate="validateHandler"
    @submit="submitHandler"
    @reset="resetHandler"></cube-form>
  ```
  ```js
  export default {
    data() {
      return {
        validity: {},
        valid: undefined,
        model: {
          checkboxValue: false,
          checkboxGroupValue: [],
          inputValue: '',
          radioValue: '',
          rateValue: 0,
          selectValue: 2018,
          switchValue: true,
          textareaValue: '',
          uploadValue: []
        },
        schema: {
          groups: [
            {
              legend: '基础',
              fields: [
                {
                  type: 'checkbox',
                  modelKey: 'checkboxValue',
                  props: {
                    option: {
                      label: 'Checkbox',
                      value: true
                    }
                  },
                  rules: {
                    required: true
                  },
                  messages: {
                    required: 'Please check this field'
                  }
                },
                {
                  type: 'checkbox-group',
                  modelKey: 'checkboxGroupValue',
                  label: 'CheckboxGroup',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: 'Input',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'radio-group',
                  modelKey: 'radioValue',
                  label: 'Radio',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'selectValue',
                  label: 'Select',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'switch',
                  modelKey: 'switchValue',
                  label: 'Switch',
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'textarea',
                  modelKey: 'textareaValue',
                  label: 'Textarea',
                  rules: {
                    required: true
                  }
                }
              ]
            },
            {
              legend: '高级',
              fields: [
                {
                  type: 'rate',
                  modelKey: 'rateValue',
                  label: 'Rate',
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'upload',
                  modelKey: 'uploadValue',
                  label: 'Upload',
                  rules: {
                    required: true
                  }
                }
              ]
            },
            {
              fields: [
                {
                  type: 'submit',
                  label: 'Submit'
                },
                {
                  type: 'reset',
                  label: 'Reset'
                }
              ]
            }
          ]
        },
        options: {
          scrollToInvalidField: true
        }
      }
    },
    methods: {
      submitHandler(e) {
        e.preventDefault()
        console.log('submit', e)
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      resetHandler(e) {
        console.log('reset', e)
      }
    }
  }
  ```

  `model` is the model/target JSON object, `schema` is the schema object with fields, if `immediate-validate` is true, we will run validation after load.

  `submit` is the submited event, the `validate` is the form validate event and the `reset` is the form reset event.

- Custom usage

  You can choose to use your own custom components, or use slots to custom your logic.

  ```html
  <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
    <cube-form-group>
      <cube-form-item :field="fields[0]"></cube-form-item>
      <cube-form-item :field="fields[1]"></cube-form-item>
      <cube-form-item :field="fields[2]">
        <cube-button @click="showDatePicker">{{model.dateValue || 'Please select date'}}</cube-button>
        <date-picker ref="datePicker" :min="[2008, 8, 8]" :max="[2020, 10, 20]" @select="dateSelectHandler"></date-picker>
      </cube-form-item>
    </cube-form-group>
    <cube-form-group>
      <cube-button type="submit">Submit</cube-button>
    </cube-form-group>
  </cube-form>
  ```
  ```js
  // province, city, area
  // select component
  const PCA = {
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        selected: []
      }
    },
    render(createElement) {
      return createElement('cube-button', {
        on: {
          click: this.showPicker
        }
      }, this.selected.length ? this.selected.join(' ') : 'placeholder')
    },
    mounted() {
      this.picker = this.$createCascadePicker({
        title: 'PCA Select',
        data: cityData,
        selectedIndex: this.value,
        onSelect: this.selectHandler
      })
    },
    methods: {
      showPicker() {
        this.picker.show()
      },
      selectHandler(selectedVal, selectedIndex, selectedTxt) {
        this.selected = selectedTxt
        this.$emit('input', selectedVal)
      }
    }
  }
  export default {
    data() {
      return {
        validity: {},
        valid: undefined,
        model: {
          inputValue: '',
          pcaValue: [],
          dateValue: ''
        },
        fields: [
          {
            type: 'input',
            modelKey: 'inputValue',
            label: 'Input',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            }
          },
          {
            component: PCA,
            modelKey: 'pcaValue',
            label: 'PCASelect',
            rules: {
              required: true
            },
            messages: {
              required: '请选择'
            }
          },
          {
            modelKey: 'dateValue',
            label: 'Date',
            rules: {
              required: true
            }
          }
        ]
      }
    },
    methods: {
      submitHandler(e) {
        console.log('submit')
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      showDatePicker() {
        this.$refs.datePicker.show()
      },
      dateSelectHandler(selectedVal) {
        this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()
      }
    },
    components: {
      DatePicker
    }
  }
  ```

  Like the `PCA` component, you can use `component` to define your custom component. Or use slots, like use DatePicker component.

### Props

#### Form

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| model | The model/target JSON object | Object | - | {} |
| schema | the schema object with fields | Object | - | {} |
| immediate-validate | If true, we will run validation after load | Boolean | true/false | false |
| action | Form action value | String | - | undefined |
| options | Options for CubeForm | Object | - | {<br>scrollToInvalidField: false,<br> layout: 'standard' // or: classic|fresh <br>} |

- `schema` sub configuration

  The schema contains the fields of the form, optionally in groups.

  - Without groups

    Use `fields`:

    ```js
    {
      fields: [
        {
          type: 'input',
          modelKey: 'inputValue',
          label: 'Input'
        },
        // ...
      ]
    }
    ```

  - With groups

    Use `groups`：

    ```js
    {
      groups: [
        {
          legend: 'Group 1'
          fields: [
            {
              type: 'input',
              modelKey: 'inputValue',
              label: 'Input'
            },
            // ...
          ]
        },
        {
          legend: 'Group 2'
          fields: [
            {
              type: 'input',
              modelKey: 'inputValue',
              label: 'Input'
            },
            // ...
          ]
        }
      ]
    }
    ```

  A field in the schema defines an input element to a value of model. The common properties of field:

  | Attribute | Description | Type | Accepted Values | Default |
  | - | - | - | - | - |
  | type | Type of field | String | Default fields: `button`, `checkbox`, `checkbox-group`, `input`, `radio`, `radio-group`, `rate`, `select`, `switch`, `textarea`, `upload`. There are two special types: `submit` and `reset`, they will be transformed to the corresponding type of `button`. | - |
  | component | Custom filed component to replace `type`, the component should to work with `v-model` | Object/String | - | - |
  | modelKey | Name of property in the `form` model | String | - | - |
  | label | Label of field | String | - | - |
  | props | This value will be the `type` or `component` props | Object | - | - |
  | rules | Validator rules, see <a href="#/en-US/docs/validator#cube-Props-anchor">Validator</a> | Object | - | - |
  | messages | Validator messages, see <a href="#/en-US/docs/validator#cube-Props-anchor">Validator</a> | String | - | - |

#### FormGroup

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| legend | Group legend | String | - | '' |
| fields | Group fields | Array | - | [] |

#### FormItem

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| field | Field value | Object | - | - |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| submit | Form submit, only trigged when the form's validation is ok | e - event | form model value |
| reset | Form reset | e - event | - |
| validate | Form validated | Properties: <br>{<br>validity,<br> valid,<br> invalid,<br> dirty,<br> firstInvalidFieldIndex<br>} | - |
| valid | Form valid | Validity result | - |
| invalid | Form invalid | Validity result | - |

- `validate` event parameters

  | Attribute | Description | Type |
  | - | - | - |
  | validity | Validity result | Object |
  | valid | Validity check, if not verified this value will be undefined, once checked this value will be true or false | Boolean/Undefined |
  | invalid | Validity check, if not verified this value will be undefined, once checked this value will be true or false | Boolean |
  | dirty | When the form model changed then the form's dirty is true | Boolean |
  | firstInvalidFieldIndex | First invalid field index | Number |

  - Validity result `validity`

    | Attribute | Description | Type |
    | - | - | - |
    | valid | Is valid or not | Boolean/Undefined |
    | result | Result, eg: <br>{<br>&nbsp;required: {<br>&nbsp;&nbsp;valid: false,<br>&nbsp;&nbsp;invalid: true,<br>&nbsp;&nbsp;message: 'Required.'<br>&nbsp;}<br>} | Object |
    | dirty | The form model is changed or not | Boolean |

### Instance methods

| Method name | Description |
| - | - |
| submit | submit form |
| reset | reset form |
| validate | validate form |
