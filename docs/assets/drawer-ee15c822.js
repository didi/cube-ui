import{a as e,o as d,j as n}from"./index-9017f177.js";const a={class:"markdown-body"},r=n(`<h2>Drawer</h2><blockquote><p>New in 1.7.0+</p></blockquote><p>Drawer, this component is used to select item in many items, it used full-page panels to interaction normally.</p><p><strong>Notice:</strong> Drawer component’s container element should be be a relative or absolute position element.</p><h3>Demo</h3><ul><li><p>Default usage</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDrawer&quot;&gt;Show Drawer&lt;/cube-button&gt;
&lt;cube-drawer
  ref=&quot;drawer&quot;
  title=&quot;请选择&quot;
  :data=&quot;data&quot;
  :selected-index=&quot;selectedIndex&quot;
  @change=&quot;changeHandler&quot;
  @select=&quot;selectHandler&quot;
  @cancel=&quot;cancelHandler&quot;&gt;&lt;/cube-drawer&gt;
</code></pre><pre><code class="language-js">import { provinceList, cityList, areaList } from &#39;../../data/area&#39;
export default {
  data() {
    return {
      selectedIndex: [],
      data: [
        provinceList,
        [],
        []
      ]
    }
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show()
    },
    changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
      // fake request
      setTimeout(() =&gt; {
        let data
        if (index === 0) {
          // procince change, get city data
          data = cityList[item.value]
        } else {
          // city change, get area data
          data = areaList[item.value]
        }
        // refill panel(index + 1) data
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandler() {
      console.log(&#39;cancel&#39;)
    }
  }
}
</code></pre><p><code>title</code> is the drawer’s title, optional; <code>data</code> source, an array with array items; <code>selected-index</code> is the initial index of the selected value; <code>change</code>、<code>select</code>、<code>cancel</code> are events: when selected item changed (the selected item is not in the last Panel)、when selected one item (the item is in the last Panel)、cancel (when clicked the left empty area).</p><p>You can use Drawer’s <code>fill</code> method to update next Panel’s data.</p></li><li><p>Custom usage</p><p>You can use slots to define your own HTML structure.</p><pre><code class="language-html">&lt;cube-drawer
  ref=&quot;drawer&quot;
  :data=&quot;data&quot;
  :selected-index=&quot;selectedIndex&quot;
  @change=&quot;changeHandler&quot;
  @select=&quot;selectHandler&quot;
  @cancel=&quot;cancelHandler&quot;&gt;
  &lt;span slot=&quot;title&quot;&gt;{{province.text}}&lt;/span&gt;
  &lt;cube-drawer-panel
    v-for=&quot;(panel, index) in data&quot;
    :key=&quot;index&quot;
    :index=&quot;index&quot;
    :data=&quot;panel&quot;
  &gt;
    &lt;cube-drawer-item v-for=&quot;(item, i) in panel&quot; :item=&quot;item&quot; :key=&quot;i&quot; :index=&quot;i&quot;&gt;
      &lt;i class=&quot;cubeic-round-border&quot;&gt;&lt;/i&gt;
      &lt;span&gt;{{item.text}}&lt;/span&gt;
    &lt;/cube-drawer-item&gt;
  &lt;/cube-drawer-panel&gt;
&lt;/cube-drawer&gt;
</code></pre><pre><code class="language-js">import { provinceList, cityList, areaList } from &#39;../../data/area&#39;
export default {
  data() {
    return {
      province: {},
      selectedIndex: [],
      data: [
        [],
        []
      ]
    }
  },
  methods: {
    showDrawer() {
      // get radom province
      const randomIndex = Math.round(Math.random() * provinceList.length)
      const randomProvince = provinceList[randomIndex]
      this.province = randomProvince
      this.$refs.drawer.refill(0, cityList[randomProvince.value])
      this.$refs.drawer.show()
    },
    changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
      setTimeout(() =&gt; {
        // city change, get area data
        const data = areaList[item.value]
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandler() {
      console.log(&#39;cancel&#39;)
    }
  }
}
</code></pre><p>You can use <code>cube-drawer-panel</code> and <code>cube-drawer-item</code> in <code>cube-drawer</code>.</p></li></ul><h3>Props</h3><h4>CubeDrawer</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>data</td><td>data source</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>selectedIndex</td><td>initial selected index</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p><code>data</code> sub configuration</p><p>It is an array and it’s items is Array too, eg:</p><pre><code class="language-js">[
  [
    {
      text: &#39;text&#39;,
      value: &#39;value&#39;
    },
    ...
  ],
  [
    &#39;text&#39;,
    &#39;text2&#39;,
    ...
  ]
]
</code></pre></li></ul><h4>CubeDrawerPanel</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>data source</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>index</td><td>the data source index in CubeDrawer’s data</td><td>Number</td><td>-</td><td>-1</td></tr></tbody></table><h4>CubeDrawerItem</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>item data</td><td>String/Object</td><td>-</td><td>‘’</td></tr><tr><td>index</td><td>the item index in CubeDrawerPanel’s data</td><td>Number</td><td>-</td><td>-1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th><th>Parameters 4</th><th>Parameters 5</th></tr></thead><tbody><tr><td>change</td><td>when selected item changed (the selected item is not in the last Panel)</td><td>current Panel index</td><td>changed item</td><td>selectedVal: Array, selected item values of each panels</td><td>selectedIndex: Array, selected indexes of each panels</td><td>selectedText: Array, texts of each columns in current selected item</td></tr><tr><td>select</td><td>when selected one item (the item is in the last Panel)</td><td>selectedVal: Array, selected item values of each panels</td><td>selectedIndex: Array, selected indexes of each panels</td><td>selectedText: Array, texts of each columns in current selected item</td><td>-</td><td>-</td></tr><tr><td>cancel</td><td>when clicked the left empty area</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>refill</td><td>refill data, change one Panel’s data source</td><td>the Panel index</td><td>the data source</td><td>default selected index (Optional, recommended do not specify a value)</td></tr><tr><td>show</td><td>show</td><td>-</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>hide</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>`,18),l=[r],u={__name:"drawer",setup(o,{expose:t}){return t({frontmatter:{}}),(s,i)=>(d(),e("div",a,l))}};export{u as default};
