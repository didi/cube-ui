import{a as e,o,j as n}from"./index-e8a96955.js";const d={class:"markdown-body"},r=n(`<h2>ScrollNavBar</h2><blockquote><p>New in 1.10.0+</p></blockquote><p>Scroll navigation bar component, like DiDi business navigation.</p><h3>Example</h3><ul><li><p>Default horizontal</p><pre><code class="language-html">&lt;cube-scroll-nav-bar :current=&quot;current&quot; :labels=&quot;labels&quot; @change=&quot;changeHandler&quot; /&gt;
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
</code></pre><p>You can set the active item by <code>current</code> Prop. <code>labels</code> is the collection if all the item’s keys. The <code>change</code> events will be triggered when active item changed.</p></li><li><p>Vertical</p><pre><code class="language-html">&lt;div class=&quot;side-container&quot;&gt;
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
</code></pre><p>If the <code>direction</code> Prop is <code>vertical</code> then the ScrollNavBar will be vertical style.</p><p>You can use <code>txts</code> Prop to defined the text of showcases, it’s order is correspondence with <code>labels</code> Prop. The default <code>txts</code> value is <code>labels</code>.</p><p>You can also use default scoped slot to defined your own item content.</p></li></ul><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>direction</td><td>direction, default horizontal</td><td>String</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>labels</td><td>the collection if all the item’s keys</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>txts</td><td>the text of showcases, it’s order is correspondence with <code>labels</code>, the item can be a HTML string value</td><td>Array</td><td>-</td><td>default equals to <code>labels</code> Prop</td></tr><tr><td>current</td><td>the key of the active item</td><td>String/Number</td><td>-</td><td>‘’</td></tr><tr><td>options</td><td>the options of better-scroll, you could find details at <a href="https://better-scroll.github.io/docs-v1/doc/en/options.html">BS Document</a></td><td>Object</td><td>-</td><td>{}<br><code>Notice</code>: After <code>1.12.38</code>, as <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a> <code>iOS13.4</code> issue <a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a>, we set <code>useTransition</code> to <code>fasle</code> by default</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>default content</td><td>txt: item’s text<br>index: item’s index<br>active: the key of active item<br>label: item’s label</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when active item changed</td><td>active - the key of active item</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>refresh</td><td>You can call this method when content updated</td></tr></tbody></table>`,13),a=[r],u={__name:"scroll-nav-bar",setup(c,{expose:t}){return t({frontmatter:{}}),(s,i)=>(o(),e("div",d,a))}};export{u as default};
