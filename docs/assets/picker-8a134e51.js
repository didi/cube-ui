import{a as e,o as d,j as n}from"./index-e8a96955.js";const c={class:"markdown-body"},a=n(`<h2>Picker 选择器</h2><p><code>Picker</code> 组件也就是选择器，可以用于实现单列或多列选项的选择。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保你基本了解过 <a href="#/zh-CN/docs/create-api">create-api</a> 的用法。</p><h3>示例</h3><p>对于选择器，最基本的是需要定义它可以选择的选项，定义选项的属性是 <code>data</code> ，它是一个二维数组，第一维度代表了有多少列，第二维度则代表了每列有哪些选项。</p><h4>1）单列选择器</h4><p>首先，是一个单列选择器的例子：</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPicker&quot;&gt;Picker&lt;/cube-button&gt;
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
</code></pre><h4>2）多列选择器</h4><p>如果传入了多列数据，则会生成相应的多列选择器。比如以下是一个三列的选择器：</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMutiPicker&quot;&gt;Multi-column Picker&lt;/cube-button&gt;
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
</code></pre><h4>3）选项的子属性别名</h4><p>有时你可能不希望以 <code>value</code> 和 <code>text</code> 去定义选项的值和文案，而用别的命名，比如当你的数据来源的命名为 <code>id</code> 和 <code>name</code> 时，你可能希望直接用 <code>id</code> 和 <code>name</code> 来定义值和文案。这个时候，你可以使用 <code>alias</code> 属性去配置。比如，配置 <code>value</code> 的别名为 <code>id</code>，<code>text</code> 的别名为 <code>name</code>。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAliasPicker&quot;&gt;Use Alias&lt;/cube-button&gt;
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
</code></pre><h4>4）实例方法 <code>$updateProps</code></h4><p>当你需要修改 Picker 某些配置项时，你可以使用实例方法 <code>$updateProps</code>，传入你需要更新的属性。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showUpdatePropsPicker&quot;&gt;Use $updateProps&lt;/cube-button&gt;
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
</code></pre><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>data</td><td>传入 picker 数据，数组的长度决定了 picker 的列数</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>selectedIndex</td><td>被选中的索引值，拉起 picker 后显示这个索引值对应的内容</td><td>Array</td><td>[]</td><td>[1]</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>副标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>取消按钮文案</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>确定按钮文案</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime</td><td>快速滑动 picker 滚轮时，惯性滚动动画的时长，单位：ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>alias</td><td>配置<code>value</code>和<code>text</code>的别名</td><td>Object</td><td>{}</td><td>{ value: ‘id’, text: ‘name’}</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code>子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>text</td><td>picker每一列展示的文案</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>value</td><td>picker每一列展示的每项文案对应的值</td><td>String/Number/Boolean</td><td>-</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>select</td><td>点击确认按钮触发此事件</td><td>selectedVal: 当前选中项每一列的值，Array类型</td><td>selectedIndex: 当前选中项每一列的索引，Array类型</td><td>selectedText: 当前选中项每一列的文案，Array类型</td></tr><tr><td>change</td><td>滚轴滚动后触发此事件</td><td>index: 当前滚动列次序，Number类型</td><td>selectedIndex: 当前列选中项的索引，Number类型</td><td></td></tr><tr><td>value-change</td><td>所确认的值变化时触发此事件</td><td>selectedVal: 当前确认项每一列的值，Array类型</td><td>selectedIndex: 当前确认项每一列的索引，Array类型</td><td>selectedText: 当前选中项每一列的文案，Array类型</td></tr><tr><td>cancel</td><td>点击取消按钮触发此事件</td><td>-</td><td>-</td><td></td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>setData</td><td>设置picker可选项</td><td>picker每列可选项的文案和值，Array类型</td><td>picker每列选中的索引，Array类型</td></tr><tr><td>show</td><td>显示</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>隐藏</td><td>-</td><td>-</td></tr></tbody></table>`,29),l=[a],u={__name:"picker",setup(r,{expose:t}){return t({frontmatter:{}}),(s,i)=>(d(),e("div",c,l))}};export{u as default};
