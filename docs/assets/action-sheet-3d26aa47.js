import{a as e,o as n,j as d}from"./index-9017f177.js";const o={class:"markdown-body"},c=d(`<h2>ActionSheet</h2><p><code>ActionSheet</code> provides two common styles and it is flexible.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDefault&quot;&gt;action sheet&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showDefault() {
      this.$createActionSheet({
        title: &#39;我是标题~~~&#39;,
        data: [
          {
            content: &#39;&lt;em&gt;align - center&lt;/em&gt;&#39;,
            class: &#39;cube-foo&#39;
          },
          {
            content: &#39;align - left&#39;,
            align: &#39;left&#39;
          },
          {
            content: &#39;align - right&#39;,
            align: &#39;right&#39;
          }
        ],
        onSelect: (item, index) =&gt; {
          this.$createToast({
            txt: \`Clicked \${item.content}\`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>You can create a basic actionsheet by setting <code>title</code> and <code>data</code> option. Pay attention that <code>content</code> in <code>data</code> can be a HTML string. Also, setting the custom class by <code>class</code> and setting the align of the item’s content by <code>align</code>.</p></li><li><p>Highlight item</p><pre><code class="language-html">&lt;cube-button @click=&quot;showActive&quot;&gt;ActionSheet - active&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showActive() {
      this.$createActionSheet({
        title: &#39;我是标题~~~&#39;,
        active: 0,
        data: [
          {
            content: &#39;舒适型&#39;
          },
          {
            content: &#39;七座商务&#39;
          },
          {
            content: &#39;豪华型&#39;
          }
        ],
        onSelect: (item, index) =&gt; {
          this.$createToast({
            txt: \`Clicked \${item.content}\`,
            type: &#39;correct&#39;,
            time: 1000
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            txt: \`Clicked canceled\`,
            type: &#39;warn&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>You can control the highlighted item by setting the <code>active</code> option.</p></li><li><p>Picker style setting</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPickerStyle&quot;&gt;ActionSheet - picker style&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showPickerStyle() {
      this.$createActionSheet({
        title: &#39;我是标题~~~&#39;,
        pickerStyle: true,
        data: [
          {
            content: &#39;舒适型&#39;
          },
          {
            content: &#39;七座商务&#39;
          },
          {
            content: &#39;豪华型&#39;
          }
        ],
        onSelect: (item, index) =&gt; {
          this.$createToast({
            txt: \`Clicked \${item.content}\`,
            type: &#39;correct&#39;,
            time: 1000
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            txt: \`Clicked canceled\`,
            type: &#39;warn&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>You can use Picker style by setting <code>pickerStyle</code> to be true.</p></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>actionsheet’s title</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>cancelTxt<sup>1.9.9</sup></td><td>the text of the cancel button</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>data</td><td>the data list to display</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>active</td><td>the highlighted item’s index</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>pickerStyle</td><td>Picker style</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>100</td></tr></tbody></table><ul><li><code>data</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>the content to display in the actionsheet’s item</td><td>String</td><td>any text, include HTML</td><td>‘’</td></tr><tr><td>align</td><td>align the content</td><td>String</td><td>left/right</td><td>‘’</td></tr><tr><td>class</td><td>custom class</td><td>String</td><td>-</td><td>‘’</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td></tr><tr><td>select</td><td>triggers when clicking some item</td><td>the clicked item - data[index]</td><td>the index of the clicked item</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,13),a=[c],u={__name:"action-sheet",setup(i,{expose:t}){return t({frontmatter:{}}),(l,h)=>(n(),e("div",o,a))}};export{u as default};
