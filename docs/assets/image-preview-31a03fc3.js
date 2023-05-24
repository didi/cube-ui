import{a as e,o as n,j as i}from"./index-9017f177.js";const d={class:"markdown-body"},a=i(`<h2>ImagePreview</h2><blockquote><p>New in 1.10.0+</p></blockquote><p>Image preview. Support swipe, zoomin zoomout.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><p>The following demo code is <a href="https://github.com/didi/cube-ui/tree/master/example/pages/image-preview">here</a>.</p><ul><li><p>Default usage</p><pre><code class="language-html">&lt;cube-button @click=&quot;showImagePreview&quot;&gt;Show ImagePreview&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      imgs: [
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg&#39;
      ]
    }
  },
  methods: {
    showImagePreview() {
      if (!this.imagePreview) {
        this.imagePreview = this.$createImagePreview({
          imgs: this.imgs
        })
      }
      this.imagePreview.show()
    }
  }
}
</code></pre><p>You can create a basic ImagePreview by setting <code>imgs</code> prop.</p></li><li><p>Custom usage</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCustomImagePreview&quot;&gt;Show Custom ImagePreview&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      customIndex: 1,
      imgs: [
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg&#39;
      ]
    }
  },
  methods: {
    showCustomImagePreview() {
      if (!this.customImagePreview) {
        this.customImagePreview = this.$createImagePreview({
          imgs: this.imgs,
          initialIndex: this.customIndex,
          loop: false,
          speed: 500,
          onChange: (i) =&gt; {
            this.customIndex = i
          },
          onHide: () =&gt; {
            console.log(&#39;hide&#39;)
          }
        }, (h) =&gt; {
          return h(&#39;div&#39;, {
            class: {
              &#39;image-preview-custom-header&#39;: true
            },
            slot: &#39;header&#39;
          }, this.customIndex + 1)
        })
      }
      this.customImagePreview.show()
    }
  }
}
</code></pre><p>You can set other props to config ImagePreview. And you can use render function to define slots content.</p></li><li><p>Multi images</p><pre><code class="language-html">&lt;div class=&quot;imgs-container&quot;&gt;
  &lt;img
    :src=&quot;img&quot;
    v-for=&quot;(img, index) in imgs&quot;
    :key=&quot;img&quot;
    @click=&quot;handleImgsClick(index)&quot;&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      initialIndex: 0,
      imgs: [
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg&#39;,
        &#39;https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg&#39;
      ]
    }
  },
  methods: {
    handleImgsClick(index) {
      this.initialIndex = index
      const params = {
        $props: {
          imgs: this.imgs,
          initialIndex: &#39;initialIndex&#39;, // name of reactive key in data
          loop: false
        },
        $events: {
          change: (i) =&gt; {
            // You must update initialIndex
            this.initialIndex = i
          }
        }
      }
      this.$createImagePreview({ ...params }).show()
    }
  }
}
</code></pre><p>The image-preview component is instantiated in multi-images scenarios, and the displayed image is the image that is clicked each time.</p></li></ul><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>imgs</td><td>image urls</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>initial-index</td><td>initial index</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>loop</td><td>whether to loop swipe</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>speed</td><td>speed of switching pages, ms</td><td>Number</td><td>-</td><td>400</td></tr><tr><td>zIndex<sup>1.10.11</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>preventDefault<sup>1.10.16</sup></td><td>BetterScroll <code>preventDefault</code> option</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>Scope Parameters</th></tr></thead><tbody><tr><td>header</td><td>header content</td><td>current: active index</td></tr><tr><td>footer</td><td>footer content</td><td>current: active index</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when current index changes</td><td>current active index</td></tr><tr><td>hide</td><td>triggers when hide</td><td>-</td></tr></tbody></table>`,13),s=[a],m={__name:"image-preview",setup(o,{expose:t}){return t({frontmatter:{}}),(h,c)=>(n(),e("div",d,s))}};export{m as default};
