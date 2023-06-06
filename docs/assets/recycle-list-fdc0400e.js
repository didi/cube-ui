import{a as e,o,j as d}from"./index-e8a96955.js";const l={class:"markdown-body"},s=d(`<h2>RecycleList</h2><blockquote><p>1.12.0 新增</p></blockquote><p>可回收的滚动列表，始终将 DOM 的数量控制在一个很低的范围。在海量数据的渲染列表中，拥有卓越的性能。</p><h3>注意事项</h3><ul><li><p>首先要实现无限滚动，必须保证要有一个固定高度的父容器元素包裹组件。详细可以参考示例。</p></li><li><p>如果列表内容存在不固定宽高的图片，由于图片加载的机制，每个 item 的 DOM 渲染了，图片可能还未加载，导致每个 item 的位置计算错误，所以作为调用方，需要将未加载的图片用样式固定住，这样就能避免高度计算错误。</p></li><li><p>内部的实现依赖 Promise，所以你需要引入 Promise polyfill 来做兼容。</p></li></ul><h3>示例</h3><ul><li><p><strong>1. 默认使用</strong></p><pre><code class="language-html">&lt;div class=&quot;view-wrapper&quot;&gt;
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
        // 模拟请求 50 条数据，因为 size 设置为 50
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
</code></pre><pre><code class="language-stylus">/* 限制视口 包裹组件*/
.view-wrapper
  position: fixed
  top: 54px
  left: 0
  bottom: 0
  width: 100%
</code></pre><p>绝大部分的列表交互，都是当用户滚动到底部再去请求下一页数据，组件的默认实现就是根据此交互而来。</p><p>组件接收 <code>size</code> 作为 props，用来控制一次渲染多少条数据。<code>offset</code> 是配置底部拉取数据的距离，<code>onFetch</code> 是一个函数，此属性是必传的，并且函数的返回值必须是一个 Promise，同时调用 resolve 函数的时候必须将 items（<strong>数组</strong>） 传入，这样组件就能拿到 <code>items</code>。当然如果想要停止滚动，请传入 <code>false</code>。</p><p>组件支持作用域插槽，你可以通过以上示例的解构赋值，拿到组件传给调用方的 <code>data</code>（items 的每一个数据项）。</p><p>完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-default.vue">这里</a>。</p></li><li><p><strong>2. Infinite</strong></p><p>然而，组件还支持第二种交互方式，无限滚动模式，以 <code>tombstone</code> 作为占位符，\b给用户一种可感知的页面元素，让交互变的更加友好、人性化。 完整示例代码在<a href="https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-tombstone.vue">这里</a>。</p><pre><code class="language-html">&lt;div class=&quot;view-wrapper&quot;&gt;
  &lt;cube-recycle-list class=&quot;list&quot; :infinite=&quot;infinite&quot; :size=&quot;size&quot; :on-fetch=&quot;onFetch&quot;&gt;
    &lt;!-- tombstone 的作用域插槽 slot-scope 必须声明 --&gt;
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
    &lt;!-- &lt;div slot=&quot;noMore&quot;&gt;没有更多数据了&lt;/div&gt; --&gt;
  &lt;/cube-recycle-list&gt;
&lt;/div&gt;
</code></pre><p><code>infinite</code> 用来开启无限滚动模式。当你开启这个配置的时候，必须通过 <code>tombstone</code> 作用域插槽实现个性化样式。支持 <code>spinner</code> 与 <code>noMore</code> 插槽来定制化显示加载更多以及无更多数据的视图展示。<code>spinner</code> 默认是一个 loading 图。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>infinite</td><td>是否无限滚动模式</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>size</td><td>一次加载的数据量</td><td>Number</td><td>-</td><td>20</td></tr><tr><td>offset</td><td>底部拉取更多数据的距离</td><td>Number</td><td>-</td><td>200</td></tr><tr><td>onFetch</td><td>获取更多数据</td><td>Function</td><td>必传</td><td>-</td></tr></tbody></table><p><code>onFetch</code> 函数必须返回一个 Promise，同时 Promise 的 resolve 函数的第一个参数必须是数组或者 <code>false</code>，如果是数组并且长度小于 size，那么组件会停止无限滚动，同理，如果是 <code>false</code>，也会停止。</p><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>tombstone</td><td>实现个性化 <code>tombstone</code> 样式的作用域插槽</td><td>-</td></tr><tr><td>item</td><td>列表某项的作用域插槽，通过此插槽实现想要的渲染视图</td><td>data: 调用方传入的数据项集合的某一项</td></tr><tr><td>spinner</td><td>加载更多的提示文案的具名插槽</td><td>-</td></tr><tr><td>noMore</td><td>无更多数据的提示文案的具名插槽</td><td>-</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>reset</td><td>清空列表全部内容，重置数据</td></tr></tbody></table>`,14),n=[s],p={__name:"recycle-list",setup(a,{expose:t}){return t({frontmatter:{}}),(c,u)=>(o(),e("div",l,n))}};export{p as default};
