import{a as e,o,j as n}from"./index-e8a96955.js";const d={class:"markdown-body"},i=n(`<h2>Tip</h2><p><code>Tip</code>, used to popup tip bubble box.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>By adding <code>ref</code> to <code>Tip</code>, you can get the reference to the component and invoke <code>show</code> or <code>hide</code> methods which are exposed by <code>Tip</code> to control the show or hide state of the component.</p><pre><code class="language-html">&lt;div class=&quot;tip&quot; @click=&quot;showTip&quot;&gt;
  &lt;cube-tip ref=&quot;tip&quot;&gt;&lt;/cube-tip&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-javascript">export default {
  methods: {
    showTip () {
      this.$refs.tip.show()
    }
  }
}
</code></pre></li><li><p>The position of the small triangle and the bubble box</p><p>You can configure the direction of the small triangle by <code>direction</code> and configure the position of the bubble box by <code>style</code>. Normally, the direction of the small triangle is opposite to the position of the bubble box.</p><pre><code class="language-html">&lt;p class=&quot;tip-eg&quot;&gt;
  &lt;span&gt;CubeUI&lt;/span&gt;
  &lt;cube-tip
      ref=&quot;tip&quot;
      :direction=&quot;direction&quot;
      :style=&quot;tipStyle&quot;
      @close=&quot;close&quot;
      @click=&quot;clickHandler&quot;&gt;
    &lt;div&gt;Awesome!&lt;/div&gt;
  &lt;/cube-tip&gt;
  &lt;/p&gt;
&lt;/div&gt;
&lt;cube-button @click=&quot;showTip(&#39;bottom&#39;)&quot;&gt;top&lt;/cube-button&gt;
&lt;cube-button @click=&quot;showTip(&#39;top&#39;)&quot;&gt;bottom&lt;/cube-button&gt;
&lt;cube-button @click=&quot;showTip(&#39;right&#39;)&quot;&gt;left&lt;/cube-button&gt;
&lt;cube-button @click=&quot;showTip(&#39;left&#39;)&quot;&gt;right&lt;/cube-button&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      direction: &#39;&#39;,
      tipStyle: &#39;&#39;
    }
  },
  methods: {
    showTip(direction) {
      this.direction = direction
      this.$refs.tip.show()

      switch (direction) {
        case &#39;top&#39;:
          this.tipStyle = &#39;left: 100px; top: 100px;&#39;
          break
        case &#39;bottom&#39;:
          this.tipStyle = &#39;left: 100px; top: 20px;&#39;
          break
        case &#39;left&#39;:
          this.tipStyle = &#39;left: 200px; top: 60px;&#39;
          break
        case &#39;right&#39;:
          this.tipStyle = &#39;left: 5px; top: 60px;&#39;
          break
      }
    },
    close() {
      console.log(&#39;click close button&#39;)
    },
    clickHandler() {
      console.log(&#39;click tip area&#39;)
    }
  }
}
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>direction</td><td>the direction of the small triangle</td><td>String</td><td>top/bottom/left/right</td><td>left</td></tr><tr><td>offsetLeft</td><td>the distance between the small triangle and the left part of x axis</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>offsetTop</td><td>the distance between the small triangle and the origin of y axis</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>offsetRight</td><td>the distance between the small triangle and the right part of x axis</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>offsetBottom</td><td>the distance between the small triangle and the bottom part of y axis</td><td>Number</td><td>-</td><td>0</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td>-</td><td>the content shown inside the tip component</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>close</td><td>the event that exposed when clicking the close button of tips, which will hide at the same time</td><td>None</td></tr><tr><td>clicked</td><td>the event that exposed when clicking the content of tips, which will hide at the same time</td><td>None</td></tr></tbody></table>`,10),c=[i],p={__name:"tip",setup(l,{expose:t}){return t({frontmatter:{}}),(a,s)=>(o(),e("div",d,c))}};export{p as default};
