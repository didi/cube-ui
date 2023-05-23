import{a as o,o as e,j as l}from"./index-9017f177.js";const d={class:"markdown-body"},r=l(`<h2>Scroll</h2><p>滚动列表，提供了优质的原生滚动体验，便捷的配置项和事件，是一个基于<code>better-scroll</code>进行封装的组件。</p><h3>滚动原理</h3><p>由于 better-scroll 的滚动原理为：在滚动方向上，第一个子元素的长度超过了容器的长度。</p><p>那么对于 Scroll 组件，其实就是内容元素<code>.cube-scroll-content</code>在滚动方向上的长度必须大于容器元素 <code>.cube-scroll-wrapper</code>。根据滚动方向的不同，有以下两种情况：</p><p>1）纵向滚动：<strong>内容元素的高度必须大于容器元素</strong>。由于容器元素的高度默认会被子元素的高度撑开，所以为了满足我们的滚动前提，你需要给 Scroll 组件的 <code>.cube-scroll-wrapper</code>元素一个非弹性高度。</p><p>2）横向滚动：<strong>内容元素的宽度必须大于容器元素</strong>。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 <code>.cube-scroll-content</code> 元素设置大于 <code>.cube-scroll-wrapper</code> 的宽度。</p><blockquote><p>注意：任何时候如果出现无法滚动的情况，都应该首先查看内容元素<code>.cube-scroll-content</code>的元素高度/宽度是否大于容器元素<code>.cube-scroll-wrapper</code>的高度/宽度。这是内容能够滚动的前提条件。<strong>如果内容存在图片的情况，可能会出现 DOM 元素渲染时图片还未下载，因此内容元素的高度小于预期，出现滚动不正常的情况。此时你应该在图片加载完成后，比如 onload 事件回调中，手动调用 Scroll 组件的 <code>refresh()</code> 方法，它会重新计算滚动距离。</strong> Scroll 相关常见问题可以查看 <a href="https://github.com/cube-ui/question-answer/issues?utf8=%E2%9C%93&amp;q=is%3Aissue+is%3Aopen+scroll">Cube-UI/Question-Answer</a>.</p></blockquote><h3>示例</h3><p>7 个示例代码快速了解如何使用 Scroll 组件。</p><ul><li><p><strong>1. 基本使用 - Default</strong></p><p>通过设置 <code>data</code> 属性为一个数组，即可生成能够在容器内优雅滚动的列表。完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/default.vue">这里</a>。</p><pre><code class="language-html">&lt;div class=&quot;scroll-list-wrap&quot;&gt;
  &lt;cube-scroll
    ref=&quot;scroll&quot;
    :data=&quot;items&quot;
    :options=&quot;options&quot;&gt;
  &lt;/cube-scroll&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-stylus">.scroll-list-wrap
  height: 350px
</code></pre><blockquote><p><strong>注意</strong>：由上面的滚动原理可知，这里给滚动容器提供一个固定高度是必须的，同时只有在滚动内容的高度大于容器高度时才可滚动。</p></blockquote><p>在<code>options</code>中可以设置滚动条是否可见以及初始滚动位置<code>startY/startX</code>。</p><p>Scroll 组件提供了一个<code>scrollTo()</code>方法，可以手动控制列表滚动位置。</p><pre><code class="language-javascript">scrollTo() {
  this.$refs.scroll.scrollTo(
    0,
    this.scrollToY,
    this.scrollToTime,
    ease[this.scrollToEasing]
  )
},
</code></pre><p>实际上这是一个非常有用的方法，如当我们想要实现“点击不同锚点，列表滚动到相应位置展现不同内容”时，可以使用<code>scrollTo()</code>方法。</p></li><li><p><strong>2. 横向滚动 - Horizontal</strong></p><p>Scroll 组件支持横向滚动，只需指定<code>direction=&quot;horizontal&quot;</code>，同时需要添加相应样式如下。完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal.vue">这里</a>。</p><pre><code class="language-html">&lt;cube-scroll
  ref=&quot;scroll&quot;
  :data=&quot;items&quot;
  direction=&quot;horizontal&quot;
  class=&quot;horizontal-scroll-list-wrap&quot;&gt;
  &lt;ul class=&quot;list-wrapper&quot;&gt;
    &lt;li v-for=&quot;item in items&quot; class=&quot;list-item&quot;&gt;{{ item }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/cube-scroll&gt;
</code></pre><pre><code class="language-stylus">.horizontal-scroll-list-wrap
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  .cube-scroll-content
    display: inline-block
  .list-wrapper
    padding: 0 10px
    line-height: 60px
    white-space: nowrap
  .list-item
    display: inline-block
</code></pre><blockquote><p><strong>注意</strong>：1. 由上面的滚动原理可知，这里的 CSS 样式设置是必须的，只有在滚动内容的宽度大于容器宽度时才可滚动。2. 有时候我们希望横向滚动使用<code>Scroll</code>组件来模拟，纵向保留浏览器原生滚动，或者相反的情况。这时你需要传递 better-scroll 配置项 <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html#eventpassthrough">eventPassthrough</a>。</p></blockquote><p>这里对样式的设定做简要的解释，为<code>list-item</code>元素添加<code>display: inline-block</code>是希望元素能够不换行，单行显示。<code>list-wrapper</code>添加<code>white-space: nowrap</code>是希望遇到父元素边界，依然不换行。另外，关键是<code>cube-scroll-content</code>元素添加<code>display: inline-block</code>样式，此时<code>cube-scroll-content</code>元素的宽度为能够包裹子孙元素的最小宽度，即为连续内联<code>list-item</code>元素的宽度之和子元素的最大宽度。具有同样性质的样式还有，浮动元素和绝对定位元素，在不设置具体宽度时，其宽度为包裹子孙元素的最小宽度。</p></li><li><p><strong>3. 自定义内容和上拉刷新下拉加载 - Customized</strong></p><p><code>Scroll</code>组件支持通过插槽自定义列表内容和样式。完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/config.vue">这里</a>。</p><pre><code class="language-html">&lt;div class=&quot;scroll-list-wrap&quot;&gt;
  &lt;cube-scroll
    ref=&quot;scroll&quot;
    :data=&quot;items&quot;
    :options=&quot;options&quot;
    @pulling-down=&quot;onPullingDown&quot;
    @pulling-up=&quot;onPullingUp&quot;&gt;
    ... // 自定义内容
  &lt;/cube-scroll&gt;
&lt;/div&gt;
</code></pre><p>Scroll 组件还支持下拉刷新和上拉加载的能力。默认无下拉刷新/上拉加载，可通过<code>options</code>传递配置项<code>pullDownRefresh</code>和<code>pullUpLoad</code>开启相应功能。开启后，下拉时，Scroll 组件会展示默认下拉动画以及派发<code>pulling-down</code>事件，你可以监听<code>pulling-down</code>事件更新数据。同理，开启上拉加载后，可通过<code>pulling-up</code>事件更新数据。</p><p><code>pullDownRefresh</code>的相关配置有：下拉阈值（threshold）, 回弹位置（stop）, 更新成功文案（txt）和文案显示时间（stopTime）。<code>pullDownRefresh</code>和<code>pullUpLoad</code>对象的所有配置项和含义见 <a href="#/zh-CN/docs/scroll#cube-Props%E9%85%8D%E7%BD%AE-anchor">Props 配置</a></p><pre><code class="language-javascript">... // 省略非核心代码
computed: {
  options() {
    return {
      pullDownRefresh: this.pullDownRefreshObj,
      pullUpLoad: this.pullUpLoadObj,
      scrollbar: true
    }
  },
  ...
},
methods: {
  onPullingDown() {
    // 模拟更新数据
    setTimeout(() =&gt; {
      if (Math.random() &gt; 0.5) {
        // 如果有新数据
        this.items.unshift(_foods[1])
      } else {
        // 如果没有新数据
        this.$refs.scroll.forceUpdate()
      }
    }, 1000)
  },
  onPullingUp() {
    // 模拟更新数据
    setTimeout(() =&gt; {
      if (Math.random() &gt; 0.5) {
        // 如果有新数据
        let newPage = _foods.slice(0, 5)
        this.items = this.items.concat(newPage)
      } else {
        // 如果没有新数据
        this.$refs.scroll.forceUpdate()
      }
    }, 1000)
  },
  ...
}
</code></pre><blockquote><p><strong>注意</strong>：如果请求结果没有数据更新，则必须调用 Scroll 组件的<code>forceUpdate()</code>方法结束此次下拉刷新/上拉加载，这样 Scroll 组件才会开始监听下一次下拉刷新/上拉加载操作。在上例中数据更新时，没有调用<code>forceUpdate()</code>方法，原因为：<strong>如果你向<code>Scroll</code>组件传递了<code>data</code>属性，那么当<code>Scroll</code>组件监听到<code>data</code>有更新时会自行调用<code>forceUpate(true)</code>方法</strong>，因此推荐传递<code>data</code>属性。</p></blockquote></li><li><p><strong>4. 自定义下拉刷新动画 - 仿京东 App 首页</strong></p><p>如果你不喜欢内置的下拉刷新和上拉加载动画，还可以用<a href="https://cn.vuejs.org/v2/guide/components.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD">作用域插槽</a>做自定义动画。Scroll 组件的作用域插槽暴露出的变量非常完善，可以满足绝大多数场景下自定义下拉/上拉动画的需求。下面的例子模仿了京东 App 首页的下拉刷新动画。完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/jd.vue">这里</a>。</p><pre><code class="language-html">&lt;cube-scroll
  ref=&quot;scroll&quot;
  :scroll-events=&quot;[&#39;scroll&#39;]&quot;
  :options=&quot;scrollOptions&quot;
  @scroll=&quot;onScrollHandle&quot;
  @pulling-down=&quot;onPullingDown&quot;&gt;
  &lt;img src=&quot;http://om0jxp12h.bkt.clouddn.com/jd_content.JPG&quot;&gt;
  &lt;template slot=&quot;pulldown&quot; slot-scope=&quot;props&quot;&gt;
    &lt;div v-if=&quot;props.pullDownRefresh&quot;
      class=&quot;cube-pulldown-wrapper&quot;
      :style=&quot;pullDownStyle&quot;&gt;
      &lt;div class=&quot;pulldown-content&quot;&gt;
        &lt;img src=&quot;http://om0jxp12h.bkt.clouddn.com/pulldow-img.jpg&quot;&gt;
        &lt;span v-if=&quot;props.beforePullDown&quot;&gt;{{ pullDownTip }}&lt;/span&gt;
        &lt;template v-else&gt;
          &lt;span v-if=&quot;props.isPullingDown&quot;&gt;正在更新...&lt;/span&gt;
          &lt;span v-else&gt;更新成功&lt;/span&gt;
        &lt;/template&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/cube-scroll&gt;
</code></pre><pre><code class="language-javascript">data() {
  return {
    options: {
      pullDownRefresh: {
        threshold: 60,
        stop: 40,
        txt: &#39;更新成功&#39;
      }
    },
    ...
  }
},
computed: {
  pullDownTip() {
    if (this.pullDownY &lt;= 60) {
      return &#39;下拉刷新...&#39;
    } else if (this.pullDownY &lt;= 90) {
      return &#39;继续下拉有惊喜...&#39;
    } else {
      return &#39;松手得惊喜！&#39;
    }
  },
  headerStyle() {
    return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
  }
},
methods: {
  onScrollHandle(pos) {
    this.pullDownY = pos.y
    if (pos.y &gt; 0) {
      this.pullDownStyle = \`top:\${pos.y}px\`
      this.triggerSurpriseFlag = false
      if (this.pullDownY &gt; 90) {
        this.triggerSurpriseFlag = true
      }
    }
    this.$refs.topHeader.style.opacity = this.headerStyle
  },
  onPullingDown() {
    if (this.triggerSurpriseFlag) {
      this.triggerSurprise = true
      this.$refs.scroll.forceUpdate()
      return
    }
    setTimeout(() =&gt; {
      this.$refs.scroll.forceUpdate()
    }, 1000)
  },
  ...
}
</code></pre><p>通过作用域插槽提供的作用域参数，如：<code>beforePulldown</code>和<code>isPullingDown</code>，你可以根据状态的变化来控制动画流程，其他作用域参数及其含义详见下面的<a href="#/zh-CN/docs/scroll#cube-%E6%8F%92%E6%A7%BD-anchor">插槽</a>。在一个完整的下拉刷新过程中，<code>beforePullDown</code>和<code>isPullingDown</code>的状态变化如下：</p><table><thead><tr><th>流程</th><th>beforePulldown</th><th>isPullingDown</th><th>备注</th></tr></thead><tbody><tr><td>1. 未触发下拉刷新</td><td>true</td><td>-</td><td>展示继续下拉引导图案</td></tr><tr><td>2. 触发下拉刷新</td><td>false</td><td>true</td><td>异步请求数据，显示 loading</td></tr><tr><td>3. 获取数据成功</td><td>false</td><td>false</td><td>调用 <code>forceUpdate(true)</code>, 显示成功文案, 延迟 stopTime 时间进入步骤 4</td></tr><tr><td>4. 下拉刷新完成</td><td>true</td><td>-</td><td>-</td></tr></tbody></table></li><li><p><strong>5. 高级使用 - 仿头条 App 首页</strong></p><p>Scroll 组件能够满足绝大多数移动端应用的滚动需求。本例中通过横向和纵向的两个 Scroll 组件快速实现了模仿头条 App 首页的滚动体验。完整的示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/toutiao.vue">这里</a>。</p><pre><code class="language-html">&lt;div class=&quot;nav-scroll-list-wrap&quot;&gt;
  &lt;cube-scroll ref=&quot;navScroll&quot; direction=&quot;horizontal&quot;&gt;
    &lt;ul class=&quot;nav-wrapper&quot;&gt;
      &lt;li v-for=&quot;(item, index) in navTxts&quot; :key=&quot;index&quot; class=&quot;nav-item&quot;&gt;{{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll&gt;
  &lt;div class=&quot;more-wrapper&quot;&gt;
    &lt;span class=&quot;more&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;content-scroll-wrapper&quot;&gt;
  &lt;div class=&quot;content-scroll-list-wrap&quot; ref=&quot;scrollWrapper&quot;&gt;
    &lt;cube-scroll
      ref=&quot;contentScroll&quot;
      :data=&quot;content&quot;
      :options=&quot;options&quot;
      @pulling-down=&quot;onPullingDown&quot;
      @pulling-up=&quot;onPullingUp&quot;&gt;
      &lt;ul class=&quot;imgs-wrapper&quot;&gt;
        &lt;li v-for=&quot;(item, index) in content&quot; :key=&quot;index&quot; class=&quot;imgs-item&quot;&gt;
          &lt;img :src=&quot;item.url&quot;&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;template slot=&quot;pulldown&quot; slot-scope=&quot;props&quot;&gt;
        &lt;div v-if=&quot;props.pullDownRefresh&quot;
          class=&quot;cube-pulldown-wrapper&quot;
          :style=&quot;props.pullDownStyle&quot;&gt;
          &lt;div v-if=&quot;props.beforePullDown&quot;
            class=&quot;before-trigger&quot;
            :style=&quot;{paddingTop: props.bubbleY + &#39;px&#39;}&quot;&gt;
            &lt;span :class=&quot;{rotate: props.bubbleY &gt; options.pullDownRefresh.threshold - 60}&quot;&gt;↓&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class=&quot;after-trigger&quot; v-else&gt;
            &lt;div v-show=&quot;props.isPullingDown&quot; class=&quot;loading&quot;&gt;
              &lt;cube-loading&gt;&lt;/cube-loading&gt;
            &lt;/div&gt;
            &lt;transition name=&quot;success&quot;&gt;
              &lt;div v-show=&quot;!props.isPullingDown&quot; class=&quot;text-wrapper&quot;&gt;&lt;span class=&quot;refresh-text&quot;&gt;今日头条推荐引擎有x条更新&lt;/span&gt;&lt;/div&gt;
            &lt;/transition&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/cube-scroll&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><p>和“仿京东 APP”示例不同的是，在下拉刷新的自定义动画中，使用了<code>pulldown</code>作用域插槽中的<code>pullDownStyle</code>和<code>bubbleY</code>更方便的实现下拉动画。</p><p><code>pullDownStyle</code>用来控制下拉内容的位置，值为字符串<code>top: n px</code>（n 代表数值）。Scroll 组件是通过绝对定位的<code>top</code>值来控制下拉内容位置的。初始状态<code>top</code>值为负值，大小刚好为下拉内容的高度，因此下拉内容被隐藏到滚动区域上方，当下拉过程中，Scroll 组件会逐渐增大<code>top</code>值，实时更新下拉内容的位置。<code>top</code>最大值为0，即当下拉内容完全显示后<code>top</code>值不再增加。即 <code>pullY - height &lt;= top &lt;= 0</code>。（pullY 为下拉距离，height 为下拉内容高度）</p><p><code>bubbleY</code>用来辅助实现自定义动画。在默认动画中，<code>bubbleY</code>用来控制气泡尾巴长度；在头条例子中，用来控制箭头的<code>padding-top</code>值，间接控制箭头位置。<code>bubbleY</code>的最小值为 0，下拉过程中，当下拉距离大于下拉内容高度后，<code>bubbleY</code>开始增大。即 <code>0 &lt;= bubbleY &lt;= pullY - height</code>。</p><blockquote><p>在本例中，<code>pullDownRefresh</code>配置项没有传入<code>stop</code>值，但是下拉后依然能够回弹到正确位置，原因是 Scroll 组件初始化时会将 <code>beforePullDown === false &amp;&amp; isPullingDown === true</code> 时下拉内容高度作为 <code>stop</code> 默认值。</p></blockquote></li><li><p><strong>6. 嵌套纵向滚动 - Vertical Scrolls</strong><sup>1.12.0</sup></p><p><code>Scroll</code>组件还支持嵌套的场景(目前只支持两层嵌套)。当遇到嵌套场景时，你需要给内层<code>scroll</code>组件设置 Prop nestMode，可选值有 ‘native’ 和 ‘free’。当设置为 ‘native’ 时，嵌套<code>Scroll</code>与浏览器原生嵌套场景的滚动行为相同。下面是<code>Scroll</code>组件实现纵向嵌套滚动的例子。完整的示例代码在这里<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/vertical-scrolls.vue">这里</a>。</p><pre><code class="language-html">&lt;cube-scroll
  ref=&quot;scroll1&quot;
  class=&quot;scroll-list-outer-wrap&quot;&gt;
  ...
  &lt;cube-scroll
    ref=&quot;scroll2&quot;
    class=&quot;scroll-list-inner-wrap&quot;
    nest-mode=&quot;native&quot;&gt;
    &lt;ul class=&quot;cube-scroll-list&quot;&gt;
      &lt;li class=&quot;cube-scroll-item border-bottom-1px&quot;
        v-for=&quot;(item, index) in items2&quot;
        :key=&quot;index&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll&gt;
  ...
&lt;/cube-scroll&gt;
</code></pre></li><li><p><strong>7. 嵌套横向滚动 - Horizontal Scrolls</strong><sup>1.12.0</sup></p><p>你还可以实现横向的嵌套滚动。这里同时设置<code>nestMode</code>为<code>free</code>，与<code>native</code>模式不同的是，<code>free</code>模式下，内层滚动过程中只要触发边界，便会开启外层滚动。而<code>native</code>模式下，只在开始滚动时判断是否到达边界，与浏览器原生的嵌套滚动保持一致。完整的示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal-scrolls.vue">这里</a>。</p><pre><code class="language-html">&lt;cube-scroll
  ref=&quot;scroll&quot;
  :data=&quot;items1&quot;
  direction=&quot;horizontal&quot;
  class=&quot;outer-horizontal-scroll&quot;&gt;
  &lt;ul class=&quot;list-wrapper&quot;&gt;
    &lt;li v-for=&quot;item in items1&quot; class=&quot;list-item&quot;&gt;{{ item }}&lt;/li&gt;
    &lt;li class=&quot;list-item inner-horizontal-scroll&quot;&gt;
      &lt;cube-scroll
        ref=&quot;scroll&quot;
        :data=&quot;items2&quot;
        direction=&quot;horizontal&quot;
        nest-mode=&quot;free&quot;&gt;
        &lt;ul class=&quot;list-wrapper&quot;&gt;
          &lt;li v-for=&quot;item in items2&quot; class=&quot;list-item&quot;&gt;{{ item }}&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/cube-scroll&gt;
    &lt;/li&gt;
    &lt;li v-for=&quot;item in items1&quot; class=&quot;list-item&quot;&gt;{{ item }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/cube-scroll&gt;
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>用于列表渲染的数据</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>direction</td><td>滚动方向</td><td>String</td><td>‘vertical’, ‘horizontal’</td><td>‘vertical’</td></tr><tr><td>options</td><td>better-scroll 配置项，具体请参考<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS 官方文档</a></td><td>Object</td><td>-</td><td>{<br> observeDOM: true,<br> click: true,<br> probeType: 1,<br> scrollbar: false,<br> pullDownRefresh: false,<br> pullUpLoad: false<br>} <br><code>注意</code>：从<code>1.12.38</code>版本开始，因修复<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a>在<code>iOS13.4</code>版本的滚动问题，<code>useTransition</code>在iOS版本&gt;=13.4时默认为<code>fasle</code><br>具体请参考<a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a></td></tr><tr><td>scrollEvents<sup>1.9.0</sup></td><td>配置需要派发的 scroll 事件</td><td>Array</td><td>可包含子项：‘scroll’, ‘before-scroll-start’, ‘scroll-end’</td><td>[]</td></tr><tr><td>listenScroll</td><td>是否派发 scroll 事件。<code>即将废弃</code>，推荐使用 <code>scroll-events</code> 属性</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>listenBeforeScroll</td><td>是否派发 before-scroll-start 事件。<code>即将废弃</code>，推荐使用 <code>scroll-events</code> 属性</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>refreshDelay</td><td>data属性的数据更新后，scroll 的刷新延时</td><td>Number</td><td>-</td><td>20</td></tr><tr><td>nestMode<sup>1.12.0</sup></td><td>嵌套滚动模式，默认是<code>none</code>，即不做嵌套处理。<code>native</code>只在开始滚动时判断是否到达边界并开启外层滚动，与浏览器原生的嵌套滚动保持一致。<code>free</code>模式下，内层滚动过程中只要触发边界，便会开启外层滚动。</td><td>String</td><td>‘none’, ‘native’, ‘free’</td><td>‘none’</td></tr></tbody></table><p><code>options</code>中 better-scroll 的几个常用配置项，<code>scrollbar</code>、<code>pullDownRefresh</code>、<code>pullUpLoad</code>这三个配置即可设为 <code>Boolean</code>（<code>false</code> 关闭该功能，<code>true</code> 开启该功能，并使用默认子配置），也可设为<code>Object</code>，开启该功能并具体定制其子配置项。</p><ul><li><code>scrollbar</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>fade</td><td>是否淡入淡出</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>pullDownRefresh</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>threshold</td><td>下拉刷新动作的下拉距离阈值</td><td>Number</td><td>-</td><td>90</td></tr><tr><td>stop</td><td>回弹停留的位置</td><td>Number</td><td>-</td><td>组件会自动计算回弹时显示的元素高度作为默认值</td></tr><tr><td>stopTime</td><td>刷新成功的文案显示时间</td><td>Number</td><td>-</td><td>600</td></tr><tr><td>txt</td><td>刷新成功的文案</td><td>String</td><td>-</td><td>‘Refresh success’</td></tr></tbody></table><ul><li><code>pullUpLoad</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>threshold</td><td>上拉刷新动作的上拉距离阈值</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>txt</td><td>上拉加载的相关文案</td><td>Object</td><td>-</td><td>{ more: ‘’, noMore: ‘’ }</td></tr><tr><td>visible<sup>1.12.21</sup></td><td>内容不满一屏时，txt 文案是否可见</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><blockquote><p>当开启 pullUpLoad，且内容较少，内容高度小于容器时，默认情况下，<code>pullUpLoad.txt</code> 配置的文案如“上滑加载更多”，需要上拉后才能看到。如果希望无需上拉即可看到提示文案，可以设置 <code>pullUpLoad.visible</code> 为 <code>true</code>。</p></blockquote><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>default</td><td>基于<code>data</code>属性渲染的列表</td><td>-</td></tr><tr><td>pulldown</td><td>位于列表上方，会在下拉刷新时显示</td><td>pullDownRefresh: 是否开启了下拉刷新功能 <br> pullDownStyle: 移入移出的样式 <br> beforePullDown: 是否正在做下拉操作 <br> isPullingDown: 是否正在拉取数据 <br> bubbleY: 当前下拉的距离 - 50</td></tr><tr><td>pullup</td><td>位于列表下方，会在上拉加载时显示</td><td>pullUpLoad: 是否开启了上拉加载功能 <br> isPullUpLoad: 是否正在加载数据</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击列表项时触发</td><td>item - 该列表项的数据</td></tr><tr><td>scroll</td><td>当 <code>scroll-events</code> 包含 <code>scroll</code> 时，根据 probeType 的值决定派发时机</td><td>Object {x, y} - 实时滚动位置的坐标</td></tr><tr><td>before-scroll-start</td><td>当 <code>scroll-events</code> 包含 <code>before-scroll-start</code> 时，在滚动开始之前触发</td><td>-</td></tr><tr><td>scroll-end<sup>1.9.0</sup></td><td>当 <code>scroll-events</code> 包含 <code>scroll-end</code> 时，在滚动结束时触发</td><td>Object {x, y} - 实时滚动位置的坐标</td></tr><tr><td>pulling-down</td><td>当 pullDownRefresh 属性为 true 时，在下拉超过阈值时触发</td><td>-</td></tr><tr><td>pulling-up</td><td>当 pullUpLoad 属性为 true 时，在上拉超过阈值时触发</td><td>-</td></tr></tbody></table><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>scrollTo(x, y, time, ease)</td><td>滚动到指定位置</td><td>x: number, 横向位置<br> y: number, 纵向位置<br> time: number, 过渡动画时间 (ms)<br> ease: EasingFn, 缓动曲线</td></tr><tr><td>forceUpdate(dirty, nomore<sup>1.12.21</sup>)</td><td>标记上拉下拉结束，强制重新计算可滚动距离</td><td>dirty: boolean, 标识有数据更新，默认为 false。<br>nomore: boolean, pullUpLoad 中标识没有更多数据，默认为 false。1.12.21版本后支持 nomore 参数，当 nomore 为 true 时，上拉加载展示 <code>pullUpLoad.txt.nomore</code> 值，但当 dirty 为 false 时，nomore 无效。</td></tr><tr><td>disable()</td><td>禁用滚动</td><td>-</td></tr><tr><td>enable()</td><td>启用滚动，默认是开启滚动的。</td><td>-</td></tr><tr><td>resetPullUpTxt()</td><td>当从无更多切换到有更多时，重置上拉文本内容</td><td>-</td></tr><tr><td>refresh()</td><td>刷新，重新计算高度且刷新 BetterScroll 实例</td><td>-</td></tr></tbody></table><h3>内部属性</h3><table><thead><tr><th>属性名</th><th>说明</th></tr></thead><tbody><tr><td>scroll</td><td>可以通过该属性获得内部实现滚动核心的 BScoll 实例，从而获得更多 BScoll 的底层能力，如监听<code>touchEnd</code>事件，获得滚动中的中间状态等，具体可查看<a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/"> better-scroll 文档</a></td></tr></tbody></table>`,29),c=[r],i={__name:"scroll",setup(n,{expose:t}){return t({frontmatter:{}}),(u,p)=>(e(),o("div",d,c))}};export{i as default};
