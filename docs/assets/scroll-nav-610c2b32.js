import{a as e,o,j as n}from"./index-9017f177.js";const a={class:"markdown-body"},d=n(`<h2>ScrollNav</h2><blockquote><p>New in 1.10.0+</p></blockquote><p>ScrollNav component. You can use it to sticky your navigation bar and content.</p><h3>Example</h3><ul><li><p>Basic usage - Default</p><pre><code class="language-html">&lt;cube-scroll-nav @change=&quot;changeHandler&quot;&gt;
  &lt;cube-scroll-nav-panel
    v-for=&quot;item in data&quot;
    :key=&quot;item.name&quot;
    :label=&quot;item.name&quot;&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;food in item.foods&quot;&gt;
        &lt;div&gt;
          &lt;img :src=&quot;food.icon&quot;&gt;
          &lt;p&gt;{{food.name}}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll-nav-panel&gt;
&lt;/cube-scroll-nav&gt;
</code></pre><pre><code class="language-js">import goodsData from &#39;example/data/goods-list.json&#39;

const goods = goodsData.goods

export default {
  data() {
    return {
      data: goods
    }
  },
  methods: {
    changeHandler(label) {
      console.log(&#39;changed to:&#39;, label)
    }
  }
}
</code></pre><p><code>goods</code>:</p><pre><code class="language-js">&quot;goods&quot;: [
  {
    &quot;name&quot;: &quot;热销榜&quot;,
    &quot;type&quot;: -1,
    &quot;foods&quot;: [
      {
        &quot;name&quot;: &quot;皮蛋瘦肉粥&quot;,
        // ...
        &quot;icon&quot;: &quot;http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114&quot;,
        &quot;image&quot;: &quot;http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750&quot;
      },
      // ...
    ]
  },
  // ...
]
</code></pre><p><code>cube-scroll-nav</code> should contains <code>cube-scroll-nav-panel</code> which is the navigation target panel content.</p><p><code>cube-scroll-nav-panel</code> required Prop: <code>label</code>(the key of panel).</p><p>The <code>change</code> event will be triggered when navigation active item changed.</p></li><li><p>Side Style</p><pre><code class="language-html">&lt;cube-scroll-nav
  :side=&quot;true&quot;
  :data=&quot;data&quot;
  :current=&quot;current&quot;
  @change=&quot;changeHandler&quot;
  @sticky-change=&quot;stickyChangeHandler&quot;&gt;
  &lt;ul class=&quot;prepend-header&quot; slot=&quot;prepend&quot;&gt;
    &lt;li&gt;11&lt;/li&gt;
    &lt;li&gt;22&lt;/li&gt;
    &lt;li&gt;333&lt;/li&gt;
  &lt;/ul&gt;
  &lt;cube-scroll-nav-panel
    v-for=&quot;item in data&quot;
    :key=&quot;item.name&quot;
    :label=&quot;item.name&quot;
    :title=&quot;item.name&quot;&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;food in item.foods&quot;&gt;
        &lt;div&gt;
          &lt;img :src=&quot;food.icon&quot;&gt;
          &lt;p&gt;{{food.name}}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll-nav-panel&gt;
&lt;/cube-scroll-nav&gt;
</code></pre><pre><code class="language-js">import goodsData from &#39;example/data/goods-list.json&#39;

const goods = goodsData.goods

export default {
  components: {
    CubePage
  },
  data() {
    return {
      data: goods,
      current: goods[3].name
    }
  },
  methods: {
    changeHandler(label) {
      console.log(&#39;changed to:&#39;, label)
    },
    stickyChangeHandler(current) {
      console.log(&#39;sticky-change&#39;, current)
    }
  }
}
</code></pre><p>If set <code>side</code> to <code>true</code> then the navigation bar will be at the side position.</p><p><code>data</code> is the data source, it will be passed to <code>cube-scroll</code> component, if the <code>data</code> updated then <code>cube-scroll</code> will be auto refreshed.</p><p><code>current</code> is the default navigation value(label of panel), if set this value then the target panel will be auto scrolled to the top of container.</p><p>The <code>sticky-change</code> event will be triggered when the navigation bar’s sticky state changed. The parameter is one of <code>&#39;&#39;</code>, <code>&#39;cube-scroll-nav-bar&#39;</code>.</p><p>You can use <code>prepend</code> slot to insert your own content before the main content.</p></li></ul><h3>Props</h3><h4>CubeScrollNav</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>optional, data source</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>side</td><td>If set to <code>true</code> then the navigation bar will be at the side position</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>current</td><td>the default navigation value(label of panel)</td><td>String/Number</td><td>-</td><td>‘’</td></tr><tr><td>speed</td><td>speed of navigating to target panel</td><td>Number</td><td>-</td><td>300</td></tr><tr><td>options</td><td>the options of better-scroll, you could find details at <a href="https://better-scroll.github.io/docs-v1/doc/en/options.html">BS Document</a></td><td>Object</td><td>-</td><td>{}<br><code>Notice</code>: After <code>1.12.38</code>, as <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a> <code>iOS13.4</code> issue <a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a>, we set <code>useTransition</code> to <code>fasle</code> by default</td></tr></tbody></table><h4>CubeScrollNavPanel</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>required, the key of panel</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>title</td><td>the title of panel, can be a HTML string value</td><td>String/Number</td><td>-</td><td>default equal to <code>label</code> Prop</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>default panel content</td><td>-</td></tr><tr><td>prepend</td><td>prepend content</td><td>-</td></tr><tr><td>bar</td><td>navigation bar content, you should use <code>cube-scroll-nav-bar</code> component to define your own navigation bar content</td><td>labels: the collection of all panel labels<br>txts: the collection of all panel titles<br>current: current active navigation value(label of panel)</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when navigation active item changed</td><td>active - active navigation value(label of panel)</td></tr><tr><td>sticky-change</td><td>triggers when the navigation bar’s sticky state changed</td><td>current - if navigation bar is fixed then this value will be ‘cube-scroll-nav-bar’, otherwise this value will be ‘’</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>refresh</td><td>You can call this method when content updated</td></tr></tbody></table>`,16),l=[d],h={__name:"scroll-nav",setup(c,{expose:t}){return t({frontmatter:{}}),(i,s)=>(o(),e("div",a,l))}};export{h as default};
