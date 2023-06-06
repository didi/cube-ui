import{a as e,o as a,j as d}from"./index-e8a96955.js";const o={class:"markdown-body"},r=d(`<h2>Rate</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>Rate component. You can customize the rating star numbers, and disable the interaction, you can also customize the style of star through the slot.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>You can use the v-model directive to create two-way data bindings.</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot;&gt;&lt;/cube-rate&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: 3
    }
  }
}
</code></pre></li><li><p>Multiple configurations</p><p>For example, you can use <code>disabled</code> to make the rating component read-only, use<code> max</code> to customize the number of stars and use <code>justify</code> to justify container’s width.</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot; :disabled=&quot;disabled&quot; :max=&quot;max&quot; :justify=&quot;justify&quot;&gt;&lt;/cube-rate&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      disabled: false,
      max: 5,
      value: 3,
      justify: false
    }
  }
}
</code></pre></li><li><p>Custom star style</p><p>You need to use the <code>cube-rate-item</code> component, and define two different styles for custom stars, normal and active (under the<code> .cube-rate-item.active</code> class).</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot;&gt;
  &lt;cube-rate-item v-for=&quot;n in max&quot; :key=&quot;n&quot; :value=&quot;value&quot; :index=&quot;n&quot;&gt;
    &lt;!-- 定制星星示例 --&gt;
    &lt;div class=&quot;rate-item&quot;&gt;&lt;/div&gt;
  &lt;/cube-rate-item&gt;
&lt;/cube-rate&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: 3
    }
  }
}
</code></pre><pre><code class="language-css">.rate-item
  width: 100%
  height: 100%
  background-size: 100%
  background-color: grey
.cube-rate-item.active
  .rate-item
    background-color: orange
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>bound rate value</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max</td><td>max star number</td><td>Number</td><td>-</td><td>5</td></tr><tr><td>disabled</td><td>disabled status</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>justify</td><td>auto justify container’s width</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope parameters</th></tr></thead><tbody><tr><td>default</td><td>a cube-rate-item component</td><td>-</td></tr></tbody></table><h3>slot in cube-rate-item</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope parameters</th></tr></thead><tbody><tr><td>default</td><td>custom star element</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>input</td><td>The event triggers when the finger is removed from the rate item (this event will be not triggered when the disabled attribute is set)</td><td>The value of the rate item that is currently removed from</td></tr></tbody></table>`,13),n=[r],h={__name:"rate",setup(u,{expose:t}){return t({frontmatter:{}}),(l,c)=>(a(),e("div",o,n))}};export{h as default};
