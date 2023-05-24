import{a as e,o,j as s}from"./index-9017f177.js";const a={class:"markdown-body"},n=s(`<h2>Toast</h2><p><code>Toast</code> component.You can use it to show non-modal tip message without user interaction.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Duration of display</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastTime&quot;&gt;Toast - time 1s&lt;/cube-button&gt;
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
</code></pre><p>Set <code>time</code> to change the duration of display.If set to 0, the toast will not hide automatically and you must invoke the component’s <code>hide</code> method manually to hide it.</p></li><li><p>Show mask layer</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastMask&quot;&gt;Toast- with mask&lt;/cube-button&gt;
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
</code></pre><p>Set <code>mask</code> to <code>true</code> to display mask.</p></li><li><p>Tip type</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastType&quot;&gt;Toast - type&lt;/cube-button&gt;
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
</code></pre><p>Set <code>type</code> to change the tip icon.You can see accepted types in the following <code>Props configuration</code>.</p></li><li><p>Show txt only<sup>1.11.0</sup></p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastTxtOnly&quot;&gt;Toast - txt only&lt;/cube-button&gt;
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
</code></pre></li><li><p>Callback</p><pre><code class="language-html">&lt;cube-button @click=&quot;showToastCallback&quot;&gt;Toast - callback&lt;/cube-button&gt;
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
</code></pre><p>Besides set <code>onTimeout</code>.You can pass the callback through <code>$events</code> too.</p><pre><code class="language-js">export default {
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>toast type(different types of icons)</td><td>String</td><td>loading/correct/error/warn/txt<sup>1.11.0</sup></td><td>loading</td></tr><tr><td>mask</td><td>whether to show mask layer</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>txt</td><td>tip text</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>time</td><td>display duration, millisecond</td><td>Number</td><td>-</td><td>3000</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>900</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th></tr></thead><tbody><tr><td>timeout</td><td>triggers when the display time is out</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,11),d=[n],u={__name:"toast",setup(c,{expose:t}){return t({frontmatter:{}}),(r,i)=>(o(),e("div",a,d))}};export{u as default};
