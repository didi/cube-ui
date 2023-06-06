import{a as e,o as d,j as a}from"./index-e8a96955.js";const o={class:"markdown-body"},n=a(`<h2>Textarea</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>Multi-line input box components. You can use the <code>v-model</code> directive to create two-way data bindings. The component expands or fold according to whether there is content, whether it is focused.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>You can use the <code>v-model</code> directive to create two-way data bindings.</p><pre><code class="language-html">&lt;cube-textarea v-model=&quot;value&quot; &gt;&lt;/cube-textarea&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  }
}
</code></pre></li><li><p>Config indicator</p><pre><code class="language-html">&lt;cube-textarea v-model=&quot;value&quot; indicator=&quot;indicator&quot;&gt;&lt;/cube-textarea&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      indicator: {
        negative: true,
        remain: true
      }
    }
  }
}
</code></pre><p>If <code>indicator</code> is <code>false</code> then the indicator element will not be visible.</p><p>If <code>indicator</code> is <code>true</code>, the config equals <code>{remain: true, negative: true}</code>.</p><p>If <code>indicator</code> is an object, you can use <code>remain</code> and <code>negative</code> to control whether show the remaining count(if <code>remain</code> is <code>false</code> means show the textarea value length) and whether allow remaining number is negative.</p></li><li><p>Multiple configurations</p><p>Support the native attributes of the textarea element.</p><pre><code class="language-html">&lt;cube-textarea
  v-model=&quot;value&quot;
  :placeholder=&quot;placeholder&quot;
  :maxlength=&quot;maxlength&quot;
  :readonly=&quot;readonly&quot;
  :disabled=&quot;disabled&quot;
  :autofocus=&quot;autofocus&quot;
&gt;&lt;/cube-textarea&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;,
      placeholder: &#39;please type here&#39;,
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true
    }
  }
}
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>bound value</td><td>String</td><td>-</td><td>empty</td></tr><tr><td>disabled</td><td>disabled status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>readonly</td><td>readonly status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maxlength</td><td>maxlength of input</td><td>Number</td><td>-</td><td>60</td></tr><tr><td>placeholder</td><td>placeholder of input</td><td>String</td><td>-</td><td>empty</td></tr><tr><td>autofocus</td><td>autofocus status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>indicator<sup>1.10.0</sup></td><td>indicator config</td><td>Boolean/Object</td><td>true/false/{}</td><td>true</td></tr><tr><td>autoExpand<sup>1.12.0</sup></td><td>If <code>autoExpand</code> is true and have initial value, the textarea will be auto expanded</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p>indicator sub configuration</p><p>If <code>indicator</code> is <code>false</code> then the indicator element will not be visible.</p><p>If <code>indicator</code> is <code>true</code>, the config equals <code>{remain: true, negative: true}</code>.</p><p>If <code>indicator</code> is an object:</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>remain</td><td>whether show the remaining count, if this value is <code>false</code> means show the textarea value length</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>negative</td><td>avaliable when <code>remain</code> is true, this value control whether allow remaining number is negative</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table></li></ul><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>This event is triggered after the textarea box is focused. If Textarea is disabled, it will not be triggered</td><td>e - event</td></tr><tr><td>blur</td><td>This event is triggered after the textarea box blur</td><td>e - event</td></tr><tr><td>input</td><td>The event is triggered when the binding value changes</td><td>The updated value</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>focus<sup>1.12.10+</sup></td><td>Focus element</td></tr><tr><td>blur<sup>1.12.10+</sup></td><td>Blur element</td></tr></tbody></table>`,12),r=[n],h={__name:"textarea",setup(i,{expose:t}){return t({frontmatter:{}}),(c,u)=>(d(),e("div",o,r))}};export{h as default};
