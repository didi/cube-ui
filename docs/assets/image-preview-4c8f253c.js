import{a as e,o as n,j as d}from"./index-e8a96955.js";const a={class:"markdown-body"},i=d(`<h2>ImagePreview</h2><blockquote><p>1.10.0 新增</p></blockquote><p>图片预览，支持切换、放大缩小等能力。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><p>如下示例相关代码在<a href="https://github.com/didi/cube-ui/tree/master/example/pages/image-preview">这里</a>。</p><ul><li><p>默认使用</p><pre><code class="language-html">&lt;cube-button @click=&quot;showImagePreview&quot;&gt;Show ImagePreview&lt;/cube-button&gt;
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
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    }
  }
}
</code></pre><p>只需要提供 <code>imgs</code> 图片地址列表就可以了。</p></li><li><p>多图场景</p><pre><code class="language-html">&lt;div class=&quot;imgs-container&quot;&gt;
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
          initialIndex: &#39;initialIndex&#39;, // 响应式数据的key名
          loop: false
        },
        $events: {
          change: (i) =&gt; {
            // 必须更新 initialIndex
            this.initialIndex = i
          }
        }
      }
      this.$createImagePreview({ ...params }).show()
    }
  }
}
</code></pre><p>大多数应用场景都是多图点击之后，实例化 image-preview 组件，展示的图片是每次被点击的图片。</p></li><li><p>自定义使用</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCustomImagePreview&quot;&gt;Show Custom ImagePreview&lt;/cube-button&gt;
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
      this.$createImagePreview({
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
      }).show()
    }
  }
}
</code></pre><p>我们可通过插槽定义自己的其他自定义需求，通过传入 Prop 重新定义图片预览行为。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>imgs</td><td>图片地址列表</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>initial-index</td><td>初始索引</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>loop</td><td>是否可循环</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>speed</td><td>轮播速度，单位 ms</td><td>Number</td><td>-</td><td>400</td></tr><tr><td>zIndex<sup>1.10.11</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>preventDefault<sup>1.10.16</sup></td><td>是否阻止默认行为，因底层使用 BetterScroll 实现</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>header</td><td>顶部 header 内容</td><td>current: 当前索引</td></tr><tr><td>footer</td><td>底部 footer 内容</td><td>current: 当前索引</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>查看图片索引改变</td><td>当前索引值</td></tr><tr><td>hide</td><td>隐藏</td><td>-</td></tr></tbody></table>`,13),s=[i],m={__name:"image-preview",setup(r,{expose:t}){return t({frontmatter:{}}),(h,p)=>(n(),e("div",a,s))}};export{m as default};
