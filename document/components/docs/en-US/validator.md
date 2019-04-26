## Validator

> New in 1.5.0+

Validator is used to validate form data and corresponding warning message.

### Example

- Basic usage

  Validator is called as a independent component, which means it has to bind with the form data need validate through the property `model`. Then use the property `rules` to define the validating rule, such as type, required, pattern(used to define a validating RegExp), custom(used to define a validating function), you can find the details of rules below. And although we have default message (include English and Chinese) for each build-in rule, you could customize messages by the property `messages`.

  ```html
  <cube-input v-model="text1" placeholder="E-mail"></cube-input>
  <cube-validator v-model="valid" :model="text" :rules="rules" :messages="messages"></cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        text: '',
        valid: undefined,
        rules: {
          required: true,
          type: 'email',
          pattern: /didi.com$/,
          custom: (val) => {
            return val.length >= 12
          }
        },
        messages: {
          pattern: 'The E-mail suffix need to be didi.com.',
          custom: 'The E-mail need contain at least 12 characters.'
        },
      }
    }
  }
  ```

- Add warning style to form component

  If you want to add warning style to form component, you could put the form component into the Validator component. Because when the validation failed, the Validator component will get a CSS class `cube-validator_warn` so that you could select the descendant form element of class `cube-validator_warn` ro add warning style.

  ```html
  <cube-validator :model="text" :rules="rules" v-model="valid">
    <cube-input v-model="text"></cube-input>
  </cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        text: '',
        valid: undefined,
        rules: {
          required: true,
          type: 'email',
          min: 6
        }
      }
    }
  }
  ```
  ```css
  // add warning style to input
  .cube-validator_warn
    input
      border: solid 1px yellow
  ```

- Customize message slot

  Beside default message, you could customize the warning template to contain icons and images by `message` slot. This is a sloped slot which could meet almost all the demands. It contains `dirty` (whether the form data has ever changed), `validated` (whether the validator has ever validated), `message` (message of first failed rule), `result` ( an Object, which contains validating result and message of each rule, such as `{ required: { valid: false, invalid: true, message: 'required' } }`).

  ```html
  <cube-validator v-model="valid" :model="text" :rules="rules" :messages="messages">
    <cube-input v-model="text" placeholder="component name"></cube-input>
    <div slot="message" class="custom-msg" slot-scope="props">
      <div v-if="(props.dirty || props.validated) && !valid">
        <i class="dd-cubeic-important"></i> {{ props.message }}
        <div>
          <span v-for="(item, index) in Object.values(props.result)"
            :key="index" v-if="item.inValid">
            {{ item.message + ' ' }}
          </span>
        </div>
      </div>
    </div>
  </cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        valid: undefined,
        text: '',
        rules: {
          type: 'string',
          pattern: /^cube-/,
          min: 8,
          max: 10
        },
        messages: {
          pattern: 'The component name need start with "cube-"'
        },
      }
    }
  }
  ```
  ```css
  .custom-msg
    color: orange
  ```

- Async validate <sup>1.8.0+</sup>

  If the rule function returned a function(**this function receives a `resolve` callback, if this function called with `true` then it will be treated as success, otherwise it will be treated as failure**) or a `Promise` object(**if `resolve` value is `true` then it will be treated as success, otherwise it will be treated as failure**), then it will be validate asynchronously. And when validating the `validating` event will be emited.

  ```html
  <div class="validator-item">
    <p>Async validate: </p>
    <cube-validator
      v-model="valid"
      :model="captcha"
      :rules="rules"
      :messages="messages"
      :immediate="immediate"
      @validating="validatingHandler"
      @validated="validatedHandler">
      <cube-input v-model="captcha" placeholder="Please input captcha"></cube-input>
    </cube-validator>
  </div>
  ```
  ```js
  export default {
    data() {
      return {
        valid: undefined,
        captcha: '',
        rules: {
          type: 'number',
          required: true,
          len: 6,
          captchaCheck: (val) => {
            return (resolve) => {
              setTimeout(() => {
                resolve(val === '123456')
              }, 1000)
            }
            /** or return promise:
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(val === '123456')
              }, 1000)
            })
            **/
          }
        },
        messages: {
          captchaCheck: 'Please input "123456"'
        }
      }
    },
    methods: {
      validatingHandler() {
        console.log('validating')
      },
      validatedHandler() {
        console.log('validated')
      }
    }
  }
  ```

  The `captchaCheck` is an async rule.

- Submit

  Although submit is not inside of Validator, it usually be relative with Validator. Therefore, we want to introduce our best practice about submit here. It focus on the handles of multi-validator and warn message no matter whether the form data has ever changed.

  ```html
  <cube-input v-model="text0" placeholder="Required"/>
  <cube-validator ref="validator0" v-model="result[0]" :model="text0" :rules="rules0"/>
  <cube-input v-model="text1" placeholder="E-mail"/>
  <cube-validator ref="validator1" v-model="result[1]" :model="text1" :rules="rules1"/>
  <cube-input v-model="text2" placeholder="TEL"/>
  <cube-validator ref="validator2" v-model="result[2]" :model="text2" :rules="rules2"/>
  <cube-button @click="submit">Submit</cube-button>
  ```
  ```js
  export default {
    data() {
      return {
        result: [true, true, true],
        text0: '',
        rules0: {
          required: true,
        },
        text1: '',
        rules1: {
          type: 'email',
        },
        text2: '',
        rules2: {
          type: 'tel',
        },
        trigger: false
      }
    },
    methods: {
      submit() {
        this.$refs.validator0.validate()
        this.$refs.validator1.validate()
        this.$refs.validator2.validate()
        if (this.result.every(item => item)) {
          this.$createToast({
            type: 'correct',
            txt: 'Submited',
            time: 1000
          }).show()
        }
      }
    }
  }
  ```

### Props

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| model | Required, figure the data need to validate | Any | - | - |
| v-model | the validation result，whether the data is valid | Boolean | true/false | true |
| rules | the rules for validation, you can find the details of rules below | Object | - | {} |
| messages | custom messages for the corresponding rule | Object | - | {} |
| immediate | Immediate validate after loaded | Boolean | true/false | false |
| disabled<sup>1.7.0+</sup> | disabled validate or not | Boolean | true/false | false |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | the relative form component or element | - |
| message | warning message | dirty: if the data have ever changed <br> validating: whether is validating <br> validated: if the validator have ever validated <br> message: the message of the first failed rule <br> result: an object, which contains the resule and message of each rule, such as, { required: { valid: false, invalid: true, message: '必填' } } |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| validating | validating (only triggered when async validateing) | - |
| validated | validated (only triggered when async validateing) | valid: 校验是否成功 |
| msg-click | click error message ele | - |
| input | triggers when the binding value changes | the updated value |

### Instance methods

| Method name | Description | Parameters | Returned value |
| - | - | - | - |
| validate(cb) | Validate | cb: validated callback function, used to async validating cases normally. The arguments is the `valid` value | If supported Promise then the returned value will be Promise instance(Only have resolved state, the resolved value is `valid`), otherwise the returned value is `undefined` |

### Rule

- Build-in rules

  There are some build-in rules here, include required、type、min、max、len、notWhitespace、pattern、custom.

  | Attribute | Description | Type | Accepted Values | Demo |
  | - | - | - | - | - |
  | required | required | Boolean | true/false | true |
  | type | type | String | 'string', 'number', 'array', 'date', 'email', 'tel', 'url' | 'tel' |
  | min | when the type is number or date, it means the data need not smaller than min. Otherwise, it means the length of the data need not smaller than min | Number | - | 6 |
  | max | when the type is number or date, it means the data need not bigger than max. Otherwise, it means the length of the data need not bigger than max | Number | - | 8 |
  | len | when the type is number or date, it means the data need equal to min. Otherwise, it means the length of the data need equal to len | Number | - | 7 |
  | notWhitespace | don't allowed to be whitespace | Boolean | true/false | true |
  | pattern | RegExp match | RegExp | - | /1$/ |
  | custom | Costomized validation function. Only valid when the `return` is strict equaled to `true` | Function | - | val => val.length === 7 |

- Add rule

  Beside the build-in rules, you could use the method `addRule` of Validator to add customized common rule, and `addMessage` method to add corresponding default warning message.

  ```js
  import Vue from 'vue'
  import { Validator } from 'cube-ui'

  // need use Validator
  Vue.use(Validator)

  Validator.addRule('odd', (val, config, type) => !config || Number(val) % 2 === 1)
  Validator.addMessage('odd', 'Please input odd.')
  ```
  ```html
  <cube-validator v-model="valid" :model="text" :rules="rule">
    <cube-input v-model="text3" placeholder="odd"></cube-input>
  </cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        text: '100',
        valid: undefined,
        rules: {
          type: 'number',
          odd: true
        }
      }
    }
  }
  ```

### Add default message

At first, let's see the build-in default messages. You can use `addMessage` to modify the special sub-message.

  - Build-in default messages

  ```js
  const messages = {
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
  ```
  - Modify the build-in message

  ```js
  import Vue from 'vue'
  import { Validator } from 'cube-ui'

  // need use Validator
  Vue.use(Validator)

  Validator.addMessage('required', 'Please input this.')

  // Override the message for min.date
  Validator.addMessage('min', {
    date: 'Please select a date after {{config | toLocaleDateString("yyyy-MM-dd") | tips("Please re-enter")}}.'
  })
  ```

  As above, the default message parsed inside the component is similar to the Vue filter mechanism.

  - config

  For example, the rule you configured is: {type: 'date', min: '2018-10-10'}, then the value of the `config` field in above message template is '2018-10-10', because the checksum is a `date` type, the value of `min` can be a `timestamp` or a date-like string `yyyy-MM-dd mm:ss ` or `yyyy/MM/dd mm:ss`.

  - toLocaleDateString

  The built-in helper function, the first parameter is the config value you configured, the second parameter is the date format you want to initialize, as above is `'yyyy year MM month dd day'`, accepting something like `yyyy-MM-dd mm:ss` format, you can also register your own helper function as follows.

  ```js
  Validator.addHelper('fnName', (result, arg1) => {
    // result -> The value returned by the previous helper function or the config value, as in the above example is '2018-10-10'
    // arg1 -> The string you passed in the message template, as in the above example, 'Please re-enter'
    let ret

    // do your own job
    ret = result + arg1

    // you must return the processed message
    return ret
  })
  ```

  The tool functions registered through `Validator.addHelper` are actually mounted under the `Locale.helpers` namespace. You can also import the `Locale` module and register your own tool functions with `Locale.addHelper`, which point to the same address.

### addType

  - Add new type

  ```js
  import { Validator } from 'cube-ui'

  Validator.addType('yourType', (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+/i.test(val)
  })
  ```

  - Modify the build-in type

  ```js
  import { Validator } from 'cube-ui'

  Validator.addType('email', (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)$/i.test(val)
  })
  ```

