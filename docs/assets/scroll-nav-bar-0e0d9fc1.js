import{a as e,o as d,j as n}from"./index-e8a96955.js";const o={class:"markdown-body"},r=n(`<h2>ScrollNavBar 组件</h2><blockquote><p>1.10.0 新增</p></blockquote><p>滚动导航条组件，效果类似于滴滴打车业务线切换。</p><h3>示例</h3><ul><li><p>横向，默认</p><pre><code class="language-html">&lt;cube-scroll-nav-bar :current=&quot;current&quot; :labels=&quot;labels&quot; @change=&quot;changeHandler&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      current: &#39;快车&#39;,
      labels: [
        &#39;快车&#39;,
        &#39;小巴&#39;,
        &#39;专车&#39;,
        &#39;顺风车&#39;,
        &#39;代驾&#39;,
        &#39;公交&#39;,
        &#39;自驾租车&#39;,
        &#39;豪华车&#39;,
        &#39;二手车&#39;,
        &#39;出租车&#39;
      ]
    }
  },
  methods: {
    changeHandler(cur) {
      this.current = cur
    }
  }
}
</code></pre><p>可以通过 <code>current</code> 指定 active 的 key 值，<code>labels</code> 则是所有的 key 值的集合；当 active 的值发生变化后，会触发 <code>change</code> 事件。</p></li><li><p>竖向</p><pre><code class="language-html">&lt;div class=&quot;side-container&quot;&gt;
  &lt;cube-scroll-nav-bar
    direction=&quot;vertical&quot;
    :current=&quot;current&quot;
    :labels=&quot;labels&quot;
    :txts=&quot;txts&quot;
    @change=&quot;changeHandler&quot;&gt;
    &lt;i slot-scope=&quot;props&quot;&gt;{{props.txt}}&lt;/i&gt;
  &lt;/cube-scroll-nav-bar&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      current: &#39;快车&#39;,
      labels: [
        &#39;快车&#39;,
        &#39;小巴&#39;,
        &#39;专车&#39;,
        &#39;顺风车&#39;,
        &#39;代驾&#39;,
        &#39;公交&#39;,
        &#39;自驾租车&#39;,
        &#39;豪华车&#39;,
        &#39;二手车&#39;,
        &#39;出租车&#39;
      ],
      txts: [
        &#39;1快车&#39;,
        &#39;2小巴&#39;,
        &#39;3专车&#39;,
        &#39;4顺风车&#39;,
        &#39;5代驾&#39;,
        &#39;6公交&#39;,
        &#39;7自驾租车&#39;,
        &#39;8豪华车&#39;,
        &#39;9二手车&#39;,
        &#39;10出租车&#39;
      ]
    }
  },
  methods: {
    changeHandler(cur) {
      this.current = cur
    }
  }
}
</code></pre><pre><code class="language-stylus">.side-container
  height: 300px
  margin-top: 20px
</code></pre><p>这是一个竖向的示例，<code>direction</code> 设置为 <code>vertical</code> 代表是一个竖向导航条样式；这里还使用了 <code>txts</code> Prop 用于指定展示文案，顺序是和 <code>labels</code> 一一对应的，如果没传入 <code>txts</code>，则默认 <code>txts</code> 就等于 <code>labels</code>。</p><p>该示例中还展示了默认作用域插槽的使用，<code>props.txt</code> 就是当前项的 txt 的值。</p></li></ul><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>方向，默认横向，horizontal</td><td>String</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>labels</td><td>所有的 key 值集合</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>txts</td><td>显示所有文案集合，和 labels 一一对应，每项可以是 HTML 字符串</td><td>Array</td><td>-</td><td>默认等于 labes</td></tr><tr><td>current</td><td>当前 active 的 key 值</td><td>String/Number</td><td>-</td><td>‘’</td></tr><tr><td>options</td><td>better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS 官方文档</a></td><td>Object</td><td>-</td><td>{} <br><code>注意</code>：从<code>1.12.38</code>版本开始，因修复<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a>在<code>iOS13.4</code>版本的滚动问题，<code>useTransition</code>在iOS版本&gt;=13.4时默认为<code>fasle</code><br>具体请参考<a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a></td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>默认内容</td><td>txt: 当前项文案 txt 的值<br>index: 当前索引值<br>active: 当前 active 的 key 值<br>label: 当前项 label 值，即 key 值</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>当 active 项发生改变的时候触发</td><td>active - 当前 active 的 key 值</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>refresh</td><td>刷新，当内容发生变化时可用于刷新 scroll 以及重新适应位置</td></tr></tbody></table>`,13),c=[r],i={__name:"scroll-nav-bar",setup(a,{expose:t}){return t({frontmatter:{}}),(s,h)=>(d(),e("div",o,c))}};export{i as default};
