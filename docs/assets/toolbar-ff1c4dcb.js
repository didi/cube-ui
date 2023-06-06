import{a as e,o as n,j as o}from"./index-e8a96955.js";const c={class:"markdown-body"},a=o(`<h2>Toolbar</h2><blockquote><p>New in 1.9.0+</p></blockquote><p>Toolbar, with actions &amp; more-actions.</p><h3>Example</h3><ul><li><p>Basic</p><p>You can use <code>actions</code> to define the toolbar actions.</p><pre><code class="language-html">&lt;cube-toolbar :actions=&quot;actions&quot; @click=&quot;clickHandler&quot;&gt;&lt;/cube-toolbar&gt;
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
</code></pre><p>You can use handle the action in <code>click</code> event handler.</p></li><li><p>More actions</p><p>You can use <code>moreActions</code> to define more actions.</p><pre><code class="language-html">&lt;cube-toolbar
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
</code></pre></li></ul><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Demo</th></tr></thead><tbody><tr><td>actions</td><td>actions description</td><td>Array</td><td>[]</td><td>[ {text: ‘完成订单’ } ]</td></tr><tr><td>moreActions</td><td>more actions</td><td>Array</td><td>[]</td><td>[ {text: ‘完成订单’ } ]</td></tr></tbody></table><ul><li><code>actions</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>type, button or checkbox</td><td>String</td><td>button/checkbox</td><td>button</td></tr><tr><td>text</td><td>text, support html string</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>checked</td><td>if type is checkbox, then this value will be the Checkbox’s model alue</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>clicked one item</td><td>item value</td></tr><tr><td>more-click</td><td>clicked more item</td><td>whether more actions is visible</td></tr></tbody></table>`,11),d=[a],u={__name:"toolbar",setup(i,{expose:t}){return t({frontmatter:{}}),(r,l)=>(n(),e("div",c,d))}};export{u as default};
