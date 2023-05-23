import{a as d,o as e,j as a}from"./index-9017f177.js";const o={class:"markdown-body"},r=a(`<h2>Textarea</h2><blockquote><p>1.5.0 新增</p></blockquote><p>多行输入框组件，支持使用<code>v-model</code>对数据双向绑定，根据是否有内容、是否聚焦有折叠、展开两种状态。</p><h3>示例</h3><ul><li><p>基本用法</p><p>使用<code>v-model</code>对输入内容双向绑定。</p><pre><code class="language-html">&lt;cube-textarea v-model=&quot;value&quot;&gt;&lt;/cube-textarea&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  }
}
</code></pre></li><li><p>配置计数标识</p><pre><code class="language-html">&lt;cube-textarea v-model=&quot;value&quot; indicator=&quot;indicator&quot;&gt;&lt;/cube-textarea&gt;
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
</code></pre><p>如果 <code>indicator</code> 的值为 <code>false</code>，则不显示计数标识，如果为 <code>true</code>，则等同于 <code>{remain: true, negative: true}</code>，而如果是对象，则可通过 <code>remain</code> 和 <code>negative</code> 分别控制是否显示剩余字数（如果为 <code>false</code> 则显示输入字数）和是否允许负值。</p></li><li><p>多项配置</p><p>支持原生组件的配置。</p><pre><code class="language-html">&lt;cube-textarea
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
      placeholder: &#39;请输入内容&#39;,
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定的值</td><td>String</td><td>-</td><td>空</td></tr><tr><td>disabled</td><td>禁用状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>readonly</td><td>只读状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maxlength</td><td>最大输入长度</td><td>Number</td><td>-</td><td>60</td></tr><tr><td>placeholder</td><td>占位文本</td><td>String</td><td>-</td><td>空</td></tr><tr><td>autofocus</td><td>自动对焦</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>indicator<sup>1.10.0</sup></td><td>计数标识配置</td><td>Boolean/Object</td><td>true/false/{}</td><td>true</td></tr><tr><td>autoExpand<sup>1.12.0</sup></td><td>如果为 true 且默认有内容的话，会默认展开</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p>indicator 子配置项</p><p>如果 <code>indicator</code> 的值为 <code>false</code>，则不显示计数标识，如果为 <code>true</code> 则等同于配置 <code>{remain: true, negative: true}</code>。如果是对象，则：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>remain</td><td>是否控制显示剩余字数，如果为 <code>false</code> 则代表显示输入字数</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>negative</td><td>当 <code>remain</code> 为 true 时有效，是否允许出现负值</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table></li></ul><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>输入框聚焦后触发此事件，如果禁用状态，则不触发</td><td>e - 事件对象</td></tr><tr><td>blur</td><td>输入框失焦后触发此事件</td><td>e - 事件对象</td></tr><tr><td>input</td><td>绑定值变化时触发</td><td>更新后的绑定值</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus<sup>1.12.10+</sup></td><td>获得焦点</td></tr><tr><td>blur<sup>1.12.10+</sup></td><td>离焦</td></tr></tbody></table>`,12),l=[r],p={__name:"textarea",setup(n,{expose:t}){return t({frontmatter:{}}),(c,s)=>(e(),d("div",o,l))}};export{p as default};
