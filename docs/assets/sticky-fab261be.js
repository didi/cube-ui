import{a as e,o as l,j as o}from"./index-e8a96955.js";const n={class:"markdown-body"},c=o(`<h2>Sticky 组件</h2><blockquote><p>1.10.0 新增</p></blockquote><p>吸附组件，当滚动位置到达目标元素位置后，目标元素就会自动吸附。</p><h3>示例</h3><ul><li><p>综合使用 - Scroll</p><pre><code class="language-html">&lt;cube-sticky :pos=&quot;scrollY&quot;&gt;
  &lt;cube-scroll
    :scroll-events=&quot;scrollEvents&quot;
    @scroll=&quot;scrollHandler&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;title&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele ele-key=&quot;11&quot;&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;111&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele ele-key=&quot;22&quot;&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;222&lt;/li&gt;
        &lt;li&gt;222&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items2&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele ele-key=&quot;33&quot;&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;333&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items3&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll&gt;
  &lt;template slot=&quot;fixed&quot; slot-scope=&quot;props&quot;&gt;
    &lt;ul class=&quot;sticky-header&quot;&gt;
      &lt;li&gt;{{props.current}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/template&gt;
&lt;/cube-sticky&gt;
</code></pre><pre><code class="language-js">const _data = [
  &#39;😀 😁 😂 🤣 😃 😄 &#39;,
  &#39;🙂 🤗 🤩 🤔 🤨 😐 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;😔 😕 🙃 🤑 😲 ☹️ &#39;,
  &#39;🐣 🐣 🐣 🐣 🐣 🐣 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🐥 🐥 🐥 🐥 🐥 🐥 &#39;,
  &#39;🤓 🤓 🤓 🤓 🤓 🤓 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🦔 🦔 🦔 🦔 🦔 🦔 &#39;,
  &#39;🙈 🙈 🙈 🙈 🙈 🙈 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🚖 🚖 🚖 🚖 🚖 🚖 &#39;,
  &#39;✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 &#39;
]
export default {
  data() {
    return {
      scrollEvents: [&#39;scroll&#39;],
      scrollY: 0,
      items: _data.concat(),
      items2: _data.concat(),
      items3: _data.concat()
    }
  },
  methods: {
    scrollHandler({ y }) {
      this.scrollY = -y
    }
  }
}
</code></pre><p><code>cube-sticky</code> 需要和 <code>cube-sticky-ele</code> 组件配合使用。</p><p><code>cube-sticky</code> 组件依赖 <code>pos</code> Prop 来指定当前实时位置，由于 Scroll 组件中派发的 <code>y</code> 为负值，所以我们需要将其转换为滚动位置，直接取 <code>-y</code> 即可。</p><p><code>cube-sticky-ele</code> 组件的 <code>ele-key</code> Prop 是可选的，用于指定当前吸附元素的 key 值，默认为当前组件的索引值，即在 <code>cube-sticky</code> 组件中的第几个 <code>cube-sticky-ele</code>。</p><p>我们还可以利用 <code>cube-sticky</code> 组件的 <code>fixed</code> 插槽实现自定义吸附效果，如果没有插槽的话，内部默认会将吸附的 <code>cube-sticky-ele</code> 的内容显示出来。</p></li><li><p>综合使用 - Native Scroll</p><p>利用原生滚动实现效果。</p><pre><code class="language-html">&lt;cube-sticky :pos=&quot;scrollY&quot; :check-top=&quot;checkTop&quot;&gt;
  &lt;div class=&quot;scroll-ele&quot; @scroll=&quot;scrollHandler&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;title&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;111&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;222&lt;/li&gt;
        &lt;li&gt;222&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items2&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;cube-sticky-ele&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;333&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items3&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/cube-sticky&gt;
</code></pre><pre><code class="language-js">const _data = [
  &#39;😀 😁 😂 🤣 😃 😄 &#39;,
  &#39;🙂 🤗 🤩 🤔 🤨 😐 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;😔 😕 🙃 🤑 😲 ☹️ &#39;,
  &#39;🐣 🐣 🐣 🐣 🐣 🐣 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🐥 🐥 🐥 🐥 🐥 🐥 &#39;,
  &#39;🤓 🤓 🤓 🤓 🤓 🤓 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🦔 🦔 🦔 🦔 🦔 🦔 &#39;,
  &#39;🙈 🙈 🙈 🙈 🙈 🙈 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🚖 🚖 🚖 🚖 🚖 🚖 &#39;,
  &#39;✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 &#39;
]

export default {
  data() {
    return {
      scrollY: 0,
      checkTop: false,
      items: _data.concat(),
      items2: _data.concat(),
      items3: _data.concat()
    }
  },
  methods: {
    scrollHandler(e) {
      this.scrollY = e.currentTarget.scrollTop
    }
  }
}
</code></pre><pre><code class="language-stylus">.scroll-ele
  height: 100%
  overflow: auto
  -webkit-overflow-scrolling: touch
  background-color: #fff
</code></pre><p>这个示例展示的就是利用原生滚动实现吸附效果的。</p><p><code>check-top</code> Prop 则是用来控制检查条件的，默认为 <code>true</code>，意味着当 <code>cube-sticky-ele</code> 元素的顶部达到 <code>cube-sticky</code> 的顶部的时候就会被吸附；这个例子中我们设置为了 <code>false</code>，意味着当 <code>cube-sticky-ele</code> 的底部达到 <code>cube-sticky</code> 的顶部的时候会被吸附。</p></li><li><p>模拟微信效果 - WeChat</p><pre><code class="language-html">&lt;cube-sticky
  :pos=&quot;scrollY&quot;
  :check-top=&quot;checkTop&quot;
  fixed-show-ani=&quot;sticky-fixed-show&quot;
  @diff-change=&quot;diffChange&quot;&gt;
  &lt;cube-scroll
    :scroll-events=&quot;scrollEvents&quot;
    @scroll=&quot;scrollHandler&quot;&gt;
    &lt;img src=&quot;https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/6.jpg&quot;&gt;
    &lt;cube-sticky-ele&gt;
      &lt;ul class=&quot;sticky-header&quot;&gt;
        &lt;li&gt;111&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-sticky-ele&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items&quot; class=&quot;border-top-1px&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items2&quot; class=&quot;border-top-1px&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;item in items3&quot; class=&quot;border-top-1px&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll&gt;
  &lt;ul class=&quot;sticky-header&quot; slot=&quot;fixed&quot; ref=&quot;stickyHeader&quot;&gt;
    &lt;li&gt;header&lt;/li&gt;
  &lt;/ul&gt;
&lt;/cube-sticky&gt;
</code></pre><pre><code class="language-js">const _data = [
  &#39;😀 😁 😂 🤣 😃 😄 &#39;,
  &#39;🙂 🤗 🤩 🤔 🤨 😐 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;😔 😕 🙃 🤑 😲 ☹️ &#39;,
  &#39;🐣 🐣 🐣 🐣 🐣 🐣 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🐥 🐥 🐥 🐥 🐥 🐥 &#39;,
  &#39;🤓 🤓 🤓 🤓 🤓 🤓 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🦔 🦔 🦔 🦔 🦔 🦔 &#39;,
  &#39;🙈 🙈 🙈 🙈 🙈 🙈 &#39;,
  &#39;👆🏻 scroll up/down 👇🏻 &#39;,
  &#39;🚖 🚖 🚖 🚖 🚖 🚖 &#39;,
  &#39;✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 &#39;
]

export default {
  data() {
    return {
      scrollEvents: [&#39;scroll&#39;],
      scrollY: 0,
      checkTop: true,
      items: _data.concat(),
      items2: _data.concat(),
      items3: _data.concat()
    }
  },
  methods: {
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    diffChange() {
      let opacity = 0
      if (height) {
        opacity = diff / height
      }
      this.$refs.stickyHeader.style.opacity = opacity
    }
  }
}
</code></pre><pre><code class="language-stylus">.sticky-fixed-show-enter, .sticky-fixed-show-leave-active
  transform: translate(0, -100%)
.sticky-fixed-show-enter-active, .sticky-fixed-show-leave-active
  transition: all .5s ease-in-out
</code></pre><p>可以通过 <code>fixed-show-ani</code> 指定当元素吸附时出现的 <code>transition</code> 名字，我们这里指定 <code>sticky-fixed-show</code>，所以相对应的我们在样式中加了对应的动画控制效果。</p><p>同时可以通过 <code>diff-change</code> 事件得到当前 sticky 元素滚动的差值，一般我们可以和当前 sticky 元素的高做除法得到相对百分比，可以精细控制出现的具体细节。</p></li></ul><h3>Props</h3><h4>CubeSticky</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pos</td><td>必须，滚动位置</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>checkTop</td><td>是否检测顶部位置，如果为 false，则检查 sticky-ele 元素的底部边界</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>fixedShowAni</td><td>元素吸附时指定 transition 的 name 值</td><td>String</td><td>-</td><td>如果 checkTop 为 true，则为 ‘’，如果为 false，则为 ‘cube-sticky-fixed-fade’</td></tr><tr><td>offset</td><td>偏移值，传入的 pos 的值会加上这个值修正</td><td>Number</td><td>-</td><td>0</td></tr></tbody></table><h4>CubeStickyEle</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>eleKey</td><td>吸顶元素的 key 值</td><td>Number/String</td><td>-</td><td>-</td></tr></tbody></table><p>当 <code>eleKey</code> 不存在时，CubeSticky 组件会获取当前 CubeStickyEle 组件的次序索引作为吸附元素的标示。</p><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>默认内容</td><td>-</td></tr><tr><td>fixed</td><td>元素吸附时内容如何展示</td><td>current: 当前吸附元素的 key 值<br>index: 吸附元素索引值（非响应式的）</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>change</td><td>吸附的元素发生改变时触发</td><td>current - 吸附的元素的 key 值，如果没有的话，则为 ‘’</td><td>index - 吸附元素的索引值，没有的话，则为 -1（非响应式的）</td></tr><tr><td>diff-change</td><td>sticky 元素滚动的差值改变时触发</td><td>diff - 差值，最小 0</td><td>height: 当前 sticky 元素的高度</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>refresh</td><td>刷新，当内容发生变化时可用于重新计算高度和位置</td></tr></tbody></table>`,17),d=[c],g={__name:"sticky",setup(s,{expose:t}){return t({frontmatter:{}}),(u,r)=>(l(),e("div",n,d))}};export{g as default};
