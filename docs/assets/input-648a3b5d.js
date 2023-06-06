import{a as e,o as d,j as o}from"./index-e8a96955.js";const a={class:"markdown-body"},l=o(`<h2>Input</h2><blockquote><p>1.5.0 新增</p></blockquote><p>输入框组件。支持使用<code>v-model</code>对数据双向绑定，支持一键清空内容。</p><h3>示例</h3><ul><li><p>基本用法</p><p>使用<code>v-model</code>对输入内容双向绑定。</p><pre><code class="language-html">&lt;cube-input v-model=&quot;value&quot; &gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  }
}
</code></pre></li><li><p>控制最大长度</p><p>通过 watch 组件的 value 值的长度可实现手工控制值长度。</p><pre><code class="language-html">&lt;cube-input v-model=&quot;value&quot;&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;
    }
  },
  watch: {
    value(newV) {
      if (newV.length &gt; 10) {
        newV = newV.slice(0, 10)
        this.$nextTick(() =&gt; {
          this.value = newV
        })
      }
    }
  }
}
</code></pre><p>上述代码就是控制输入内容长度不得超过10位。</p></li><li><p>清空按钮</p><p>可通过<code>clearable</code>配置清空按钮。</p><p>在 1.11.0 版本之前 <code>clearable</code> 的值是布尔类型的，表示是否展示清除按钮；</p><p>在 1.11.0 版本之后 <code>clearable</code> 可配置为布尔类型，还可以配置为对象。</p><pre><code class="language-html">&lt;cube-input
  v-model=&quot;value&quot;
  :clearable=&quot;clearable&quot;
&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;,
      clearable: {
        visible: true,
        blurHidden: true
      }
    }
  }
}
</code></pre><p><code>clearable</code> 配置的对象可以包含两个 key 值：<code>visible</code> 和 <code>blurHidden</code> 分别代表是否展示以及当 Input 元素离焦的时候是否隐藏。</p></li><li><p>密码配置</p><p>可通过<code>eye</code>设置密码眼睛。</p><pre><code class="language-html">&lt;cube-input
  v-model=&quot;value&quot;
  :placeholder=&quot;placeholder&quot;
  :type=&quot;type&quot;
  :maxlength=&quot;maxlength&quot;
  :readonly=&quot;readonly&quot;
  :disabled=&quot;disabled&quot;
  :autofocus=&quot;autofocus&quot;
  :autocomplete=&quot;autocomplete&quot;
  :eye=&quot;eye&quot;
&gt;&lt;/cube-input&gt;
</code></pre><pre><code class="language-javascript">export default {
  data() {
    return {
      value: &#39;&#39;,
      placeholder: &#39;请输入内容&#39;,
      type: &#39;password&#39;,
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: false
      }
    }
  }
}
</code></pre><p>如同上边展示的，除了上述配置，还支持原生 Input 元素的大部分配置。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>input类型</td><td>String</td><td>text/number/password/date</td><td>text</td></tr><tr><td>v-model</td><td>绑定的值</td><td>String</td><td>-</td><td>空</td></tr><tr><td>disabled</td><td>禁用状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>readonly</td><td>只读状态</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maxlength</td><td>最大输入长度</td><td>Number</td><td>-</td><td>60</td></tr><tr><td>placeholder</td><td>占位文本</td><td>String</td><td>-</td><td>空</td></tr><tr><td>autofocus</td><td>自动对焦</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>autocomplete</td><td>自动补全</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>clearable</td><td>是否使用清空按钮，1.11.0 后可配置为对象形式 <code>{visible: true, blurHidden: true}</code>，其中 <code>visible</code> 控制是否显示，<code>blurHidden</code> 控制离焦后是否隐藏</td><td>Boolean/Object<sup>1.11.0+</sup></td><td>true/false/{visible: true, blurHidden: true}</td><td>false</td></tr><tr><td>eye</td><td>默认 false，密码眼睛不可见；如果是 true ，则相当于配置为对象 <code>{ open: true, reverse: false }</code>。对象形式表示使用密码眼睛。其中 <code>open</code> 控制眼睛张开还是闭合。<code>reverse</code> 控制密码可见和眼睛开闭是否相反。</td><td>Boolean/Object</td><td>true/false/{open: true/false, reverse: true/false}</td><td>false</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th></tr></thead><tbody><tr><td>prepend</td><td>前置内容</td></tr><tr><td>append</td><td>后置内容</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>输入框聚焦后触发此事件，如果禁用状态，则不触发</td><td>e - 事件对象</td></tr><tr><td>blur</td><td>输入框失焦后触发此事件</td><td>e - 事件对象</td></tr><tr><td>change</td><td>绑定值改变且输入框失去焦点后触发</td><td>e - 事件对象</td></tr><tr><td>input</td><td>绑定值变化时触发</td><td>更新后的绑定值</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus<sup>1.12.10+</sup></td><td>获得焦点</td></tr><tr><td>blur<sup>1.12.10+</sup></td><td>离焦</td></tr></tbody></table>`,13),r=[l],h={__name:"input",setup(n,{expose:t}){return t({frontmatter:{}}),(c,p)=>(d(),e("div",a,r))}};export{h as default};
