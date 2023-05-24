import{a as e,o as n,j as d}from"./index-9017f177.js";const o={class:"markdown-body"},c=d(`<h2>Checker</h2><p>Checker 是更加灵活的选择组件，可以自定义需要的布局样式。</p><h3>示例</h3><ul><li><p>默认</p><pre><code class="language-html">&lt;cube-checker
  v-model=&quot;checkerValue&quot;
  :options=&quot;options&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkerValue: [],
      options: [
        {
          value: 1,
          text: &#39;red&#39;
        },
        {
          value: 2,
          text: &#39;yellow&#39;
        },
        {
          value: 3,
          text: &#39;blue&#39;
        },
        {
          value: 4,
          text: &#39;green&#39;
        }
      ]
    }
  }
}
</code></pre><p>如果选中了，则 <code>checkerValue</code> 的值就为 <code>value</code>。</p><p>设置 <code>option</code>，当选中某一项的时候，<code>checkerValue</code> 的值就是 <code>&#39;optionValue&#39;</code>，当未选中的时候，<code>checkerValue</code> 的值就是 <code>&#39;&#39;</code>。</p></li><li><p>单选</p><pre><code class="language-html">&lt;cube-checker
  v-model=&quot;checkerValue&quot;
  :options=&quot;options&quot;
  type=&quot;radio&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkerValue: &#39;&#39;,
      options: [
        {
          value: 0,
          text: &#39;AAAAA&#39;
        },
        {
          value: 1,
          text: &#39;BBBBB&#39;
        }
      ]
    }
  }
}
</code></pre><p>可通过设置 <code>type</code> ，若为 <code>&#39;radio&#39;</code> 则是单选，若为 <code>&#39;checkbox&#39;</code> 则是多选。</p></li><li><p>自定义结构</p><p>可通过默认插槽插入 CubeCheckerItem 实现自定义每项的结构。</p><pre><code class="language-html">&lt;cube-checker
  v-model=&quot;checkerList&quot;
  :options=&quot;options&quot;
  type=&quot;radio&quot;&gt;
  &lt;cube-checker-item
    v-for=&quot;item in options&quot;
    :key=&quot;item.value&quot;
    :option=&quot;item&quot;&gt;
    &lt;span class=&quot;orange&quot;&gt;&lt;i class=&quot;cubeic-alert&quot;&gt;&lt;/i&gt;{{item.text}}&lt;/span&gt;
  &lt;/cube-checker-item&gt;
&lt;/cube-checker&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkerList: [],
      options: [
        {
          value: 0,
          text: &#39;AAAAA&#39;
        },
        {
          value: 1,
          text: &#39;BBBBB&#39;
        }
      ]
    }
  }
}
</code></pre></li><li><p>个数限制</p><p><code>max</code> 设置最多可选个数，多选时可用。</p><p><code>min</code> 设置最少可选个数，多选时可用。</p><pre><code class="language-html">&lt;cube-checker
  v-model=&quot;checkerList&quot;
  :options=&quot;options&quot;
  :min=&quot;1&quot;
  :max=&quot;2&quot;/&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkerList: [3],
      options: [
        {
          value: 1,
          text: &#39;red&#39;
        },
        {
          value: 2,
          text: &#39;yellow&#39;
        },
        {
          value: 3,
          text: &#39;blue&#39;
        },
        {
          value: 4,
          text: &#39;green&#39;
        }
      ]
    }
  }
}
</code></pre></li><li><p>不可点击状态<sup>1.12.19</sup></p><p><code>disabled</code> 设置禁用状态。</p><pre><code class="language-html">&lt;cube-checker
  v-model=&quot;checkerList&quot;
  :options=&quot;options&quot;/&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      checkerList: [2],
      options: [
        {
          value: 1,
          text: &#39;first&#39;,
          disabled: true
        },
        {
          value: 2,
          text: &#39;second&#39;,
          disabled: true
        },
        {
          value: 3,
          text: &#39;third&#39;
        }
      ]
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>配置项集合</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>type</td><td>选项类型</td><td>String</td><td>checkbox/radio</td><td>checkbox</td></tr><tr><td>min</td><td>最少可选个数</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max</td><td>最多可选个数</td><td>Number</td><td>-</td><td>options 的长度</td></tr></tbody></table><ul><li>options 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>String/Number</td></tr><tr><td>text</td><td>选项的文本</td><td>String</td></tr><tr><td>disabled<sup>1.12.19</sup></td><td>选项是否被禁用</td><td>Boolean</td></tr></tbody></table><h3>CubeCheckerItem Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>单个配置项</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><ul><li>option 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>String/Number</td></tr><tr><td>text</td><td>选项的文本</td><td>String</td></tr><tr><td>disabled<sup>1.12.19</sup></td><td>选项是否被禁用</td><td>Boolean</td></tr></tbody></table>`,12),r=[c],h={__name:"checker",setup(a,{expose:t}){return t({frontmatter:{}}),(u,p)=>(n(),e("div",o,r))}};export{h as default};
