import{a as e,o,j as d}from"./index-9017f177.js";const c={class:"markdown-body"},l=d(`<h2>Checkbox 复选框</h2><p>复选框，可设置其状态、传入特殊 class 以及复选框图标位置。</p><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot;&gt;
  Checkbox
&lt;/cube-checkbox&gt;
</code></pre><p>如果选中了，则 <code>checked</code> 的值就为 <code>true</code>。</p></li><li><p>复选框图标样式</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; position=&quot;right&quot; shape=&quot;square&quot; :hollow-style=&quot;true&quot;&gt;
  Styled Checkbox
&lt;/cube-checkbox&gt;
</code></pre><p>设置 <code>position</code> 为 <code>&#39;right&#39;</code> 则复选框图标位置在右边，且可以通过 <code>shape</code> 配置图标形状以及设置 <code>hollow-style</code> 为 <code>true</code> 代表显示的是镂空样式的（即使 <code>shape</code> 不是 <code>square</code> 表现的也是方形的）。</p></li><li><p>改变 model 的值</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; :option=&quot;option&quot; /&gt;
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
</code></pre><p>设置 <code>option</code>，当复选框选中的时候，<code>checked</code> 的值就是 <code>&#39;optionValue&#39;</code>，当未选中的时候，<code>checked</code> 的值就是 <code>false</code>；所以其实在单个复选框的场景下，最好不要设置 <code>option</code>。</p></li><li><p>禁用状态</p><pre><code class="language-html">&lt;cube-checkbox v-model=&quot;checked&quot; :option=&quot;{disabled: true}&quot;&gt;
  Disabled Checkbox
&lt;/cube-checkbox&gt;
</code></pre></li><li><p>处理点击事件</p><p>如果你需要处理点击事件，你需要修改下样式：</p><pre><code class="language-html">&lt;cube-checkbox class=&quot;with-click&quot; v-model=&quot;checked&quot;&gt;
  Agree &lt;a href=&quot;javascript:;&quot; @click.stop&gt;《xxx》&lt;/a&gt;
&lt;/cube-checkbox&gt;
</code></pre><pre><code class="language-styl">.with-click
  .cube-checkbox-label
    a
      position: relative
      z-index: 1
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>配置项（如果 options 中的项为字符串，此时默认 label 和 value 的值都为该字符串的值）</td><td>Boolean/String/Object</td><td>-</td><td>-</td></tr><tr><td>position</td><td>位置</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>shape</td><td>图标形状</td><td>String</td><td>circle/square</td><td>circle</td></tr><tr><td>hollowStyle</td><td>是否是镂空样式的</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>option</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>复选框显示文字</td><td>String</td></tr><tr><td>value</td><td>复选框的值</td><td>String/Number</td></tr><tr><td>disabled</td><td>复选框是否被禁用</td><td>Boolean</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>当绑定值变化时触发</td><td>更新后的复选框的值（若option中设置了value，且勾选复选框时，该值为option.value；否则，该值为复选框的v-model值）</td></tr></tbody></table>`,10),a=[l],i={__name:"checkbox",setup(h,{expose:t}){return t({frontmatter:{}}),(r,u)=>(o(),e("div",c,a))}};export{i as default};
