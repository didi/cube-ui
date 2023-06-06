import{a as e,o as d,j as o}from"./index-e8a96955.js";const a={class:"markdown-body"},l=o(`<h2>Switch 滑动开关</h2><blockquote><p>1.4.0 新增</p></blockquote><p>滑动开关，用于切换 on/off 状态。</p><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-switch v-model=&quot;value&quot;&gt;
  Switch
&lt;/cube-switch&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      value: true
    }
  }
}
</code></pre><p><code>value</code>值<code>true</code>对应着 on 状态（开） ，<code>value</code>值<code>false</code>对应着 off 状态（关）。</p></li><li><p>禁用状态</p><pre><code class="language-html">&lt;cube-switch v-model=&quot;value&quot; :disabled=&quot;true&quot;&gt;
  Disbled Switch
&lt;/cube-switch&gt;
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>开关状态，双向数据绑定</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>绑定值变化时触发</td><td>更新后的绑定值</td></tr></tbody></table>`,9),c=[l],p={__name:"switch",setup(h,{expose:t}){return t({frontmatter:{}}),(s,n)=>(d(),e("div",a,c))}};export{p as default};
