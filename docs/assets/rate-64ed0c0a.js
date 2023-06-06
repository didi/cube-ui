import{a as e,o as d,j as a}from"./index-e8a96955.js";const o={class:"markdown-body"},r=a(`<h2>Rate</h2><blockquote><p>1.5.0 新增</p></blockquote><p>评分组件。你可以自定义星星个数，可以禁用交互，以用作评价展示，可以通过插槽自定义星星样式。</p><h3>示例</h3><ul><li><p>基本用法</p><p>使用 v-model 对评分值双向绑定。</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot;&gt;&lt;/cube-rate&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: 3
    }
  }
}
</code></pre></li><li><p>多项配置</p><p>例如，使用<code>disabled</code>使评分组件只读，使用<code>max</code>自定义评分等级，使用 <code>justify</code> 决定是否自动适应容器宽度。</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot; :disabled=&quot;disabled&quot; :max=&quot;max&quot; :justify=&quot;justify&quot;&gt;&lt;/cube-rate&gt;
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
</code></pre></li><li><p>自定义星星样式</p><p>需要使用<code>cube-rate-item</code>组件，并且对自定义的星星元素定义两种样式——普通和活跃（在<code>.cube-rate-item.active</code>类之下）。</p><pre><code class="language-html">&lt;cube-rate v-model=&quot;value&quot;&gt;
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
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定的评分值</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max</td><td>星星个数</td><td>Number</td><td>-</td><td>5</td></tr><tr><td>disabled</td><td>禁用状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>justify</td><td>是否自适应容器宽度（通过在星星之间增加空隙）</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>默认是 cube-rate-item 组件</td><td>-</td></tr></tbody></table><h3>cube-rate-item 的插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>自定义星星元素</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>手指从 rate item 移开时触发（当设置了 disabled 属性时，该事件不触发）</td><td>当前移开的 rate item 的值</td></tr></tbody></table>`,13),l=[r],i={__name:"rate",setup(u,{expose:t}){return t({frontmatter:{}}),(c,h)=>(d(),e("div",o,l))}};export{i as default};
