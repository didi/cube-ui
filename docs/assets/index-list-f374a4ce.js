import{a as e,o,j as n}from"./index-e8a96955.js";const d={class:"markdown-body"},l=n(`<h2>IndexList</h2><p>索引列表，提供了列表索引的功能，也是一个基于<code>better-scroll</code>进行封装的组件。</p><h3>示例</h3><ul><li><p>基本使用</p><p>构造如示例中 <code>cityData</code> 这样结构的数据，传入 <code>cube-index-list</code> 组件的 <code>data</code> 属性。</p><pre><code class="language-html">&lt;cube-index-list
  :data=&quot;cityData&quot;
  :title=&quot;title&quot;
  @select=&quot;selectItem&quot;
  @title-click=&quot;clickTitle&quot;&gt;&lt;/cube-index-list&gt;
</code></pre><pre><code class="language-javascript">const cityData = [
  {
    &quot;name&quot;: &quot;★Hot City&quot;,
    &quot;items&quot;: [
      {
        &quot;name&quot;: &quot;BEIJING&quot;,
        &quot;value&quot;: 1
      },
      {
        &quot;name&quot;: &quot;SHANGHAI&quot;,
        &quot;value&quot;: 2
      }
    ]
  },
  {
    &quot;name&quot;: &quot;A&quot;,
    &quot;items&quot;: [
      {
        &quot;name&quot;: &quot;ANSHAN&quot;,
        &quot;value&quot;: 3
      },
      {
        &quot;name&quot;: &quot;ANQING&quot;,
        &quot;value&quot;: 4
      }
    ]
  }
]

export default {
  data() {
    return {
      title: &#39;Current City: BEIJING&#39;,
      cityData: cityData
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    }
  }
}
</code></pre></li><li><p>自定义插槽</p><p>除了默认结构，你还可以根据自己的需要自定义每一项的内容。如下所示，将你的自定义内容项填入<code>cube-index-list-item</code>的插槽。除非你真的知道自己在做什么，否则不要修改<code>cube-index-list-group</code>和<code>cube-index-list-item</code>的用法。</p><pre><code class="language-html">&lt;cube-index-list :data=&quot;cityData&quot;&gt;
  &lt;cube-index-list-group
    v-for=&quot;(group, index) in cityData&quot;
    :key=&quot;index&quot;
    :group=&quot;group&quot;&gt;
    &lt;cube-index-list-item
      v-for=&quot;(item, index) in group.items&quot;
      :key=&quot;index&quot;
      :item=&quot;item&quot;
      @select=&quot;selectItem&quot;&gt;
      &lt;div class=&quot;custom-item&quot;&gt;我是自定义 {{item.name}}&lt;/div&gt;
    &lt;/cube-index-list-item&gt;
  &lt;/cube-index-list-group&gt;
&lt;/cube-index-list&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      cityData: cityData
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    }
  }
}
</code></pre><pre><code class="language-stylus">// 自定义项的样式
.custom-item
  position: relative
  height: 70px
  line-height: 70px
  padding: 0 16px
  font-size: $fontsize-medium

// 用自定义样式，覆写内置的默认样式
.cube-index-list-content
  background-color: #222
  color: #909090
.cube-index-list-anchor
  background-color: #333
  height: 30px
  line-height: 30px
  padding: 0 0 0 20px
.cube-index-list-nav
  padding: 20px 0
  border-radius: 10px
  background: rgba(0,0,0,.3)
  &gt;ul
    &gt;li
      padding: 3px
      font-size: 12px
      color: #909090
      &amp;.active
        color: #ffcd32
</code></pre></li><li><p>上拉加载</p><p>可以通过 <code>pullUpLoad</code> 属性开启上拉加载功能，具体配置同 Scroll 组件的 <code>options.pullUpLoad</code>。</p><pre><code class="language-html">&lt;cube-index-list
  ref=&quot;indexList&quot;
  :data=&quot;data&quot;
  :title=&quot;title&quot;
  :pullUpLoad=&quot;true&quot;
  @select=&quot;selectItem&quot;
  @title-click=&quot;clickTitle&quot;
  @pulling-up=&quot;onPullingUp&quot;&gt;
&lt;/cube-index-list&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      title: &#39;Current City: BEIJING&#39;,
      data: cityData.slice(0, 4)
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    },
    onPullingUp() {
      // Mock async load.
      setTimeout(() =&gt; {
        const length = this.data.length
        if (length &lt; cityData.length) {
          // Update data.
          this.data.push(cityData[length])
        }
        // Call forceUpdate after finishing data load.
        this.$refs.indexList.forceUpdate()
      }, 1000)
    }
  }
}
</code></pre><ul><li>下拉刷新</li></ul><p>可以通过 <code>pullDownRefresh</code> 属性开启下拉刷新功能，具体配置同 Scroll 组件的 <code>options.pullDownRefresh</code></p><pre><code class="language-html">&lt;cube-index-list
  ref=&quot;indexList&quot;
  :data=&quot;data&quot;
  :title=&quot;title&quot;
  :pullDownRefresh=&quot;pullDownRefresh&quot;
  @select=&quot;selectItem&quot;
  @title-click=&quot;clickTitle&quot;
  @pulling-down=&quot;onPullingDown&quot;&gt;
&lt;/cube-index-list&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      title: &#39;Current City: BEIJING&#39;,
      data: cityData,
      pullDownRefresh: {
        stop: 55
      }
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    },
    onPullingDown() {
      // Mock async load.
      setTimeout(() =&gt; {
        // Update data.
        this.data[1].items.push(...cityData[1].items)
        // Call forceUpdate after finishing data load.
        this.$refs.indexList.forceUpdate(true)
      }, 1000)
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>data</td><td>需要展示的数据</td><td>Array</td><td>[]</td></tr><tr><td>navbar</td><td>是否需要导航栏</td><td>Boolean</td><td>true</td></tr><tr><td>speed</td><td>点击导航栏索引时，滚动到相应位置的动画时间（单位：ms）</td><td>number</td><td>0</td></tr><tr><td>options<sup>1.9.8+</sup></td><td>better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS 官方文档</a></td><td>Object</td><td>{<br> observeDOM: true,<br> click: true,<br> probeType: 1,<br> scrollbar: false,<br> pullDownRefresh: false,<br> pullUpLoad: false<br>} <br><code>注意</code>：从<code>1.12.38</code>版本开始，因修复<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a>在<code>iOS13.4</code>版本的滚动问题，<code>useTransition</code>在iOS版本&gt;=13.4时默认为<code>fasle</code><br>具体请参考<a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a></td></tr><tr><td>pullUpLoad<sup>1.8.0+</sup></td><td>上拉加载，具体配置参考 scroll 组件的 <code>options.pullUpLoad</code>。<code>即将废弃</code>，推荐使用 <code>options</code> 属性</td><td>Boolean/Object</td><td>false</td></tr><tr><td>pullDownRefresh<sup>1.8.0+</sup></td><td>下拉刷新，具体配置参考 scroll 组件的 <code>options.pullDownRefresh</code>。<code>即将废弃</code>，推荐使用 <code>options</code> 属性</td><td>Boolean/Object</td><td>false</td></tr></tbody></table><ul><li><code>data</code> 子配置项</li></ul><p><code>data</code> 是数组，表示的是一组数据，每一项配置：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>组名</td><td>String</td></tr><tr><td>items</td><td>当前组下的数据项</td><td>Array</td></tr></tbody></table><p><code>items</code> 数组中的每一项必须是对象，且包含 <code>name</code> 属性用于显示内容；例如 <code>items</code>: <code>[{name: &#39;xx&#39;, ...}, ...]</code></p><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>title<sup>1.12.25+</sup></td><td>标题插槽</td><td>-</td></tr><tr><td>pulldown<sup>1.9.4+</sup></td><td>位于列表上方，会在下拉刷新时显示，与 scroll 组件相同</td><td>具体参考 scroll 组件的 pulldown 插槽作用域参数介绍</td></tr><tr><td>pullup<sup>1.9.4+</sup></td><td>位于列表下方，会在上拉加载时显示，与 scroll 组件相同</td><td>具体参考 scroll 组件的 pullup 插槽作用域参数介绍</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>点击 IndexList 的某一项后触发</td><td>该选项的数据</td></tr><tr><td>title-click</td><td>点击 title 后触发(title 必须设置后才有效)</td><td>title属性值</td></tr><tr><td>pulling-up<sup>1.8.0+</sup></td><td>当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发</td><td>-</td></tr><tr><td>pulling-down<sup>1.8.0+</sup></td><td>当 pullDownRefresh 属性为 true 时，在下拉超过阈值时触发</td><td>-</td></tr></tbody></table>`,14),i=[l],p={__name:"index-list",setup(c,{expose:t}){return t({frontmatter:{}}),(a,s)=>(o(),e("div",d,i))}};export{p as default};
