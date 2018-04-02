## Form

表单，包含各种输入组件以及对应的校验；我们可以通过数据驱动的方式来生成完成表单。

### 示例

- 默认配置使用

  一个完整的包含所有的内置表单相关组件。

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
          scrollToInvalidField: true,
          layout: 'standard' // classic fresh
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

  `model` 就是整个表单需要的数据源，`schema` 就是生成表单所定义的模式，`immediate-validate` 如果为 true 则初始时立即做校验，`options` 则是配置选项。

  `submit` 校验成功后提交事件，`validate` 每次有数据校验更新的事件，`reset` 则是重置事件。

- 自定义使用

  你可以选择使用自己自定义的组件甚至通过插槽来自定义结构和行为。

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

  可以通过 `component` 指定实现了 `v-model` 的自定义组件，例如示例中的 `PCA` 组件；也可以通过使用插槽自定义结构行为，比如示例中的日期选择。

### Props 配置

#### Form

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| model | 数据源 | Object | - | {} |
| schema | 生成表单依赖的模式 | Object | - | {} |
| immediate-validate | 初始化时是否立即校验 | Boolean | true/false | false |
| action | 表单 Form action 的值 | String | - | undefined |
| options | 配置项 | Object | - | {<br>scrollToInvalidField: false,<br> layout: 'standard' // or: classic|fresh <br>} |

- `schema` 子配置项

  模式用于定义表单中的各个字段，可以选择是否分组。

  - 无分组

    直接包含 `fields` 即可：

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

  - 有分组

    可以设置 `groups`：

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

  不管有没有分组，我们都需要使用 `fields` 定义表单字段，其中每一项可以有如下属性：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | - | - | - | - | - |
  | type | 字段类型 | String | 默认内置的可选类型组件有：`button`, `checkbox`, `checkbox-group`, `input`, `radio`, `radio-group`, `rate`, `select`, `switch`, `textarea`, `upload`；以及特殊的 `submit` 和 `reset`，它们两个会被转换为对应类型的 `button` | - |
  | component | 字段使用的自定义组件，替换 type，该组件组件实现 `v-model` | Object/String | - | - |
  | modelKey | 在表单的 `model` 数据源对象中所对应的 key 名字 | String | - | - |
  | label | 字段的标签值 | String | - | - |
  | props | type 对应的组件或者自定义组件 component 所需要的 props | Object | - | - |
  | rules | 字段的校验规则，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a> | Object | - | - |
  | messages | 字段的校验消息，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a> | String | - | - |

#### FormGroup

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| legend | 分组名字 | String | - | '' |
| fields | 该组内所包含的字段集合 | Array | - | [] |

#### FormItem

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| field | 字段数据 | Object | - | - |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| submit | 表单校验通过后触发此事件 | e - 事件对象 | model 值 |
| reset | 表单重置事件 | e - 事件对象 | - |
| validate | 表单校验事件 | 参数结构如下：<br>{<br>validity,<br> valid,<br> invalid,<br> dirty,<br> firstInvalidFieldIndex<br>} | - |
| valid | 表单校验成功触发 | validity 校验结果 | - |
| invalid | 表单校验失败触发 | validity 校验结果 | - |

- `validate` 事件的参数

  | 参数 | 说明 | 类型 |
  | - | - | - |
  | validity | 校验结果 | Object |
  | valid | 校验合法，如果还没校验则为 undefined，一旦校验则为 true 或 false | Boolean/Undefined |
  | invalid | 校验不合法，如果还没校验则为 undefined，一旦校验则为 true 或 false | Boolean |
  | dirty | 表单处于 dirty 状态，也就意味着数据源发生了变化 | Boolean |
  | firstInvalidFieldIndex | 第一个校验不合法的字段索引值 | Number |

  - 校验结果 `validity` 对象

    | 参数 | 说明 | 类型 |
    | - | - | - |
    | valid | 校验是否合法 | Boolean/Undefined |
    | result | 校验结果，类似于：<br>{<br>&nbsp;required: {<br>&nbsp;&nbsp;valid: false,<br>&nbsp;&nbsp;invalid: true,<br>&nbsp;&nbsp;message: 'Required.'<br>&nbsp;}<br>} | Object |
    | dirty | 数据是否是已经更新过的 | Boolean |

### 实例方法

| 方法名 | 说明 |
| - | - |
| submit | 提交表单 |
| reset | 重置表单 |
| validate | 校验表单 |
