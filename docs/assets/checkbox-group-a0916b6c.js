import{a as e,o,j as d}from"./index-9017f177.js";const c={class:"markdown-body"},l=d(`<h2>CheckboxGroup</h2><p><code>CheckboxGroup</code> is a group of checkboxs, which is used to select a group of options. It has vertical and horizontal styles.</p><h3>Example</h3><ul><li><p>Vertical order</p><p>Default is vertical order style.</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot; :options=&quot;options&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkList: [&#39;1&#39;, &#39;4&#39;],
      options: [
        &#39;1&#39;,
        &#39;2&#39;,
        {
          label: &#39;3&#39;,
          value: &#39;3&#39;,
          disabled: true
        },
        {
          label: &#39;4&#39;,
          value: &#39;4&#39;,
          disabled: true
        }
      ]
    }
  }
}
</code></pre><p>The value of <code>checkList</code> is an array, which represents the set of the values of <code>value</code> in selected checkboxs.</p></li><li><p>Horizontal order and icon shape</p><p>You can set <code>horizontal</code> to change the style to horizontal order. Besides, you could use <code>shape</code> to configure the shape of icon and set <code>hollow-style=true</code> to use hollow-out style.</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot; :options=&quot;options&quot; :horizontal=&quot;true&quot; shape=&quot;square&quot; :hollow-style=&quot;true&quot; /&gt;
</code></pre></li><li><p>Use slot</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot;&gt;
  &lt;cube-checkbox option=&quot;1&quot;&gt;&lt;i&gt;Checkbox 1&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox option=&quot;2&quot;&gt;&lt;i&gt;Checkbox 2&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox :option=&quot;{value: &#39;3&#39;, disabled: true}&quot;&gt;&lt;i&gt;Disabled Checkbox&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox :option=&quot;{value: &#39;4&#39;, disabled: true}&quot;&gt;&lt;i&gt;Disabled &amp; Checked Checkbox&lt;/i&gt;&lt;/cube-checkbox&gt;
&lt;/cube-checkbox-group&gt;
</code></pre><p>Use <code>cube-checkbox</code>, <a href="#/en-US/docs/checkbox">cube-checkbox doc</a>.</p></li><li><p>Set column number<sup>1.12.28</sup></p><p>You can use <code>colNum</code> to control the display columns</p><pre><code class="language-html">  &lt;cube-checkbox-group v-model=&quot;colCheckList&quot; :options=&quot;colOptions&quot; :col-num=&quot;3&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      colCheckList: [],
      colOptions: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;]
    }
  }
}
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>options</td><td>array of checkbox options</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>horizontal</td><td>whether in horizontal order</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>colNum<sup>1.12.28</sup></td><td>column number</td><td>Number</td><td>-</td><td>1</td></tr><tr><td>shape</td><td>icon shape</td><td>String</td><td>circle/square</td><td>circle</td></tr><tr><td>hollowStyle</td><td>whether is hollow-out style</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>min<sup>1.11.0</sup></td><td>min selected items count</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max<sup>1.11.0</sup></td><td>max selected items count</td><td>Number</td><td>-</td><td>Infinite</td></tr></tbody></table><ul><li><code>options</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>label</td><td>label content</td><td>String</td></tr><tr><td>value</td><td>checkbox item value</td><td>String/Number</td></tr><tr><td>disabled</td><td>whether disabled</td><td>Boolean</td></tr></tbody></table><p>Note: each <code>options</code> item can be an string value, now both the<code>label</code> and <code>value</code> values are the string value.</p><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>checked</td><td>triggers when an checkbox in the checkboxGroup is checked</td><td>the currently checked checkbox value</td></tr><tr><td>cancel-checked</td><td>triggers when an checkbox in the checkboxGroup is unchecked</td><td>the currently unchecked checkbox value</td></tr><tr><td>input</td><td>triggers when the binding value changes</td><td>a set of the values of selected checkboxs</td></tr></tbody></table>`,11),r=[l],i={__name:"checkbox-group",setup(n,{expose:t}){return t({frontmatter:{}}),(a,h)=>(o(),e("div",c,r))}};export{i as default};
