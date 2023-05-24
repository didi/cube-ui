import{a as n,o,j as t}from"./index-9017f177.js";const c={class:"markdown-body"},a=t(`<h2>国际化</h2><blockquote><p>1.11.0 新增</p></blockquote><p>cube-ui 内部所有非可配置的文案，都是中文的形式，所以如果你的应用是需要做对应的国际化文案翻译，那么 cube-ui <code>1.11.0</code> 这个版本是提供了给 cube-ui 组件的文案翻译的能力，甚至这种能力也能延伸至你的应用。</p><h2>cube-ui 组件的国际化</h2><p>cube-ui 默认是用的中文语言包，并且已经注册了。cube-ui 内部也内置了对应的英文语言包，但是你需要如下的逻辑来注册语言包，同时切换至对应的语言。</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import enUSMessages from &#39;cube-ui/src/locale/lang/en-US&#39;

  Vue.use(Locale)
  // 切换至英语，并且缓存当前语言包
  Locale.use(&#39;en-US&#39;, enUSMessages)
</code></pre><p>cube-ui 会监听当前的语言类型，因此自动渲染组件对应的文案，同时缓存加载过的文案，在做组件语言切换的时候，如果语言包已经安装，cube-ui 直接取缓存的文案。类似伪代码如下：</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import enUSMessages from &#39;cube-ui/src/locale/lang/en-US&#39;

  // 默认加载中文语言包
  Vue.use(Locale)

  // 切换至英语，并且需要导入英语语言包
  one.click(() =&gt;{
    Locale.use(&#39;en-US&#39;, enUSMessages)
  })

  another.click(() =&gt; {
    // 从缓存取之前的语言包
    Locale.use(&#39;zh-CN&#39;)
  })
</code></pre><p>但是可能你有其他国家的翻译需求，比如日语、韩语，那么你需要自己提供语言包，并且切换至对应语言。代码如下：</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import jPMessages from &#39;/somewhere/ja-JP.js&#39; // 自己的语言包

  Vue.use(Locale)

  // 切换至日语，并且需要导入日语语言包
  Locale.use(&#39;ja-JP&#39;, jPMessages)
</code></pre><p>你导入的语言包的配置项形式应该与下面相仿，默认的中文语言包如下：</p><pre><code class="language-js">  export default {
    cancel: &#39;取消&#39;,
    confirm: &#39;确认&#39;,
    ok: &#39;确定&#39;,
    prev: &#39;上一步&#39;,
    next: &#39;下一步&#39;,
    selectText: &#39;请选择&#39;,
    now: &#39;现在&#39;,
    selectTime: &#39;选择时间&#39;,
    today: &#39;今日&#39;,
    formatDate: &#39;M月D日&#39;,
    hours: &#39;点&#39;,
    minutes: &#39;分&#39;,
    validator: {
      required: &#39;此为必填项&#39;,
      type: {
        string: &#39;请输入字符&#39;,
        number: &#39;请输入数字&#39;,
        array: &#39;数据类型应为数组&#39;,
        date: &#39;请选择有效日期&#39;,
        email: &#39;请输入有效邮箱&#39;,
        tel: &#39;请输入有效的手机号码&#39;,
        url: &#39;请输入有效网址&#39;
      },
      min: {
        string: &#39;至少输入 {{config}} 位字符&#39;,
        number: &#39;不得小于 {{config}}&#39;,
        array: &#39;请选择至少 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之后的时间&#39;,
        email: &#39;至少输入 {{config}} 位字符&#39;,
        tel: &#39;至少输入 {{config}} 位字符&#39;,
        url: &#39;至少输入 {{config}} 位字符&#39;
      },
      max: {
        string: &#39;请勿超过 {{config}} 位字符&#39;,
        number: &#39;请勿大于 {{config}}&#39;,
        array: &#39;最多选择 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
        email: &#39;请勿超过 {{config}} 位字符&#39;,
        tel: &#39;请勿超过 {{config}} 位字符&#39;,
        url: &#39;请勿超过 {{config}} 位字符&#39;
      },
      len: {
        string: &#39;请输入 {{config}} 位字符&#39;,
        number: &#39;长度应等于 {{config}}&#39;,
        array: &#39;请选择 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
        email: &#39;请输入 {{config}} 位字符&#39;,
        tel: &#39;请输入 {{config}} 位字符&#39;,
        url: &#39;请输入 {{config}} 位字符&#39;
      },
      pattern: &#39;格式错误&#39;,
      custom: &#39;未通过校验&#39;,
      notWhitespace: &#39;空白内容无效&#39;
    }
  }
</code></pre><h2>程序应用的国际化<sup>1.12.23+</sup></h2><p>如上面所述，cube-ui 给自己的组件提供了国际化的能力，但是这种能力也能延伸至你的应用，分两步进行：</p><ol><li><strong>导入语言包</strong></li></ol><p>首先，得导入语言包，这个语言包应该是包含 cube-ui 默认语言包的全集。比如你的语言包配置可能如下：</p><pre><code class="language-js">  // default.js

  export default {
    &quot;application_key&quot;: &quot;这是我应用的翻译&quot;,
    &quot;country&quot;: {
      &quot;province&quot;: &quot;北京&quot;
    }

    /* cube-ui 的默认配置*/
    &quot;cancel&quot;: &quot;Cancel&quot;,
    // ...忽略中间部分的配置，
    &quot;validator&quot;: {/* */}
  }
</code></pre><p>接着在你应用的入口文件导入这个语言包。</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import defaultMessages from &#39;default.js&#39; // 自己的语言包

  Vue.use(Locale)
  Locale.use(&#39;zh-CN&#39;, defaultMessages)
</code></pre><ol start="2"><li><strong>在组件内部通过 mixins 注入翻译的能力</strong></li></ol><p>然后借助于 <code>Vue</code> 提供的 mixin 能力。cube-ui 提供了语言包 <code>key=&gt;value</code> 的转换函数 <code>$t</code>，你只需要在组件的 <code>mixins</code> 属性注入它，之后就可以在模版使用。示例如下：</p><pre><code class="language-js">// dialog.vue

import { Locale } from &#39;cube-ui&#39;
&lt;script&gt;
  export default {
    //...
    mixins: [Locale.localeMixin] // 注入 mixin，拥有 $t 的能力，1.12.23 版本新加
  }
&lt;/script&gt;
</code></pre><p>接着，只需要在模版使用它就行：</p><pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    {{$t(&#39;application_key&#39;)}}
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><p>最后，<code>{{$t(&#39;application_key&#39;)}}</code> 就被渲染成 <code>&quot;这是我应用的翻译&quot;</code>。考虑到你的语言包可能是多层级嵌套，<code>$t</code> 还接受一个以 <code>&quot;.&quot;</code> 为分隔符的字符串，来获取深层次的属性，例如：</p><pre><code class="language-js">// 你的语言包结构形式
export default {
  a: {
    b: {
      c: &quot;嵌套的 c&quot;
    }
  }
}
</code></pre><p>那么你在 <code>template</code> 的使用就很简单。</p><pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    {{$t(&#39;a.b.c&#39;)}}
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>`,28),u=[a],g={__name:"internationalization",setup(i,{expose:e}){return e({frontmatter:{}}),(r,s)=>(o(),n("div",c,u))}};export{g as default};
