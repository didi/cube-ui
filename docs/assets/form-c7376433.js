import{a as e,o as d,j as n}from"./index-9017f177.js";const o={class:"markdown-body"},l=n(`<h2>Form</h2><blockquote><p>1.7.0 新增</p><p>从 1.8.0 开始支持blur 时才触发校验以及 debounce，同 Validator 一样也开始支持异步校验。</p></blockquote><p>表单，包含各种输入组件以及对应的校验；我们可以通过数据驱动的方式来生成完成表单。</p><h3>示例</h3><ul><li><p>默认配置使用</p><p>一个完整的包含所有的内置表单相关组件。</p><pre><code class="language-html">&lt;cube-form
  :model=&quot;model&quot;
  :schema=&quot;schema&quot;
  :immediate-validate=&quot;false&quot;
  :options=&quot;options&quot;
  @validate=&quot;validateHandler&quot;
  @submit=&quot;submitHandler&quot;
  @reset=&quot;resetHandler&quot;&gt;&lt;/cube-form&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        checkboxValue: false,
        checkboxGroupValue: [],
        inputValue: &#39;&#39;,
        radioValue: &#39;&#39;,
        rateValue: 0,
        selectValue: 2018,
        switchValue: true,
        textareaValue: &#39;&#39;,
        uploadValue: []
      },
      schema: {
        groups: [
          {
            legend: &#39;基础&#39;,
            fields: [
              {
                type: &#39;checkbox&#39;,
                modelKey: &#39;checkboxValue&#39;,
                props: {
                  option: {
                    label: &#39;Checkbox&#39;,
                    value: true
                  }
                },
                rules: {
                  required: true
                },
                messages: {
                  required: &#39;Please check this field&#39;
                }
              },
              {
                type: &#39;checkbox-group&#39;,
                modelKey: &#39;checkboxGroupValue&#39;,
                label: &#39;CheckboxGroup&#39;,
                props: {
                  options: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]
                },
                rules: {
                  required: true
                }
              },
              {
                type: &#39;input&#39;,
                modelKey: &#39;inputValue&#39;,
                label: &#39;Input&#39;,
                props: {
                  placeholder: &#39;请输入&#39;
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: &#39;blur&#39;
              },
              {
                type: &#39;radio-group&#39;,
                modelKey: &#39;radioValue&#39;,
                label: &#39;Radio&#39;,
                props: {
                  options: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]
                },
                rules: {
                  required: true
                }
              },
              {
                type: &#39;select&#39;,
                modelKey: &#39;selectValue&#39;,
                label: &#39;Select&#39;,
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020]
                },
                rules: {
                  required: true
                }
              },
              {
                type: &#39;switch&#39;,
                modelKey: &#39;switchValue&#39;,
                label: &#39;Switch&#39;,
                rules: {
                  required: true
                }
              },
              {
                type: &#39;textarea&#39;,
                modelKey: &#39;textareaValue&#39;,
                label: &#39;Textarea&#39;,
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
            legend: &#39;高级&#39;,
            fields: [
              {
                type: &#39;rate&#39;,
                modelKey: &#39;rateValue&#39;,
                label: &#39;Rate&#39;,
                rules: {
                  required: true
                }
              },
              {
                type: &#39;upload&#39;,
                modelKey: &#39;uploadValue&#39;,
                label: &#39;Upload&#39;,
                events: {
                  &#39;file-removed&#39;: (...args) =&gt; {
                    console.log(&#39;file removed&#39;, args)
                  }
                },
                rules: {
                  required: true,
                  uploaded: (val, config) =&gt; {
                    return Promise.all(val.map((file, i) =&gt; {
                      return new Promise((resolve, reject) =&gt; {
                        if (file.uploadedUrl) {
                          return resolve()
                        }
                        // fake request
                        setTimeout(() =&gt; {
                          if (i % 2) {
                            reject(new Error())
                          } else {
                            file.uploadedUrl = &#39;uploaded/url&#39;
                            resolve()
                          }
                        }, 1000)
                      })
                    })).then(() =&gt; {
                      return true
                    })
                  }
                },
                messages: {
                  uploaded: &#39;上传失败&#39;
                }
              }
            ]
          },
          {
            fields: [
              {
                type: &#39;submit&#39;,
                label: &#39;Submit&#39;
              },
              {
                type: &#39;reset&#39;,
                label: &#39;Reset&#39;
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: &#39;standard&#39; // classic fresh
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      console.log(&#39;submit&#39;, e)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log(&#39;validity&#39;, result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    resetHandler(e) {
      console.log(&#39;reset&#39;, e)
    }
  }
}
</code></pre><p><code>model</code> 就是整个表单需要的数据源，<code>schema</code> 就是生成表单所定义的模式，<code>immediate-validate</code> 如果为 true 则初始时立即做校验，<code>options</code> 则是配置选项。</p><p><code>submit</code> 校验成功后提交事件，<code>validate</code> 每次有数据校验更新的事件，<code>reset</code> 则是重置事件。</p></li><li><p>自定义使用</p><p>你可以选择使用自己自定义的组件甚至通过插槽来自定义结构和行为。</p><pre><code class="language-html">&lt;cube-form :model=&quot;model&quot; @validate=&quot;validateHandler&quot; @submit=&quot;submitHandler&quot;&gt;
  &lt;cube-form-group&gt;
    &lt;cube-form-item :field=&quot;fields[0]&quot;&gt;&lt;/cube-form-item&gt;
    &lt;cube-form-item :field=&quot;fields[1]&quot;&gt;&lt;/cube-form-item&gt;
    &lt;cube-form-item :field=&quot;fields[2]&quot;&gt;
      &lt;cube-button @click=&quot;showDatePicker&quot;&gt;{{model.dateValue || &#39;Please select date&#39;}}&lt;/cube-button&gt;
      &lt;date-picker ref=&quot;datePicker&quot; :min=&quot;[2008, 8, 8]&quot; :max=&quot;[2020, 10, 20]&quot; @select=&quot;dateSelectHandler&quot;&gt;&lt;/date-picker&gt;
    &lt;/cube-form-item&gt;
  &lt;/cube-form-group&gt;
  &lt;cube-form-group&gt;
    &lt;cube-button type=&quot;submit&quot;&gt;Submit&lt;/cube-button&gt;
  &lt;/cube-form-group&gt;
&lt;/cube-form&gt;
</code></pre><pre><code class="language-js">// province, city, area
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
    return createElement(&#39;cube-button&#39;, {
      on: {
        click: this.showPicker
      }
    }, this.selected.length ? this.selected.join(&#39; &#39;) : &#39;placeholder&#39;)
  },
  mounted() {
    this.picker = this.$createCascadePicker({
      title: &#39;PCA Select&#39;,
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
      this.$emit(&#39;input&#39;, selectedVal)
    }
  }
}
export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        inputValue: &#39;&#39;,
        pcaValue: [],
        dateValue: &#39;&#39;
      },
      fields: [
        {
          type: &#39;input&#39;,
          modelKey: &#39;inputValue&#39;,
          label: &#39;Input&#39;,
          props: {
            placeholder: &#39;请输入&#39;
          },
          rules: {
            required: true
          }
        },
        {
          component: PCA,
          modelKey: &#39;pcaValue&#39;,
          label: &#39;PCASelect&#39;,
          rules: {
            required: true
          },
          messages: {
            required: &#39;请选择&#39;
          }
        },
        {
          modelKey: &#39;dateValue&#39;,
          label: &#39;Date&#39;,
          rules: {
            required: true
          }
        }
      ]
    }
  },
  methods: {
    submitHandler(e) {
      console.log(&#39;submit&#39;)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log(&#39;validity&#39;, result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
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
</code></pre><p>可以通过 <code>component</code> 指定实现了 <code>v-model</code> 的自定义组件，例如示例中的 <code>PCA</code> 组件；也可以通过使用插槽自定义结构行为，比如示例中的日期选择。</p><ul><li>自定义问卷场景</li></ul><p>你可以利用 Form 组件的特性轻松实现类似问卷这种场景表单，组件示例源代码：<a href="https://github.com/didi/cube-ui/tree/dev/example/components/questionnaire">https://github.com/didi/cube-ui/tree/dev/example/components/questionnaire</a></p><pre><code class="language-html">&lt;demo-questionnaire
  :tip=&quot;tip&quot;
  :questions=&quot;questions&quot;
  :submit=&quot;submit&quot;
  @submit=&quot;submitHandler&quot;
/&gt;
</code></pre><pre><code class="language-js">// source
// https://github.com/didi/cube-ui/tree/dev/example/components/questionnaire/questionnaire.vue
import DemoQuestionnaire from &#39;example/components/questionnaire/questionnaire.vue&#39;
export default {
  data() {
    return {
      tip: &#39;请配合如实填写问卷，确保xxxx相关文案&#39;,
      questions: [
        {
          type: &#39;switch&#39;,
          model: &#39;switch&#39;,
          title: &#39;询问是否？&#39;
          // required: true
        },
        {
          type: &#39;input&#39;,
          model: &#39;input&#39;,
          title: &#39;输入&#39;,
          options: {
            placeholder: &#39;请输入&#39;
          },
          on: &#39;switch&#39;,
          required: true
        },
        {
          type: &#39;date&#39;,
          model: &#39;date&#39;,
          title: &#39;日期&#39;,
          options: {
            // min: &#39;2020-01-01&#39;,
            // max: &#39;2020-02-18&#39;
          },
          required: true
        },
        {
          type: &#39;time&#39;,
          model: &#39;time&#39;,
          title: &#39;时间&#39;,
          options: {
            min: &#39;01:00&#39;,
            max: &#39;23:59&#39;
          },
          required: true
        },
        {
          type: &#39;select&#39;,
          model: &#39;select&#39;,
          title: &#39;选择&#39;,
          options: [
            &#39;option1&#39;,
            &#39;option2&#39;,
            &#39;option3&#39;
          ],
          required: true
        },
        {
          type: &#39;radio&#39;,
          model: &#39;radio&#39;,
          title: &#39;单选&#39;,
          options: [
            &#39;单选1&#39;,
            &#39;单选2&#39;,
            &#39;单选3&#39;
          ],
          required: true
        },
        {
          type: &#39;checkbox&#39;,
          model: &#39;checkbox&#39;,
          title: &#39;多选&#39;,
          options: [
            &#39;多选1&#39;,
            &#39;多选2&#39;,
            &#39;多选3&#39;
          ],
          required: true
        },
        {
          type: &#39;textarea&#39;,
          model: &#39;textarea&#39;,
          title: &#39;多行文本&#39;,
          on: {
            model: &#39;checkbox&#39;,
            options: [&#39;多选1&#39;, &#39;多选3&#39;]
          },
          required: true
        },
        {
          type: &#39;checkbox&#39;,
          row: true,
          model: &#39;checkbox2&#39;,
          title: &#39;多选-横&#39;,
          options: [
            &#39;多选-横1&#39;,
            &#39;多选-横2&#39;,
            &#39;多选-横3&#39;
          ],
          required: true
        },
        {
          type: &#39;tel&#39;,
          model: &#39;tel&#39;,
          title: &#39;手机号&#39;,
          options: {
            placeholder: &#39;请输入手机号&#39;
          },
          required: true
        },
        {
          type: &#39;rate&#39;,
          model: &#39;rate&#39;,
          title: &#39;级别&#39;,
          options: {
            max: 10
          },
          required: true
        },
        {
          type: &#39;city&#39;,
          model: &#39;city&#39;,
          title: &#39;城市&#39;,
          required: true
        },
        {
          type: &#39;upload&#39;,
          model: &#39;upload&#39;,
          title: &#39;上传&#39;,
          options: {
            action: &#39;//jsonplaceholder.typicode.com/photos/&#39;,
            max: 2
          },
          required: true
        },
        {
          type: &#39;agreement&#39;,
          model: &#39;agreement&#39;,
          options: {
            text: &#39;请同意&#39;,
            link: {
              text: &#39;《xx协议》&#39;,
              href: &#39;https://github.com/didi/cube-ui&#39;
            },
            desc: &#39;说明：本人承诺xx xxxxx xxx xx。&#39;
          },
          required: true,
          errMsg: &#39;请同意协议&#39;
        }
      ],
      submit: {
        text: &#39;Submit&#39;
      }
    }
  },
  components: {
    DemoQuestionnaire
  },
  methods: {
    submitHandler(model) {
      console.log(&#39;submit&#39;, model)
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><h4>CubeForm</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>数据源</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>schema</td><td>生成表单依赖的模式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>immediateValidate</td><td>初始化时是否立即校验</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>action</td><td>表单 Form action 的值</td><td>String</td><td>-</td><td>undefined</td></tr><tr><td>options</td><td>配置项</td><td>Object</td><td>-</td><td>{<br>scrollToInvalidField: false,<br> layout: ‘standard’ // or: classic</td></tr><tr><td>submitAlwaysValidate<sup>1.12.36+</sup></td><td>提交表单时是否总校验所有字段</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p><code>schema</code> 子配置项</p><p>模式用于定义表单中的各个字段，可以选择是否分组。</p><ul><li><p>无分组</p><p>直接包含 <code>fields</code> 即可：</p><pre><code class="language-js">{
  fields: [
    {
      type: &#39;input&#39;,
      modelKey: &#39;inputValue&#39;,
      label: &#39;Input&#39;
    },
    // ...
  ]
}
</code></pre></li><li><p>有分组</p><p>可以设置 <code>groups</code>：</p><pre><code class="language-js">{
  groups: [
    {
      legend: &#39;Group 1&#39;
      fields: [
        {
          type: &#39;input&#39;,
          modelKey: &#39;inputValue&#39;,
          label: &#39;Input&#39;
        },
        // ...
      ]
    },
    {
      legend: &#39;Group 2&#39;
      fields: [
        {
          type: &#39;input&#39;,
          modelKey: &#39;inputValue&#39;,
          label: &#39;Input&#39;
        },
        // ...
      ]
    }
  ]
}
</code></pre></li></ul><p>不管有没有分组，我们都需要使用 <code>fields</code> 定义表单字段，其中每一项可以有如下属性：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>字段类型</td><td>String</td><td>默认内置的可选类型组件有：<code>button</code>, <code>checkbox</code>, <code>checkbox-group</code>, <code>input</code>, <code>radio</code>, <code>radio-group</code>, <code>rate</code>, <code>select</code>, <code>switch</code>, <code>textarea</code>, <code>upload</code>；以及特殊的 <code>submit</code> 和 <code>reset</code>，它们两个会被转换为对应类型的 <code>button</code></td><td>-</td></tr><tr><td>component</td><td>字段使用的自定义组件，替换 type，该组件组件实现 <code>v-model</code></td><td>Object/String</td><td>-</td><td>-</td></tr><tr><td>modelKey</td><td>在表单的 <code>model</code> 数据源对象中所对应的 key 名字</td><td>String</td><td>-</td><td>-</td></tr><tr><td>label</td><td>字段的标签值</td><td>String</td><td>-</td><td>-</td></tr><tr><td>props</td><td>type 对应的组件或者自定义组件 component 所需要的 props</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>events<sup>1.8.0+</sup></td><td>type 对应的组件或者自定义组件 component 的事件回调</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>rules</td><td>字段的校验规则，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a></td><td>Object</td><td>-</td><td>-</td></tr><tr><td>trigger<sup>1.8.0+</sup></td><td>如果设置为 ‘blur’ 那么则会在离焦后校验</td><td>String</td><td>blur/change</td><td>-</td></tr><tr><td>debounce<sup>1.8.0+</sup></td><td>控制校验节奏，值为时间，单位 ms。如果 trigger 设置为 blur 则此项配置不生效</td><td>Number/Boolean</td><td>&gt;= 0，如果设置为 true，那么时间就是 200(ms)</td><td>-</td></tr><tr><td>messages</td><td>字段的校验消息，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a></td><td>String</td><td>-</td><td>-</td></tr><tr><td>key<sup>1.12.36+</sup></td><td>字段的唯一key，尤其适用在 schema 更新的场景中</td><td>String</td><td>-</td><td>-</td></tr></tbody></table></li><li><p><code>options</code> 子配置项</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>scrollToInvalidField</td><td>是否默认滚动到第一个无效字段位置</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>layout</td><td>表单何种布局方式</td><td>String</td><td>standard/classic/fresh</td><td>standard</td></tr></tbody></table></li></ul><h4>CubeFormGroup</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>legend</td><td>分组名字</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>fields</td><td>该组内所包含的字段集合</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h4>CubeFormItem</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>字段数据</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>submit</td><td>表单校验通过后触发此事件，如果只有同步校验，则不会阻止默认行为，而如果包含了异步校验，则默认就会阻止默认行为</td><td>e - 事件对象</td><td>model 值</td><td>只包含存在的字段的 model 值<sup>1.12.30+</sup></td></tr><tr><td>reset</td><td>表单重置事件</td><td>e - 事件对象</td><td>-</td><td>-</td></tr><tr><td>validate</td><td>表单校验事件</td><td>参数结构如下：<br>{<br>validity,<br> valid,<br> invalid,<br> dirty,<br> firstInvalidFieldIndex<br>}</td><td>-</td><td>-</td></tr><tr><td>valid</td><td>表单校验成功触发</td><td>validity 校验结果</td><td>-</td><td>-</td></tr><tr><td>invalid</td><td>表单校验失败触发</td><td>validity 校验结果</td><td>-</td><td>-</td></tr></tbody></table><ul><li><p><code>validate</code> 事件的参数</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>validity</td><td>校验结果</td><td>Object</td></tr><tr><td>valid</td><td>校验合法，如果还没校验则为 undefined，一旦校验则为 true 或 false</td><td>Boolean/Undefined</td></tr><tr><td>invalid</td><td>校验不合法，如果还没校验则为 undefined，一旦校验则为 true 或 false</td><td>Boolean</td></tr><tr><td>dirty</td><td>表单处于 dirty 状态，也就意味着数据源发生了变化</td><td>Boolean</td></tr><tr><td>firstInvalidFieldIndex</td><td>第一个校验不合法的字段索引值</td><td>Number</td></tr></tbody></table><ul><li><p>校验结果 <code>validity</code> 对象</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>valid</td><td>校验是否合法</td><td>Boolean/Undefined</td></tr><tr><td>result</td><td>校验结果，类似于：<br>{<br> required: {<br>  valid: false,<br>  invalid: true,<br>  message: ‘Required.’<br> }<br>}</td><td>Object</td></tr><tr><td>dirty</td><td>数据是否是已经更新过的</td><td>Boolean</td></tr></tbody></table></li></ul></li></ul><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>submit</td><td>提交表单</td><td>skipValidate, 默认 false，如果为 true 代表不校验 直接 submit<sup>1.12.2+</sup></td><td>-</td></tr><tr><td>reset</td><td>重置表单</td><td>-</td><td>-</td></tr><tr><td>validate(cb)</td><td>校验表单</td><td>cb: 校验完成后回调函数，主要用于异步校验场景，调用参数为 valid 的值</td><td>如果支持 Promise 的话返回值是 Promise 对象（只有 resolved 状态，值为 valid），否则 undefined</td></tr></tbody></table>`,18),r=[l],p={__name:"form",setup(a,{expose:t}){return t({frontmatter:{}}),(u,s)=>(d(),e("div",o,r))}};export{p as default};
