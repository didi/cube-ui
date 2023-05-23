import{a as e,o,j as s}from"./index-9017f177.js";const d={class:"markdown-body"},a=s(`<h2>Toast</h2><p><code>Toast</code>组件主要用于非模态信息提醒，无需用户交互。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>显示时间设置</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastTime&quot;&gt;Toast - time 1s&lt;/cube-button&gt;
&lt;cube-button @click=&quot;showToastTime0&quot;&gt;Toast - time 0&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showToastTime() {
      const toast = this.$createToast({
        time: 1000,
        txt: &#39;Toast time 1s&#39;
      })
      toast.show()
    },
    showToastTime0() {
      const toast = this.$createToast({
        time: 0,
        txt: &#39;Toast time 0&#39;
      })
      toast.show()
      setTimeout(() =&gt; {
        toast.hide()
      }, 2000)
    }
  }
}
</code></pre><p><code>time</code> 字段决定了 Toast 显示的时间，如果设置为 <code>0</code>，则不会消失，需要手动调用组件的 <code>hide</code> 方法。</p></li><li><p>显示遮罩</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastMask&quot;&gt;Toast- with mask&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showToastMask () {
      const toast = this.$createToast({
        txt: &#39;Loading...&#39;,
        mask: true
      })
      toast.show()
    }
  }
}
</code></pre><p><code>mask</code> 设置为 <code>true</code> 时会显示遮罩。</p></li><li><p>类型设置</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastType&quot;&gt;Toast - type&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showToastType() {
      const toast = this.$createToast({
        txt: &#39;Correct&#39;,
        type: &#39;correct&#39;
      })
      toast.show()
    }
  }
}
</code></pre><p><code>type</code> 字段决定了 Toast 的显示图标类型，具体对应关系，参见下方的 Props 配置。</p></li><li><p>纯文本类型<sup>1.11.0</sup></p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastTxtOnly&quot;&gt;Toast - txt only&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showToastTxtOnly() {
      this.toast = this.$createToast({
        txt: &#39;Plain txt&#39;,
        type: &#39;txt&#39;
      })
      this.toast.show()
    }
  }
}
</code></pre></li><li><p>事件回调</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastCallback&quot;&gt;Toast - callback&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showToastCallbak() {
      const toast = this.$createToast({
        txt: &#39;Timeout&#39;,
        time: 1000,
        onTimeout: () =&gt; {
          console.log(&#39;Timeout&#39;)
        }
      })
      toast.show()
    }
  }
}
</code></pre><p>除了设置 <code>onTimeout</code> 的形式，还可以通过 <code>$events</code> 传入事件回调。</p><pre><code class="language-js">export default {
  methods: {
    showToastCallbak() {
      const toast = this.$createToast({
        txt: &#39;Timeout&#39;,
        time: 1000,
        $events: {
          timeout: () =&gt; {
            console.log(&#39;Timeout&#39;)
          }
        }
      })
      toast.show()
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>type</td><td>类型(对应不同的 icon)</td><td>String</td><td>loading/correct/error/warn/txt<sup>1.11.0</sup></td><td>loading</td></tr><tr><td>mask</td><td>遮罩</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>txt</td><td>提示信息</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>time</td><td>显示时间</td><td>Number</td><td>-</td><td>3000</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>900</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>timeout</td><td>当显示时间结束时派发</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,11),n=[a],p={__name:"toast",setup(c,{expose:t}){return t({frontmatter:{}}),(r,h)=>(o(),e("div",d,n))}};export{p as default};
