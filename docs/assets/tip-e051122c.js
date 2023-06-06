import{a as o,o as e,j as d}from"./index-e8a96955.js";const n={class:"markdown-body"},c=d(`<h2>Tip</h2><p>提示，用于弹出提示气泡框。</p><h3>示例</h3><ul><li><p>基础使用</p><p>通过在 <code>Tip</code> 组件上添加 <code>ref</code> 属性，获得对于组件的引用，然后调用 <code>Tip</code> 组件向外暴露出来的 <code>show</code>、<code>hide</code> 方法来控制组件的显示或隐藏。</p><pre><code class="language-html">&lt;cube-button
  :inline=&quot;true&quot;
  :outline=&quot;true&quot;
  :primary=&quot;true&quot;
  @click=&quot;$refs.tip.show()&quot;&gt;Show tip&lt;/cube-button&gt;
&lt;cube-tip ref=&quot;tip&quot; direction=&quot;bottom&quot; style=&quot;left:123px;top:-50px;&quot;&gt;Tip&lt;/cube-tip&gt;
</code></pre></li><li><p>小三角和气泡框的位置</p><p>通过 <code>direction</code> 属性配置小三角的方向，一般情况下需要通过 <code>style</code> 改变气泡框的位置；一般来说，小三角的方向是与气泡框的位置相反的。</p><pre><code class="language-html">&lt;p class=&quot;tip-eg&quot;&gt;
  &lt;span&gt;cube-ui&lt;/span&gt;
  &lt;cube-tip
      ref=&quot;tip2&quot;
      :direction=&quot;direction&quot;
      :style=&quot;tipStyle&quot;
      @close=&quot;close&quot;
      @click=&quot;clickHandler&quot;&gt;
    &lt;div&gt;Awesome!&lt;/div&gt;
  &lt;/cube-tip&gt;
&lt;/p&gt;
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
      this.$refs.tip2.show()

      switch (direction) {
        case &#39;top&#39;:
          this.tipStyle = &#39;left: 100px; top: 30px;&#39;
          break
        case &#39;bottom&#39;:
          this.tipStyle = &#39;left: 100px; top: -50px;&#39;
          break
        case &#39;left&#39;:
          this.tipStyle = &#39;left: 200px; top: -10px;&#39;
          break
        case &#39;right&#39;:
          this.tipStyle = &#39;left: 2px; top: -10px;&#39;
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
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>小三角的方向</td><td>String</td><td>top/bottom/left/right</td><td>left</td></tr><tr><td>offsetLeft</td><td>小三角至 Tip 框左边距离</td><td>Number/String</td><td>-</td><td>0</td></tr><tr><td>offsetTop</td><td>小三角至 Tip 框顶部距离</td><td>Number/String</td><td>-</td><td>0</td></tr><tr><td>offsetRight</td><td>小三角至 Tip 框右边距离</td><td>Number/String</td><td>-</td><td>0</td></tr><tr><td>offsetBottom</td><td>小三角至 Tip 框底部距离</td><td>Number/String</td><td>-</td><td>0</td></tr></tbody></table><p>其中 <code>offsetLeft</code>、<code>offsetTop</code>、<code>offsetRight</code>、<code>offsetBottom</code> 的值如果是数字，那么单位就是像素，如果说是字符串，则认为是设置的百分比。</p><h3>事件</h3><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>close</td><td>点击 Tip 的关闭按钮</td><td>-</td></tr><tr><td>click</td><td>点击 Tip 的提示内容部分</td><td>-</td></tr></tbody></table>`,9),i=[c],h={__name:"tip",setup(l,{expose:t}){return t({frontmatter:{}}),(r,u)=>(e(),o("div",n,i))}};export{h as default};
