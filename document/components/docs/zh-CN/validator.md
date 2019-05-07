## Validator

> 1.5.0 新增

校验器，用于对表单进行验证，并提示相应的错误信息。

### 示例

- 基本用法

  Validator 作为一个独立的组件，通过 model 属性绑定它需要检验的数据；rules 定义验证规则，在 rules 规则中，可以配置 type、required 等内置规则，也可以用 pattern 添加校验的正则表达式，或 custom 自定义验证函数，具体细节可见后面的规则；针对各类规则，我们有比较完善的默认提示文案，具体可见后面的默认提示文案；同时，你也可以用 messages 属性用于自定义提示信息。

  ```html
  <cube-input v-model="text" placeholder="E-mail"></cube-input>
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

- 给表单添加警告样式

  如果想给表单组件添加警告样式，可以通过把表单组件作为默认插槽，插在 Validator 组件内。因为当未通过验证时，Validator 组件会有一个样式类，cube-validator_warn，给这个类下的表单元素增加样式即可。

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

- 自定义提示插槽

  用 messages 属性只能配置提示信息文案，但当你想加图标等自定义提示时，可以使用 message 插槽。这是一个作用域插槽，提供的作用域参数基本上能够满足所有的灵活定制需求，参数包括了：dirty，待检验的数据是否有修改过；message，首条没通过的规则的提示信息；result，对象，内含每条规则的校验结果和提示信息，如{ required: { valid: false, invalid: true, message: '必填' } }。

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

- 异步校验<sup>1.8.0+</sup>

  支持校验规则是异步的情况，约定如果校验规则函数的返回值是一个函数（**该函数接收一个 `resolve` 回调，如果调用传入 `true` 则代表校验成功，否则都视为失败**）或者是一个 Promise 对象（**`resolve` 的值是 `true` 的话就是校验成功，否则都视为失败**）那么就是异步校验，同时在校验的过程中会派发 `validating` 事件，在校验后派发 `validated` 事件。

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

  上述的 `captchaCheck` 就是一个异步校验规则，校验过程需花费 1 秒。

- 提交

  虽然提交不属于 Validator 组件，但它往往与校验结果相关联着。所以这里说一下我们对提交的一种最佳实践，可供参考。重点在于对同时存在多个校验任务，以及提交时无论是否填写过表单都要进行校验，这两个需求的处理。

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
        result: [undefined, undefined, undefined],
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
        const p1 = this.$refs.validator0.validate()
        const p2 = this.$refs.validator1.validate()
        const p3 = this.$refs.validator2.validate()
        Promise.all([p1, p2, p3]).then(() => {
          if (this.result.every(item => item)) {
            this.$createToast({
              type: 'correct',
              txt: 'Submited',
              time: 1000
            }).show()
          }
        })
      }
    }
  }
  ```

  对于有多个校验同时通过才可提交的情况，为了不用一个一个去取校验结果变量，可以把这组校验结果存在一个数组，在提交时，遍历这个数组即可。

  通过调用 Validator 实例的 `validate` 方法可以去校验处理，从 1.8.0 版本后支持回调参数且如果浏览器支持 Promise 那么返回值就是 Promise 对象。

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| model | 必传，指定需要校验的数据 | Any | - | - |
| v-model | 校验结果，是否通过验证 | Boolean | true/false | true |
| rules | 校验规则，具体见后面的内置规则和创建规则 | Object | - | {} |
| messages | 自定义提示信息 | Object | - | {} |
| immediate | 初始时是否立即校验 | Boolean | true/false | false |
| disabled<sup>1.7.0+</sup> | 是否禁用 | Boolean | true/false | false |

### Slot

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 表单组件 | - |
| message | 错误提示 | dirty: 待检验的数据是否有修改过 <br> validating: 是否正在校验 <br> validated: 是否校验过 <br> message: 首条没通过的规则的提示信息 <br> result: 对象，内含每条规则的校验结果和提示信息，如{ required: { valid: false, invalid: true, message: '必填' } } |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| validating | 正在校验（只在异步场景下触发） | - |
| validated | 校验完成（只在异步场景下触发） | valid: 校验是否成功 |
| msg-click | 错误消息点击 | - |
| input | 绑定值变化时触发 | 更新后的绑定值 |

### 实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| - | - | - | - |
| validate(cb) | 校验 | cb: 校验完成后回调函数，主要用于异步校验场景，调用参数为 valid 的值 | 如果支持 Promise 返回值为 Promise 对象（只有 resolved 状态，值为 valid），否则返回值为 undefined |

### 规则

- 已有规则

  目前已有的内置规则，有 required、type、min、max、len、notWhitespace、pattern、custom。

  | 参数 | 说明 | 类型 | 可选值 | 示例 |
  | - | - | - | - | - |
  | required | 必填 | Boolean | true/false | true |
  | type | 类型 | String | 'string', 'number', 'array', 'date', 'email', 'tel', 'url' | 'tel' |
  | min | 当类型为 number 或 date 时，表示待校验的数据必须大于等于 min；其它类型，表示待校验数据的长度必须大于等于 min | Number | - | 6 |
  | max | 当类型为 number 或 date 时，表示待校验的数据必须小于等于 max；其它类型，表示待校验数据的长度必须小于等于 max | Number | - | 8 |
  | len | 当类型为 number 或 date 时，表示待校验的数据必须等于 len；其它类型，表示待校验数据的长度必须等于 len | Number | - | 7 |
  | notWhitespace | 不允许全是空白符 | Boolean | true/false | true |
  | pattern | 正则匹配 | RegExp | - | /1$/ |
  | custom | 自定义验证函数，当返回值严格等于 true 时，代表验证通过。 | Function | - | val => val.length === 7 |

- 添加规则

  除了已有的内置规则，你还可以使用 Validator 的 addRule 方法，添加自定义的公共规则，以及 addMessage 方法添加相应的默认提示信息。

  ```js
  import Vue from 'vue'
  import { Validator } from 'cube-ui'
  // need use Validator
  Vue.use(Validator)
  Validator.addRule('odd', (val, config, type) => !config || Number(val) % 2 === 1)
  Validator.addMessage('odd', 'Please input odd.')
  ```
  接下来你就可以在 rules 的配置中使用 odd 规则了：

  ```html
  <cube-validator v-model="valid" :model="text" :rules="rules">
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

### 添加默认提示信息

首先我们看一下内置的默认提示信息是怎样的，如果你需要修改，可以通过 addMessage 修改相应子属性。

  - 内置的默认提示信息

  ```js
  const messages = {
    required: '此为必填项',
    type: {
      string: '请输入字符',
      number: '请输入数字',
      array: '数据类型应为数组',
      date: '请选择有效日期',
      email: '请输入有效邮箱',
      tel: '请输入有效的手机号码',
      url: '请输入有效网址'
    },
    min: {
      string: '至少输入 {{config}} 位字符',
      number: '不得小于 {{config}}',
      array: '请选择至少 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
      email: '至少输入 {{config}} 位字符',
      tel: '至少输入 {{config}} 位字符',
      url: '至少输入 {{config}} 位字符'
    },
    max: {
      string: '请勿超过 {{config}} 位字符',
      number: '请勿大于 {{config}}',
      array: '最多选择 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: '请勿超过 {{config}} 位字符',
      tel: '请勿超过 {{config}} 位字符',
      url: '请勿超过 {{config}} 位字符'
    },
    len: {
      string: '请输入 {{config}} 位字符',
      number: '长度应等于 {{config}}',
      array: '请选择 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: '请输入 {{config}} 位字符',
      tel: '请输入 {{config}} 位字符',
      url: '请输入 {{config}} 位字符'
    },
    pattern: '格式错误',
    custom: '未通过校验',
    notWhitespace: '空白内容无效'
  }
  ```

  - 修改已有提示信息

  ```js
  import Vue from 'vue'
  import { Validator } from 'cube-ui'

  // need use Validator
  Vue.use(Validator)

  Validator.addMessage('required', '必填')

  // 覆盖 min.date 的提示消息
  Validator.addMessage('min', {
    date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日") | tips("请重新输入")}} 之后的时间'
  })
  Validator.addHelper('tips', function(result, arg1) {
    // 必须要返回提示消息
    return `${result}, ${arg1}`
  })
  ```

  如上，组件内部解析默认的消息是类似于 Vue filter 的机制。

  - config

  比如你配置的规则是：{type: 'date', min: '2018-10-10'}，那么对于 `min` 下面的 `date` 的消息模板中的 `config` 字段的值就是 '2018-10-10', 因为校验的是一个 `date` 类型，`min` 对应的字段可以是一个 `timestamp` (日期时间戳)或者类似于日期格式的字符串 `yyyy-MM-dd mm:ss` 或者 `yyyy/MM/dd mm:ss`。

  - toLocaleDateString

  内置的helper函数，第一个参数是你配置的 config 值，第二个参数是你期望的日期格式， 如上则为 `'yyyy年MM月dd日'`, 接受类似于 `yyyy-MM-dd mm:ss` 格式，你也可以通过如下的方式注册你自己的helper函数。

  ```js
  Validator.addHelper('fnName', (result, arg1) => {
    // result -> 上一个helper函数返回的值或者 config 值，如上例则是'2018-10-10'
    // arg1 -> 你在消息模板传入的字符串, 如上例则是'请重新输入'
    let ret

    // 实现自己的逻辑
    ret = result + arg1

    // 必须返回处理过后的消息
    return ret
  })
  ```

  通过 Validator.addHelper 方法注册的工具函数实际上是在 Locale.helpers 的命名空间下，你也可以导入 Locale 模块并且通过 Locale.addHelper 注册工具函数，两者都是指向同一块内存地址。

### 添加类型

  - 添加新的类型

  ```js
  import { Validator } from 'cube-ui'

  Validator.addType('yourType', (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+/i.test(val)
  })
  ```

  - 修改已有类型

  ```js
  import { Validator } from 'cube-ui'

  Validator.addType('email', (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)$/i.test(val)
  })
  ```
