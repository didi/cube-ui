<template>
  <cube-page type="form" title="Form 表单">
    <div slot="content">
      <cube-form ref="fff" @validate="validateHandler" @submit="submitHandler" :model="model" :schema="schema" :new-model="true"></cube-form>
      <div>model:<br>:{{model}}</div>
      <div>validity:<br>{{validity}}</div>
      <div>valid:<br>{{valid}}</div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'

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
          fields: [
            {
              type: 'checkbox',
              model: 'checkboxValue',
              label: 'Checkbox',
              props: {
                option: 'Checkbox'
              },
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'checkbox-group',
              model: 'checkboxGroupValue',
              label: 'CheckboxGroup',
              props: {
                options: ['1', '2', '3']
              },
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'input',
              model: 'inputValue',
              label: 'Input',
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'radio-group',
              model: 'radioValue',
              label: 'Radio',
              props: {
                options: ['1', '2', '3']
              },
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'rate',
              model: 'rateValue',
              label: 'Rate',
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'select',
              model: 'selectValue',
              label: 'Select',
              props: {
                options: [2015, 2016, 2017, 2018, 2019, 2020]
              },
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'switch',
              model: 'switchValue',
              label: 'Switch',
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'textarea',
              model: 'textareaValue',
              label: 'Textarea',
              validate: {
                rule: {
                  required: true
                }
              }
            },
            {
              type: 'upload',
              model: 'uploadValue',
              label: 'Upload',
              validate: {
                rule: {
                  required: true
                }
              }
            },
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
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
