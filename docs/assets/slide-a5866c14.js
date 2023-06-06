import{a as e,o as d,j as o}from"./index-e8a96955.js";const i={class:"markdown-body"},l=o(`<h2>Slide</h2><p><code>Slide</code> component, which is also encapsulated based on <code>better-scroll</code>, provides common functions like <code>slider</code> and <code>swipe</code>.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Considering of the usual scenes of <code>cube-slide</code>, each carousel page is a link, so the easiest way to use it is to pass an Array which consists of image and link by the <code>data</code> props. We will render it as a carousel of a set of hyperlinked images by default.</p><pre><code class="language-html">&lt;cube-slide :data=&quot;items&quot;/&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      items: [
        {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png&#39;
        }, {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png&#39;
        }, {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png&#39;
        }
      ]
    }
  }
}
</code></pre></li><li><p>Custom Content</p><p>Of course, we also support custom content, using the default slot and <code>cube-slide-item</code> component to customize the structure of each carousel page. Among them, the <code>cube-slide</code> element is the entire carousel component, and the <code>cube-slide-item</code> element is the page of each carousel, whose slot is the content of the page.</p><pre><code class="language-html">&lt;cube-slide ref=&quot;slide&quot; :data=&quot;items&quot; @change=&quot;changePage&quot;&gt;
  &lt;cube-slide-item v-for=&quot;(item, index) in items&quot; :key=&quot;index&quot; @click.native=&quot;clickHandler(item, index)&quot;&gt;
    &lt;a :href=&quot;item.url&quot;&gt;
      &lt;img :src=&quot;item.image&quot;&gt;
    &lt;/a&gt;
  &lt;/cube-slide-item&gt;
&lt;/cube-slide&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      items: [
        {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png&#39;
        },
        {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png&#39;
        },
        {
          url: &#39;http://www.didichuxing.com/&#39;,
          image: &#39;//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png&#39;
        }
      ]
    }
  },
  methods: {
    changePage(current) {
      console.log(&#39;当前轮播图序号为:&#39; + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</code></pre><p>Although you will use the <code>data</code> to generate the default content after using the custom content, it is still recommended that you pass the data by the <code>data</code> props, so our component can automatically perform data monitoring and re-rendering inside. Otherwise, you may need to call the <code>refresh</code> method to re-render by yourself, such as <code>this.$refs.slide.refresh()</code>.</p></li><li><p>Initial Index</p><p>Initial Index value, default 0.</p><pre><code class="language-html">&lt;cube-slide :initial-index=&quot;1&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Loop play</p><p>Loop play is turned on by default. You can configure that with <code>loop</code> attribute.</p><pre><code class="language-html">&lt;cube-slide :loop=&quot;false&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Automatic play</p><p>Automatic play is turned on by default. You can configure that with <code>auto-play</code> attribute.</p><pre><code class="language-html">&lt;cube-slide :auto-play=&quot;false&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Interval of automatic play</p><p>When automatic play is turned on, you can configure the interval with <code>interval</code> attribute.</p><pre><code class="language-html">&lt;cube-slide :interval=&quot;4000&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Sliding threshold of switching pages</p><p>You can configure the sliding threshold of switching pages with <code>threshold</code> attribute. It means that when the sliding distance exceeds the page’s width * <code>threshold</code>, the page is switched. Default is 0.3.</p><pre><code class="language-html">&lt;cube-slide :threshold=&quot;0.4&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Speed of switching pages</p><p>Animation of switching costs 400 ms by default. You can cnfigure that with <code>speed</code> attribute.</p><pre><code class="language-html">&lt;cube-slide :speed=&quot;200&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Allow vertical scroll behavior</p><p>It can not be scrolling in the vertical direction by default. You can configure that with <code>allow-vertical</code> attribute.</p><pre><code class="language-html">&lt;cube-slide :allow-vertical=&quot;true&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>Modify dots style</p><p>Default dot, you can change it by using dots slot.</p><pre><code class="language-html">&lt;cube-slide&gt;
  &lt;template slot=&quot;dots&quot; slot-scope=&quot;props&quot;&gt;
    &lt;span
      class=&quot;my-dot&quot;
      :class=&quot;{active: props.current === index}&quot;
      v-for=&quot;(item, index) in props.dots&quot;&gt;
      {{index + 1}}
    &lt;/span&gt;
  &lt;/template&gt;
&lt;/cube-slide&gt;
</code></pre><p>The scoped slots provide two parameters: current active index <code>current</code> and slide items length <code>dots</code>.</p></li><li><p>Dispatch scroll position in real time<sup>1.10.0</sup></p><pre><code class="language-html">&lt;cube-slide :options=&quot;options&quot; @scroll=&quot;scroll&quot;&gt;&lt;/cube-slide&gt;
</code></pre><pre><code class="language-javascript">  export default {
    data() {
      return {
        options: {
          listenScroll: true,
          probeType: 3
        }
      }
    },
    methods: {
      scroll ({x, y}) {
        console.log(x, y)
      }
    }
  }
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>initialIndex</td><td>initial index</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>loop</td><td>whether to loop play</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>showDots</td><td>whether to show the indicator dots</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>autoPlay</td><td>whether to play automatically</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>interval</td><td>interval of play</td><td>Number</td><td>-</td><td>4000</td></tr><tr><td>direction</td><td>slide direction</td><td>String</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>options<sup>1.9.0</sup></td><td>the options of better-scroll, you could find details at <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS Document</a></td><td>Object</td><td>-</td><td>{<br> momentum: false,<br> click: true,<br> observeDOM: false<br>}</td></tr><tr><td>threshold</td><td>sliding threshold of switching pages</td><td>Number</td><td>(0, 1)</td><td>0.3</td></tr><tr><td>speed</td><td>speed of switching pages</td><td>Number</td><td>-</td><td>400</td></tr><tr><td>allowVertical</td><td>whether to allow vertical scrolling. <code>Deprecated</code>, please use the property <code>options</code> instead.</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>stopPropagation</td><td>whether to stop propagation, which could use to solve the problem of event propagation when nest same direction slide. <code>Deprecated</code>, please use the property <code>options</code> instead.</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>refreshResetCurrent<sup>1.10.10</sup></td><td>whether to reset index when refresh</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>Default content contains cube-slide-item components</td><td>-</td></tr><tr><td>dots</td><td>Dots content</td><td>dots: Slide items length <br> current: current active index</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggered when current slide changes</td><td>index of current slide</td></tr><tr><td>scroll<sup>1.10.0</sup></td><td>triggered when slide is scrolling</td><td>Object {x, y} - scroll position</td></tr><tr><td>scroll-end<sup>1.9.0</sup></td><td>triggered when scroll end.</td><td>index of current slide</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>refresh</td><td>You can call this method when slide items added or removed</td></tr></tbody></table>`,12),a=[l],p={__name:"slide",setup(s,{expose:t}){return t({frontmatter:{}}),(c,r)=>(d(),e("div",i,a))}};export{p as default};
