import{a as e,o as d,j as o}from"./index-9017f177.js";const n={class:"markdown-body"},r=o(`<h2>Dialog</h2><p><code>Dialog</code>模态框组件，提供了多种样式及交互形式。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>alert 类型</p><pre><code class="language-html">&lt;cube-button @click=&quot;showAlert&quot;&gt;Dialog - alert&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showAlert() {
      this.$createDialog({
        type: &#39;alert&#39;,
        title: &#39;我是标题&#39;,
        content: &#39;我是内容&#39;,
        icon: &#39;cubeic-alert&#39;
      }).show()
    }
  }
}
</code></pre><p><code>type</code> 可选的值为 <code>alert</code> (对应为提示框)、<code>confirm</code> (对应为确认框)、<code>prompt</code> （对应提示输入框）<sup>1.11.0</sup>。</p></li><li><p>提示输入类型</p><pre><code class="language-html">&lt;cube-button @click=&quot;showPrompt&quot;&gt;Dialog - prompt&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showAlert() {
      this.dialog = this.$createDialog({
        type: &#39;prompt&#39;,
        title: &#39;我是标题&#39;,
        prompt: {
          value: &#39;&#39;,
          placeholder: &#39;请输入&#39;
        },
        onConfirm: (e, promptValue) =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: \`Prompt value: \${promptValue || &#39;&#39;}\`
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>可通过在 confirm 的事件回调的第二个参数获得输入的值。<code>prompt</code> 的值为一个对象，内容会被当做 props 传入 <a href="#/zh-CN/docs/input">Input 组件</a>。</p></li><li><p>按钮设置</p><pre><code class="language-html">&lt;cube-button @click=&quot;showBtn&quot;&gt;Dialog - btn&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showBtn() {
      this.$createDialog({
        type: &#39;confirm&#39;,
        icon: &#39;cubeic-alert&#39;,
        title: &#39;我是标题&#39;,
        content: &#39;我是内容&#39;,
        confirmBtn: {
          text: &#39;确定按钮&#39;,
          active: true,
          disabled: false,
          href: &#39;javascript:;&#39;
        },
        cancelBtn: {
          text: &#39;取消按钮&#39;,
          active: false,
          disabled: false,
          href: &#39;javascript:;&#39;
        },
        onConfirm: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;点击确认按钮&#39;
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;点击取消按钮&#39;
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p>按钮设置可接受 <code>String</code> 或 <code>Object</code> 类型数据，当传入 <code>Object</code> 类型的数据时，可通过 <code>text</code> 字段来设置按钮文案内容、<code>active</code> 字段来设置按钮文案是否高亮、<code>disabled</code> 字段来设置按钮是否禁用、<code>href</code> 字段为按钮的跳转链接。</p></li><li><p>关闭按钮</p><pre><code class="language-html">&lt;cube-button @click=&quot;showClose&quot;&gt;Dialog - show close&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showClose() {
      this.$createDialog({
        type: &#39;alert&#39;,
        icon: &#39;cubeic-alert&#39;,
        showClose: true,
        title: &#39;标题&#39;,
        onClose: () =&gt; {
          this.$createToast({
            type: &#39;warn&#39;,
            time: 1000,
            txt: &#39;点击关闭按钮&#39;
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p><code>showClose</code> 字段决定是否需要显示关闭按钮，同时点击关闭按钮会触发 <code>close</code> 事件，如果传入了 <code>onClose</code> 则会被调用。</p></li><li><p>插槽</p><pre><code class="language-html">&lt;cube-button @click=&quot;showSlot&quot;&gt;Dialog - slot&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showSlot() {
      this.$createDialog({
        type: &#39;alert&#39;,
        confirmBtn: {
          text: &#39;我知道了&#39;,
          active: true
        }
      }, (createElement) =&gt; {
        return [
          createElement(&#39;div&#39;, {
            &#39;class&#39;: {
              &#39;my-title&#39;: true
            },
            slot: &#39;title&#39;
          }, [
            createElement(&#39;div&#39;, {
              &#39;class&#39;: {
                &#39;my-title-img&#39;: true
              }
            }),
            createElement(&#39;p&#39;, &#39;附近车少,优选出租车将来接您&#39;)
          ]),
          createElement(&#39;p&#39;, {
            &#39;class&#39;: {
              &#39;my-content&#39;: true
            },
            slot: &#39;content&#39;
          }, &#39;价格仍按快车计算&#39;)
        ]
      }).show()
    }
  }
}
</code></pre><p><code>$createDialog</code> 的第二个参数是 <a href="https://vuejs.org/v2/guide/render-function.html">render 函数</a>，一般用于处理插槽的场景；Dialog 组件提供了 2 个具名的插槽 <code>title</code> 和 <code>content</code>，分别用来分发标题和内容。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>提示框 alert / 确认框 confirm / 提示输入框 prompt<sup>1.11.0</sup></td><td>alert</td></tr><tr><td>icon</td><td>图标的 class 名</td><td>String</td><td><a href="#/zh-CN/docs/style">参照 style 模块下的内置 icon 部分</a></td><td>‘’</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>content</td><td>正文</td><td>String</td><td>-</td><td>‘’</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>confirmBtn</td><td>确认按钮参数配置</td><td>Object/String</td><td>-</td><td>{ text: ‘确定’, active: true, href: ‘javascript:;’ }</td></tr><tr><td>cancelBtn</td><td>取消按钮参数配置</td><td>Object/String</td><td>-</td><td>{ text: ‘取消’, active: false, href: ‘javascript:;’ }</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>prompt<sup>1.11.0</sup></td><td>prompt 配置，可配置的都是 <a href="#/zh-CN/docs/input">Input 组件</a> 的 prop</td><td>Object</td><td>-</td><td>{}</td></tr></tbody></table><ul><li><code>confirmBtn</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>按钮文案</td><td>String</td><td>-</td><td>‘确认’</td></tr><tr><td>active</td><td>是否高亮</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>href</td><td>点击按钮后的跳转链接</td><td>String</td><td>-</td><td>‘javascript:;’</td></tr></tbody></table><ul><li><code>cancelBtn</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>按钮文案</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>active</td><td>是否高亮</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>href</td><td>点击按钮后的跳转链接</td><td>String</td><td>-</td><td>‘javascript:;’</td></tr></tbody></table><h3>插槽</h3><table><thead><tr><th>名字</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>-</td></tr><tr><td>content</td><td>内容</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认按钮后触发</td><td>事件对象 e</td><td>类型为 prompt 时，输入的值 promptValue</td></tr><tr><td>cancel</td><td>点击取消按钮后触发</td><td>事件对象 e</td><td>-</td></tr><tr><td>close</td><td>点击关闭按钮后触发</td><td>事件对象 e</td><td>-</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,17),a=[r],p={__name:"dialog",setup(c,{expose:t}){return t({frontmatter:{}}),(s,h)=>(d(),e("div",n,a))}};export{p as default};
