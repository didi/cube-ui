import{a as t,o as n,j as d}from"./index-9017f177.js";const a={class:"markdown-body"},c=d(`<h2>CascadePicker</h2><blockquote><p>New in 1.2.0+</p></blockquote><p><code>CascadePicker</code> component is used to implement the cascading change between picker columns. What is the effect of cascade? Considering the usage of province-city-area picker, when the province is changed, you may want the city column to display the exact cities of current province, so does the area column. And the <code>CascadePicker</code> is here to help you handle this.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Comparing to <code>Picker</code>, the required structure of props data is different for <code>CascadePicker</code>. The data structure of <code>Picker</code> is a two-dimensional array, and each column corresponds to an array. As in <code>CascadePicker</code>, we need a tree structure, that each item of first column has a <code>children</code> property which contains the corresponding data of following columns. Here is an example.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCascadePicker&quot;&gt;Cascade Picker&lt;/cube-button&gt;
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
</code></pre><p>When the first column goes to <code>Fruit</code>, the data of second column are <code>Apple</code> and <code>Orange</code>. And so on, when the second column goes to on <code>Orange</code>, the data of third column are <code>Three</code> and <code>Four</code>.</p></li><li><p>Address Picker</p><p>For address picker, the only thing you need to do is constructing the cascading data.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAddressPicker&quot;&gt;Address Picker&lt;/cube-button&gt;
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
</code></pre></li><li><p>Instance method <code>setData</code></p><p>You could use <code>setData</code> to reset the cascading data and selected index of <code>CascadePicker</code> instance no matter whether the picker is visible.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showSetDataPicker&quot;&gt;SetData Picker&lt;/cube-button&gt;
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
</code></pre></li><li><p>Async load data</p><p>When the data is too large, it will be really hard to construct the whole cascade data tree at beginning. For this case, you could use the property <code>async</code> to enable async load data and update the data at the event <code>change</code>. Before the data is updated, we will block the confirm handler temporarily.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAsyncPicker&quot;&gt;Async Load Data&lt;/cube-button&gt;
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Accepted Values</th></tr></thead><tbody><tr><td>data</td><td>the cascading data used to init option items</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>selectedIndex</td><td>the index of the selected item, corresponding content will be displayed when picker shows</td><td>Array</td><td>[]</td><td>[1]</td></tr><tr><td>async<sup>1.8.1</sup></td><td>async load data</td><td>Boolean</td><td>false</td><td>-</td></tr><tr><td>title</td><td>title</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>subtitle</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>the text of the cancel button</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>the text of the confirm button</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime</td><td>the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>alias</td><td>configure the alias of <code>value</code> and <code>text</code>, used as same as the alias of <code>Picker</code> component</td><td>Object</td><td>{}</td><td>{ value: ‘id’, text: ‘name’}</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Example</th></tr></thead><tbody><tr><td>text</td><td>the displayed text of each item</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>value</td><td>the value of each item</td><td>String/Number/Boolean</td><td>-</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking the confirm button</td><td>selectedVal: Array, values of each columns in current selected item</td><td>selectedIndex: Array, indexes of each columns in current selected item</td><td>selectedText: Array, texts of each columns in current selected item</td></tr><tr><td>change</td><td>triggers when the roller scrolls</td><td>index: Number, index of current scrolling roller</td><td>selectedIndex: Number, index of selected item in current column</td><td></td></tr><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td><td></td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>show</td><td>show</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>hide</td><td>-</td><td>-</td></tr><tr><td>setData</td><td>reset the cascading data and selected index</td><td>Array, the cascading data</td><td>Array, the indexes of selected item in each column</td></tr></tbody></table>`,14),r=[c],u={__name:"cascade-picker",setup(s,{expose:e}){return e({frontmatter:{}}),(i,l)=>(n(),t("div",a,r))}};export{u as default};
