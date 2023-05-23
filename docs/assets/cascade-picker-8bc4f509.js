import{a as e,o as n,j as d}from"./index-9017f177.js";const c={class:"markdown-body"},a=d(`<h2>CascadePicker组件</h2><blockquote><p>1.2.0 新增</p></blockquote><p><code>CascadePicker</code>组件是级联选择器，用于实现多列选择之间的级联变化。比如，在选择省市区时，当省切换到了江苏省，城市列应该变成江苏省的各个城市，同理，如果城市切换到苏州市，区列的选项也应变成苏州市的各个区，这就级联的意义。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><p>相比普通选择器，级联选择器需要传入的数据结构是不一样的。普通选择器的数据结构是一个二维数组，每一列对应一个固定的数组，而级联选择器，则需要传入的是一个树形结构，第一列数组的每个选项的children属性，对应着切换到该选项时后续列的数据，从而实现对后续列的改变。如下所示：</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCascadePicker&quot;&gt;Cascade Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const cascadeData = [
  {
    value: &#39;Fruit&#39;,
    text: &#39;Fruit&#39;,
    children: [
      {
        value: &#39;Apple&#39;,
        text: &#39;Apple&#39;,
        children: [{ value: 1, text: &#39;One&#39; }, { value: 2, text: &#39;Two&#39; }]
      },
      {
        value: &#39;Orange&#39;,
        text: &#39;Orange&#39;,
        children: [{ value: 3, text: &#39;Three&#39;}, { value: 4, text: &#39;Four&#39; }]
      }
    ]
  },
  {
    value: &#39;Drink&#39;,
    text: &#39;Drink&#39;,
    children: [
      {
        value: &#39;Coffee&#39;,
        text: &#39;Coffee&#39;,
        children: [{ value: 1, text: &#39;One&#39; }, { value: 2, text: &#39;Two&#39; }]
      },
      {
        value: &#39;Tea&#39;,
        text: &#39;Tea&#39;,
        children: [{ value: 1, text: &#39;One&#39; }, { value: 3, text: &#39;Three&#39;}]
      }
    ]
  }
]
export default {
  mounted () {
    this.cascadePicker = this.$createCascadePicker({
      title: &#39;Cascade Picker&#39;,
      data: cascadeData,
      selectedIndex: [0, 1, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showCascadePicker() {
      this.cascadePicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre><p>当第一列选中<code>Fruit</code>时，第二列的选项是<code>Apple</code>、<code>Orange</code>。以此类推，当第二列选中<code>Orange</code>时，第三列的选项是<code>Three</code>、<code>Four</code>。</p></li><li><p>地址选择器</p><p>对于地址选择器，只需要构造出级联选择器的数据结构传入就可以了。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAddressPicker&quot;&gt;Address Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">import { provinceList, cityList, areaList } from &#39;example/data/area&#39;

const addressData = provinceList
addressData.forEach(province =&gt; {
  province.children = cityList[province.value]
  province.children.forEach(city =&gt; {
    city.children = areaList[city.value]
  })
})

export default {
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: &#39;City Picker&#39;,
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showAddressPicker() {
      this.addressPicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>实例方法 <code>setData</code></p><p><code>setData</code>方法，用于重置<code>CascadePicker</code>实例的数据和选中的索引。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showSetDataPicker&quot;&gt;SetData Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  mounted () {
    this.setDataPicker = this.$createCascadePicker({
      title: &#39;Set Data&#39;,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showSetDataPicker() {
      // setData when the picker is invisible.
      this.setDataPicker.setData(cascadeData)

      this.setDataPicker.show()
      setTimeout(() =&gt; {
        // setData when the picker is visible.
        this.setDataPicker.setData(addressData, [1, 1, 0])
      }, 1000)
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>异步加载数据</p><p>当数据量太大时，可能难以在最开始就生成完整的级联数据树。这时，你可以配置 <code>async</code> 属性开启异步加载级联数据，在 <code>change</code> 事件时，去更新数据，并且在你更新完数据之前，用户点击确认会是无效的。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAsyncPicker&quot;&gt;Async Load Data&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">import { provinceList, cityList, areaList } from &#39;example/data/area&#39;

const asyncData = provinceList
const asyncSelectedIndex = [0, 0, 0]
asyncData[0].children = cityList[asyncData[0].value]
asyncData[0].children[0].children = areaList[asyncData[0].children[0].value]

export default {
  mounted () {
    this.asyncPicker = this.$createCascadePicker({
      title: &#39;Async Load Data&#39;,
      async: true,
      data: asyncData,
      selectedIndex: asyncSelectedIndex.slice(),
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle,
      onChange: this.asyncChangeHandle
    })
  },
  methods: {
    showAsyncPicker() {
      this.asyncPicker.show()
    },
    asyncChangeHandle(i, newIndex) {
      if (newIndex !== asyncSelectedIndex[i]) {
        asyncSelectedIndex[i] = newIndex
        // If the first two column is changed, request the data for rest columns.
        if (i &lt; 2) {
          // Mock async load.
          setTimeout(() =&gt; {
            if (i === 0) {
              const current = asyncData[newIndex]
              current.children = current.children || cityList[current.value]
              current.children[0].children = current.children[0].children || areaList[current.children[0].value]
              asyncSelectedIndex[1] = 0
              asyncSelectedIndex[2] = 0
            }

            if (i === 1) {
              const current = asyncData[asyncSelectedIndex[0]].children[newIndex]
              current.children = current.children || areaList[current.value]
              asyncSelectedIndex[2] = 0
            }
            this.asyncPicker.setData(asyncData, asyncSelectedIndex)
          }, 500)
        }
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - index: \${selectedIndex.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>data</td><td>级联选择器的树形数据，用于初始化选项</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>selectedIndex</td><td>被选中的索引值，拉起选择器后显示这个索引值对应的内容</td><td>Array</td><td>[]</td><td>[1]</td></tr><tr><td>async<sup>1.8.1</sup></td><td>异步加载数据</td><td>Boolean</td><td>false</td><td>-</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>副标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>取消按钮文案</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>确定按钮文案</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime</td><td>快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>alias</td><td>配置<code>value</code>和<code>text</code>的别名，用法同<code>Picker</code>组件</td><td>Object</td><td>{}</td><td>{ value: ‘id’, text: ‘name’}</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code>子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>text</td><td>每个选项展示的文案</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>value</td><td>每个选项的值</td><td>String/Number/Boolean</td><td>-</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>select</td><td>点击确认按钮触发此事件</td><td>selectedVal: 当前选中项每一列的值，Array类型</td><td>selectedIndex: 当前选中项每一列的索引，Array类型</td><td>selectedText: 当前选中项每一列的文案，Array类型</td></tr><tr><td>change</td><td>滚轴滚动后触发此事件</td><td>index: 当前滚动列次序，Number类型</td><td>selectedIndex: 当前列选中项的索引，Number类型</td><td></td></tr><tr><td>cancel</td><td>点击取消按钮触发此事件</td><td>-</td><td>-</td><td></td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>setData</td><td>重置数据和选中的索引</td><td>级联树形数据结构，Array类型</td><td>每列选中的索引，Array类型</td></tr><tr><td>show</td><td>显示</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>隐藏</td><td>-</td><td>-</td></tr></tbody></table>`,14),r=[a],u={__name:"cascade-picker",setup(s,{expose:t}){return t({frontmatter:{}}),(i,o)=>(n(),e("div",c,r))}};export{u as default};
