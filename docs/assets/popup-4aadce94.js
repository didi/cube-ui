import{a as e,o,j as n}from"./index-e8a96955.js";const p={class:"markdown-body"},d=n(`<h2>Popup</h2><p>The underlying popup component, mainly used to implement upper component encapsulation based on itself. It only provides basic functions: specifying the type, whether there’s a background layer, showing content (HTML) and whether the component is in center position.</p><p>Most of the built-in popup type components are implemented based on this component, including <a href="#/en-US/docs/toast">Toast</a>、<a href="#/en-US/docs/picker">Picker</a>、<a href="#/en-US/docs/cascade-picker">CascadePicker</a>、<a href="#/en-US/docs/date-picker">DatePicker</a>、<a href="#/en-US/docs/time-picker">TimePicker</a>、<a href="#/en-US/docs/segment-picker">SegmentPicker</a>、<a href="#/en-US/docs/dialog">Dialog</a>、<a href="#/en-US/docs/action-sheet">ActionSheet</a>.</p><p><strong>Notice:</strong> All the components above used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; ref=&quot;myPopup&quot;&gt;
  My Popup Content 1
&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup&#39;)&quot;&gt;
  Show Popup
&lt;/cube-button&gt;
</code></pre><p>Specifying <code>type</code> will help control class according to the type. In the example above, <code>cube-my-popup</code> will be added to the classList of the root element.</p><pre><code class="language-js">export default {
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
</code></pre><p>The component is hidden by default and won’t show up unless invoking the <code>show()</code> method of the instance of the component. And of course, invoking the <code>hide()</code> method of the instance of the component will hide itself. That’s what <code>showPopup()</code> does in the example above (first show and hide in one second).</p></li><li><p>Without background layer</p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; :mask=&quot;false&quot; ref=&quot;myPopup2&quot;&gt;
  My Popup Content 2
&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup2&#39;)&quot;&gt;
  Show Popup - no mask
&lt;/cube-button&gt;
</code></pre><p>Setting <code>mask</code> to <code>false</code> and the background layer is hidden.</p></li><li><p>Show the HTML content</p><pre><code class="language-html">&lt;cube-popup
  type=&quot;my-popup&quot;
  :mask=&quot;false&quot;
  content=&quot;&lt;i&gt;My Popup Content 3&lt;/i&gt;&quot;
  ref=&quot;myPopup3&quot; /&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup3&#39;)&quot;&gt;
  Show Popup - with content
&lt;/cube-button&gt;
</code></pre><p>You only need to pass the HTML fragment on to <code>content</code>.</p></li><li><p>Control the content position &amp; mask closable<sup>1.9.6</sup></p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; :position=&quot;position&quot; :mask-closable=&quot;true&quot; ref=&quot;myPopup4&quot;&gt;My Popup Content 4&lt;/cube-popup&gt;
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
</code></pre><p>You can use <code>position</code> to control the content’s position and use <code>mask-closable</code> to control mask closable.</p></li><li><p>Setting to bottom</p><pre><code class="language-html">&lt;cube-popup type=&quot;my-popup&quot; :center=&quot;false&quot; ref=&quot;myPopup4&quot;&gt;My Popup Content 4&lt;/cube-popup&gt;
&lt;cube-button @click=&quot;showPopup(&#39;myPopup4&#39;)&quot;&gt;
  Show Popup - bottom
&lt;/cube-button&gt;
</code></pre><p>Considering that in mobile secnes, popup is in center or bottom most of the time (covered in horizontal direction when setted to bottom). So if setting <code>center</code> to <code>false</code>, you’ll set the component to bottom.</p></li><li><p>Upper layer encapsulation</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre><p>An upper layer encapsulated CubeExtendPopup component with some styles is implemented. It supports passing the content on, has default slot and can be hidden if clicking the content. You can use it in this way (need to be registers globally or partially):</p><pre><code class="language-html">&lt;cube-extend-popup content=&quot;click here hide&quot; ref=&quot;extendPopup&quot;&gt;&lt;/cube-extend-popup&gt;
&lt;cube-button @click=&quot;$refs.extendPopup.show()&quot;&gt;
  Show Extend Popup
&lt;/cube-button&gt;
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>type</td><td>the type of popup</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>mask</td><td>whether to show background layer</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>content</td><td>content, HTML string, valid when there’s no slot</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>center</td><td>whether to be in center in horizontal and vertical direction</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>position<sup>1.9.6</sup></td><td>content position, if set position then <code>center</code> will be ignored</td><td>String</td><td>top/right/bottom/left/center</td><td>‘’</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>100</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>mask-click</td><td>triggers when the background layer is clicked</td><td>click event target</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,12),c=[d],r={__name:"popup",setup(u,{expose:t}){return t({frontmatter:{}}),(i,l)=>(o(),e("div",p,c))}};export{r as default};
