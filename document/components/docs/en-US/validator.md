## Validator

Validator is used to validate form data and corresponding warning message.

### Example

- Basic usage

  Validator is called as a independent component, which means it has to bind with the form data need validate through the property `for`. Then use the property `rule` to define the validating rule, such as type, required, pattern(used to define a validating RegExp), custom(used to define a validating function), you can find the details of rules below. And although we have default message (include English and Chinese) for each build-in rule, you could customize messages by the property `messages`.

  ```html
  <cube-input v-model="text1" placeholder="E-mail"></cube-input>
  <cube-validator v-model="valid" :for="text" :rule="rule" :messages="messages"></cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        text: '',
        valid: true,
        rule: {
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

  If you want to add warning style to form component, you could put the form component into the Validator component. Because when the validation failed, the Validator component will get a CSS class `cube-validator_warn` so that you could select the descendant form element of class `cube-validator_warn` ro add warning style. And we have added the red border for input and textarea by default.

  ```html
  <cube-validator :for="text" :rule="rule" v-model="valid">
    <cube-input v-model="text"></cube-input>
  </cube-validator>
  ```
  ```js
  export default {
    data() {
      return {
        text: '',
        valid: true,
        rule: {
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

  Beside default message, you could customize the warning template to contain icons and images by `message` slot. This is a sloped slot which could meet almost all the demands. It contains `dirty` (whether the form data has ever changed), `message` (message of first failed rule), `result` ( an Object, which contains validating result and message of each rule, such as `{ required: { valid: false, invalid: true, message: 'required' } }`).

  ```html
  <cube-validator v-model="valid" :for="text" :rule="rule" :messages="messages">
    <cube-input v-model="text" placeholder="component name"></cube-input>
    <div slot="message" class="custom-msg" slot-scope="props">
      <div v-if="(props.dirty || trigger) && !valid">
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
        valid: true,
        text: '',
        rule: {
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

- Submit

  Although submit is not inside of Validator, it usually be relative with Validator. Therefore, we want to introduce our best practice about submit here. It focus on the handles of multi-validator and warn message no matter whether the form data has ever changed.

  ```html
  <cube-input v-model="text0" placeholder="Required"/>
  <cube-validator v-model="result[0]" :for="text0" :rule="rule0" :trigger="trigger"/>
  <cube-input v-model="text1" placeholder="E-mail"/>
  <cube-validator v-model="result[1]" :for="text1" :rule="rule1" :trigger="trigger"/>
  <cube-input v-model="text2" placeholder="TEL"/>
  <cube-validator v-model="result[2]" :for="text2" :rule="rule2" :trigger="trigger"/>
  <cube-button @click="submit">Submit</cube-button>
  ```
  ```js
  export default {
    data() {
      return {
        result: [true, true, true],
        text0: '',
        rule0: {
          required: true,
        },
        text1: '',
        rule1: {
          type: 'email',
        },
        text2: '',
        rule2: {
          type: 'tel',
        },
        trigger: false
      }
    },
    methods: {
      submit() {
        if (!this.trigger) {
          this.trigger = true
        }
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
