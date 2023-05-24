import{a as e,o,j as a}from"./index-9017f177.js";const d={class:"markdown-body"},s=a(`<h2>Switch</h2><blockquote><p>New in 1.4.0+</p></blockquote><p>Switch usually used to switch the state of on/off.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-switch v-model=&quot;value&quot;&gt;
  Switch
&lt;/cube-switch&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      value: true
    }
  }
}
</code></pre><p><code>value: true</code> correspond to the state of on， <code>value: false</code> correspond to the state of off.</p></li><li><p>Disabled state</p><pre><code class="language-html">&lt;cube-switch v-model=&quot;value&quot; :disabled=&quot;true&quot;&gt;
  Disbled Switch
&lt;/cube-switch&gt;
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>the state of on/off, two-way data binding</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>whether disabled</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>input</td><td>triggers when the binding value changes</td><td>the updated value</td></tr></tbody></table>`,9),l=[s],i={__name:"switch",setup(h,{expose:t}){return t({frontmatter:{}}),(r,n)=>(o(),e("div",d,l))}};export{i as default};
