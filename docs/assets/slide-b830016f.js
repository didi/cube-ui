import{a as e,o as d,j as o}from"./index-e8a96955.js";const l={class:"markdown-body"},c=o(`<h2>Slide</h2><p>轮播图，提供了常见的<code>轮播</code>及 <code>swipe</code> 的功能，也是一个基于 <code>better-scroll</code> 进行封装的组件。</p><h3>示例</h3><ul><li><p>基本使用</p><p>考虑到 <code>cube-slide</code> 最常用的场景，每个轮播页是一个可跳转链接的图片，所以我们提供的最简便的用法是，通过 <code>data</code> 属性传入一个包含图片和跳转链接信息的数组，我们会默认将其渲染成一组超链接图片的轮播图。</p><pre><code class="language-html">&lt;cube-slide :data=&quot;items&quot;/&gt;
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
  }
}
</code></pre></li><li><p>自定义内容</p><p>当然我们也支持自定义内容，使用默认插槽和 <code>cube-slide-item</code> 就可以自定义每个轮播页的结构。其中，<code>cube-slide</code> 元素即整个轮播图组件，<code>cube-slide-item</code> 元素则是每一个轮播的页面，其 slot 为该页的内容。</p><pre><code class="language-html">&lt;cube-slide ref=&quot;slide&quot; :data=&quot;items&quot; @change=&quot;changePage&quot;&gt;
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
</code></pre><p>虽然你使用了自定义内容以后，我们不会用 <code>data</code> 生成默认内容，但依然建议你将数据传入 <code>data</code> 属性，因为只有这样，我们组件内部才能帮你自动进行数据监听和重新渲染，否则你可能会需要自己调用 refresh 方法重新渲染，比如这样 <code>this.$refs.slide.refresh()</code>。</p></li><li><p>初始索引</p><p>初始化时展示的位置索引值，默认为 0。</p><pre><code class="language-html">&lt;cube-slide :initial-index=&quot;1&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>循环播放</p><p>默认开启循环播放，可通过 loop 属性配置。</p><pre><code class="language-html">&lt;cube-slide :loop=&quot;false&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>自动播放</p><p>默认开启自动播放，可通过 auto-play 属性配置。</p><pre><code class="language-html">&lt;cube-slide :auto-play=&quot;false&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>自动播放的时间间隔</p><p>当开启了自动播放时，还可通过 interval 属性配置时间间隔。</p><pre><code class="language-html">&lt;cube-slide :interval=&quot;4000&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>切换页面的滑动阈值</p><p>可通过 <code>threshold</code> 属性配置切换页面的滑动阈值，既当滑动的距离超过了页面宽度 × <code>threshold</code>时，切换页面。默认值为0.3。</p><pre><code class="language-html">&lt;cube-slide :threshold=&quot;0.4&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>切换页面的速度</p><p>默认切换动画耗时为400ms，可通过 <code>speed</code> 属性配置。</p><pre><code class="language-html">&lt;cube-slide :speed=&quot;200&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>允许纵向滚动</p><p>默认在 Slide 区域的时候，竖向是不能滚动的，如果想要竖向可以滚动，可以设置 <code>allowVertical</code> 为 <code>true</code>。</p><pre><code class="language-html">&lt;cube-slide :allow-vertical=&quot;true&quot;&gt;&lt;/cube-slide&gt;
</code></pre></li><li><p>修改 dots 内容</p><p>默认是点，可通过插槽修改。</p><pre><code class="language-html">&lt;cube-slide&gt;
  &lt;template slot=&quot;dots&quot; slot-scope=&quot;props&quot;&gt;
    &lt;span class=&quot;my-dot&quot; :class=&quot;{active: props.current === index}&quot; v-for=&quot;(item, index) in props.dots&quot;&gt;{{index + 1}}&lt;/span&gt;
  &lt;/template&gt;
&lt;/cube-slide&gt;
</code></pre><p>作用域插槽提供了所需的当前索引值 <code>current</code> 以及长度 <code>dots</code>。</p></li><li><p>实时派发滚动的距离<sup>1.10.0</sup></p><pre><code class="language-html">&lt;cube-slide :options=&quot;options&quot; @scroll=&quot;scroll&quot;&gt;&lt;/cube-slide&gt;
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
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>用于 side-item 列表渲染的数据，当需要使用内置的默认内容，或者让组件自动监听数据变化重新渲染时，此参数必传</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>initialIndex</td><td>初始索引值</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>loop</td><td>是否循环播放</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>showDots</td><td>是否显示轮播指示点</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>autoPlay</td><td>是否自动播放</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>interval</td><td>播放间隔</td><td>Number</td><td>-</td><td>4000</td></tr><tr><td>direction</td><td>轮播方向</td><td>String</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>options<sup>1.9.0</sup></td><td>better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS 官方文档</a></td><td>Object</td><td>-</td><td>{<br> momentum: false,<br> click: true,<br> observeDOM: false<br>}</td></tr><tr><td>threshold</td><td>切换页面的滑动阈值</td><td>Number</td><td>(0, 1)</td><td>0.3</td></tr><tr><td>speed</td><td>切换页面的速度</td><td>Number</td><td>-</td><td>400</td></tr><tr><td>allowVertical</td><td>是否允许竖向滚动。<code>即将废弃</code>，推荐使用 <code>options</code> 属性</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>stopPropagation</td><td>是否阻止事件冒泡，可用于解决嵌套同方向slide时会遇到的事件冒泡问题。<code>即将废弃</code>，推荐使用 <code>options</code> 属性</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>refreshResetCurrent<sup>1.10.10</sup></td><td>当刷新时是否重置索引</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>默认内容，由 cube-slide-item 构成</td><td>-</td></tr><tr><td>dots</td><td>dots 内容</td><td>dots: 轮播项长度 <br> current: 当前索引</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>Slide 页面切换时触发</td><td>当前页面的索引值</td></tr><tr><td>scroll<sup>1.10.0</sup></td><td>滚动中实时派发</td><td>Object {x, y} -滚动位置的坐标值</td></tr><tr><td>scroll-end<sup>1.9.0</sup></td><td>在滚动结束时触发</td><td>当前页面的索引值</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>refresh</td><td>当轮播图内容删减的时候，可以调用此方法进行更新，重新渲染</td></tr></tbody></table>`,12),s=[c],u={__name:"slide",setup(i,{expose:t}){return t({frontmatter:{}}),(r,n)=>(d(),e("div",l,s))}};export{u as default};
