import{a as e,o,j as c}from"./index-9017f177.js";const d={class:"markdown-body"},l=c(`<h2>Checkbox</h2><p><code>Checkbox</code> component. You can set the state, pass on special class and set the position of the checkbox’s icon.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot;&gt;
  Checkbox
&lt;/cube-checkbox&gt;
</code></pre><p>If selected, the value of <code>checked</code> is <code>true</code>.</p></li><li><p>Styled checkbox</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; position=&quot;right&quot; shape=&quot;square&quot; :hollow-style=&quot;true&quot;&gt;
  Styled Checkbox
&lt;/cube-checkbox&gt;
</code></pre><p>If setting <code>position</code> to <code>&#39;right&#39;</code>, the position of the checkbox’s icon is on the right. And you could use <code>shape</code> to configure the shape of icon, set <code>hollow-style=true</code> to use hollow-out style.</p></li><li><p>Change the value of model</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; :option=&quot;option&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checked: false,
      option: {
        label: &#39;Option Checkbox&#39;,
        value: &#39;optionValue&#39;,
        disabled: false
      }
    }
  }
}
</code></pre><p>If <code>option</code> is setted, and when the checkbox is selected, the value of <code>checked</code> is <code>&#39;optionValue&#39;</code>. When not selected, the value is <code>false</code>; Therefore, in circumstances of single checkbox, better not set <code>option</code>.</p></li><li><p>Disabled state</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; :option=&quot;{disabled: true}&quot;&gt;
  Disabled Checkbox
&lt;/cube-checkbox&gt;
</code></pre></li><li><p>With click</p><p>If you want to handle click event, you need to handle the style:</p><pre><code class="language-html">&lt;cube-checkbox class=&quot;with-click&quot; v-model=&quot;checked&quot;&gt;
  Agree &lt;a href=&quot;javascript:;&quot; @click.stop&gt;《xxx》&lt;/a&gt;
&lt;/cube-checkbox&gt;
</code></pre><pre><code class="language-styl">.with-click
  .cube-checkbox-label
    a
      position: relative
      z-index: 1
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>option</td><td>option value（if the value of option is a string type, the label and value will be this string you just set for option.）</td><td>Boolean/String/Object</td><td>-</td><td>-</td></tr><tr><td>position</td><td>icon position</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>shape</td><td>icon shape</td><td>String</td><td>circle/square</td><td>circle</td></tr><tr><td>hollowStyle</td><td>whether is hollow-out style</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>option</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>label</td><td>the text of label</td><td>String</td></tr><tr><td>value</td><td>the value of checkbox item</td><td>String/Number</td></tr><tr><td>disabled</td><td>whether the checkbox item is disabled</td><td>Boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>input</td><td>triggers when the binding value changes</td><td>the updated value（ if you set value in the option and the checkbox is checked, the value is option.value; otherwise, the value is the v-model value of checkbox ）</td></tr></tbody></table>`,10),h=[l],r={__name:"checkbox",setup(a,{expose:t}){return t({frontmatter:{}}),(i,s)=>(o(),e("div",d,h))}};export{r as default};
