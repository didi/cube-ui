import{a as t,o as a,j as d}from"./index-e8a96955.js";const n={class:"markdown-body"},o=d(`<h2>Validator</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>Validator is used to validate form data and corresponding warning message.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Validator is called as a independent component, which means it has to bind with the form data need validate through the property <code>model</code>. Then use the property <code>rules</code> to define the validating rule, such as type, required, pattern(used to define a validating RegExp), custom(used to define a validating function), you can find the details of rules below. And although we have default message (include English and Chinese) for each build-in rule, you could customize messages by the property <code>messages</code>.</p><pre><code class="language-html">&lt;cube-input v-model=&quot;text1&quot; placeholder=&quot;E-mail&quot;&gt;&lt;/cube-input&gt;
&lt;cube-validator v-model=&quot;valid&quot; :model=&quot;text&quot; :rules=&quot;rules&quot; :messages=&quot;messages&quot;&gt;&lt;/cube-validator&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      text: &#39;&#39;,
      valid: undefined,
      rules: {
        required: true,
        type: &#39;email&#39;,
        pattern: /didi.com$/,
        custom: (val) =&gt; {
          return val.length &gt;= 12
        }
      },
      messages: {
        pattern: &#39;The E-mail suffix need to be didi.com.&#39;,
        custom: &#39;The E-mail need contain at least 12 characters.&#39;
      },
    }
  }
}
</code></pre></li><li><p>Add warning style to form component</p><p>If you want to add warning style to form component, you could put the form component into the Validator component. Because when the validation failed, the Validator component will get a CSS class <code>cube-validator_warn</code> so that you could select the descendant form element of class <code>cube-validator_warn</code> ro add warning style.</p><pre><code class="language-html">&lt;cube-validator :model=&quot;text&quot; :rules=&quot;rules&quot; v-model=&quot;valid&quot;&gt;
  &lt;cube-input v-model=&quot;text&quot;&gt;&lt;/cube-input&gt;
&lt;/cube-validator&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      text: &#39;&#39;,
      valid: undefined,
      rules: {
        required: true,
        type: &#39;email&#39;,
        min: 6
      }
    }
  }
}
</code></pre><pre><code class="language-css">// add warning style to input
.cube-validator_warn
  input
    border: solid 1px yellow
</code></pre></li><li><p>Customize message slot</p><p>Beside default message, you could customize the warning template to contain icons and images by <code>message</code> slot. This is a sloped slot which could meet almost all the demands. It contains <code>dirty</code> (whether the form data has ever changed), <code>validated</code> (whether the validator has ever validated), <code>message</code> (message of first failed rule), <code>result</code> ( an Object, which contains validating result and message of each rule, such as <code>{ required: { valid: false, invalid: true, message: &#39;required&#39; } }</code>).</p><pre><code class="language-html">&lt;cube-validator v-model=&quot;valid&quot; :model=&quot;text&quot; :rules=&quot;rules&quot; :messages=&quot;messages&quot;&gt;
  &lt;cube-input v-model=&quot;text&quot; placeholder=&quot;component name&quot;&gt;&lt;/cube-input&gt;
  &lt;div slot=&quot;message&quot; class=&quot;custom-msg&quot; slot-scope=&quot;props&quot;&gt;
    &lt;div v-if=&quot;(props.dirty || props.validated) &amp;&amp; !valid&quot;&gt;
      &lt;i class=&quot;dd-cubeic-important&quot;&gt;&lt;/i&gt; {{ props.message }}
      &lt;div&gt;
        &lt;span v-for=&quot;(item, index) in Object.values(props.result)&quot;
          :key=&quot;index&quot; v-if=&quot;item.inValid&quot;&gt;
          {{ item.message + &#39; &#39; }}
        &lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/cube-validator&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      valid: undefined,
      text: &#39;&#39;,
      rules: {
        type: &#39;string&#39;,
        pattern: /^cube-/,
        min: 8,
        max: 10
      },
      messages: {
        pattern: &#39;The component name need start with &quot;cube-&quot;&#39;
      },
    }
  }
}
</code></pre><pre><code class="language-css">.custom-msg
  color: orange
</code></pre></li><li><p>Async validate <sup>1.8.0+</sup></p><p>If the rule function returned a function(<strong>this function receives a <code>resolve</code> callback, if this function called with <code>true</code> then it will be treated as success, otherwise it will be treated as failure</strong>) or a <code>Promise</code> object(<strong>if <code>resolve</code> value is <code>true</code> then it will be treated as success, otherwise it will be treated as failure</strong>), then it will be validate asynchronously. And when validating the <code>validating</code> event will be emited.</p><pre><code class="language-html">&lt;div class=&quot;validator-item&quot;&gt;
  &lt;p&gt;Async validate: &lt;/p&gt;
  &lt;cube-validator
    v-model=&quot;valid&quot;
    :model=&quot;captcha&quot;
    :rules=&quot;rules&quot;
    :messages=&quot;messages&quot;
    :immediate=&quot;immediate&quot;
    @validating=&quot;validatingHandler&quot;
    @validated=&quot;validatedHandler&quot;&gt;
    &lt;cube-input v-model=&quot;captcha&quot; placeholder=&quot;Please input captcha&quot;&gt;&lt;/cube-input&gt;
  &lt;/cube-validator&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      valid: undefined,
      captcha: &#39;&#39;,
      rules: {
        type: &#39;number&#39;,
        required: true,
        len: 6,
        captchaCheck: (val) =&gt; {
          return (resolve) =&gt; {
            setTimeout(() =&gt; {
              resolve(val === &#39;123456&#39;)
            }, 1000)
          }
          /** or return promise:
          return new Promise((resolve) =&gt; {
            setTimeout(() =&gt; {
              resolve(val === &#39;123456&#39;)
            }, 1000)
          })
          **/
        }
      },
      messages: {
        captchaCheck: &#39;Please input &quot;123456&quot;&#39;
      }
    }
  },
  methods: {
    validatingHandler() {
      console.log(&#39;validating&#39;)
    },
    validatedHandler() {
      console.log(&#39;validated&#39;)
    }
  }
}
</code></pre><p>The <code>captchaCheck</code> is an async rule.</p></li><li><p>Submit</p><p>Although submit is not inside of Validator, it usually be relative with Validator. Therefore, we want to introduce our best practice about submit here. It focus on the handles of multi-validator and warn message no matter whether the form data has ever changed.</p><pre><code class="language-html">&lt;cube-input v-model=&quot;text0&quot; placeholder=&quot;Required&quot;/&gt;
&lt;cube-validator ref=&quot;validator0&quot; v-model=&quot;result[0]&quot; :model=&quot;text0&quot; :rules=&quot;rules0&quot;/&gt;
&lt;cube-input v-model=&quot;text1&quot; placeholder=&quot;E-mail&quot;/&gt;
&lt;cube-validator ref=&quot;validator1&quot; v-model=&quot;result[1]&quot; :model=&quot;text1&quot; :rules=&quot;rules1&quot;/&gt;
&lt;cube-input v-model=&quot;text2&quot; placeholder=&quot;TEL&quot;/&gt;
&lt;cube-validator ref=&quot;validator2&quot; v-model=&quot;result[2]&quot; :model=&quot;text2&quot; :rules=&quot;rules2&quot;/&gt;
&lt;cube-button @click=&quot;submit&quot;&gt;Submit&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      result: [true, true, true],
      text0: &#39;&#39;,
      rules0: {
        required: true,
      },
      text1: &#39;&#39;,
      rules1: {
        type: &#39;email&#39;,
      },
      text2: &#39;&#39;,
      rules2: {
        type: &#39;tel&#39;,
      },
      trigger: false
    }
  },
  methods: {
    submit() {
      this.$refs.validator0.validate()
      this.$refs.validator1.validate()
      this.$refs.validator2.validate()
      if (this.result.every(item =&gt; item)) {
        this.$createToast({
          type: &#39;correct&#39;,
          txt: &#39;Submited&#39;,
          time: 1000
        }).show()
      }
    }
  }
}
</code></pre></li></ul><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model</td><td>Required, figure the data need to validate</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>v-model</td><td>the validation result，whether the data is valid</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>rules</td><td>the rules for validation, you can find the details of rules below</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>messages</td><td>custom messages for the corresponding rule</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>immediate</td><td>Immediate validate after loaded</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled<sup>1.7.0+</sup></td><td>disabled validate or not</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>the relative form component or element</td><td>-</td></tr><tr><td>message</td><td>warning message</td><td>dirty: if the data have ever changed <br> validating: whether is validating <br> validated: if the validator have ever validated <br> message: the message of the first failed rule <br> result: an object, which contains the resule and message of each rule, such as, { required: { valid: false, invalid: true, message: ‘必填’ } }</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>validating</td><td>validating (only triggered when async validateing)</td><td>-</td></tr><tr><td>validated</td><td>validated (only triggered when async validateing)</td><td>valid: 校验是否成功</td></tr><tr><td>msg-click</td><td>click error message ele</td><td>-</td></tr><tr><td>input</td><td>triggers when the binding value changes</td><td>the updated value</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters</th><th>Returned value</th></tr></thead><tbody><tr><td>validate(cb)</td><td>Validate</td><td>cb: validated callback function, used to async validating cases normally. The arguments is the <code>valid</code> value</td><td>If supported Promise then the returned value will be Promise instance(Only have resolved state, the resolved value is <code>valid</code>), otherwise the returned value is <code>undefined</code></td></tr></tbody></table><h3>Rule</h3><ul><li><p>Build-in rules</p><p>There are some build-in rules here, include required、type、min、max、len、notWhitespace、pattern、custom.</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Demo</th></tr></thead><tbody><tr><td>required</td><td>required</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>type</td><td>type</td><td>String</td><td>‘string’, ‘number’, ‘array’, ‘date’, ‘email’, ‘tel’, ‘url’</td><td>‘tel’</td></tr><tr><td>min</td><td>when the type is number or date, it means the data need not smaller than min. Otherwise, it means the length of the data need not smaller than min</td><td>Number</td><td>-</td><td>6</td></tr><tr><td>max</td><td>when the type is number or date, it means the data need not bigger than max. Otherwise, it means the length of the data need not bigger than max</td><td>Number</td><td>-</td><td>8</td></tr><tr><td>len</td><td>when the type is number or date, it means the data need equal to min. Otherwise, it means the length of the data need equal to len</td><td>Number</td><td>-</td><td>7</td></tr><tr><td>notWhitespace</td><td>don’t allowed to be whitespace</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>pattern</td><td>RegExp match</td><td>RegExp</td><td>-</td><td>/1$/</td></tr><tr><td>custom</td><td>Costomized validation function. Only valid when the <code>return</code> is strict equaled to <code>true</code></td><td>Function</td><td>-</td><td>val =&gt; val.length === 7</td></tr></tbody></table></li><li><p>Add rule</p><p>Beside the build-in rules, you could use the method <code>addRule</code> of Validator to add customized common rule, and <code>addMessage</code> method to add corresponding default warning message.</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Validator } from &#39;cube-ui&#39;

// need use Validator
Vue.use(Validator)

Validator.addRule(&#39;odd&#39;, (val, config, type) =&gt; !config || Number(val) % 2 === 1)
Validator.addMessage(&#39;odd&#39;, &#39;Please input odd.&#39;)
</code></pre><pre><code class="language-html">&lt;cube-validator v-model=&quot;valid&quot; :model=&quot;text&quot; :rules=&quot;rule&quot;&gt;
  &lt;cube-input v-model=&quot;text3&quot; placeholder=&quot;odd&quot;&gt;&lt;/cube-input&gt;
&lt;/cube-validator&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      text: &#39;100&#39;,
      valid: undefined,
      rules: {
        type: &#39;number&#39;,
        odd: true
      }
    }
  }
}
</code></pre></li></ul><h3>Add default message</h3><p>At first, let’s see the build-in default messages. You can use <code>addMessage</code> to modify the special sub-message.</p><ul><li>Build-in default messages</li></ul><pre><code class="language-js">const messages = {
  required: &#39;Required.&#39;,
  type: {
    string: &#39;Please input characters.&#39;,
    number: &#39;Please input numbers.&#39;,
    array: &#39;The data type should be array.&#39;,
    date: &#39;Please select a valid date.&#39;,
    email: &#39;Please input a valid E-mail.&#39;,
    tel: &#39;Please input a valid telphone number.&#39;,
    url: &#39;Please input a valid web site.&#39;
  },
  min: {
    string: &#39;Please input at least {{config}} characters.&#39;,
    number: &#39;The number could not smaller than {{config}}.&#39;,
    array: &#39;Please select at least {{config}} items.&#39;,
    date: &#39;Please select a date after {{config | toLocaleDateString(&quot;yyyy-MM-dd&quot;)}}.&#39;,
    email: &#39;Please input at least {{config}} characters.&#39;,
    tel: &#39;Please input at least {{config}} characters.&#39;,
    url: &#39;Please input at least {{config}} characters.&#39;
  },
  max: {
    string: &#39;Please input no more than {{config}} characters.&#39;,
    number: &#39;The number could not bigger than {{config}}&#39;,
    array: &#39;Please select no more than  {{config}} items&#39;,
    date: &#39;Please select a date before {{config | toLocaleDateString(&quot;yyyy-MM-dd&quot;)}}.&#39;,
    email: &#39;Please input no more than {{config}} characters.&#39;,
    tel: &#39;Please input no more than {{config}} characters.&#39;,
    url: &#39;Please input no more than {{config}} characters.&#39;
  },
  len: {
    string: &#39;Please input {{config}} characters.&#39;,
    number: &#39;The length should equal {{config}}&#39;,
    array: &#39;Please select {{config}} items&#39;,
    date: &#39;Please select {{config | toLocaleDateString(&quot;yyyy-MM-dd&quot;)}}.&#39;,
    email: &#39;Please input {{config}} characters.&#39;,
    tel: &#39;Please input {{config}} characters.&#39;,
    url: &#39;Please input {{config}} characters.&#39;
  },
  pattern: &#39;The input don&quot;t match pattern.&#39;,
  custom: &#39;Invalid.&#39;,
  notWhitespace: &#39;Whitespace is invalid.&#39;
}
</code></pre><ul><li>Modify the build-in message</li></ul><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Validator } from &#39;cube-ui&#39;

// need use Validator
Vue.use(Validator)

Validator.addMessage(&#39;required&#39;, &#39;Please input this.&#39;)

// Override the message for min.date
Validator.addMessage(&#39;min&#39;, {
  date: &#39;Please select a date after {{config | toLocaleDateString(&quot;yyyy-MM-dd&quot;) | tips(&quot;Please re-enter&quot;)}}.&#39;
})
</code></pre><p>As above, the default message parsed inside the component is similar to the Vue filter mechanism.</p><ul><li>config</li></ul><p>For example, the rule you configured is: {type: ‘date’, min: ‘2018-10-10’}, then the value of the <code>config</code> field in above message template is ‘2018-10-10’, because the checksum is a <code>date</code> type, the value of <code>min</code> can be a <code>timestamp</code> or a date-like string <code>yyyy-MM-dd mm:ss </code> or <code>yyyy/MM/dd mm:ss</code>.</p><ul><li>toLocaleDateString</li></ul><p>The built-in helper function, the first parameter is the config value you configured, the second parameter is the date format you want to initialize, as above is <code>&#39;yyyy year MM month dd day&#39;</code>, accepting something like <code>yyyy-MM-dd mm:ss</code> format, you can also register your own helper function as follows.</p><pre><code class="language-js">Validator.addHelper(&#39;fnName&#39;, (result, arg1) =&gt; {
  // result -&gt; The value returned by the previous helper function or the config value, as in the above example is &#39;2018-10-10&#39;
  // arg1 -&gt; The string you passed in the message template, as in the above example, &#39;Please re-enter&#39;
  let ret

  // do your own job
  ret = result + arg1

  // you must return the processed message
  return ret
})
</code></pre><p>The tool functions registered through <code>Validator.addHelper</code> are actually mounted under the <code>Locale.helpers</code> namespace. You can also import the <code>Locale</code> module and register your own tool functions with <code>Locale.addHelper</code>, which point to the same address.</p><h3>addType</h3><ul><li>Add new type</li></ul><pre><code class="language-js">import { Validator } from &#39;cube-ui&#39;

Validator.addType(&#39;yourType&#39;, (val) =&gt; {
  return typeof val === &#39;string&#39; &amp;&amp; /^[a-z0-9_-]+/i.test(val)
})
</code></pre><ul><li>Modify the build-in type</li></ul><pre><code class="language-js">import { Validator } from &#39;cube-ui&#39;

Validator.addType(&#39;email&#39;, (val) =&gt; {
  return typeof val === &#39;string&#39; &amp;&amp; /^[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)$/i.test(val)
})
</code></pre>`,33),l=[o],h={__name:"validator",setup(r,{expose:e}){return e({frontmatter:{}}),(s,u)=>(a(),t("div",n,l))}};export{h as default};
