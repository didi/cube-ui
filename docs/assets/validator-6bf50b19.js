import{a as e,o as d,j as n}from"./index-e8a96955.js";const o={class:"markdown-body"},a=n(`<h2>Validator</h2><blockquote><p>1.5.0 新增</p></blockquote><p>校验器，用于对表单进行验证，并提示相应的错误信息。</p><h3>示例</h3><ul><li><p>基本用法</p><p>Validator 作为一个独立的组件，通过 model 属性绑定它需要检验的数据；rules 定义验证规则，在 rules 规则中，可以配置 type、required 等内置规则，也可以用 pattern 添加校验的正则表达式，或 custom 自定义验证函数，具体细节可见后面的规则；针对各类规则，我们有比较完善的默认提示文案，具体可见后面的默认提示文案；同时，你也可以用 messages 属性用于自定义提示信息。</p><pre><code class="language-html">&lt;cube-input v-model=&quot;text&quot; placeholder=&quot;E-mail&quot;&gt;&lt;/cube-input&gt;
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
</code></pre></li><li><p>给表单添加警告样式</p><p>如果想给表单组件添加警告样式，可以通过把表单组件作为默认插槽，插在 Validator 组件内。因为当未通过验证时，Validator 组件会有一个样式类，cube-validator_warn，给这个类下的表单元素增加样式即可。</p><pre><code class="language-html">&lt;cube-validator :model=&quot;text&quot; :rules=&quot;rules&quot; v-model=&quot;valid&quot;&gt;
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
</code></pre></li><li><p>自定义提示插槽</p><p>用 messages 属性只能配置提示信息文案，但当你想加图标等自定义提示时，可以使用 message 插槽。这是一个作用域插槽，提供的作用域参数基本上能够满足所有的灵活定制需求，参数包括了：dirty，待检验的数据是否有修改过；message，首条没通过的规则的提示信息；result，对象，内含每条规则的校验结果和提示信息，如{ required: { valid: false, invalid: true, message: ‘必填’ } }。</p><pre><code class="language-html">&lt;cube-validator v-model=&quot;valid&quot; :model=&quot;text&quot; :rules=&quot;rules&quot; :messages=&quot;messages&quot;&gt;
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
</code></pre></li><li><p>异步校验<sup>1.8.0+</sup></p><p>支持校验规则是异步的情况，约定如果校验规则函数的返回值是一个函数（<strong>该函数接收一个 <code>resolve</code> 回调，如果调用传入 <code>true</code> 则代表校验成功，否则都视为失败</strong>）或者是一个 Promise 对象（<strong><code>resolve</code> 的值是 <code>true</code> 的话就是校验成功，否则都视为失败</strong>）那么就是异步校验，同时在校验的过程中会派发 <code>validating</code> 事件，在校验后派发 <code>validated</code> 事件。</p><pre><code class="language-html">&lt;div class=&quot;validator-item&quot;&gt;
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
</code></pre><p>上述的 <code>captchaCheck</code> 就是一个异步校验规则，校验过程需花费 1 秒。</p></li><li><p>提交</p><p>虽然提交不属于 Validator 组件，但它往往与校验结果相关联着。所以这里说一下我们对提交的一种最佳实践，可供参考。重点在于对同时存在多个校验任务，以及提交时无论是否填写过表单都要进行校验，这两个需求的处理。</p><pre><code class="language-html">&lt;cube-input v-model=&quot;text0&quot; placeholder=&quot;Required&quot;/&gt;
&lt;cube-validator ref=&quot;validator0&quot; v-model=&quot;result[0]&quot; :model=&quot;text0&quot; :rules=&quot;rules0&quot;/&gt;
&lt;cube-input v-model=&quot;text1&quot; placeholder=&quot;E-mail&quot;/&gt;
&lt;cube-validator ref=&quot;validator1&quot; v-model=&quot;result[1]&quot; :model=&quot;text1&quot; :rules=&quot;rules1&quot;/&gt;
&lt;cube-input v-model=&quot;text2&quot; placeholder=&quot;TEL&quot;/&gt;
&lt;cube-validator ref=&quot;validator2&quot; v-model=&quot;result[2]&quot; :model=&quot;text2&quot; :rules=&quot;rules2&quot;/&gt;
&lt;cube-button @click=&quot;submit&quot;&gt;Submit&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      result: [undefined, undefined, undefined],
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
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      Promise.all([p1, p2, p3]).then(() =&gt; {
        if (this.result.every(item =&gt; item)) {
          this.$createToast({
            type: &#39;correct&#39;,
            txt: &#39;Submited&#39;,
            time: 1000
          }).show()
        }
      })
    }
  }
}
</code></pre><p>对于有多个校验同时通过才可提交的情况，为了不用一个一个去取校验结果变量，可以把这组校验结果存在一个数组，在提交时，遍历这个数组即可。</p><p>通过调用 Validator 实例的 <code>validate</code> 方法可以去校验处理，从 1.8.0 版本后支持回调参数且如果浏览器支持 Promise 那么返回值就是 Promise 对象。</p></li></ul><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>必传，指定需要校验的数据</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>v-model</td><td>校验结果，是否通过验证</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>rules</td><td>校验规则，具体见后面的内置规则和创建规则</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>messages</td><td>自定义提示信息</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>immediate</td><td>初始时是否立即校验</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled<sup>1.7.0+</sup></td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>表单组件</td><td>-</td></tr><tr><td>message</td><td>错误提示</td><td>dirty: 待检验的数据是否有修改过 <br> validating: 是否正在校验 <br> validated: 是否校验过 <br> message: 首条没通过的规则的提示信息 <br> result: 对象，内含每条规则的校验结果和提示信息，如{ required: { valid: false, invalid: true, message: ‘必填’ } }</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validating</td><td>正在校验（只在异步场景下触发）</td><td>-</td></tr><tr><td>validated</td><td>校验完成（只在异步场景下触发）</td><td>valid: 校验是否成功</td></tr><tr><td>msg-click</td><td>错误消息点击</td><td>-</td></tr><tr><td>input</td><td>绑定值变化时触发</td><td>更新后的绑定值</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>validate(cb)</td><td>校验</td><td>cb: 校验完成后回调函数，主要用于异步校验场景，调用参数为 valid 的值</td><td>如果支持 Promise 返回值为 Promise 对象（只有 resolved 状态，值为 valid），否则返回值为 undefined</td></tr></tbody></table><h3>规则</h3><ul><li><p>已有规则</p><p>目前已有的内置规则，有 required、type、min、max、len、notWhitespace、pattern、custom。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>示例</th></tr></thead><tbody><tr><td>required</td><td>必填</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>type</td><td>类型</td><td>String</td><td>‘string’, ‘number’, ‘array’, ‘date’, ‘email’, ‘tel’, ‘url’</td><td>‘tel’</td></tr><tr><td>min</td><td>当类型为 number 或 date 时，表示待校验的数据必须大于等于 min；其它类型，表示待校验数据的长度必须大于等于 min</td><td>Number</td><td>-</td><td>6</td></tr><tr><td>max</td><td>当类型为 number 或 date 时，表示待校验的数据必须小于等于 max；其它类型，表示待校验数据的长度必须小于等于 max</td><td>Number</td><td>-</td><td>8</td></tr><tr><td>len</td><td>当类型为 number 或 date 时，表示待校验的数据必须等于 len；其它类型，表示待校验数据的长度必须等于 len</td><td>Number</td><td>-</td><td>7</td></tr><tr><td>notWhitespace</td><td>不允许全是空白符</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>pattern</td><td>正则匹配</td><td>RegExp</td><td>-</td><td>/1$/</td></tr><tr><td>custom</td><td>自定义验证函数，当返回值严格等于 true 时，代表验证通过。</td><td>Function</td><td>-</td><td>val =&gt; val.length === 7</td></tr></tbody></table></li><li><p>添加规则</p><p>除了已有的内置规则，你还可以使用 Validator 的 addRule 方法，添加自定义的公共规则，以及 addMessage 方法添加相应的默认提示信息。</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Validator } from &#39;cube-ui&#39;
// need use Validator
Vue.use(Validator)
Validator.addRule(&#39;odd&#39;, (val, config, type) =&gt; !config || Number(val) % 2 === 1)
Validator.addMessage(&#39;odd&#39;, &#39;Please input odd.&#39;)
</code></pre><p>接下来你就可以在 rules 的配置中使用 odd 规则了：</p><pre><code class="language-html">&lt;cube-validator v-model=&quot;valid&quot; :model=&quot;text&quot; :rules=&quot;rules&quot;&gt;
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
</code></pre></li></ul><h3>添加默认提示信息</h3><p>首先我们看一下内置的默认提示信息是怎样的，如果你需要修改，可以通过 addMessage 修改相应子属性。</p><ul><li>内置的默认提示信息</li></ul><pre><code class="language-js">const messages = {
  required: &#39;此为必填项&#39;,
  type: {
    string: &#39;请输入字符&#39;,
    number: &#39;请输入数字&#39;,
    array: &#39;数据类型应为数组&#39;,
    date: &#39;请选择有效日期&#39;,
    email: &#39;请输入有效邮箱&#39;,
    tel: &#39;请输入有效的手机号码&#39;,
    url: &#39;请输入有效网址&#39;
  },
  min: {
    string: &#39;至少输入 {{config}} 位字符&#39;,
    number: &#39;不得小于 {{config}}&#39;,
    array: &#39;请选择至少 {{config}} 项&#39;,
    date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之后的时间&#39;,
    email: &#39;至少输入 {{config}} 位字符&#39;,
    tel: &#39;至少输入 {{config}} 位字符&#39;,
    url: &#39;至少输入 {{config}} 位字符&#39;
  },
  max: {
    string: &#39;请勿超过 {{config}} 位字符&#39;,
    number: &#39;请勿大于 {{config}}&#39;,
    array: &#39;最多选择 {{config}} 项&#39;,
    date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
    email: &#39;请勿超过 {{config}} 位字符&#39;,
    tel: &#39;请勿超过 {{config}} 位字符&#39;,
    url: &#39;请勿超过 {{config}} 位字符&#39;
  },
  len: {
    string: &#39;请输入 {{config}} 位字符&#39;,
    number: &#39;长度应等于 {{config}}&#39;,
    array: &#39;请选择 {{config}} 项&#39;,
    date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
    email: &#39;请输入 {{config}} 位字符&#39;,
    tel: &#39;请输入 {{config}} 位字符&#39;,
    url: &#39;请输入 {{config}} 位字符&#39;
  },
  pattern: &#39;格式错误&#39;,
  custom: &#39;未通过校验&#39;,
  notWhitespace: &#39;空白内容无效&#39;
}
</code></pre><ul><li>修改已有提示信息</li></ul><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Validator } from &#39;cube-ui&#39;

// need use Validator
Vue.use(Validator)

Validator.addMessage(&#39;required&#39;, &#39;必填&#39;)

// 覆盖 min.date 的提示消息
Validator.addMessage(&#39;min&#39;, {
  date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;) | tips(&quot;请重新输入&quot;)}} 之后的时间&#39;
})
Validator.addHelper(&#39;tips&#39;, function(result, arg1) {
  // 必须要返回提示消息
  return \`\${result}, \${arg1}\`
})
</code></pre><p>如上，组件内部解析默认的消息是类似于 Vue filter 的机制。</p><ul><li>config</li></ul><p>比如你配置的规则是：{type: ‘date’, min: ‘2018-10-10’}，那么对于 <code>min</code> 下面的 <code>date</code> 的消息模板中的 <code>config</code> 字段的值就是 ‘2018-10-10’, 因为校验的是一个 <code>date</code> 类型，<code>min</code> 对应的字段可以是一个 <code>timestamp</code> (日期时间戳)或者类似于日期格式的字符串 <code>yyyy-MM-dd mm:ss</code> 或者 <code>yyyy/MM/dd mm:ss</code>。</p><ul><li>toLocaleDateString</li></ul><p>内置的helper函数，第一个参数是你配置的 config 值，第二个参数是你期望的日期格式， 如上则为 <code>&#39;yyyy年MM月dd日&#39;</code>, 接受类似于 <code>yyyy-MM-dd mm:ss</code> 格式，你也可以通过如下的方式注册你自己的helper函数。</p><pre><code class="language-js">Validator.addHelper(&#39;fnName&#39;, (result, arg1) =&gt; {
  // result -&gt; 上一个helper函数返回的值或者 config 值，如上例则是&#39;2018-10-10&#39;
  // arg1 -&gt; 你在消息模板传入的字符串, 如上例则是&#39;请重新输入&#39;
  let ret

  // 实现自己的逻辑
  ret = result + arg1

  // 必须返回处理过后的消息
  return ret
})
</code></pre><p>通过 Validator.addHelper 方法注册的工具函数实际上是在 Locale.helpers 的命名空间下，你也可以导入 Locale 模块并且通过 Locale.addHelper 注册工具函数，两者都是指向同一块内存地址。</p><h3>添加类型</h3><ul><li>添加新的类型</li></ul><pre><code class="language-js">import { Validator } from &#39;cube-ui&#39;

Validator.addType(&#39;yourType&#39;, (val) =&gt; {
  return typeof val === &#39;string&#39; &amp;&amp; /^[a-z0-9_-]+/i.test(val)
})
</code></pre><ul><li>修改已有类型</li></ul><pre><code class="language-js">import { Validator } from &#39;cube-ui&#39;

Validator.addType(&#39;email&#39;, (val) =&gt; {
  return typeof val === &#39;string&#39; &amp;&amp; /^[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)$/i.test(val)
})
</code></pre>`,33),l=[a],p={__name:"validator",setup(r,{expose:t}){return t({frontmatter:{}}),(i,s)=>(d(),e("div",o,l))}};export{p as default};
