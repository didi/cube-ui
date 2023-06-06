import{a as t,o,j as n}from"./index-e8a96955.js";const c={class:"markdown-body"},d=n(`<h2>create-api 模块</h2><p>该模块默认暴露出一个 <code>createAPI</code> 函数，可以实现以 API 的形式调用自定义组件。并且既可以在 Vue 实例上下文中调用，也可以<a href="https://didi.github.io/cube-ui/#/zh-CN/docs/create-api#cube-%E5%A6%82%E4%BD%95%E5%9C%A8%E6%99%AE%E9%80%9Ajs%E6%96%87%E4%BB%B6%E4%B8%AD%E6%88%96%E8%80%85%E5%85%A8%E5%B1%80%E8%B0%83%E7%94%A8-anchor">在普通 js 文件中调用</a>。</p><p><strong>注：</strong> 所有通过 <code>createAPI</code> 实现的通过 API 的形式调用的自定义组件（cube-ui 内置的组件）都需要通过 <code>Vue.use</code> 注册才可以。</p><h3>createAPI(Vue, Component, [events, single])</h3><ul><li><p>参数：</p><ul><li><code>{Function} Vue</code> Vue 函数</li><li><code>{Function | Object} Component</code> Vue 组件，组件必须有 name</li><li><code>{Array} [events]</code> 组件实例 emit 的事件名集合</li><li><code>{Boolean} [single]</code> 是否为单例</li></ul></li><li><p>用法：</p><ul><li><p>该方法在 Vue 的 prototype 上增加一个名为 <code>$create{camelize(Component.name)}</code> 的方法，这样就可以在其他组件中直接通过 <code>const instance = this.$createAaBb(config, [renderFn, single])</code> 这样来实例化组件了，而且这个实例化组件的元素是被附加到 <code>body</code> 元素下的。</p></li><li><p><code>const instance = this.$createAaBb(config, renderFn, single)</code></p><p><strong>参数：</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>config</td><td>配置参数，经处理后传给组件</td><td>Object</td><td>{}</td><td>-</td></tr><tr><td>renderFn</td><td>可选参数，用于生成子 VNode 节点，一般场景是处理 slot</td><td>Function</td><td>-</td><td>function (createElement) {…}</td></tr><tr><td>single</td><td>可选参数，创建的时候决定是否是单例的，优先级更高，如果没有传入 renderFn 的话，single 的值就是第二个参数的值</td><td>Boolean</td><td>createAPI() 中传入的 single</td><td>-</td></tr></tbody></table><p><strong>配置参数 <code>config</code>：</strong></p><p>默认所有的值都会当做 props，但是要排除 createAPI 传入的 <code>events</code> 中的事件（默认会做转换，例如：<code>events</code> 的值为 <code>[&#39;click&#39;]</code>，那么 <code>config</code> 中的 <code>onClick</code> 就是作为 <code>click</code> 事件的回调函数，而不是作为 props 传递给组件）。</p><p>1.8.0 版本后 <code>config</code> 中可以直接设置 <code>$props</code> 和 <code>$events</code>，<code>$props</code> 中的值是<strong>响应式</strong>的，自动监控当前实例化上下文（即 <code>this.$createXx</code> 中的 <code>this</code>）的上对应的属性值：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>$props</td><td>传递给组件的 Props</td><td>Object</td><td>-</td><td>{<br> title: ‘title’,<br> content: ‘my content’,<br> open: false<br>}</td></tr><tr><td>$events</td><td>组件的 Events 事件回调</td><td>Object</td><td>-</td><td>{<br> click: ‘clickHandler’,<br> select: this.selectHandler<br>}</td></tr></tbody></table><p><code>$props</code> 示例，约定结构 <code>{ [key]: [propKey] }</code>：</p><pre><code class="language-js">{
  title: &#39;title&#39;,
  content: &#39;my content&#39;,
  open: false
}
</code></pre><p><code>title</code>、<code>content</code>、<code>open</code> 就是传递给组件的 Prop 的 key，而对应 Prop 的值则按照如下规则获取：</p><ol><li>如果是非字符串，则直接取配置的 <code>propKey</code> 作为值</li><li>如果是字符串，且配置的 <code>propKey</code> 不在当前实例上下文属性上，则直接取 <code>propKey</code> 作为值</li><li>是字符串，且在当前实例上下文属性上，那么直接获取当前实例上下文对应的 <code>propKey</code> 的值，且会监控这个值的变化实时更新到组件实例上</li></ol><p><code>$events</code> 示例，约定结构 <code>{ [eventName]: [eventValue] }</code>：</p><pre><code class="language-js">{
  click: &#39;clickHandler&#39;,
  select: this.selectHandler
}
</code></pre><p><code>click</code>、<code>select</code> 就是事件名，而对应的事件回调则按照如下规则获取：</p><ol><li>如果 <code>eventValue</code> 是非字符串，则直接取配置的 <code>eventValue</code> 作为值</li><li>如果 <code>eventValue</code> 是字符串，则直接获取当前实例上下文对应的 <code>eventValue</code> 的值</li></ol><p>1.10.0 版本以后 <code>config</code> 中可以设置 Vue 支持的所有的<a href="https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth">配置值</a>，但是必须要加 <code>$</code>，例如：</p><pre><code class="language-js">this.$createAaBb({
  $attrs: {
    id: &#39;id&#39;
  },
  $class: {
    &#39;my-class&#39;: true
  }
})
</code></pre><p><strong>返回值 <code>instance</code>：</strong></p><p><code>instance</code> 就是组件实例。</p><blockquote><p>这个实例会被<strong>附加或代理 <code>remove</code> 方法</strong></p></blockquote><p>如果调用了，该实例就会被销毁且会从 <code>body</code> 下移除。</p><p>如果说实例化上下文（即 <code>this.$createXx</code> 中的 <code>this</code>）销毁的话会自动移除销毁该实例元素。</p></li></ul></li><li><p>示例：</p><p>我们先编写一个 Hello.vue 组件：</p><pre><code class="language-html">&lt;template&gt;
  &lt;div @click=&quot;clickHandler&quot;&gt;
    {{content}}
    &lt;slot name=&quot;other&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &#39;hello&#39;,
    props: {
      content: {
        type: String,
        default: &#39;Hello&#39;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit(&#39;click&#39;, e)
      }
    }
  }
&lt;/script&gt;
</code></pre><p>然后我们再通过 <code>createAPI</code> 把 Hello.vue 变成一个 API 式调用的组件并调用。</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import Hello from &#39;./Hello.vue&#39;

  // 引入 Style 加载基础样式
  import {
    /* eslint-disable no-unused-vars */
    Style,
    Dialog,
    createAPI
  } from &#39;cube-ui&#39;

  Vue.use(Dialog)

  // 创建 this.$createHello API
  createAPI(Vue, Hello, [&#39;click&#39;], true)

  // 初始化 Vue
  new Vue({
    el: &#39;#app&#39;,
    render: function (h) {
      return h(&#39;button&#39;, {
        on: {
          click: this.showHello
        }
      }, [&#39;Show Hello&#39;])
    },
    methods: {
      showHello() {
        // 直接调用
        // 传入配置对象，默认传入的所有对象全都当做 props 传入组件
        // 除了在调用 createAPI 的时候传入了 events，这里对应的就是
        // on{event name} 会被当做事件回调处理
        const instance = this.$createHello({
          content: &#39;My Hello Content&#39;,
          onClick(e) {
            console.log(&#39;Hello component clicked.&#39;)
          }
        }, /* renderFn */ (createElement) =&gt; {
          return [
            createElement(&#39;p&#39;, {
              slot: &#39;other&#39;
            }, &#39;other content&#39;)
          ]
        })
        // 通过 Vue 组件的 $on 也是可以监听的，看使用场景
        instance.$on(&#39;click&#39;, (e) =&gt; {
          const $dialog = this.$createDialog({
            type: &#39;confirm&#39;,
            content: &#39;点击确定关闭当前实例&#39;,
            icon: &#39;cubeic-alert&#39;
          })
          $dialog.show()

          $dialog.$on(&#39;confirm&#39;, () =&gt; {
            // 销毁实例
            instance.remove()
          }).$on(&#39;cancel&#39;, () =&gt; {
            console.log(&#39;cancel&#39;)
          })
        })
      }
    }
  })
</code></pre><p>示例中就是创建了一个需要 API 调用的组件 <code>Hello</code>，然后在其他组件中去使用，重点就是 <code>showHello()</code> 方法做的事情：调用 <code>this.$createHello(config, renderFn)</code> 实现组件的实例化。</p></li></ul><h3>如何在普通 js 文件中或者全局调用</h3><p>一般当你在 Vue 实例中，你可以直接通过 <code>this.$createHello(config, renderFn)</code> 调用该组件。而如果在普通 JS 中<code>this</code>不是 Vue 实例，这时就可以通过组件本身的 <code>$create</code> 来进行实例化了，比如：</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import Hello from &#39;./Hello.vue&#39;

import {
  createAPI
} from &#39;cube-ui&#39;

// 创建 this.$createHello and $Hello.create API
createAPI(Vue, Hello, [&#39;click&#39;], true)

Hello.$create(config, renderFn)
</code></pre><p>或者内置的组件，例如 Dialog：</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Dialog } from &#39;cube-ui&#39;

Vue.use(Dialog)

Dialog.$create({
  ...
})
</code></pre><p>还有一种思路是通过数据驱动，比如用 vuex 维护一个全局 state，在需要调用该组件时更新状态，然后在 App.vue 里去 watch 这个状态变化来调用该组件。</p>`,11),l=[d],u={__name:"create-api",setup(r,{expose:e}){return e({frontmatter:{}}),(a,s)=>(o(),t("div",c,l))}};export{u as default};
