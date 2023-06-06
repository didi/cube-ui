import{a as e,o,j as d}from"./index-e8a96955.js";const n={class:"markdown-body"},l=d(`<h2>ScrollNav 组件</h2><blockquote><p>1.10.0 新增</p></blockquote><p>滚动导航组件。</p><h3>示例</h3><ul><li><p>基本使用 - Default</p><pre><code class="language-html">&lt;cube-scroll-nav @change=&quot;changeHandler&quot;&gt;
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
</code></pre><p><code>goods</code> 的结构类似于这样：</p><pre><code class="language-js">&quot;goods&quot;: [
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
</code></pre><p><code>cube-scroll-nav</code> 需要和 <code>cube-scroll-nav-panel</code> 组件配合使用，<code>cube-scroll-nav-panel</code> 就是每一个需要导航定位到的面板组件。</p><p><code>cube-scroll-nav-panel</code> 组件需要一个必须的 Prop：<code>label</code>，唯一标示 key 值。</p><p>当导航 active 项发生变化的时候就会触发 <code>change</code> 事件。</p></li><li><p>侧边式 - Side Style</p><pre><code class="language-html">&lt;cube-scroll-nav
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
</code></pre><p><code>side</code> 设置为 <code>true</code> 代表是一个侧边样式效果；</p><p><code>data</code> 则是默认传入的数据，这个数据会被传入内部使用的 <code>cube-scroll</code> 组件，当 <code>data</code> 发生变化时，scroll 组件会自动刷新；</p><p><code>current</code> 是导航默认值，如果有值则会默认滚动到相对应的面板 Panel 的位置。</p><p><code>sticky-change</code> 就是当前导航条的吸附状态发生改变的时候触发，参数可能的值目前只有两个，一个是 <code>&#39;&#39;</code> 一个是 <code>&#39;cube-scroll-nav-bar&#39;</code>。</p><p>此外，这里还在 <code>cube-scroll-nav-panel</code> 之前插入了一些内容，利用 <code>prepend</code> 插槽实现。</p></li></ul><h3>Props</h3><h4>CubeScrollNav</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>数据源，可选</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>side</td><td>是否是侧边样式</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>current</td><td>当前导航 active 项的 key 值</td><td>String/Number</td><td>-</td><td>‘’</td></tr><tr><td>speed</td><td>点击导航切换到指定位置的速度</td><td>Number</td><td>-</td><td>300</td></tr><tr><td>options</td><td>better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS 官方文档</a></td><td>Object</td><td>-</td><td>{} <br><code>注意</code>：从<code>1.12.38</code>版本开始，因修复<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a>在<code>iOS13.4</code>版本的滚动问题，<code>useTransition</code>在iOS版本&gt;=13.4时默认为<code>fasle</code><br>具体请参考<a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a></td></tr></tbody></table><h4>CubeScrollNavPanel</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>必须，面板的唯一标示的值</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>title</td><td>面板标题内容，可以是 HTML 字符串</td><td>String/Number</td><td>-</td><td>默认等于 label</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>默认面板内容</td><td>-</td></tr><tr><td>prepend</td><td>前置内容，在导航之前</td><td>-</td></tr><tr><td>bar</td><td>导航内容，如果需要自定义导航结构的话使用，里边放置 cube-scroll-nav-bar 组件</td><td>labels: 所有面板的 label 值集合<br>txts: 所有面板的 title 值集合<br>current: 当前导航 active 项的 key 值</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>当导航 active 项发生变化的时候</td><td>active - 当前 active 的 key 值</td></tr><tr><td>sticky-change</td><td>当前导航条的吸附状态发生改变的时候触发</td><td>current - 如果未吸附，则值为 ‘’ 否则为 ‘cube-scroll-nav-bar’</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>refresh</td><td>刷新，当内容或高度发生变化时可用于重新计算整体内容、位置</td></tr></tbody></table>`,16),a=[l],g={__name:"scroll-nav",setup(c,{expose:t}){return t({frontmatter:{}}),(u,s)=>(o(),e("div",n,a))}};export{g as default};
