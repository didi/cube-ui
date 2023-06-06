import{a as n,o as e,j as c}from"./index-e8a96955.js";const i={class:"markdown-body"},o=c(`<h2>Swipe 滑块组件</h2><blockquote><p>1.5.0 新增</p></blockquote><p>滑块组件，提供类似微信列表左滑功能，可以方便地对列表项做一些功能操作。</p><h3>示例</h3><p><code>Swipe</code> 组件的示例相关代码在<a href="https://github.com/didi/cube-ui/tree/master/example/pages/swipe">这里</a></p><ul><li><p>基本使用</p><p><code>Swipe</code> 组件常见的场景是搭配 <code>Scroll</code> 组件使用，既可以纵向滚动，又可以横向左滑出一些按钮对列表项做操作，当然，<code>Swipe</code> 组件也可以单独使用。</p><pre><code class="language-html">&lt;template&gt;
 &lt;div class=&quot;swipe-wrapper&quot;&gt;
    &lt;cube-scroll&gt;
      &lt;cube-swipe
          @item-click=&quot;onItemClick&quot;
          @btn-click=&quot;onBtnClick&quot;
          :data=&quot;swipeData&quot;&gt;
      &lt;/cube-swipe&gt;
    &lt;/cube-scroll&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      swipeData: [{
        item: {
          text: &#39;测试1&#39;,
          value: 1
        },
        btns: [
          {
            action: &#39;clear&#39;,
            text: &#39;不再关注&#39;,
            color: &#39;#c8c7cd&#39;
          },
          {
            action: &#39;delete&#39;,
            text: &#39;删除&#39;,
            color: &#39;#ff3a32&#39;
          }
        ]
      }, {
        item: {
          text: &#39;测试2&#39;,
          value: 2
        },
        btns: [
          {
            action: &#39;clear&#39;,
            text: &#39;不再关注&#39;,
            color: &#39;#c8c7cd&#39;
          },
          {
            action: &#39;delete&#39;,
            text: &#39;删除&#39;,
            color: &#39;#ff3a32&#39;
          }
        ]
      }, {
        item: {
          text: &#39;测试3&#39;,
          value: 3
        },
        btns: [
          {
            action: &#39;clear&#39;,
            text: &#39;不再关注&#39;,
            color: &#39;#c8c7cd&#39;
          },
          {
            action: &#39;delete&#39;,
            text: &#39;删除&#39;,
            color: &#39;#ff3a32&#39;
          }
        ]
      }]
    }
  },
  methods: {
    onItemClick(item) {
      console.log(&#39;click item:&#39;, item)
    },
    onBtnClick(btn, index) {
      if (btn.action === &#39;delete&#39;) {
        this.$createActionSheet({
          title: &#39;确认要删除吗&#39;,
          active: 0,
          data: [
            {content: &#39;删除&#39;}
          ],
          onSelect: () =&gt; {
            this.swipeData.splice(index, 1)
          }
        }).show()
      }
    }
  }
}
</code></pre><p><code>Swipe</code> 组件如果使用默认插槽，则需要传递示例所示的数据结构。</p></li><li><p>自定义插槽</p><p>实际上我们更常见的需求是需要自定义列表的内容展示，因此 <code>Swipe</code> 组件也支持了插槽的使用方式。</p><p>默认插槽可以搭配 <code>cube-swipe-item</code> 组件实现列表的循环。自定义插槽非常灵活，但它也需要自己手动去写一些逻辑，比如如果你想要在列表删除的时候自定义动画，需要使用 <code>transition-group</code>，需要手动去管理每个激活的 <code>swipe-item</code> 的收缩，如示例代码所示。</p><ul><li><p>1.11 之后</p><pre><code class="language-html">&lt;template&gt;
  &lt;div class=&quot;swipe-wrapper&quot;&gt;
    &lt;cube-scroll&gt;
      &lt;cube-swipe&gt;
        &lt;transition-group name=&quot;swipe&quot; tag=&quot;ul&quot;&gt;
          &lt;li class=&quot;swipe-item-wrapper&quot; v-for=&quot;(data,index) in swipeData&quot; :key=&quot;data.item.id&quot;&gt;
            &lt;cube-swipe-item
                ref=&quot;swipeItem&quot;
                :btns=&quot;data.btns&quot;
                :index=&quot;index&quot;
                @btn-click=&quot;onBtnClick&quot;&gt;
              &lt;div @click=&quot;onItemClick(data.item, index)&quot; class=&quot;item-inner&quot;&gt;
                &lt;div class=&quot;icon&quot;&gt;
                  &lt;img width=&quot;60&quot; height=&quot;60&quot; :src=&quot;data.item.imgurl&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;text&quot;&gt;
                  &lt;h2 class=&quot;item-name&quot; v-html=&quot;data.item.name&quot;&gt;&lt;/h2&gt;
                  &lt;p class=&quot;item-desc&quot; v-html=&quot;data.item.desc&quot;&gt;&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/cube-swipe-item&gt;
          &lt;/li&gt;
        &lt;/transition-group&gt;
      &lt;/cube-swipe&gt;
    &lt;/cube-scroll&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      swipeData: [
        {
          item: {
            id: &#39;3646653877&#39;,
            name: &#39;还不是因为你长得不好看&#39;,
            desc: &#39;伤感：歌词再狠，也抵不过现实伤人&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
        {
          item: {
            id: &#39;1789676645&#39;,
            name: &#39;秋水浮萍任飘渺&#39;,
            desc: &#39;『武侠配乐』快意恩仇江湖情&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
        {
          item: {
            id: &#39;3649034125&#39;,
            name: &#39;念葳蕊&#39;,
            desc: &#39;江海迦：热恋后哼一首歌为自己悲悯的歌&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
      ]
    }
  },
  methods: {
    onItemClick(item) {
      console.log(&#39;click item:&#39;, item)
    },
    onBtnClick(btn, index) {
      if (btn.action === &#39;delete&#39;) {
        this.$createActionSheet({
          title: &#39;确认要删除吗&#39;,
          active: 0,
          data: [
            {content: &#39;删除&#39;}
          ],
          onSelect: () =&gt; {
            this.swipeData.splice(index, 1)
          }
        }).show()
      } else {
        this.$refs.swipeItem[index].shrink()
      }
    }
  }
}
</code></pre></li><li><p>1.11 之前</p><p>需要自己手工处理 CubeSwipeItem 的 <code>active</code> 事件逻辑 <code>onItemActive</code> 中。</p><pre><code class="language-html">&lt;template&gt;
  &lt;div class=&quot;swipe-wrapper&quot;&gt;
    &lt;cube-scroll&gt;
      &lt;cube-swipe&gt;
        &lt;transition-group name=&quot;swipe&quot; tag=&quot;ul&quot;&gt;
          &lt;li class=&quot;swipe-item-wrapper&quot; v-for=&quot;(data,index) in swipeData&quot; :key=&quot;data.item.id&quot;&gt;
            &lt;cube-swipe-item
                ref=&quot;swipeItem&quot;
                :btns=&quot;data.btns&quot;
                :index=&quot;index&quot;
                @btn-click=&quot;onBtnClick&quot;
                @active=&quot;onItemActive&quot;&gt;
              &lt;div @click=&quot;onItemClick(data.item, index)&quot; class=&quot;item-inner&quot;&gt;
                &lt;div class=&quot;icon&quot;&gt;
                  &lt;img width=&quot;60&quot; height=&quot;60&quot; :src=&quot;data.item.imgurl&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;text&quot;&gt;
                  &lt;h2 class=&quot;item-name&quot; v-html=&quot;data.item.name&quot;&gt;&lt;/h2&gt;
                  &lt;p class=&quot;item-desc&quot; v-html=&quot;data.item.desc&quot;&gt;&lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/cube-swipe-item&gt;
          &lt;/li&gt;
        &lt;/transition-group&gt;
      &lt;/cube-swipe&gt;
    &lt;/cube-scroll&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      swipeData: [
        {
          item: {
            id: &#39;3646653877&#39;,
            name: &#39;还不是因为你长得不好看&#39;,
            desc: &#39;伤感：歌词再狠，也抵不过现实伤人&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
        {
          item: {
            id: &#39;1789676645&#39;,
            name: &#39;秋水浮萍任飘渺&#39;,
            desc: &#39;『武侠配乐』快意恩仇江湖情&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
        {
          item: {
            id: &#39;3649034125&#39;,
            name: &#39;念葳蕊&#39;,
            desc: &#39;江海迦：热恋后哼一首歌为自己悲悯的歌&#39;,
            imgurl: &#39;http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1&#39;
          },
          btns: [
            {
              action: &#39;clear&#39;,
              text: &#39;不再关注&#39;,
              color: &#39;#c8c7cd&#39;
            },
            {
              action: &#39;delete&#39;,
              text: &#39;删除&#39;,
              color: &#39;#ff3a32&#39;
            }
          ]
        },
      ]
    }
  },
  created() {
    this.activeIndex = -1
  },
  methods: {
    onItemClick(item) {
      console.log(&#39;click item:&#39;, item)
    },
    onBtnClick(btn, index) {
      if (btn.action === &#39;delete&#39;) {
        this.$createActionSheet({
          title: &#39;确认要删除吗&#39;,
          active: 0,
          data: [
            {content: &#39;删除&#39;}
          ],
          onSelect: () =&gt; {
            this.swipeData.splice(index, 1)
          }
        }).show()
      } else {
        this.$refs.swipeItem[index].shrink()
      }
    },
    onItemActive(index) {
      if (index === this.activeIndex) {
        return
      }
      if (this.activeIndex !== -1) {
        const activeItem = this.$refs.swipeItem[this.activeIndex]
        activeItem.shrink()
      }
      this.activeIndex = index
    }
  }
}
</code></pre></li></ul></li></ul><h3>Props 配置</h3><ul><li><code>cube-swipe</code> 配置</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>用于 <code>swipe</code> 列表渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 <code>item</code> 和 <code>btns</code>，这俩参数见 <code>cube-swipe-item</code> 的描述。如果使用自定义插槽，可不传此值。</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>autoShrink</td><td>用于当点击滑块的按钮后，是否需要自动收缩滑块，如果使用自定义插槽，则直接给 <code>cube-swipe-item</code> 传递此值即可。</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><ul><li><code>cube-swipe-item</code> 配置</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>item</td><td>用于 <code>swipe-item</code> 列表项渲染的数据，当需要使用内置的默认插槽，此参数必传，且需要有 <code>value</code> 和 <code>text</code> 2 个字段，分别表示数据项的值和显示的文案，但如果使用自定义插槽，可不传此值。</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>btns</td><td>用于 <code>swipe-item</code> 列表项渲染按钮数组，数组的每一项是一个 Object 类型，至少要包含 <code>text</code> 和 <code>color</code> 2 个字段，分别表示按钮的文案和颜色。</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>index</td><td>表示当前的 <code>swpie-item</code> 在整个列表中的索引值，必传。</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>autoShrink</td><td>用于当点击滑块的按钮后，是否需要自动收缩滑块。</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h3>事件</h3><ul><li><code>cube-swipe</code> 事件</li></ul><p>当使用自定义插槽时，直接监听 <code>cube-swipe-item</code> 上的事件即可。</p><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>item-click</td><td>当列表项目被点击时派发</td><td>点击的列表项</td><td>点击项在列表中的索引</td><td>-</td></tr><tr><td>btn-click</td><td>当按钮被点击时派发</td><td>点击的按钮</td><td>点击按钮在列表中的索引</td><td>列表项<sup>1.9.7</sup></td></tr></tbody></table><ul><li><code>cube-swipe-item</code> 事件</li></ul><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>item-click</td><td>当列表项目被点击时派发</td><td>点击的列表项</td><td>点击项在列表中的索引</td></tr><tr><td>btn-click</td><td>当按钮被点击时派发</td><td>点击的按钮</td><td>点击按钮在列表中的索引</td></tr><tr><td>active</td><td>当开始滑动某个列表项目时派发</td><td>激活项在列表中的索引</td><td>-</td></tr></tbody></table><h3>实例方法</h3><ul><li><code>cube-swipe-item</code> 实例方法</li></ul><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>shrink</td><td>收缩该滑块项</td></tr></tbody></table>`,20),d=[o],p={__name:"swipe",setup(l,{expose:t}){return t({frontmatter:{}}),(s,u)=>(e(),n("div",i,d))}};export{p as default};
