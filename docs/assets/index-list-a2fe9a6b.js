import{a as e,o,j as n}from"./index-e8a96955.js";const d={class:"markdown-body"},l=n(`<h2>IndexList</h2><p><code>IndexList</code> component, , which is also encapsulated based on <code>better-scroll</code>, provides functions of index lists.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Construct data like <code>cityData</code> in the example below and pass it into <code>data</code> in <code>cube-index-list</code> component.</p><pre><code class="language-html">&lt;cube-index-list
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
</code></pre></li><li><p>Custom item content</p><p>Beside default usage, you could customise the content of each item as required by inserting your custom DOM into the slot of <code>cube-index-list-item</code> as shown below. And please don’t modify the usage of <code>cube-index-list-group</code> and <code>cube-index-list-item</code> unless you really know what you are doing.</p><pre><code class="language-html">&lt;cube-index-list :data=&quot;cityData&quot;&gt;
  &lt;cube-index-list-group
    v-for=&quot;(group, index) in cityData&quot;
    :key=&quot;index&quot;
    :group=&quot;group&quot;&gt;
    &lt;cube-index-list-item
      v-for=&quot;(item, index) in group.items&quot;
      :key=&quot;index&quot;
      :item=&quot;item&quot;
      @select=&quot;selectItem&quot;&gt;
      &lt;div class=&quot;custom-item&quot;&gt;I am the custom {{item.name}}&lt;/div&gt;
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
</code></pre><pre><code class="language-stylus">// Style of the custom item.
.custom-item
  position: relative
  height: 70px
  line-height: 70px
  padding: 0 16px
  font-size: $fontsize-medium

// Use custom style to cover default style.
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
</code></pre></li><li><p>Pull Up Load</p><p>Beside, you could use <code>pullUpLoad</code> to enable pull-up-load, the detail config is same as the <code>options.pullUpLoad</code> of Scroll.</p><pre><code class="language-html">&lt;cube-index-list
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
</code></pre><ul><li>Pull Down Refresh</li></ul><p>Beside, you could use <code>pullDownRefresh</code> to enable pull-down-refresh, the detail config is same as the <code>options.pullDownRefresh</code> of Scroll.</p><pre><code class="language-html">&lt;cube-index-list
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td>String</td><td>-</td></tr><tr><td>data</td><td>data to be displayed</td><td>Array</td><td>[]</td></tr><tr><td>navbar</td><td>whether need navbar</td><td>Boolean</td><td>true</td></tr><tr><td>speed</td><td>when click the navigator, the transition time of scrolling to the specific anchor (unit: ms).</td><td>number</td><td>0</td></tr><tr><td>options<sup>1.9.8+</sup></td><td>the options of better-scroll, you could find details at <a href="https://better-scroll.github.io/docs-v1/doc/en/options.html">BS Document</a></td><td>Object</td><td>{<br> observeDOM: true,<br> click: true,<br> probeType: 1,<br> scrollbar: false,<br> pullDownRefresh: false,<br> pullUpLoad: false<br>}<br><code>Notice</code>: After <code>1.12.38</code>, as <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a> <code>iOS13.4</code> issue <a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a>, we set <code>useTransition</code> to <code>fasle</code> by default</td></tr><tr><td>pullUpLoad<sup>1.8.0+</sup></td><td>pull-up-load, the detail config is same as the <code>options.pullUpLoad</code> of Scroll. <code>Deprecated</code>, please use the property <code>options</code> instead.</td><td>Boolean/Object</td><td>false</td></tr><tr><td>pullDownRefresh<sup>1.8.0+</sup></td><td>pull-down-refresh, the detail config is same as the <code>options.pullDownRefresh</code> of Scroll. <code>Deprecated</code>, please use the property <code>options</code> instead.</td><td>Boolean/Object</td><td>false</td></tr></tbody></table><ul><li><code>data</code> sub configuration</li></ul><p><code>data</code> is an array, which represents multiple groups of data and each of them can be configured：</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>the name of the group</td><td>String</td></tr><tr><td>items</td><td>data of current group</td><td>Array</td></tr></tbody></table><p>Each item of <code>items</code> array must be an object that must contains the <code>name</code> attribute which is used for displaying the content; For example: <code>items</code>: <code>[{name: &#39;xx&#39;, ...}, ...]</code></p><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>title<sup>1.12.25+</sup></td><td>title slot</td><td>-</td></tr><tr><td>pulldown<sup>1.9.4+</sup></td><td>located above the list and shown when pulling down refreshing</td><td>the detail is the same as Scroll component’s pulldown slot scope parameters</td></tr><tr><td>pullup<sup>1.9.4+</sup></td><td>located below the list and shown when pulling up loading</td><td>the detail is the same as Scroll component’s pullup slot scope parameters</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking one of the items in IndexList</td><td>data of the item</td></tr><tr><td>title-click</td><td>triggers when clicking title(valid only if title has been configured)</td><td>the value of title</td></tr><tr><td>pulling-up<sup>1.8.0+</sup></td><td>triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true</td><td>-</td></tr><tr><td>pulling-down<sup>1.8.0+</sup></td><td>triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true</td><td>-</td></tr></tbody></table>`,14),i=[l],p={__name:"index-list",setup(a,{expose:t}){return t({frontmatter:{}}),(c,u)=>(o(),e("div",d,i))}};export{p as default};
