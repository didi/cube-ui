import{a as e,o as d,j as o}from"./index-9017f177.js";const c={class:"markdown-body"},l=o(`<h2>CheckboxGroup 复选框组</h2><p>复选框组就是一组复选框，主要用来选择一组可选项；有垂直和水平两种样式。</p><h3>示例</h3><ul><li><p>垂直排列</p><p>默认就是垂直排列样式</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot; :options=&quot;options&quot; /&gt;
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
</code></pre><p><code>checkList</code> 的值是一个数组，代表的是选中的复选框 <code>value</code> 的值的集合。</p></li><li><p>水平排列、图标形状、镂空样式</p><p>可通过设置 <code>horizontal</code> 改变样式为水平排列，另外，还可以通过 <code>shape</code> 配置图标形状以及通过设置 <code>hollow-style</code> 为 <code>true</code> 改变为镂空样式。</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot; :options=&quot;options&quot; :horizontal=&quot;true&quot; shape=&quot;square&quot; :hollow-style=&quot;true&quot; /&gt;
</code></pre></li><li><p>自定义 label</p><pre><code class="language-html">&lt;cube-checkbox-group v-model=&quot;checkList&quot;&gt;
  &lt;cube-checkbox option=&quot;1&quot;&gt;&lt;i&gt;Checkbox 1&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox option=&quot;2&quot;&gt;&lt;i&gt;Checkbox 2&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox :option=&quot;{value: &#39;3&#39;, disabled: true}&quot;&gt;&lt;i&gt;Disabled Checkbox&lt;/i&gt;&lt;/cube-checkbox&gt;
  &lt;cube-checkbox :option=&quot;{value: &#39;4&#39;, disabled: true}&quot;&gt;&lt;i&gt;Disabled &amp; Checked Checkbox&lt;/i&gt;&lt;/cube-checkbox&gt;
&lt;/cube-checkbox-group&gt;
</code></pre><p>可通过默认插槽插入 <code>cube-checkbox</code> 实现自定义每项的结构样子，关于 <code>cube-checkbox</code>，请参考其<a href="#/zh-CN/docs/checkbox">文档</a>。</p></li><li><p>自定义列数<sup>1.12.28</sup></p><p>可通过设计 <code>colNum</code> 控制一行中有几列，colNum 小于1时，按1处理</p><pre><code class="language-html">  &lt;cube-checkbox-group v-model=&quot;colCheckList&quot; :options=&quot;colOptions&quot; :col-num=&quot;3&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      colCheckList: [],
      colOptions: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;]
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>选项数组</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>horizontal</td><td>是否水平排列</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>colNum<sup>1.12.28</sup></td><td>一行有几列</td><td>Number</td><td>-</td><td>1</td></tr><tr><td>shape</td><td>图标形状</td><td>String</td><td>circle/square</td><td>circle</td></tr><tr><td>hollowStyle</td><td>是否是镂空样式的</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>min<sup>1.11.0</sup></td><td>最小选择个数</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max<sup>1.11.0</sup></td><td>最大选择个数</td><td>Number</td><td>-</td><td>Infinite</td></tr></tbody></table><ul><li><code>options</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>复选框显示文字</td><td>String</td></tr><tr><td>value</td><td>复选框的值</td><td>String/Number</td></tr><tr><td>disabled</td><td>复选框是否被禁用</td><td>Boolean</td></tr></tbody></table><p>注：如果 <code>options</code> 中的项为字符串也是可以的，此时默认 <code>label</code> 和 <code>value</code> 的值都为该字符串的值。</p><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>checked</td><td>勾选复选框组中的某一项时触发</td><td>当前勾选的复选框值</td></tr><tr><td>cancel-checked</td><td>取消勾选复选框组中的某一项时触发</td><td>当前取消勾选的复选框值</td></tr><tr><td>input</td><td>当绑定值变化时触发</td><td>当前选中的复选框值的集合</td></tr></tbody></table>`,11),u=[l],s={__name:"checkbox-group",setup(r,{expose:t}){return t({frontmatter:{}}),(n,h)=>(d(),e("div",c,u))}};export{s as default};
