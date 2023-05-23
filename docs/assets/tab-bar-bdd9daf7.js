import{a as e,o as l,j as a}from"./index-9017f177.js";const d={class:"markdown-body"},o=a(`<h2>TabBar</h2><blockquote><p>1.10.0 新增</p></blockquote><p>选项卡。</p><h3>示例</h3><p>如下示例相关代码在<a href="https://github.com/didi/cube-ui/tree/master/example/pages/tab-bar">这里</a>。</p><h3>CubeTabBar</h3><p>支持默认的点击高亮效果，又支持下划线跟随的效果，并且支持自定义的插槽，实现icon与label搭配的类似于app底部选项卡的样式。</p><ul><li><p>默认样式</p><p>传入如下 <code>tabs</code> 的数据结构便能初始化 <code>cube-tab-bar</code>，必须使用 <code>v-model</code> 指令来选中对应的 tab， v-model 的参数的值必须与某一项 tab 的 label 属性对应（1.12.5 版本后是和 value 属性对应），icon 属性是用做于 class 选择器，一般是用字体图标样式，<code>cube-tab-bar</code> 在不同的时机派发 <code>click</code> 与 <code>change</code> 事件，参数则是每次选中的 tab 对应的 label 值（1.12.5 版本后是 value 值）。</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar
    v-model=&quot;selectedLabelDefault&quot;
    :data=&quot;tabs&quot;
    @click=&quot;clickHandler&quot;
    @change=&quot;changeHandler&quot;&gt;
  &lt;/cube-tab-bar&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data () {
    return {
      selectedLabelDefault: &#39;Vip&#39;,
      tabs: [{
        label: &#39;Home&#39;,
        icon: &#39;cubeic-home&#39;
      }, {
        label: &#39;Like&#39;,
        icon: &#39;cubeic-like&#39;
      }, {
        label: &#39;Vip&#39;,
        icon: &#39;cubeic-vip&#39;
      }, {
        label: &#39;Me&#39;,
        icon: &#39;cubeic-person&#39;
      }]
    }
  }，
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print &#39;Home&#39;
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</code></pre></li><li><p>自定义插槽</p><p>实际上我们更常见的需求是图标搭配文字效果，因此 <code>cube-tab-bar</code> 组件也支持了插槽的使用方式， 注意必须搭配 <code>cube-tab</code> 组件作为第一层级的子组件，来包裹你自定义插槽。</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar
    v-model=&quot;selectedLabelSlots&quot;
    show-slider
    inline
    @click=&quot;clickHandler&quot;&gt;
    &lt;cube-tab v-for=&quot;(item, index) in tabs&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
      &lt;!-- name为icon的插槽 --&gt;
      &lt;i slot=&quot;icon&quot; :class=&quot;item.icon&quot;&gt;&lt;/i&gt;
      &lt;!-- 默认插槽 --&gt;
      {{item.label}}
    &lt;/cube-tab&gt;
  &lt;/cube-tab-bar&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data () {
    return {
      selectedLabelSlots: &#39;Like&#39;,
      tabs: [{
        label: &#39;Home&#39;,
        icon: &#39;cubeic-home&#39;
      }, {
        label: &#39;Like&#39;,
        icon: &#39;cubeic-like&#39;
      }, {
        label: &#39;Vip&#39;,
        icon: &#39;cubeic-vip&#39;
      }, {
        label: &#39;Me&#39;,
        icon: &#39;cubeic-person&#39;
      }]
    }
  }，
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print &#39;Home&#39;
      console.log(label)
    }
  }
}
</code></pre><p>同时还支持一些配置项， <code>showSlider</code> 控制是否开启下划线跟随的效果，<code>inline</code> 来决定icon与label是否处于一行，<code>useTransition</code> 控制下划线是否使用transition过渡，如示例代码所示。</p></li></ul><h3>CubeTabBar &amp; CubeTabPanels</h3><p>往往我们的需求是随着 tab 的切换显示不同的容器，这个时候需要搭配 <code>cube-tab-panels</code> 组件。<code>cube-tab-panels</code> 必须嵌套 <code>cube-tab-panel</code>，传入 <code>cube-tab</code> 与 <code>cube-tab-panel</code> 的label值必须一致（1.12.5 版本后和 value 值一致），因为需要建立一个 tab 对应一个 panel 的关系。他们通过相同的 <code>v-model</code> 联动。查看效果可点击右边的 <code>tab-basic</code> 示例。</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar v-model=&quot;selectedLabel&quot; show-slider&gt;
    &lt;cube-tab v-for=&quot;(item, index) in tabs&quot; :icon=&quot;item.icon&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
    &lt;/cube-tab&gt;
  &lt;/cube-tab-bar&gt;
  &lt;cube-tab-panels v-model=&quot;selectedLabel&quot;&gt;
    &lt;cube-tab-panel v-for=&quot;(item, index) in tabs&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
      &lt;ul&gt;
        &lt;li class=&quot;tab-panel-li&quot; v-for=&quot;(hero, index) in item.heroes&quot;&gt;
          {{hero}}
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-tab-panel&gt;
  &lt;/cube-tab-panels&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data () {
    return {
      selectedLabel: &#39;天辉&#39;,
      tabs: [{
        label: &#39;天辉&#39;,
        icon: &#39;cubeic-like&#39;,
        heroes: [&#39;敌法师&#39;, &#39;卓尔游侠&#39;, &#39;主宰&#39;, &#39;米拉娜&#39;, &#39;变体精灵&#39;, &#39;幻影长矛手&#39;, &#39;复仇之魂&#39;, &#39;力丸&#39;, &#39;矮人狙击手&#39;, &#39;圣堂刺客&#39;, &#39;露娜&#39;, &#39;赏金猎人&#39;, &#39;熊战士&#39;]
      }, {
        label: &#39;夜魇&#39;,
        icon: &#39;cubeic-star&#39;,
        heroes: [&#39;血魔&#39;, &#39;影魔&#39;, &#39;剃刀&#39;, &#39;剧毒术士&#39;, &#39;虚空假面&#39;, &#39;幻影刺客&#39;, &#39;冥界亚龙&#39;, &#39;克林克兹&#39;, &#39;育母蜘蛛&#39;, &#39;编织者&#39;, &#39;幽鬼&#39;, &#39;司夜刺客&#39;, &#39;米波&#39;]
      }]
    }
  }
}
</code></pre><p>事实上，<code>cube-tab-bar</code> 还能搭配许多其他cube-ui的组件(cube-slide ，cube-scroll)来做出类似原生 app 布局的效果。可点击右边的 <code>ScrollTab Demo</code> 与 <code>tab-composite</code> 示例来查看效果</p><h3>Props 配置</h3><ul><li><p>CubeTabBar</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>示例</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>使用 v-model，初始化时选中对应的 tab</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>data</td><td>用于 <code>cube-tab-bar</code> 渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 <code>label</code>、<code>icon</code> 和 <code>value</code>（默认值等于 <code>label</code>）<sup>1.12.5+</sup>，如果使用自定义插槽，可不传此值</td><td>Array</td><td>[{label: 1, value: 1, icon: ‘cubeic-like’}， {label: 2, value: 2, icon: ‘cubeic-like’}]</td><td>[]</td></tr><tr><td>showSlider</td><td>是否开启下划线跟随效果</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>inline</td><td>文字与图标是否显示在一行</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>useTransition</td><td>是否开启 transition 过渡</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table></li><li><p>CubeTab</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>是否必传</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>1.12.5 版本前作为哪个 tab 的值作为选中值，1.12.5 版本后主要用作展示</td><td>String/Number</td><td>是</td><td>-</td></tr><tr><td>value</td><td>用于判断哪个 tab 的值作为选中值<sup>1.12.5+</sup></td><td>String/Number</td><td>否</td><td><code>label</code> 的值</td></tr></tbody></table></li><li><p>CubeTabPanels</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>示例</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>使用 v-model，初始化时显示对应的 panels</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>data</td><td>用于 <code>cube-tab-panels</code> 渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 <code>label</code> 和 <code>value</code><sup>1.12.5+</sup>，如果使用自定义插槽，可不传此值</td><td>Array</td><td>[{label: 1, value: 1}, {label: 2, value: 2}]</td><td>[]</td></tr></tbody></table></li><li><p>CubeTabPanel</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>是否必传</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>用于显示 panel</td><td>String/Number</td><td>是</td><td>-</td></tr><tr><td>value</td><td>panel 的 key 值，决定了选中的值<sup>1.12.5+</sup></td><td>String/Number</td><td>是</td><td><code>value</code> 的值</td></tr></tbody></table></li></ul><h3>插槽</h3><ul><li><p>CubeTab</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td><code>cube-tab</code> 渲染的文案</td></tr><tr><td>icon</td><td>一般是用来添加 icon 图标</td></tr></tbody></table></li></ul><h3>事件</h3><ul><li><p>CubeTabBar</p><p>| 事件名 | 说明 | 参数1 | | - | - | - | - | | click | 当 tab 被点击时派发 | 点中的tab的label/value<sup>1.12.5+</sup>值 | | change | 当点击不同的 tab 时派发 | 点中的tab的label/value<sup>1.12.5+</sup>值 |</p></li></ul><h3>实例方法</h3><ul><li><p>CubeTabBar</p><p>当该实例的 <code>showSlider</code> 属性设置为true，该方法才有效。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数类型</th></tr></thead><tbody><tr><td>setSliderTransform</td><td>改变 <code>cube-tab-bar</code> 组件的下划线的 transformX，如果传 Number，会转成像素，也可以传带有单位的 String</td><td>Number/String</td></tr></tbody></table></li></ul>`,21),c=[o],s={__name:"tab-bar",setup(n,{expose:t}){return t({frontmatter:{}}),(u,r)=>(l(),e("div",d,c))}};export{s as default};
