import{a as e,o,j as l}from"./index-e8a96955.js";const n={class:"markdown-body"},s=l(`<h2>Scroll</h2><p><code>Scroll</code> component, which is encapsulated based on <code>better-scroll</code>, provides high-quality native scrolling experience and has convenient configuration along with events.</p><h3>Scrolling principle</h3><p>The better-scroll’s scrolling principle is, the length of the first child element exceeds the length of the container in the scroll direction.</p><p>So for the Scroll component, The length of <code>.cube-scroll-content</code>, the scroll-content, must be larger than <code>.cube-scroll-wrapper</code>, the container element. Depending on the direction of scrolling, there are two situations:</p><p>1）Scrolling vertically: <strong>The height of the content element must be greater than the container element.</strong> Since the height of the container element will be stretched by the height of the child element by default, in order to satisfy our scrolling premise, you need to give the Scroll component’s <code>.cube-scroll-wrapper</code> element an fixed height.</p><p>2）Scrolling horizontally: <strong>The width of the content element must be greater than the container element.</strong> Since the child element’s width does not exceed the container element by default, the Scroll component’s <code>.cube-scroll-content</code> element needs to be set to a width greater than the <code>.cube-scroll-wrapper</code>.</p><blockquote><p>Note: If there is any situation where scrolling is not possible, you should first check if the height/width of the content element <code>.cube-scroll-content</code> is greater than the height/width of the container element <code>.cube-scroll-wrapper</code>. This is a prerequisite for content to scroll. <strong>If there is images in the content, the scrolling should be not normal. The reason is images may not be downloaded when the DOM element is rendered, so the height of the content element is less than expected. At this point you should manually call the Scroll component’s <code>refresh()</code> method after the image has been loaded, such as calling in the onload event callback, which will recalculate the scroll distance.</strong> Scroll related FAQs can seek [Cube-UI/Question-Answer].</p></blockquote><h3>Example</h3><p>Seven sample code to quickly understand how to use the Scroll component.</p><ul><li><p><strong>1. Basic usage - Default</strong></p><p>By setting the data property to an array, you can generate an elegantly scrolling list. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/default.vue">here</a>.</p><pre><code class="language-html">&lt;div class=&quot;scroll-list-wrap&quot;&gt;
  &lt;cube-scroll
    ref=&quot;scroll&quot;
    :data=&quot;items&quot;
    :options=&quot;options&quot;&gt;
  &lt;/cube-scroll&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-stylus">.scroll-list-wrap
  height: 350px
</code></pre><blockquote><p><strong>Note</strong>: As the scrolling principle above, it is necessary to provide a fixed height to the scroll container, and scroll only when the height of the scroll content is greater than the height of the container.</p></blockquote><p>In the prop <code>options</code>, you are able to control the scrollbar seen or not via <code>scrollbar</code>, and configure the initial position by <code>startX/startY</code>.</p><p>Scroll component provides a <code>scrollTo()</code> method that allows you to manually control the list scroll position.</p><pre><code class="language-javascript">scrollTo() {
  this.$refs.scroll.scrollTo(
    0,
    this.scrollToY,
    this.scrollToTime,
    ease[this.scrollToEasing]
  )
},
</code></pre><p>In fact, this is a very useful method, such as when we want to achieve “click different anchor, list scroll to the corresponding position to show different content”, you can use the <code>scrollTo ()</code> method.</p></li><li><p><strong>2. Scrolling horizontally - Horizontal</strong></p><p>Scroll component supports horizontal scrolling. All you need to do is specifying <code>direction = &#39;horizontal&#39;</code> and giving some styles. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal.vue">here</a></p><pre><code class="language-html">&lt;cube-scroll
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
</code></pre><blockquote><p><strong>Note</strong>：1. As the scrolling principle above, the CSS style setting here is required, and scrolling is possible only when the scrolling content is wider than the container width. 2. Sometimes we want to use the <code>Scroll</code> component to simulate the horizontal scroll, vertically retaining the browser’s native scrolling, or vice versa. At this point you need to pass the better-scroll configuration item <a href="https://better-scroll.github.io/docs-v1/doc/en/options.html#eventpassthrough">eventPassthrough</a></p></blockquote><p>Here giving a brief explanation of the style settings. <code>list-item</code> items with <code>display: inline-block</code> lead to all <code>list-item</code> elements showing on one line. <code>list-wrapper</code> adds <code>white-space: nowrap</code> hope <code>list-item</code> also showing on one line when reaching the outer element boundary. And the most important is setting <code>cube-scroll-content</code> with <code>display: inline-block</code>， which make the width of <code>cube-scroll-content</code> bigger enough so that <code>cube-scroll-content</code> can wrap descendants elements. Styles with the same properties are floating elements and absolutely positioned elements. When no specific width is set, the width is the minimum width of the wrapped descendant element.</p></li><li><p><strong>3. Custom content - Customized</strong></p><p>The Scroll component supports the customization of list content through default slot. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/config.vue">here</a>.</p><pre><code class="language-html">&lt;div class=&quot;scroll-list-wrap&quot;&gt;
  &lt;cube-scroll
    ref=&quot;scroll&quot;
    :data=&quot;items&quot;
    :options=&quot;options&quot;
    @pulling-down=&quot;onPullingDown&quot;
    @pulling-up=&quot;onPullingUp&quot;&gt;
    ... // custom content
  &lt;/cube-scroll&gt;
&lt;/div&gt;
</code></pre><p>Scroll components also support <strong>pull-down refresh</strong> and <strong>pull-up load</strong> capabilities. By default, there is no pulldown refresh/pull-up load. You can enable corresponding functions by <code>pullDownRefresh</code> and <code>pullUpLoad</code>. After opening, when pulling down, the Scroll component will show the default pulldown animation and dispatch pulldown events. You can monitor the <code>pull-down</code> event to update the data. Similarly, after the pull-up load is enabled, the data can be updated by the <code>pull-up</code> event.</p><p><code>pullDownRefresh</code>’s related configurations include: drop threshold (threshold), rebound position (stop), update successful copy (txt) and copy display time (stopTime). See the <a href="#/en-US/docs/scroll#cube-Propsconfiguration-anchor">Props configuration</a> for all the configuration items and meanings of the <code>pullDownRefresh</code> and <code>pullUpLoad</code> objects.</p><pre><code class="language-javascript">... // ignore
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
    // simulate asynchronous request data
    setTimeout(() =&gt; {
      if (Math.random() &gt; 0.5) {
        // if data update
        this.items.unshift(_foods[1])
      } else {
        // if no data update
        this.$refs.scroll.forceUpdate()
      }
    }, 1000)
  },
  onPullingUp() {
    // simulate asynchronous request data
    setTimeout(() =&gt; {
      if (Math.random() &gt; 0.5) {
        // if data update
        let newPage = _foods.slice(0, 5)
        this.items = this.items.concat(newPage)
      } else {
        // if no data update
        this.$refs.scroll.forceUpdate()
      }
    }, 1000)
  },
  ...
}
</code></pre><blockquote><p><strong>Note</strong>: If a pulldown-refresh/pullup-loading has no data update, you must manually call the Scroll component’s <code>forceUpdate()</code> method to end the pulldown-refresh/pullup-loading so that Scroll will restart listening for the next pulldown-refresh/pullup-loading operation. In the above example, when the data is updated, we did not invoke the <code>forceUpdate()</code> method. The reason is: ** If you pass the <code>data</code> attribute to the <code>Scroll</code> component, then when the <code>Scroll</code> component listens to the <code>data</code> update, the <code>forceUpate(true)</code> method will be called automatically. ** so it is recommended to pass the <code>data</code> attribute.</p></blockquote></li><li><p><strong>4. Custom pull-down refresh animation - Fake JD App</strong></p><p>If you don’t like the built-in pull-down refresh and pull-up loading animations, you can also use the scope slots for custom animations. The variables exposed by <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots">the scoped slots</a> of the Scroll component are perfect to meet the needs of custom pull-down/pull-up animations in most scenarios. The following example imitates the pull-down refresh animation of Jingdong App’s homepage. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/jd.vue">here</a>.</p><pre><code class="language-html">&lt;cube-scroll
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
</code></pre><p>Through the scope parameters provided by the scoped slots, such as: <code>beforePulldown</code> and <code>isPullingDown</code>, allows you control the animation process. Tht other scope parameters, see <a href="#/en-US/docs/scroll#cube-Slot-anchor">slots</a>. In a complete pulldown refresh, the status of <code>beforePullDown</code> and <code>isPullingDown</code> changes as follows:</p><table><thead><tr><th>step</th><th>beforePulldown</th><th>isPullingDown</th><th>note</th></tr></thead><tbody><tr><td>1. Untrigger pull-down refresh</td><td>true</td><td>-</td><td>Show pattern guide user continues to pull down</td></tr><tr><td>2. Trigger pull-down refresh</td><td>false</td><td>true</td><td>Asynchronous request data，show loading</td></tr><tr><td>3. Request data success</td><td>false</td><td>false</td><td>invoke <code>forceUpdate(true)</code>, show success copy. And delay ‘stopTime’ into step 4</td></tr><tr><td>4. A pull-down refresh complete</td><td>true</td><td>-</td><td>-</td></tr></tbody></table></li><li><p><strong>5. Advanced usage - Fake TouTiao App</strong></p></li></ul><p>Scroll components can meet the scrolling needs of most mobile applications. In this example, using two Scroll components, one vertical and one horizontal, to imitates the Toutiao App’s home page. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/toutiao.vue">here</a>.</p><pre><code class="language-html">  &lt;div class=&quot;nav-scroll-list-wrap&quot;&gt;
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
</code></pre><p>In contrast to faking JD App example, pulldown refreshing custom animations use <code>pullDownStyle</code> and <code>bubbleY</code> in pulldown scope slots to facilitate pulldown animations.</p><p>The <code>pullDownStyle</code> is used to control the position of the pull-down content. The value is the string <code>top: n px</code> (n represents a number). The Scroll component controls the position of the pull-down content via the absolutely positioned <code>top</code> value. The initial state has a negative <code>top</code> value, and the value is just the height of the pull-down content, so the drop-down content is hidden above the scroll area. When the pull-down process is started, the Scroll component will gradually increase the <code>top</code> value and update the pull-down content position in real time. The maximum value of <code>top</code> is 0, that is, the <code>top</code> value no longer increases when the pull-down content is completely displayed. So, <code>pullY - height &lt;= top &lt;= 0</code>. (pullY is the drop-down distance, height is the drop-down content height)</p><p><code>bubbleY</code> is used to help implement custom animations. In the default animation, <code>bubbleY</code> is used to control the length of the bubble tail; in the Toutiao example, is used to control the padding-top value of the arrow, to indirectly control the arrow position. The minimum value of <code>bubbleY</code> is 0. In the pull-down process, when the pull-down distance is greater than the height of the pull-down content, <code>bubbleY</code> starts to increase. That is, <code>0 &lt;= bubbleY &lt;= pullY - height</code>.</p><blockquote><p><strong>Note:</strong> In this example, the <code>pullDownRefresh</code> configuration item does not have a <code>stop</code> value, but it is still able to bounce back to the correct location after the pulldown. The reason is that when the Scroll component is initialized, the pulldown height will be used as the <code>stop</code> default value when <code>beforePullDown === false &amp;&amp; isPullingDown === true</code>.</p></blockquote><p><strong>6. Vertical nested scrolls - Vertical Scrolls</strong><sup>1.12.0</sup></p><p>The <code>Scroll</code> component also supports nested scenes (currently only supports two levels of nesting). when there is scroll nest, you need to config the inner <code>scroll</code> component’s <code>nestMode</code> prop，the options can be ‘native’ or ‘free’. when set to ‘native’, nested <code>Scroll</code> has the same scrolling behavior as the browser’s native nested scene. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/vertical-scrolls.vue">here</a>.</p><pre><code class="language-html">&lt;cube-scroll
  ref=&quot;scroll1&quot;
  class=&quot;scroll-list-outer-wrap&quot;&gt;
  ...
  &lt;cube-scroll
    ref=&quot;scroll2&quot;
    class=&quot;scroll-list-outer-wrap&quot;
    nest-mode=&quot;native&quot;&gt;
    &lt;ul class=&quot;cube-scroll-list&quot;&gt;
      &lt;li class=&quot;cube-scroll-item border-bottom-1px&quot;
        v-for=&quot;(item, index) in items2&quot;
        :key=&quot;index&quot;&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/cube-scroll&gt;
  ...
&lt;/cube-scroll&gt;
</code></pre><p><strong>7. Horizontal nested scrolls - Horizontal Scrolls</strong><sup>1.12.0</sup></p><p>You can also implement horizontal nested scrolling. In this example, we also set <code>nestMode</code> to <code>free</code>. Different from <code>native</code> mode, in <code>free</code> mode, as long as the boundary is triggered during the inner scrolling process, the outer scroll will be started. In the <code>native</code> mode, it is only when the scrolling starts to determine whether it reaches the boundary, which is consistent with the browser’s native nested scrolling. The complete sample code is <a href="https://github.com/didi/cube-ui/blob/master/example/pages/scroll/horizontal-scrolls.vue">here</a>.</p><pre><code class="language-html">&lt;cube-scroll
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
</code></pre><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>data used for list rendering</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>direction</td><td>scrolling direction</td><td>String</td><td>‘vertical’, ‘horizontal’</td><td>‘vertical’</td></tr><tr><td>options</td><td>the options of better-scroll, you could find details at <a href="https://better-scroll.github.io/docs-v1/doc/en/options.html">BS Document</a></td><td>Object</td><td>-</td><td>{<br> observeDOM: true,<br> click: true,<br> probeType: 1,<br> scrollbar: false,<br> pullDownRefresh: false,<br> pullUpLoad: false<br>}<br><code>Notice</code>: After <code>1.12.38</code>, as <a href="https://better-scroll.github.io/docs-v1/doc/zh-hans/options.html">BS</a> <code>iOS13.4</code> issue <a href="https://github.com/ustbhuangyi/better-scroll/issues/978">#978</a>, we set <code>useTransition</code> to <code>fasle</code> by default</td></tr><tr><td>scrollEvents<sup>1.9.0</sup></td><td>configure which scroll events need be triggered</td><td>Array</td><td>could include: ‘scroll’, ‘before-scroll-start’, ‘scroll-end’</td><td>[]</td></tr><tr><td>listenScroll</td><td>whether to dispatch scroll event. <code>Deprecated</code>, please use the property <code>scroll-events</code> instead.</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>listenBeforeScroll</td><td>whether to dispatch before-scroll-start event. <code>Deprecated</code>, please use the property <code>scroll-events</code> instead.</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>refreshDelay</td><td>the delay of scroll refresh after <code>data</code> updating</td><td>Number</td><td>-</td><td>20</td></tr><tr><td>nestMode<sup>1.12.0</sup></td><td>Nested scroll mode, the default is <code>none</code> mode that do no thing when there is scroll nest. In <code>native</code> mode, only to determine whether to reach the boundary and start the outer scroll when starting scrolling, consistent with the browser’s native nested scrolling. In the <code>free</code> mode, as long as the boundary is triggered during the inner scrolling process, the outer scrolling is turned on. In extreme cases, you can specify the <code>none</code> mode for the inner Scroll to disable nested processing logic.</td><td>String</td><td>‘none’, ‘native’, ‘free’</td><td>‘none’</td></tr></tbody></table><p>In <code>options</code>, there are three frequently-used options, <code>scrollbar</code>、<code>pullDownRefresh</code>、<code>pullUpLoad</code>, which could set as <code>Boolean</code>(<code>false</code> to disable the feature, <code>true</code> to enable the feature and use default sub configuration), or <code>Object</code> to enable the feature and customize the sub configuration.</p><ul><li><code>scrollbar</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>fade</td><td>whether to have fade-in-fade-out style</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>pullDownRefresh</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>threshold</td><td>the threshold of distance that pulling down for refreshing</td><td>Number</td><td>-</td><td>90</td></tr><tr><td>stop</td><td>the position where rebounding stays</td><td>Number</td><td>-</td><td>Scroll component will calculate the height of pulldown element as default <code>stop</code> value</td></tr><tr><td>stopTime</td><td>the time that keeps showing the text of refreshing success</td><td>Number</td><td>-</td><td>600</td></tr><tr><td>txt</td><td>the text is shown when refreshing successfully</td><td>String</td><td>-</td><td>‘Refresh success’</td></tr></tbody></table><ul><li><code>pullUpLoad</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>threshold</td><td>the threshold of distance that pulling up for loading</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>txt</td><td>the text shown when pulling up loading</td><td>Object</td><td>-</td><td>{ more: ‘’, noMore: ‘’ }</td></tr><tr><td>visible<sup>1.12.21</sup></td><td>txt visible or not when content is not more enough</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><blockquote><p>When pullUpLoad is enabled and the content height is smaller than the container, by default, the copy <code>pullUpLoad.txt</code> needs to be pulled up to be seen. If you want to see the prompt copy without pulling up, you can set <code>pullUpLoad.visible</code> to <code>true</code>。</p></blockquote><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>default</td><td>the list, rendering based on the value of property <code>data</code></td><td>-</td></tr><tr><td>pulldown</td><td>located above the list and shown when pulling down refreshing</td><td>pullDownRefresh: whether to turn on pulling-down-refreshing function<br>pullDownStyle: the style of showing and fading<br>beforePullDown: whether in pulling down operation<br>isPullingDown: whether in the process of pulling in data<br>bubbleY: the distance of pulling down currently - 50</td></tr><tr><td>pullup</td><td>located below the list and shown when pulling up loading</td><td>pullUpLoad: whether to turn on pulling-up-loading function<br>isPullUpLoad: whether the data is being loaded</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>triggers when clicking the list item</td><td>item - the data of the list item</td></tr><tr><td>scroll</td><td>if <code>scroll-events</code> includes <code>scroll</code>, it will be triggered according to the value of probeType, if listenScroll is true</td><td>Object {x, y} - real-time scrolling coordinates</td></tr><tr><td>before-scroll-start</td><td>if <code>scroll-events</code> includes <code>before-scroll-start</code>, it will be triggered before scrolling start</td><td>-</td></tr><tr><td>scroll-end<sup>1.9.0</sup></td><td>if <code>scroll-events</code> includes <code>scroll-end</code>, it will be triggered when scroll end.</td><td>Object {x, y} - real-time scrolling coordinates</td></tr><tr><td>pulling-down</td><td>triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true</td><td>-</td></tr><tr><td>pulling-up</td><td>triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true</td><td>-</td></tr></tbody></table><h3>methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>scrollTo(x, y, time, ease)</td><td>Scroll to specific position.</td><td>x: number, horizontal position<br> y: number, vertical position<br> time: number, transition time(ms)<br> ease: easingFn, easing function</td></tr><tr><td>forceUpdate(dirty, nomore<sup>1.12.21</sup>)</td><td>Mark pull-up or pull-down end, force recalculation of scrollable distance</td><td>dirty: boolean, default to false, if true express has data update。<br>nomore<sup>1.12.21</sup>: boolean, default to false, if true represent has no more data. When params nomore is true, when pullup shows the value of <code>pullUpLoad.txt.nomore</code>, but when dirty is false, nomore is invalid.</td></tr><tr><td>disable()</td><td>Disable scroll.</td><td>-</td></tr><tr><td>enable()</td><td>Enable scroll. It’s enabled by default</td><td>-</td></tr><tr><td>resetPullUpTxt()</td><td>Reset pull up txt when pull up state changed from no data to data updated</td><td>-</td></tr><tr><td>refresh()</td><td>Refresh, computed height and called BetterScroll instance’s refresh</td><td>-</td></tr></tbody></table>`,39),r=[s],h={__name:"scroll",setup(d,{expose:t}){return t({frontmatter:{}}),(c,a)=>(o(),e("div",n,r))}};export{h as default};
