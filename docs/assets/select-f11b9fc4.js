import{a as d,o as e,j as o}from"./index-e8a96955.js";const a={class:"markdown-body"},l=o(`<h2>Select</h2><blockquote><p>1.5.0 新增</p></blockquote><p>Select 组件，用于单项选择。</p><p><strong>注：</strong> 由于此组件依赖 <a href="#/zh-CN/docs/picker">Picker</a> 组件，而 Picker 组件是基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><p>对于 Select 选择组件，你需要传入 options 定义各个选项，选择的结果则绑定在 v-model 上。</p><pre><code class="language-html">&lt;cube-select
  v-model=&quot;value&quot;
  :options=&quot;options&quot;&gt;
&lt;/cube-select&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016
    }
  }
}
</code></pre></li><li><p>配置和事件</p><p>Select 支持选择器标题（title）、占位符（placeholder）、自动弹出选择器（autoPop）、禁用（disabled）的配置。并且在选择时，如果选择的值改变了，会派发 change 事件。</p><pre><code class="language-html">&lt;cube-select
  v-model=&quot;value&quot;
  :title=&quot;title&quot;
  :options=&quot;options&quot;
  :placeholder=&quot;placeholder&quot;
  :auto-pop=&quot;autoPop&quot;
  :disabled=&quot;disabled&quot;
  @change=&quot;change&quot;&gt;
&lt;/cube-select&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016,
      title: &#39;入职时间&#39;,
      placeholder: &#39;请选择入职时间&#39;,
      autoPop: false,
      disabled: false
    }
  },
  methods: {
    change(value, index, text) {
      console.log(&#39;change&#39;, value, index, text)
    }
  }
}
</code></pre><p>需要注意的一点是，change 事件在你直接赋值修改 value 的值时，不会触发，只会在选择导致的修改时触发。如果你只是想监听 value 的改变，请直接监听 value。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>选项</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>v-model</td><td>选中的值</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>占位文案</td><td>String</td><td>-</td><td>‘请选择’</td></tr><tr><td>autoPop</td><td>是否自动弹出选择器</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>title</td><td>选择器的标题</td><td>String</td><td>-</td><td>‘请选择’</td></tr><tr><td>cancelTxt</td><td>选择器的取消按钮文案</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>confirmTxt</td><td>选择器的确认按钮文案</td><td>String</td><td>-</td><td>‘确认’</td></tr></tbody></table><ul><li><code>options </code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>示例</th></tr></thead><tbody><tr><td>value</td><td>该选项的值</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>text</td><td>该选项的文案</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><p>你可以将每个选项定义成一个对象，其中 text 为选项文案，value为选项的值，若没有将该选项定义为对象，比如 2014，则我们内部会把它转化成 { value: 2014, text: 2014 }</p><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>input</td><td>在选择时，如果选择的值改变了派发</td><td>选中项的值</td><td>-</td><td>-</td></tr><tr><td>change</td><td>在选择时，如果选择的值改变了派发</td><td>选中项的值</td><td>选中项的索引</td><td>选中项的文案</td></tr><tr><td>picker-show</td><td>使用的 Picker 显示的时候派发</td><td>-</td><td>-</td><td>-</td></tr><tr><td>picker-hide</td><td>使用的 Picker 隐藏的时候派发（确定或取消都会派发）</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>`,13),r=[l],u={__name:"select",setup(n,{expose:t}){return t({frontmatter:{}}),(h,p)=>(e(),d("div",a,r))}};export{u as default};
