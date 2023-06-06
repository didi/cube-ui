import{a as e,o as n,j as i}from"./index-e8a96955.js";const o={class:"markdown-body"},c=i(`<h2>Swipe</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>The Swipe component, which provides a WeChat list left slip function, makes it easy to do some functional operations on the list items.</p><h3>Example</h3><p><code>Swipe</code> demo code is <a href="https://github.com/didi/cube-ui/tree/master/example/pages/swipe">here</a></p><ul><li><p>Basic Usage</p><p>The common scenario of <code>Swipe</code> component is to match <code>Scroll</code> components. It can not only scroll vertically, but also slide out some buttons to do list items. Of course, <code>Swipe</code> components can also be used separately.</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre><p>If the <code>Swipe</code> component uses a default slot, you need to pass the data structure shown in the example.</p></li><li><p>Custom slots</p><p>In fact, our more common requirement is the need for a display of the content of a custom list, so the <code>Swipe</code> component also supports the use of slots.</p><p>The default slot can be used with the <code>cube-swipe-item</code> component to realize the loop of the list. A custom slot is very flexible, but it also need to manually write some logic, for example if you want to customize the list when deleted animation, need to use <code>transition-group</code> to manage each need to manually activate the <code>swipe-item</code> contraction, as shown in the example code.</p><ul><li><p>1.11+</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre></li><li><p>Before 1.11</p><p>You need to handle CubeSwipeItem <code>active</code> event <code>onItemActive</code>:</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre></li></ul></li></ul><h3>Props configuration</h3><ul><li><code>cube-swipe</code> configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>For <code>swipe</code> list rendered data, when you need to use the built-in default slot, this parameter will be passed. Every item in the array is an Object type, including <code>item</code> and <code>btns</code>. These two parameters are described in <code>cube-swipe-item</code>. If a custom slot is used, this value may not be passed.</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>autoShrink</td><td>Decide whether to automatically shrink the slider when the button is clicked, If you use a custom slot, you can pass this value directly to the <code>cube-swipe-item</code>.</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><ul><li><code>cube-swipe-item</code> 配置</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>item</td><td>Data for <code>swipe-item</code> list item rendering, when you need to use the built-in default slot, this parameter must be transmitted, and there are 2 fields, <code>value</code> and <code>text</code>, representing the value of the data item and the displayed copy respectively, but if you use custom slot, you can not pass this value.</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>btns</td><td>For <code>swipe-item</code> list item rendering button array, each item of the array is a Object type. It contains at least 2 fields, <code>text</code> and <code>color</code>, which represent the copy and color of the button respectively.</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>index</td><td>The index value of the current <code>swpie-item</code> in the entire list, must be passed.</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>autoShrink</td><td>Decide whether to automatically shrink the slider when the button is clicked.</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h3>Events</h3><ul><li><code>cube-swipe</code> event</li></ul><p>When you use a custom slot, you can listen directly to the events on the <code>cube-swipe-item</code>.</p><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>item-click</td><td>Triggered when the list item is clicked</td><td>Clicked list item</td><td>The Index of the clicked list item in the list</td><td>-</td></tr><tr><td>btn-click</td><td>Triggered when the button is clicked</td><td>Clicked button</td><td>The index of the clicked button in the list</td><td>the list item<sup>1.9.7</sup></td></tr></tbody></table><ul><li><code>cube-swipe-item</code> event</li></ul><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th></tr></thead><tbody><tr><td>item-click</td><td>Triggered when the list item is clicked</td><td>Clicked list item</td><td>The Index of the clicked list item</td></tr><tr><td>btn-click</td><td>Triggered when the button is clicked</td><td>Clicked button</td><td>The index of the clicked button in the list</td></tr><tr><td>active</td><td>Triggered when you start sliding one of the list item</td><td>The index of the activation item in the list</td><td>-</td></tr></tbody></table><h3>Instance methods</h3><ul><li><code>cube-swipe-item</code> instance methods</li></ul><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>shrink</td><td>Shrink the swipe item</td></tr></tbody></table>`,20),d=[c],h={__name:"swipe",setup(a,{expose:t}){return t({frontmatter:{}}),(s,r)=>(n(),e("div",o,d))}};export{h as default};
