import{a as e,o,j as d}from"./index-e8a96955.js";const n={class:"markdown-body"},a=d(`<h2>Radio</h2><blockquote><p>New in 1.4.0+</p></blockquote><p>Radio component. You could set the options and the position of the radio’s icon.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected&quot; :options=&quot;options&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected: &#39;&#39;,
      options: [&#39;Option1&#39;, &#39;Option2&#39;]
    }
  }
}
</code></pre><p>The value of <code>options</code> is an array. The default <code>selected</code> value is <code>&#39;&#39;</code>, which means no option will be selected by defaut. If you clicked one radio option, the <code>selected</code> will be set as the value of this option.</p></li><li><p>Configure the label, value, disabled state of options and icon style.</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected2&quot; :options=&quot;options2&quot; position=&quot;right&quot; :hollow-style=&quot;true&quot; /&gt;
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
</code></pre><p>The <code>options</code> value can be an array which has some object items. You can set <code>label</code> and <code>value</code> in each item, and use <code>disabled</code> to configure whether the radio item’s state is disabled.</p><p>If the <code>position</code> is set as <code>&#39;right&#39;</code>, the radio’s icon will be posited at the right of the label. Set <code>hollow-style=true</code> to use hollow-out style.</p></li><li><p>Horizontal order</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected3&quot; :options=&quot;options3&quot; :horizontal=&quot;true&quot; /&gt;
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
</code></pre><p>You can use <code>horizontal</code> to configure the style to horizontal layout.</p></li><li><p>Use slot</p><pre><code class="language-html">&lt;cube-radio-group&gt;
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
</code></pre></li><li><p>Set column number<sup>1.12.28</sup></p><p>You can use <code>colNum</code> to control the display columns</p><pre><code class="language-html">&lt;cube-radio-group v-model=&quot;selected5&quot; :options=&quot;options5&quot; :col-num=&quot;colNum&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selected5: &#39;2&#39;,
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>options</td><td>the array of radio options</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>position</td><td>icon position</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>colNum<sup>1.12.28</sup></td><td>column number</td><td>Number</td><td>-</td><td>1</td></tr><tr><td>horizontal</td><td>whether use horizontal layout</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>hollowStyle</td><td>whether is hollow-out style</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>options</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>label</td><td>the text of label</td><td>String</td></tr><tr><td>value</td><td>the value of radio item</td><td>String/Number</td></tr><tr><td>disabled</td><td>whether the radio item is disabled</td><td>Boolean</td></tr></tbody></table><p>Note: Each item of <code>options</code> can be an string, Which means both the <code>label</code> and <code>value</code> will be set as this string.</p><h3>cube-radio Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>option</td><td>option value</td><td>Object/String</td><td>-</td><td>-</td></tr><tr><td>position</td><td>icon position</td><td>String</td><td>left/right</td><td>left</td></tr><tr><td>hollow-style</td><td>whether is hollow-out style</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><ul><li><code>option</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>label</td><td>the text of label</td><td>String</td></tr><tr><td>value</td><td>the value of radio item</td><td>String/Number</td></tr><tr><td>disabled</td><td>whether the radio item is disabled</td><td>Boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>input</td><td>triggers when the binding value changes</td><td>the value of the chosen radio</td></tr></tbody></table>`,16),l=[a],p={__name:"radio",setup(i,{expose:t}){return t({frontmatter:{}}),(s,u)=>(o(),e("div",n,l))}};export{p as default};
