import{a as e,o as d,j as n}from"./index-9017f177.js";const o={class:"markdown-body"},c=n(`<h2>Dialog</h2><p><code>Dialog</code> modal component，provides various styles and interactions.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Alert type</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAlert&quot;&gt;Dialog - alert&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showAlert() {
      this.$createDialog({
        type: &#39;alert&#39;,
        title: &#39;i am title&#39;,
        content: &#39;i am content&#39;,
        icon: &#39;cubeic-alert&#39;
      }).show()
    }
  }
}
</code></pre><p><code>type</code> will be one of the following: <code>alert</code>, <code>confirm</code>, <code>prompt</code> <sup>1.11.0</sup>.</p></li><li><p>Prompt type</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPrompt&quot;&gt;Dialog - prompt&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showAlert() {
      this.dialog = this.$createDialog({
        type: &#39;prompt&#39;,
        title: &#39;我是标题&#39;,
        prompt: {
          value: &#39;&#39;,
          placeholder: &#39;请输入&#39;
        },
        onConfirm: (e, promptValue) =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: \`Prompt value: \${promptValue || &#39;&#39;}\`
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>You can get prompt input value in confirm event handler. And <code>prompt</code> value will be passed to <a href="#/en-US/docs/input">Input component</a> as props.</p></li><li><p>Button configuration</p><pre><code class="language-html">&lt;cube-button @click=&quot;showBtn&quot;&gt;Dialog - btn&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showBtn() {
      this.$createDialog({
        type: &#39;confirm&#39;,
        icon: &#39;cubeic-alert&#39;,
        title: &#39;i am title&#39;,
        content: &#39;i am content&#39;,
        confirmBtn: {
          text: &#39;confirm&#39;,
          active: true,
          disabled: false,
          href: &#39;javascript:;&#39;
        },
        cancelBtn: {
          text: &#39;cancel&#39;,
          active: false,
          disabled: false,
          href: &#39;javascript:;&#39;
        },
        onConfirm: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;点击确认按钮&#39;
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;点击取消按钮&#39;
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>Button configuration(<code>confirmBtn</code>, <code>cancelBtn</code>) can be <code>String</code> or <code>Object</code> type. When given an Object, <code>text</code> can be used to set button content，<code>active</code> is used to set button highlight state，<code>disabled</code> is used to set button disabled state，<code>href</code> is used to set the link that will be jumped to when the button is clicked.</p></li><li><p>Show close button</p><pre><code class="language-html">&lt;cube-button @click=&quot;showClose&quot;&gt;Dialog - show close&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showClose() {
      this.$createDialog({
        type: &#39;alert&#39;,
        icon: &#39;cubeic-alert&#39;,
        showClose: true,
        title: &#39;title&#39;,
        onClose: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;the close button has been clicked&#39;
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>You can change <code>showClose</code> to decide whether to show the close button. The <code>close</code> event will be dispatched when the close button is clicked and the <code>onClose</code> callback will be invoked if it is configured.</p></li><li><p>Slot</p><pre><code class="language-html">&lt;cube-button @click=&quot;showSlot&quot;&gt;Dialog - slot&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showSlot() {
      this.$createDialog({
        type: &#39;alert&#39;,
        confirmBtn: {
          text: &#39;got it&#39;,
          active: true
        }
      }, (createElement) =&gt; {
        return [
          createElement(&#39;div&#39;, {
            &#39;class&#39;: {
              &#39;my-title&#39;: true
            },
            slot: &#39;title&#39;
          }, [
            createElement(&#39;div&#39;, {
              &#39;class&#39;: {
                &#39;my-title-img&#39;: true
              }
            }),
            createElement(&#39;p&#39;, &#39;custom title&#39;)
          ]),
          createElement(&#39;p&#39;, {
            &#39;class&#39;: {
              &#39;my-content&#39;: true
            },
            slot: &#39;content&#39;
          }, &#39;custom content&#39;)
        ]
      }).show()
    }
  }
}
</code></pre><p>The second parameter of <code>$createDialog</code> is <a href="https://vuejs.org/v2/guide/render-function.html">render function</a>, generally it is used to handle slots. Dialog component provides 2 named slots <code>title</code> and <code>content</code> which are used to distribute title and content.</p></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>dialog type</td><td>String</td><td>alert / confirm / prompt<sup>1.11.0</sup></td><td>alert</td></tr><tr><td>icon</td><td>icon class name</td><td>String</td><td><a href="#/en-US/docs/style">refer to built-in icons in style module</a></td><td>‘’</td></tr><tr><td>title</td><td>title</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>content</td><td>content</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>showClose</td><td>whether to show close button</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>confirmBtn</td><td>confirm button configuration</td><td>Object/String</td><td>-</td><td>{ text: ‘确定’, active: true, href: ‘javascript:;’ }</td></tr><tr><td>cancelBtn</td><td>cancel button configuration</td><td>Object/String</td><td>-</td><td>{ text: ‘取消’, active: false, href: ‘javascript:;’ }</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>prompt<sup>1.11.0</sup></td><td>prompt config, all <a href="#/en-US/docs/input">Input component’s</a>props</td><td>Object</td><td>-</td><td>{}</td></tr></tbody></table><ul><li><code>confirmBtn</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>button text</td><td>String</td><td>-</td><td>‘确认’</td></tr><tr><td>active</td><td>whether to highlight</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>disabled</td><td>whether to disabled button</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>href</td><td>the link that will be jumped to when the button is clicked</td><td>String</td><td>-</td><td>‘javascript:;’</td></tr></tbody></table><ul><li><code>cancelBtn</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>button text</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>active</td><td>whether highlight</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>whether to disabled button</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>href</td><td>the link that will be jumped to when the button is clicked</td><td>String</td><td>-</td><td>‘javascript:;’</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>title</td><td>title</td><td>-</td></tr><tr><td>content</td><td>content</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>confirm</td><td>triggers when the confirm button is clicked</td><td>e - event target</td><td>the prompt input value when <code>type</code> is <code>&#39;prompt&#39;</code><sup>1.11.0</sup></td></tr><tr><td>cancel</td><td>triggers when the cancel button is clicked</td><td>e - event target</td><td>-</td></tr><tr><td>close</td><td>triggers when the close button is clicked</td><td>e - event target</td><td>-</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,17),a=[c],u={__name:"dialog",setup(r,{expose:t}){return t({frontmatter:{}}),(i,s)=>(d(),e("div",o,a))}};export{u as default};
