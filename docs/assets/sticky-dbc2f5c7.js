import{a as e,o as l,j as o}from"./index-9017f177.js";const n={class:"markdown-body"},c=o(`<h2>Sticky</h2><blockquote><p>New in 1.10.0+</p></blockquote><p>Sticky component, the element will be sticky when the scroll position matched the target elements position.</p><h3>Example</h3><ul><li><p>Default usage - Scroll</p><pre><code class="language-html">&lt;cube-sticky :pos=&quot;scrollY&quot;&gt;
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
</code></pre><p><code>cube-sticky</code> need to use with <code>cube-sticky-ele</code> component.</p><p>The <code>pos</code> Prop of <code>cube-sticky</code> component is the scroll runtime position value.</p><p>The <code>ele-key</code> Prop of <code>cube-sticky-ele</code> component is optional, it is used to define the key value of sticky ele. The default <code>ele-key</code> value is the current sticky ele’s index value.</p><p>You can alse use <code>cube-sticky</code>’s <code>fixed</code> slot to define your own sticky HTML. If you do not use <code>fixed</code> slot then the default sticky content will be the active <code>cube-sticky-ele</code>’s content.</p></li><li><p>Default usage - Native Scroll</p><pre><code class="language-html">&lt;cube-sticky :pos=&quot;scrollY&quot; :check-top=&quot;checkTop&quot;&gt;
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
</code></pre><p><code>check-top</code> Prop is used to control the checking of boundary conditions, it’s default value is <code>true</code>, this means <code>cube-sticky-ele</code> element will be sticky when the top of the <code>cube-sticky-ele</code> reaches the top of <code>cube-sticky</code>. This case the <code>check-top</code> is <code>false</code> which means <code>cube-sticky-ele</code> element will be sticky when the bottom of the <code>cube-sticky-ele</code> reaches the top of <code>cube-sticky</code>.</p></li><li><p>Like WeChat</p><pre><code class="language-html">&lt;cube-sticky
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
</code></pre><p><code>fixed-show-ani</code> is used to set the <code>transition</code> name of the sticky element when it’s fixed.</p><p>You can get current sticky ele’s fixed diff value on <code>diff-change</code> event.</p></li></ul><h3>Props</h3><h4>CubeSticky</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>pos</td><td>required, scroll position</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>checkTop</td><td>whether to treat the top of sticky element as boundary, if this value is false means <code>cube-sticky-ele</code> will be sticky when the bottom of the <code>cube-sticky-ele</code> reaches the top of <code>cube-sticky</code></td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>fixedShowAni</td><td>the <code>transition</code> name of the sticky element</td><td>String</td><td>-</td><td>if checkTop is true this value will be ‘’, otherwise this value will be ‘cube-sticky-fixed-fade’</td></tr><tr><td>offset</td><td>offset value, <code>pos+offset</code> will be the real pos value</td><td>Number</td><td>-</td><td>0</td></tr></tbody></table><h4>CubeStickyEle</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>eleKey</td><td>the key of sticky element</td><td>Number/String</td><td>-</td><td>-</td></tr></tbody></table><p>If <code>eleKey</code> is undefined, CubeSticky will get the index of CubeStickyEle as the element’s key.</p><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>default content</td><td>-</td></tr><tr><td>fixed</td><td>custom sticky content when the sticky element is fixed</td><td>current: key of the fixed sticky element<br>index: index of the sticky element(index is not reactive)</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>change</td><td>triggers when fixed sticky element changed</td><td>current - key of the fixed sticky element, if there is no fixed sticky element this value will be ‘’</td><td>index - index of sticky element, if there is no fixed sticky element this value will be -1 (index is not reactive)</td></tr><tr><td>diff-change</td><td>triggers when sticky element scrolling diff value changed</td><td>diff - diff value</td><td>height: height of current sticky element</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>refresh</td><td>You can call this method when content updated</td></tr></tbody></table>`,17),i=[c],h={__name:"sticky",setup(s,{expose:t}){return t({frontmatter:{}}),(u,a)=>(l(),e("div",n,i))}};export{h as default};
