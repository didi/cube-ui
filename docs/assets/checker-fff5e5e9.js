import{a as e,o,j as n}from"./index-9017f177.js";const d={class:"markdown-body"},c=n(`<h2>Checker</h2><p>Checker is more flexible selection component, you can alse customize the layout.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-checker
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
</code></pre><p>The value of <code>options</code> is an array. The default <code>checkerValue</code> value is <code>&#39;&#39;</code>, If you clicked one option, the <code>checkerValue</code> will be set as the value of this option.</p></li><li><p>radio</p><pre><code class="language-html">&lt;cube-checker
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
</code></pre><p>If the <code>type</code> is set to <code>&#39;radio&#39;</code>, the checker will be a radio type. The default type is a <code>&#39;checkbox&#39;</code>.</p></li><li><p>Use slot</p><p>You can use slot to implement custom layout.</p><pre><code class="language-html">&lt;cube-checker
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
</code></pre></li><li><p>Use min &amp; max prop</p><p>You can use <code>min</code> and <code>max</code> prop but the <code>type</code> must set to <code>&#39;checkbox&#39;</code>.</p><p><code>max</code> set the max number of checked items, <code>min</code> set the min number of checked items.</p><pre><code class="language-html">&lt;cube-checker
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
</code></pre></li><li><p>disabled state <sup>1.12.19</sup></p><p>use <code>disabled</code> to set disabled state</p><pre><code class="language-html">&lt;cube-checker
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>options</td><td>a collection of configuration items</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>type</td><td>the type of checker</td><td>String</td><td>checkbox/radio</td><td>checkbox</td></tr><tr><td>min</td><td>the min number</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max</td><td>the max number</td><td>Number</td><td>-</td><td>options length</td></tr></tbody></table><ul><li>options sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>value</td><td>the value of checker item</td><td>String/Number</td></tr><tr><td>text</td><td>the text of checker item</td><td>String</td></tr><tr><td>disabled<sup>1.12.19</sup></td><td>disabled state of checker item</td><td>Boolean</td></tr></tbody></table><h3>CubeCheckerItem Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>option</td><td>item configuration object</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><ul><li>option sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>value</td><td>the value of checker item</td><td>String/Number</td></tr><tr><td>text</td><td>the text of checker item</td><td>String</td></tr><tr><td>disabled<sup>1.12.19</sup></td><td>disabled state of checker item</td><td>Boolean</td></tr></tbody></table>`,12),a=[c],h={__name:"checker",setup(r,{expose:t}){return t({frontmatter:{}}),(l,i)=>(o(),e("div",d,a))}};export{h as default};
