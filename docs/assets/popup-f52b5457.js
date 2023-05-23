import{a as o,o as e,j as p}from"./index-9017f177.js";const n={class:"markdown-body"},d=p(`<h2>Popup 弹层</h2><p>底层弹层组件，主要用于基于此组件实现上层组件封装，只提供了基础功能：指定类型、是否有背景层、显示内容（HTML）以及是否居中。</p><p>内置弹层类组件基本都是基于此组件实现，包括：<a href="#/zh-CN/docs/toast">Toast</a>、<a href="#/zh-CN/docs/picker">Picker</a>、<a href="#/zh-CN/docs/cascade-picker">CascadePicker</a>、<a href="#/zh-CN/docs/date-picker">DatePicker</a>、<a href="#/zh-CN/docs/time-picker">TimePicker</a>、<a href="#/zh-CN/docs/segment-picker">SegmentPicker</a>、<a href="#/zh-CN/docs/dialog">Dialog</a>、<a href="#/zh-CN/docs/action-sheet">ActionSheet</a>。</p><p><strong>注：</strong> 以上组件都是基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><p>组件</p><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; ref=&quot;myPopup&quot;&gt;
  My Popup Content 1
&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup&#39;)&quot;&gt;
  Show Popup
&lt;/cube-button&gt;
</code></pre><p>指定类型 <code>type</code>，这样方便根据类型做 class 控制，如示例，会在根元素上会增加 <code>cube-my-popup</code> 的 class</p><pre><code class="language-js">export default {
  methods: {
    showPopup(refId) {
      const component = this.$refs[refId]
      component.show()
      setTimeout(() =&gt; {
        component.hide()
      }, 1000)
    }
  }
}
</code></pre><p>组件默认是隐藏的，需要调用组件实例的 <code>show()</code> 方法才会显示，调用组件实例的 <code>hide()</code> 方法隐藏，这里的 <code>showPopup()</code> 就是做的这件事情（首先显示，1 秒钟后隐藏）</p></li><li><p>不要背景层</p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; :mask=&quot;false&quot; ref=&quot;myPopup2&quot;&gt;
  My Popup Content 2
&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup2&#39;)&quot;&gt;
  Show Popup - no mask
&lt;/cube-button&gt;
</code></pre><p>设置 <code>mask</code> 为 <code>false</code>，即不显示背景层</p></li><li><p>显示内容 HTML</p><pre><code class="language-html">&lt;cube-popup
  type=&quot;my-popup&quot;
  :mask=&quot;false&quot;
  content=&quot;&lt;i&gt;My Popup Content 3&lt;/i&gt;&quot;
  ref=&quot;myPopup3&quot; /&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup3&#39;)&quot;&gt;
  Show Popup - with content
&lt;/cube-button&gt;
</code></pre><p>只需要传入 <code>content</code>，内容是一段 HTML 片段</p></li><li><p>控制位置&amp;蒙层点击隐藏<sup>1.9.6</sup></p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; :position=&quot;position&quot; :mask-closable=&quot;true&quot; ref=&quot;myPopup4&quot;&gt;My Popup Content 4&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup&quot;&gt;top/right/bottom/left/center&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const positions = [&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;center&#39;]
let cur = 0
export default {
  data() {
    return {
      position: &#39;&#39;
    }
  },
  methods: {
    showPopup() {
      this.position = positions[cur++]
      if (cur === positions.length) {
        cur = 0
      }
      const component = this.$refs.myPopup4
      component.show()
      setTimeout(() =&gt; {
        component.hide()
      }, 2000)
    }
  }
}
</code></pre><p>可通过 <code>position</code> 控制内容出现位置，通过 <code>mask-closable</code> 控制点击蒙层是否关闭。</p></li><li><p>上层封装</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-popup type=&quot;extend-popup&quot; ref=&quot;popup&quot;&gt;
    &lt;div class=&quot;cube-extend-popup-content&quot; @click=&quot;hide&quot;&gt;
      &lt;slot&gt;{{content}}&lt;/slot&gt;
    &lt;/div&gt;
 &lt;/cube-popup&gt;
&lt;/template&gt;
&lt;script&gt;
  const COMPONENT_NAME = &#39;cube-extend-popup&#39;
  export default {
    name: COMPONENT_NAME,
    props: {
      content: {
        type: String
      }
    },
    methods: {
      show() {
        this.$refs.popup.show()
      },
      hide() {
        this.$refs.popup.hide()
        this.$emit(&#39;hide&#39;)
      }
    }
  }
&lt;/script&gt;
&lt;style lang=&quot;stylus&quot;&gt;
  .cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
&lt;/style&gt;
</code></pre><p>这样就实现了一个上层封装的 CubeExtendPopup 组件，自带了一些样式，支持传入内容还有默认插槽，点击内容可隐藏。你可以这样使用（需要全局注册或者局部注册到使用的组件中）：</p><pre><code class="language-html">&lt;cube-extend-popup content=&quot;click here hide&quot; ref=&quot;extendPopup&quot;&gt;&lt;/cube-extend-popup&gt;
&lt;cube-button @click=&quot;$refs.extendPopup.show()&quot;&gt;
  Show Extend Popup
&lt;/cube-button&gt;
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>type</td><td>弹层类型</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>mask</td><td>是否显示背景层</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>content</td><td>内容，HTML 字符串，在无插槽的时候有效</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>center</td><td>是否水平垂直居中的</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>position<sup>1.9.6</sup></td><td>内容展示位置，优先级比 center 高</td><td>String</td><td>top/right/bottom/left/center</td><td>‘’</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>100</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>mask-click</td><td>背景层点击</td><td>点击事件对象</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,13),u=[d],h={__name:"popup",setup(c,{expose:t}){return t({frontmatter:{}}),(r,l)=>(e(),o("div",n,u))}};export{h as default};
