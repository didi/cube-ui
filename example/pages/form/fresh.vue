<template>
  <cube-page type="form-def" title="Form 表单">
    <div slot="content">
      <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="submitHandler"
        @reset="resetHandler"></cube-form>
      <json-view title="model" :data="model" />
      <json-view title="validity" :data="validity" />
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import CubeButtonGroup from '../../components/cube-button-group.vue'
  import JsonView from '../../components/json-view.vue'

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
                  label: 'Checkbox',
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
                  },
                  // validating when blur
                  trigger: 'blur'
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
                  },
                  // debounce validate
                  // if set to true, the default debounce time will be 200(ms)
                  debounce: 100
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
                    required: true,
                    uploaded: (val, config) => {
                      return Promise.all(val.map((file, i) => {
                        return new Promise((resolve, reject) => {
                          if (file.uploadedUrl) {
                            return resolve()
                          }
                          // fake request
                          setTimeout(() => {
                            if (i % 2) {
                              reject(new Error())
                            } else {
                              file.uploadedUrl = 'uploaded/url'
                              resolve()
                            }
                          }, 1000)
                        })
                      })).then(() => {
                        return true
                      })
                    }
                  },
                  messages: {
                    uploaded: '上传失败'
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
          scrollToInvalidField: true,
          layout: 'fresh' // standard classic
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
    },
    components: {
      CubePage,
      CubeButtonGroup,
      JsonView
    }
  }
</script>
