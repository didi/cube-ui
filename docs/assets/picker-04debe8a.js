import{a as e,o as n,j as d}from"./index-e8a96955.js";const c={class:"markdown-body"},o=d(`<h2>Picker</h2><p><code>Picker</code> could use to implementing single or multi-column picker.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should have basically knowledge of <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><p>As for Picker, the most important thing is how to define the options. The property <code>data</code> is used to define options. It’s a two-dimensional array, the first dimensional means which columns the picker has, while the second dimensional represent the options of each column.</p><h4>1) Single-column Picker</h4><p>firstly, there is an example of Single-column Picker:</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPicker&quot;&gt;Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const column1 = [{ text: &#39;剧毒&#39;, value: &#39;剧毒&#39;}, { text: &#39;蚂蚁&#39;, value: &#39;蚂蚁&#39; },
  { text: &#39;幽鬼&#39;, value: &#39;幽鬼&#39; }]

export default {
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: &#39;Picker&#39;,
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
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
</code></pre><h4>2) Multi-column Picker</h4><p>You can genarate Multi-column Picker by input the data of several columns. For example, here is a three-colunms picker:</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMutiPicker&quot;&gt;Multi-column Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const column1 = [{ text: &#39;剧毒&#39;, value: &#39;剧毒&#39;}, { text: &#39;蚂蚁&#39;, value: &#39;蚂蚁&#39; },
  { text: &#39;幽鬼&#39;, value: &#39;幽鬼&#39; }]
const column2 = [{ text: &#39;输出&#39;, value: &#39;输出&#39; }, { text: &#39;控制&#39;, value: &#39;控制&#39; },
  { text: &#39;核心&#39;, value: &#39;核心&#39;}, { text: &#39;爆发&#39;, value: &#39;爆发&#39; }]
const column3 =  [{ text: &#39;梅肯&#39;, value: &#39;梅肯&#39;}, { text: &#39;秘法鞋&#39;, value: &#39;秘法鞋&#39; },
  { text: &#39;假腿&#39;, value: &#39;假腿&#39; }, { text: &#39;飞鞋&#39;, value: &#39;飞鞋&#39; }]

export default {
  methods: {
    showMutiPicker() {
      if (!this.mutiPicker) {
        this.mutiPicker = this.$createPicker({
          title: &#39;Multi-column Picker&#39;,
          data: [column1, column2, column3],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.mutiPicker.show()
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
</code></pre><h4>3) Alias for the sub properties of option</h4><p>Sometimes, you may want to use alias to config the value and text of options, instead of <code>value</code> and <code>text</code>. Think about this, when the name origin data is <code>id</code> and <code>name</code>, you could use <code>id</code> 和 <code>name</code> to define value and text directly by using property <code>alias</code> to config the alias of <code>value</code> as <code>id</code>, <code>text</code> as <code>name</code>.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAliasPicker&quot;&gt;Use Alias&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showAliasPicker() {
      if (!this.aliasPicker) {
        this.aliasPicker = this.$createPicker({
          title: &#39;Use Alias&#39;,
          data: [[{ id: 1, name: &#39;A&#39; }, { id: 2, name: &#39;B&#39; }, { id: 3, name: &#39;C&#39; }]],
          alias: {
            value: &#39;id&#39;,
            text: &#39;name&#39;
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.aliasPicker.show()
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
</code></pre><h4>4) Method <code>$updateProps</code></h4><p>When you need to change some properties of Picker, you could use the method <code>$updateProps</code> to input the new properties.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showUpdatePropsPicker&quot;&gt;Use $updateProps&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const column1 = [{ text: &#39;剧毒&#39;, value: &#39;剧毒&#39;}, { text: &#39;蚂蚁&#39;, value: &#39;蚂蚁&#39; },
  { text: &#39;幽鬼&#39;, value: &#39;幽鬼&#39; }]
const column2 = [{ text: &#39;输出&#39;, value: &#39;输出&#39; }, { text: &#39;控制&#39;, value: &#39;控制&#39; },
  { text: &#39;核心&#39;, value: &#39;核心&#39;}, { text: &#39;爆发&#39;, value: &#39;爆发&#39; }]
const column3 =  [{ text: &#39;梅肯&#39;, value: &#39;梅肯&#39;}, { text: &#39;秘法鞋&#39;, value: &#39;秘法鞋&#39; },
  { text: &#39;假腿&#39;, value: &#39;假腿&#39; }, { text: &#39;飞鞋&#39;, value: &#39;飞鞋&#39; }]

export default {
  methods: {
    showUpdatePropsPicker() {
      if (!this.updatePropsPicker) {
        this.updatePropsPicker = this.$createPicker({
          title: &#39;Use $updateProps&#39;,
          data: [column1],
          selectedIndex: [0],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.updatePropsPicker.show()
      setTimeout(() =&gt; {
        this.updatePropsPicker.$updateProps({
          title: &#39;Updated&#39;,
          data: [column1, column2, column3],
          selectedIndex: [1, 2, 3]
        })
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
</code></pre><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Accepted Values</th></tr></thead><tbody><tr><td>data</td><td>data that passed into picker, whose length determines the columns of picker</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>selectedIndex</td><td>the index of the selected value, corresponding content will be displayed when picker shows</td><td>Array</td><td>[]</td><td>[1]</td></tr><tr><td>title</td><td>title</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>subtitle</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>the text of the cancel button</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>the text of the confirm button</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime</td><td>the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>alias</td><td>configure the alias of <code>value</code> and <code>text</code></td><td>Object</td><td>{}</td><td>{ value: ‘id’, text: ‘name’}</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Example</th></tr></thead><tbody><tr><td>text</td><td>the text displayed in each column of picker</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>value</td><td>corresponding value of the text displayed in each column of picker</td><td>String/Number/Boolean</td><td>-</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking the confirm button</td><td>selectedVal: Array, values of each columns in current selected item</td><td>selectedIndex: Array, indexes of each columns in current selected item</td><td>selectedText: Array, texts of each columns in current selected item</td></tr><tr><td>change</td><td>triggers when the roller scrolls</td><td>index: Number, index of current scrolling roller</td><td>selectedIndex: Number, index of selected item in current column</td><td></td></tr><tr><td>value-change</td><td>triggers when confirmed value changes</td><td>selectedVal: Array, values of each columns in current confirmed item</td><td>selectedIndex: Array, indexes of each columns in current confirmed item</td><td></td></tr><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td><td></td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>setData</td><td>set options in picker</td><td>Array, texts and values of options of each columns of picker</td><td>Array, indexes of selected item in each column of picker</td></tr><tr><td>show</td><td>show</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>hide</td><td>-</td><td>-</td></tr></tbody></table>`,29),a=[o],u={__name:"picker",setup(l,{expose:t}){return t({frontmatter:{}}),(i,s)=>(n(),e("div",c,a))}};export{u as default};
