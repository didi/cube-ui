import{a as e,o as d,j as n}from"./index-e8a96955.js";const o={class:"markdown-body"},l=n(`<h2>Form</h2><blockquote><p>New in 1.7.0+</p><p>1.8.0+ supported trigger validating when blur and debounce. Supported async validate too because of Validator supported it.</p></blockquote><p>CubeForm is a schema-based form generator component.</p><h3>Example</h3><ul><li><p>default usage</p><p>This demo includes all cube-ui form fields.</p><pre><code class="language-html">&lt;cube-form
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
</code></pre><p><code>model</code> is the model/target JSON object, <code>schema</code> is the schema object with fields, if <code>immediate-validate</code> is true, we will run validation after load.</p><p><code>submit</code> is the submited event, the <code>validate</code> is the form validate event and the <code>reset</code> is the form reset event.</p></li><li><p>Custom usage</p><p>You can choose to use your own custom components, or use slots to custom your logic.</p><pre><code class="language-html">&lt;cube-form :model=&quot;model&quot; @validate=&quot;validateHandler&quot; @submit=&quot;submitHandler&quot;&gt;
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
</code></pre><p>Like the <code>PCA</code> component, you can use <code>component</code> to define your custom component. Or use slots, like use DatePicker component.</p></li><li><p>Questionnaire</p><p>You can use form features to build your own app, like questionnaire. Code source: <a href="https://github.com/didi/cube-ui/tree/dev/example/components/questionnaire">https://github.com/didi/cube-ui/tree/dev/example/components/questionnaire</a></p><pre><code class="language-html">&lt;demo-questionnaire
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
</code></pre></li></ul><h3>Props</h3><h4>Form</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model</td><td>The model/target JSON object</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>schema</td><td>the schema object with fields</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>immediateValidate</td><td>If true, we will run validation after load</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>action</td><td>Form action value</td><td>String</td><td>-</td><td>undefined</td></tr><tr><td>options</td><td>Options for CubeForm</td><td>Object</td><td>-</td><td>{<br>scrollToInvalidField: false,<br> layout: ‘standard’ // or: classic</td></tr><tr><td>submitAlwaysValidate<sup>1.12.36+</sup></td><td>If true, we will always validate all fields when submit</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p><code>schema</code> sub configuration</p><p>The schema contains the fields of the form, optionally in groups.</p><ul><li><p>Without groups</p><p>Use <code>fields</code>:</p><pre><code class="language-js">{
  fields: [
    {
      type: &#39;input&#39;,
      modelKey: &#39;inputValue&#39;,
      label: &#39;Input&#39;
    },
    // ...
  ]
}
</code></pre></li><li><p>With groups</p><p>Use <code>groups</code>：</p><pre><code class="language-js">{
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
</code></pre></li></ul><p>A field in the schema defines an input element to a value of model. The common properties of field:</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type of field</td><td>String</td><td>Default fields: <code>button</code>, <code>checkbox</code>, <code>checkbox-group</code>, <code>input</code>, <code>radio</code>, <code>radio-group</code>, <code>rate</code>, <code>select</code>, <code>switch</code>, <code>textarea</code>, <code>upload</code>. There are two special types: <code>submit</code> and <code>reset</code>, they will be transformed to the corresponding type of <code>button</code>.</td><td>-</td></tr><tr><td>component</td><td>Custom filed component to replace <code>type</code>, the component should to work with <code>v-model</code></td><td>Object/String</td><td>-</td><td>-</td></tr><tr><td>modelKey</td><td>Name of property in the <code>form</code> model</td><td>String</td><td>-</td><td>-</td></tr><tr><td>label</td><td>Label of field</td><td>String</td><td>-</td><td>-</td></tr><tr><td>props</td><td>This value will be the <code>type</code> or <code>component</code> props</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>events<sup>1.8.0+</sup></td><td>This value will be the <code>type</code> or <code>component</code> custom events</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>rules</td><td>Validator rules, see <a href="#/en-US/docs/validator#cube-Props-anchor">Validator</a></td><td>Object</td><td>-</td><td>-</td></tr><tr><td>trigger<sup>1.8.0+</sup></td><td>If set to ‘blur’ then will be validate this filed when blur</td><td>String</td><td>blur/change</td><td>-</td></tr><tr><td>debounce<sup>1.8.0+</sup></td><td>Debounce validating time(ms). If <code>trigger</code> is ‘blur’ then the debounce will be ignored</td><td>Number/Boolean</td><td>&gt;= 0, if set to true the time will be 200(ms)</td><td>-</td></tr><tr><td>messages</td><td>Validator messages, see <a href="#/en-US/docs/validator#cube-Props-anchor">Validator</a></td><td>String</td><td>-</td><td>-</td></tr><tr><td>key<sup>1.12.36+</sup></td><td>field union key</td><td>String</td><td>-</td><td>-</td></tr></tbody></table></li><li><p><code>options</code> sub configuration</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>scrollToInvalidField</td><td>Whether to scroll to the first invalid fileld by default</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>layout</td><td>Form layout style</td><td>String</td><td>standard/classic/fresh</td><td>standard</td></tr></tbody></table></li></ul><h4>FormGroup</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>legend</td><td>Group legend</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>fields</td><td>Group fields</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h4>FormItem</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>field</td><td>Field value</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>submit</td><td>Form submit, only trigged when the form’s validation is ok. If only have sync validators, this event will not be prevented by default. If have async validators, this event will be prevented by default.</td><td>e - event</td><td>form model value</td><td>form model value with only fields <code>modelKey</code><sup>1.12.30+</sup></td></tr><tr><td>reset</td><td>Form reset</td><td>e - event</td><td>-</td><td>-</td></tr><tr><td>validate</td><td>Form validated</td><td>Properties: <br>{<br>validity,<br> valid,<br> invalid,<br> dirty,<br> firstInvalidFieldIndex<br>}</td><td>-</td><td>-</td></tr><tr><td>valid</td><td>Form valid</td><td>Validity result</td><td>-</td><td>-</td></tr><tr><td>invalid</td><td>Form invalid</td><td>Validity result</td><td>-</td><td>-</td></tr></tbody></table><ul><li><p><code>validate</code> event parameters</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>validity</td><td>Validity result</td><td>Object</td></tr><tr><td>valid</td><td>Validity check, if not verified this value will be undefined, once checked this value will be true or false</td><td>Boolean/Undefined</td></tr><tr><td>invalid</td><td>Validity check, if not verified this value will be undefined, once checked this value will be true or false</td><td>Boolean</td></tr><tr><td>dirty</td><td>When the form model changed then the form’s dirty is true</td><td>Boolean</td></tr><tr><td>firstInvalidFieldIndex</td><td>First invalid field index</td><td>Number</td></tr></tbody></table><ul><li><p>Validity result <code>validity</code></p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>valid</td><td>Is valid or not</td><td>Boolean/Undefined</td></tr><tr><td>result</td><td>Result, eg: <br>{<br> required: {<br>  valid: false,<br>  invalid: true,<br>  message: ‘Required.’<br> }<br>}</td><td>Object</td></tr><tr><td>dirty</td><td>The form model is changed or not</td><td>Boolean</td></tr></tbody></table></li></ul></li></ul><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters</th><th>Returned value</th></tr></thead><tbody><tr><td>submit</td><td>submit form</td><td>skipValidate: default <code>false</code>, if skipValidate is <code>true</code> then will be trigged submit event without validating<sup>1.12.2+</sup></td><td>-</td></tr><tr><td>reset</td><td>reset form</td><td>-</td><td>-</td></tr><tr><td>validate(cb)</td><td>validate form</td><td>cb: validated callback function, used to async validating cases normally. The arguments is the <code>valid</code> value</td><td>If supported Promise then the returned value will be Promise instance(Only have resolved state, the resolved value is <code>valid</code>), otherwise the returned value is <code>undefined</code></td></tr></tbody></table>`,18),r=[l],p={__name:"form",setup(i,{expose:t}){return t({frontmatter:{}}),(u,s)=>(d(),e("div",o,r))}};export{p as default};
