import{a as e,o,j as a}from"./index-9017f177.js";const n={class:"markdown-body"},s=a(`<h2>RecycleList</h2><blockquote><p>New in 1.12.0+</p></blockquote><p>A recyclable scrolling list that always keeps the number of DOMs at a very low range. Excellent performance in the rendering list of massive data.</p><h3>Precautions</h3><ul><li><p>To achieve infinite scrolling, you must ensure that you have a fixed-height parent container element to wrapper component. For details, please refer to the example.</p></li><li><p>If there is an image with a fixed width and height in the list content, due to the mechanism of image loading, when DOM of each item is rendered, the image may not be loaded, resulting in incorrect calculation of the position of each item, so the caller need use CSS to specify image to avoid height calculation errors.</p></li><li><p>The internal implementation relies on Promise, so you need a polyfill for compatibility.</p></li></ul><h3>Example</h3><ul><li><p><strong>1. Basic usage</strong></p><pre><code class="language-html">&lt;div class=&quot;view-wrapper&quot;&gt;
  &lt;cube-recycle-list class=&quot;list&quot; :size=&quot;size&quot; :on-fetch=&quot;onFetch&quot; :offset=&quot;offset&quot;&gt;
    &lt;template slot=&quot;item&quot; slot-scope=&quot;{ data }&quot;&gt;
      &lt;div :id=&quot;data.id&quot; class=&quot;item&quot; @click=&quot;handleClick(data)&quot;&gt;
        &lt;div class=&quot;avatar&quot; :style=&quot;{backgroundImage: &#39;url(&#39; + (data.avatar || &#39;&#39;) + &#39;)&#39;}&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;bubble&quot;&gt;
          &lt;p&gt;{{ data.msg }}&lt;/p&gt;
          &lt;div class=&quot;meta&quot;&gt;
            &lt;time class=&quot;posted-date&quot;&gt;{{ data.time }}&lt;/time&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/cube-recycle-list&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      size: 50,
      offset: 100
    }
  },
  methods: {
    onFetch() {
      let items = []
      return new Promise((resolve) =&gt; {
        // Simulation request for 50 items, because size is set to 50
        setTimeout(() =&gt; {
          for (let i = 0; i &lt; 50; i++) {
            items.push({
              id: i,
              avatar: &#39;https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg&#39;,
              msg: &#39;123&#39;,
              time: &#39;Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)&#39;
            })
          }
          resolve(items)
        }, 1000)
      })
    },
    handleClick(data) {
      console.log(&#39;Item:&#39; + data)
    }
  }
}
</code></pre><pre><code class="language-stylus">/* Limit viewport to wrap component*/
.view-wrapper
  position: fixed
  top: 54px
  left: 0
  bottom: 0
  width: 100%
</code></pre><p>The vast majority of list interactions are when the user scrolls to the bottom and requests the next page of data. The default implementation of the component is based on this interaction.</p><p>The component accepts <code>size</code> as props and controls how many counts of data are rendered at a time. <code>offset</code> is the distance to configure the bottom pull data, <code>onFetch</code> is a function, which is mandatory, and the return value of the function must be a Promise, and the <code>items</code> ( <strong>Array</strong> ) must be the first parameter when calling <code>resolve</code> function, so the component can get <code>items</code>. Of course, if you want to stop scrolling, pass <code>false</code> or an array whose length is smaller than <code>size</code> props.</p><p>The component supports the scope slot. You can use the destructuring assignment of the above example to get the <code>data</code> (each data item of item) that the component passes to the caller.</p><p>The samples demo <a href="https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-default.vue">Here</a>.</p></li><li><p><strong>2. Infinite</strong></p><p>However, the component also supports the second mode - infinite. With <code>tombstone</code> as a placeholder, which gives the user a perceptible page element, and makes the interaction more friendly and user-friendly. The samples demo <a href="https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-tombstone.vue">Here</a>.</p><pre><code class="language-html">&lt;div class=&quot;view-wrapper&quot;&gt;
  &lt;cube-recycle-list class=&quot;list&quot; :infinite=&quot;infinite&quot; :size=&quot;size&quot; :on-fetch=&quot;onFetch&quot;&gt;
    &lt;!-- tombstone slot-scope is mandatory --&gt;
    &lt;template slot=&quot;tombstone&quot; slot-scope=&quot;props&quot;&gt;
      &lt;div class=&quot;item tombstone&quot;&gt;
        &lt;div class=&quot;avatar&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;bubble&quot;&gt;
          &lt;p&gt;&lt;/p&gt;
          &lt;p&gt;&lt;/p&gt;
          &lt;p&gt;&lt;/p&gt;
          &lt;div class=&quot;meta&quot;&gt;
            &lt;time class=&quot;posted-date&quot;&gt;&lt;/time&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template slot=&quot;item&quot; slot-scope=&quot;{ data }&quot;&gt;
      &lt;div :id=&quot;data.id&quot; class=&quot;item&quot; @click=&quot;handleClick(data)&quot;&gt;
        &lt;div class=&quot;avatar&quot; :style=&quot;{backgroundImage: &#39;url(&#39; + (data.avatar || &#39;&#39;) + &#39;)&#39;}&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;bubble&quot;&gt;
          &lt;p&gt;{{ data.msg }}&lt;/p&gt;
          &lt;div class=&quot;meta&quot;&gt;
            &lt;time class=&quot;posted-date&quot;&gt;{{ data.time }}&lt;/time&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;!-- &lt;div slot=&quot;spinner&quot;&gt;Loading Data&lt;/div&gt; --&gt;
    &lt;!-- &lt;div slot=&quot;noMore&quot;&gt;No more data&lt;/div&gt; --&gt;
  &lt;/cube-recycle-list&gt;
&lt;/div&gt;
</code></pre><p><code>infinite</code> is used to enable infinite scroll mode. When you enable this configuration, you must implement a personalized style through the <code>tombstone</code> scope slot. The <code>spinner</code> and <code>noMore</code> slots are supported to customize the display of views that load more and no more data. <code>spinner</code> slot is built-in in component.</p></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>infinite</td><td>Enable infinite scroll mode</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>size</td><td>Amount of data loaded at one time</td><td>Number</td><td>-</td><td>20</td></tr><tr><td>offset</td><td>The distance to fetch more data at the bottom</td><td>Number</td><td>-</td><td>200</td></tr><tr><td>onFetch</td><td>Fetch data</td><td>Function</td><td>-</td><td>-</td></tr></tbody></table><p>The <code>onFetch</code> function must return a Promise, and the first argument to Promise’s resolve function must be an array or <code>false</code>, so that the component can internally get the corresponding data to decide whether to load more or stop scrolling.</p><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope parameters</th></tr></thead><tbody><tr><td>tombstone</td><td>Implement a customized <code>tombstone</code> view scope slot</td><td>-</td></tr><tr><td>item</td><td>Scope slot for each data item</td><td>data: An item in items</td></tr><tr><td>spinner</td><td>Named slot for loading more</td><td>-</td></tr><tr><td>noMore</td><td>Named slot for no more data</td><td>-</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>reset</td><td>To clean up all the contents</td></tr></tbody></table>`,14),i=[s],p={__name:"recycle-list",setup(l,{expose:t}){return t({frontmatter:{}}),(c,r)=>(o(),e("div",n,i))}};export{p as default};
