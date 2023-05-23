import{a as e,o as d,j as o}from"./index-9017f177.js";const n={class:"markdown-body"},a=o(`<h2>Input</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>Input component. You can use the <code>v-model</code> directive to create two-way data bindings and use a clear button to clear the content.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>You can use the <code>v-model</code> directive to create two-way data bindings</p><pre><code class="language-html">&lt;cube-input v-model=&quot;value&quot; &gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  }
}
</code></pre></li><li><p>Control max length</p><p>You can control the value’s max length like this:</p><pre><code class="language-html">&lt;cube-input v-model=&quot;value&quot;&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  },
  watch: {
    value(newV) {
      if (newV.length &gt; 10) {
        newV = newV.slice(0, 10)
        this.$nextTick(() =&gt; {
          this.value = newV
        })
      }
    }
  }
}
</code></pre></li><li><p>Clearable config</p><p>You can use the <code>clearable</code> attribute to toggle the clear button.</p><p>Before 1.11.0, the <code>clearable</code> value only can be a Boolean value.</p><p>After 1.11.0 the <code>clearable</code> value can be a Boolean or an Object value.</p><pre><code class="language-html">&lt;cube-input
  v-model=&quot;value&quot;
  :clearable=&quot;clearable&quot;
&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;,
      clearable: {
        visible: true,
        blurHidden: true
      }
    }
  }
}
</code></pre></li><li><p>Eye config</p><p>You can use <code>pwdEye</code> to toggle password eye button and password filed’s visibility.</p><pre><code class="language-html">&lt;cube-input
  v-model=&quot;value&quot;
  :placeholder=&quot;placeholder&quot;
  :type=&quot;type&quot;
  :maxlength=&quot;maxlength&quot;
  :readonly=&quot;readonly&quot;
  :disabled=&quot;disabled&quot;
  :autofocus=&quot;autofocus&quot;
  :autocomplete=&quot;autocomplete&quot;
  :eye=&quot;eye&quot;
&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;,
      placeholder: &#39;请输入内容&#39;,
      type: &#39;password&#39;,
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: false
      }
    }
  }
}
</code></pre><p>As you can see, this component also support the native attributes of the Input element.</p></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>type of input</td><td>String</td><td>text/number/password/date</td><td>text</td></tr><tr><td>v-model</td><td>bound value</td><td>String</td><td>-</td><td>empty</td></tr><tr><td>disabled</td><td>disabled status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>readonly</td><td>readonly status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maxlength</td><td>maxlength of input</td><td>Number</td><td>-</td><td>60</td></tr><tr><td>placeholder</td><td>placeholder of input</td><td>String</td><td>-</td><td>empty</td></tr><tr><td>autofocus</td><td>autofocus status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>autocomplete</td><td>autocomplete status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>clearable</td><td>whether to show clear button, after 1.11.0 you can alse use object config like <code>{visible: true, blurHidden: true}</code>, the <code>visible</code> is used to control the visibility and the <code>blurHidden</code> is used to control whether hidden after blur.</td><td>Boolean/Object<sup>1.11.0+</sup></td><td>true/false</td><td>false</td></tr><tr><td>eye</td><td>If set to false then the password eye is invisible, if true, equal to <code>{open: true, reverse: false}</code>, Object form mean using the password eye. The <code>open</code> control the password eye open or close, <code>reverse</code> control whether the password content visibility is reverse with the password eye open or not.</td><td>Boolean/Object</td><td>true/false/{open: <code>true/false</code>}</td><td>false</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Slot Name</th><th>Description</th></tr></thead><tbody><tr><td>prepend</td><td>prepend content</td></tr><tr><td>append</td><td>append content</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>This event is triggered after the input box is focused. If input is disabled, it will not be triggered</td><td>e - event</td></tr><tr><td>blur</td><td>This event is triggered after the input box blur</td><td>e - event</td></tr><tr><td>change</td><td>The event is triggered after the binding value is changed and the input box is blur</td><td>e - event</td></tr><tr><td>input</td><td>The event is triggered when the binding value is changed</td><td>The updated value</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>focus<sup>1.12.10+</sup></td><td>Focus element</td></tr><tr><td>blur<sup>1.12.10+</sup></td><td>Blur element</td></tr></tbody></table>`,13),r=[a],p={__name:"input",setup(l,{expose:t}){return t({frontmatter:{}}),(s,c)=>(d(),e("div",n,r))}};export{p as default};
