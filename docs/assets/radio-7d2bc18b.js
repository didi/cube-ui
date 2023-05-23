import{a as e,o as d,j as o}from"./index-9017f177.js";const n={class:"markdown-body"},l=o(`<h2>Radio 单选框组</h2><blockquote><p>1.4.0 新增</p></blockquote><p>单选框组，可设置单选框组内容，样式等。</p><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected&quot; :options=&quot;options&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected: &#39;&#39;,
      options: [&#39;Option1&#39;, &#39;Option2&#39;]
    }
  }
}
</code></pre><p><code>options</code> 为选项数组，默认不选中任何的选项，点击其中一个，则对应的 <code>selected</code> 的值就为选中项的值。</p></li><li><p>设置 value，禁用状态，图标样式</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected2&quot; :options=&quot;options2&quot; position=&quot;right&quot; :hollow-style=&quot;true&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected2: 3,
      options2: [
        {
          label: &#39;Option1&#39;,
          value: 1
        },
        {
          label: &#39;Option2&#39;,
          value: 2
        },
        {
          label: &#39;Option3&#39;,
          value: 3,
          disabled: true
        }
      ]
    }
  }
}
</code></pre><p><code>options</code> 的值可以是对象组成的数组，默认可以设置 <code>label</code> 和 <code>value</code> 分别代表的是显示文案和单选框的值，如果对象中包含了 <code>disabled</code> 为 <code>true</code> 的值，那么此单选框就处于禁用状态。</p><p>设置 <code>position</code> 为 <code>&#39;right&#39;</code>，则单选框图标位置在右边。设置 <code>hollow-style</code> 为 <code>true</code> 则使用镂空样式。</p></li><li><p>水平排列</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected3&quot; :options=&quot;options3&quot; :horizontal=&quot;true&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected3: &#39;3&#39;,
      options3: [
        {
          label: &#39;1&#39;,
          value: &#39;1&#39;
        },
        {
          label: &#39;2&#39;,
          value: &#39;2&#39;
        },
        {
          label: &#39;3&#39;,
          value: &#39;3&#39;,
          disabled: true
        }
      ]
    }
  }
}
</code></pre><p>可通过设置 <code>horizontal</code> 为 <code>true</code> 改变样式为水平排列。</p></li><li><p>使用默认插槽</p><pre><code class="language-html">&lt;cube-radio-group&gt;
  &lt;cube-radio
    v-for=&quot;(option, index) in options4&quot;
    :key=&quot;index&quot;
    :option=&quot;option&quot;
    v-model=&quot;selected4&quot;&gt;
    &lt;img :src=&quot;option.src&quot; /&gt;
  &lt;/cube-radio&gt;
&lt;/cube-radio-group&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected4: &#39;1&#39;,
      options4: [
        {
          label: &#39;1&#39;,
          value: &#39;1&#39;,
          src: &#39;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1516805611092&amp;di=80d0f229dd999ffa3be79d6e317832b0&amp;imgtype=0&amp;src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg&#39;
        },
        {
          label: &#39;2&#39;,
          value: &#39;2&#39;,
          src: &#39;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1516805611092&amp;di=80d0f229dd999ffa3be79d6e317832b0&amp;imgtype=0&amp;src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg&#39;
        },
        {
          label: &#39;3&#39;,
          value: &#39;3&#39;,
          src: &#39;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1516805611092&amp;di=80d0f229dd999ffa3be79d6e317832b0&amp;imgtype=0&amp;src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg&#39;,
          disabled: true
        }
      ]
    }
  }
}
</code></pre></li><li><p>自定义列数<sup>1.12.28</sup></p><p>可通过设计 <code>colNum</code> 控制一行中有几列，colNum 小于1时，按1处理</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected5&quot; :options=&quot;options5&quot; :col-num=&quot;colNum&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected5: &#39;6&#39;,
      options5: [
        {
          label: &#39;1&#39;,
          value: &#39;1&#39;
        },
        {
          label: &#39;2&#39;,
          value: &#39;2&#39;
        },
        {
          label: &#39;3&#39;,
          value: &#39;3&#39;,
          disabled: true
        },
        {
          label: &#39;4&#39;,
          value: &#39;4&#39;
        },
        {
          label: &#39;5&#39;,
          value: &#39;5&#39;
        },
        {
          label: &#39;6&#39;,
          value: &#39;6&#39;,
          disabled: true
        },
        {
          label: &#39;7&#39;,
          value: &#39;7&#39;
        },
        {
          label: &#39;8&#39;,
          value: &#39;8&#39;
        }
      ],
      colNum: 3
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>选项数组</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>position</td><td>图标位置</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>horizontal</td><td>是否水平排列</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>colNum<sup>1.12.28</sup></td><td>一行有几列</td><td>Number</td><td>-</td><td>1</td></tr><tr><td>hollowStyle</td><td>是否是镂空样式的</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>options</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>单选框显示文字</td><td>String</td></tr><tr><td>value</td><td>单选框的值</td><td>String/Number</td></tr><tr><td>disabled</td><td>单选框是否被禁用</td><td>Boolean</td></tr></tbody></table><p>注：如果 <code>options</code> 中的项为字符串也是可以的，此时默认 <code>label</code> 和 <code>value</code> 的值都为该字符串的值。</p><h3>cube-radio Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>选项配置</td><td>Object/String</td><td>-</td><td>-</td></tr><tr><td>position</td><td>图标位置</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>hollow-style</td><td>是否是镂空样式的</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>option</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>单选框显示文字</td><td>String</td></tr><tr><td>value</td><td>单选框的值</td><td>String/Number</td></tr><tr><td>disabled</td><td>单选框是否被禁用</td><td>Boolean</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>input</td><td>绑定值变化时触发</td><td>选中的单选框value值</td></tr></tbody></table>`,16),a=[l],s={__name:"radio",setup(r,{expose:t}){return t({frontmatter:{}}),(u,c)=>(d(),e("div",n,a))}};export{s as default};
