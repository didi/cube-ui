import{a as e,o as n,j as o}from"./index-9017f177.js";const c={class:"markdown-body"},d=o(`<h2>Toolbar</h2><blockquote><p>1.9.0 新增</p></blockquote><p>工具栏，可以组合多个按钮，复选框操作为一个工具栏。</p><h3>示例</h3><ul><li><p>基础使用</p><p>将每个操作的类型和文本传入 <code>actions</code> 属性。</p><pre><code class="language-html">&lt;cube-toolbar :actions=&quot;actions&quot; @click=&quot;clickHandler&quot;&gt;&lt;/cube-toolbar&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      money: 10,
      actions: [
        {
          text: &#39;完成订单&#39;,
          action: &#39;showText&#39;
        },
        {
          text: &#39;打车来接&#39;,
          checked: false,
          type: &#39;checkbox&#39;
        },
        {
          text: &#39;一口价&lt;span class=&quot;orange&quot;&gt;10元&lt;/span&gt;&#39;,
          action: &#39;moreMoney&#39;
        }
      ]
    }
  },
  methods: {
    showText(item) {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;clicked &#39; + item.text,
        time: 1000
      }).show()
    },
    moreMoney(item) {
      this.money += 10
      item.text = &#39;一口价&lt;span class=&quot;orange&quot;&gt;&#39; + this.money + &#39;元&lt;/span&gt;&#39;
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
}
</code></pre><pre><code class="language-stylus">.orange
  color: #fc9153
</code></pre></li><li><p>更多操作</p><p>你还可以通过 <code>moreActions</code> 属性传入更多操作，就会把工具栏扩展成可展开收起的双层工具栏。</p><pre><code class="language-html">&lt;cube-toolbar
  :actions=&quot;actions&quot;
  :more-actions=&quot;moreActions&quot;
  @click=&quot;clickHandler&quot;&gt;&lt;/cube-toolbar&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      money: 10,
      actions: [
        {
          text: &#39;完成订单&#39;,
          action: &#39;showText&#39;
        },
        {
          text: &#39;打车来接&#39;,
          checked: false,
          type: &#39;checkbox&#39;
        },
        {
          text: &#39;一口价&lt;span class=&quot;orange&quot;&gt;10元&lt;/span&gt;&#39;,
          action: &#39;moreMoney&#39;
        }
      ],
      moreActions: [
        {
          text: &#39;操作a&#39;,
          action: &#39;showText&#39;
        },
        {
          text: &#39;操作b&#39;,
          action: &#39;showText&#39;
        },
        {
          text: &#39;操作c&#39;,
          icon: &#39;cubeic-right&#39;,
          action: &#39;showText&#39;
        }
      ]
    }
  },
  methods: {
    showText(item) {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;clicked &#39; + item.text,
        time: 1000
      }).show()
    },
    moreMoney(item) {
      this.money += 10
      item.text = &#39;一口价&lt;span class=&quot;orange&quot;&gt;&#39; + this.money + &#39;元&lt;/span&gt;&#39;
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
}
</code></pre><pre><code class="language-stylus">.orange
  color: #fc9153
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>actions</td><td>定义一组操作</td><td>Array</td><td>[]</td><td>[ {text: ‘完成订单’ } ]</td></tr><tr><td>moreActions</td><td>定义更多的一组操作</td><td>Array</td><td>[]</td><td>[ {text: ‘完成订单’ } ]</td></tr></tbody></table><ul><li><code>actions</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，包括 button 和 checkbox</td><td>String</td><td>button/checkbox</td><td>button</td></tr><tr><td>text</td><td>文案，支持写入 html</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>checked</td><td>当为 checkbox 类型时，checkbox的初始状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击某一项触发</td><td>该项 item 的值</td></tr><tr><td>more-click</td><td>当有更多操作时，点击更多按钮时触发</td><td>更多操作是否是显示状态</td></tr></tbody></table>`,11),a=[d],u={__name:"toolbar",setup(r,{expose:t}){return t({frontmatter:{}}),(l,i)=>(n(),e("div",c,a))}};export{u as default};
