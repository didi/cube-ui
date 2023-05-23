import{a as e,o as d,j as n}from"./index-9017f177.js";const c={class:"markdown-body"},o=n(`<h2>ActionSheet</h2><p><code>ActionSheet</code>操作列表提供了两种常见的样式，灵活可控内容。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDefault&quot;&gt;操作列表&lt;/cube-button&gt;
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
</code></pre><p>配置标题 <code>title</code> 和 <code>data</code> 数据项，注意 <code>data</code> 中内容是 <code>content</code>，一段 HTML 字符串，额外还可以配置自定义 class：<code>class</code> 和方向：<code>align</code>（值可以是 <code>left</code>、<code>right</code>）。</p></li><li><p>高亮设置</p><pre><code class="language-html">&lt;cube-button @click=&quot;showActive&quot;&gt;ActionSheet - active&lt;/cube-button&gt;
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
</code></pre><p>通过设置 <code>active</code> 属性来控制高亮的是第几个。</p></li><li><p>Picker 样式设定</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPickerStyle&quot;&gt;ActionSheet - picker style&lt;/cube-button&gt;
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
</code></pre><p><code>pickerStyle</code> 属性决定是否使用 Picker 样式。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>组件的标题</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>cancelTxt<sup>1.9.9</sup></td><td>取消文案</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>data</td><td>需要展示的数据列表</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>active</td><td>高亮第几个选项</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>pickerStyle</td><td>Picker 样式</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>100</td></tr></tbody></table><ul><li><code>data</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>展示的内容</td><td>String</td><td>任意 HTML 字符串</td><td>‘’</td></tr><tr><td>align</td><td>内容对齐方向</td><td>String</td><td>left/right</td><td>‘’</td></tr><tr><td>class</td><td>自定义 class</td><td>String</td><td>-</td><td>‘’</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>参数</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>cancel</td><td>点击取消</td><td>-</td><td>-</td></tr><tr><td>select</td><td>点击某项</td><td>点击项 item，即 data[index]</td><td>点击项的索引值 index</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,13),a=[o],p={__name:"action-sheet",setup(r,{expose:t}){return t({frontmatter:{}}),(i,h)=>(d(),e("div",c,a))}};export{p as default};
