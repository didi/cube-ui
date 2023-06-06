import{a as e,o as d,j as n}from"./index-e8a96955.js";const a={class:"markdown-body"},r=n(`<h2>Drawer</h2><blockquote><p>1.7.0 新增</p></blockquote><p>抽屉，主要用来需要大范围层级进行选择的场景，一般情况下应该是满屏状态。</p><p><strong>注：</strong> 组件依赖父容器相对定位或者绝对定位，因为 Drawer 是绝对定位的。</p><h3>示例</h3><ul><li><p>默认配置使用</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDrawer&quot;&gt;Show Drawer&lt;/cube-button&gt;
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
</code></pre><p><code>title</code> 就是标题，可选；<code>data</code> 数据源，二维数组，长度决定了抽屉的 Panel 数，初始长度一定要确定；<code>selected-index</code> 则是初始选择的索引值；<code>change</code>、<code>select</code>、<code>cancel</code> 则是对应的三个事件：选择发生改变（选中是非最后一个 Panel 中的项的时候触发）、选中了某个值（选择了最后一个 Panel 中的项触发）、取消（点击左侧空白蒙层触发）。</p><p>你可以在 <code>change</code> 中通过 Drawer 的 <code>fill</code> 方法更新下一个 Panel 的数据，可以是同步更新也可以是异步更新。</p></li><li><p>自定义使用</p><p>你可以通过插槽来自定义结构。</p><pre><code class="language-html">&lt;cube-drawer
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
</code></pre><p>可以在 <code>cube-drawer</code> 组件中使用 <code>cube-drawer-panel</code> 以及 <code>cube-drawer-item</code> 组件来达到某些情况下的自定义目的。</p></li></ul><h3>Props 配置</h3><h4>CubeDrawer</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>data</td><td>数据源</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>selectedIndex</td><td>初始选择索引</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><p><code>data</code> 子配置项</p><p>是一个数组，数组中每一项仍然为数组，结构类似于：</p><pre><code class="language-js">[
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
</code></pre><p>里层数组的每一项可以是对象（包含 text 和 value），也可以是纯字符串。</p></li></ul><h4>CubeDrawerPanel</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>数据源</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>index</td><td>该数据源在 CubeDrawer 的 data 中的索引值</td><td>Number</td><td>-</td><td>-1</td></tr></tbody></table><h4>CubeDrawerItem</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>数据项</td><td>String/Object</td><td>-</td><td>‘’</td></tr><tr><td>index</td><td>该数据项在 CubeDrawerPanel 的 data 中的索引值</td><td>Number</td><td>-</td><td>-1</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th><th>参数4</th><th>参数5</th></tr></thead><tbody><tr><td>change</td><td>选择发生改变（选中是非最后一个 Panel 中的项的时候触发）</td><td>发生改变的 Panel 的索引</td><td>发生改变的数据项</td><td>已选中的值集合</td><td>已选中的索引集合</td><td>已选中的文本集合</td></tr><tr><td>select</td><td>选择了最后一个 Panel 中的项触发</td><td>已选中的值集合</td><td>已选中的索引集合</td><td>已选中的文本集合</td><td>-</td><td>-</td></tr><tr><td>cancel</td><td>点击左侧空白区域触发</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>refill</td><td>填充数据，改变某个 Panel 数据</td><td>要改变的 Panel 的索引</td><td>填充数据</td><td>默认选中项（可选，建议不填）</td></tr><tr><td>show</td><td>显示</td><td>-</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>隐藏</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>`,18),o=[r],u={__name:"drawer",setup(l,{expose:t}){return t({frontmatter:{}}),(i,s)=>(d(),e("div",a,o))}};export{u as default};
