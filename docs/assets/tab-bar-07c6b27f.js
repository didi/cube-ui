import{a as t,o as a,j as o}from"./index-9017f177.js";const l={class:"markdown-body"},d=o(`<h2>TabBar</h2><blockquote><p>New in 1.10.0+</p></blockquote><p>Implementing the function of tab switching.</p><h3>Example</h3><p>The following demo code is <a href="https://github.com/didi/cube-ui/tree/master/example/pages/tab-bar">here</a>.</p><h3>CubeTabBar</h3><p><code>cube-tab-bar</code> supports click highlighting, underscore follow-up effects, and custom slots for icon-label-like app-navigation styles.</p><ul><li><p>Basic usage</p><p>You can initialize <code>cube-tab-bar</code> by passing in the data structure of <code>tabs</code> as follows. You must use the <code>v-model</code> directive to select the corresponding tab. The value of the v-model argument must correspond to the <code>label</code>(after 1.12.5, use <code>value</code>) attribute of a tab in <code>cube-tab-bar</code>. The icon attribute is used as a class selector, which is generally used with icon-font class. It will dispatch <code>click</code> and <code>change</code> event at the proper time. The parameter is the <code>label</code>(after 1.12.5, is <code>value</code>) value corresponding to each selected tab.</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar
    v-model=&quot;selectedLabelDefault&quot;
    :data=&quot;tabs&quot;
    @click=&quot;clickHandler&quot;
    @change=&quot;changeHandler&quot;&gt;
  &lt;/cube-tab-bar&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      selectedLabelDefault: &#39;Vip&#39;,
      tabs: [{
        label: &#39;Home&#39;
      }, {
        label: &#39;Like&#39;
      }, {
        label: &#39;Vip&#39;
      }, {
        label: &#39;Me&#39;
      }]
    }
  },
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
</code></pre></li><li><p>Custom slot</p><p>In fact, we always want to display icons and text effects which looks like app navigation styles, so the <code>cube-tab-bar</code> component also supports the use of slot. Note that you must use the <code>cube-tab</code> component as a sub-component of the first level to wrap your custom slot.</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar
    v-model=&quot;selectedLabelSlots&quot;
    show-slider
    inline
    @click=&quot;clickHandler&quot;&gt;
    &lt;cube-tab v-for=&quot;(item, index) in tabs&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
      &lt;!-- icon slot --&gt;
      &lt;i slot=&quot;icon&quot; :class=&quot;item.icon&quot;&gt;&lt;/i&gt;
      &lt;!-- default slot --&gt;
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
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print &#39;Home&#39;
      console.log(label)
    }
  }
}
</code></pre><p>At the same time, <code>cube-tab-bar</code> also supports other configurations, <code>showSlider</code> controls whether to turn on the effect of underscore, <code>inline</code> to determine whether the icon and label are in a line, <code>useTransition</code> controls whether the underscore use transition, as shown in the sample code.</p></li></ul><h3>CubeTabBar &amp; CubeTabPanels</h3><p>Usually, our requirement is to display different panel as tabs are switched, so we need to use the <code>cube-tab-panels</code> component. <code>cube-tab-panels</code> must be nested with <code>cube-tab-panel</code>. The <code>label</code>(after 1.12.5, use <code>value</code>) values passed to <code>cube-tab</code> and <code>cube-tab-panel</code> must be the same, because it is necessary to create the relationship between tab with panel. They are linked by the same <code>v-model</code>.To see the effect, click on the <code>tab-basic</code> demo on the right.</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-tab-bar v-model=&quot;selectedLabel&quot; show-slider&gt;
    &lt;cube-tab v-for=&quot;(item, index) in tabs&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
      &lt;i slot=&quot;icon&quot; :icon=&quot;item.icon&quot;&gt;&lt;/i&gt;
      {{item.label}}
    &lt;/cube-tab&gt;
  &lt;/cube-tab-bar&gt;
  &lt;cube-tab-panels v-model=&quot;selectedLabel&quot;&gt;
    &lt;cube-tab-panel v-for=&quot;(item, index) in tabs&quot; :label=&quot;item.label&quot; :key=&quot;item.label&quot;&gt;
      &lt;ul&gt;
        &lt;li class=&quot;tab-panel-li&quot; v-for=&quot;(hero, index) in item.heroes&quot; :key=&quot;index&quot;&gt;
          {{hero}}
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/cube-tab-panel&gt;
  &lt;/cube-tab-panels&gt;
&lt;/template&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
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
</code></pre><p>In fact, <code>cube-tab-bar</code> can be combined with many other cube-ui’s components (such as: <code>cube-scroll</code>, <code>cube-slide</code>) to make a similar effect to the layout of native apps. Click on the <code>ScrollTab Demo</code> and <code>tab-composite</code> example on the right to see the effect.</p><h3>Props</h3><ul><li><p>CubeTabBar</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Demo</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Use v-model to select the corresponding tab when initializing.</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>data</td><td>For data rendered with <code>cube-tab-bar</code>, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including <code>label</code>, <code>icon</code> and <code>value</code><sup>1.12.5+</sup>. If a custom slot is used, this value may not be passed</td><td>Array</td><td>[{label: 1, value: 1, icon: ‘cubeic-like’}, {label: 2, value: 2, icon: ‘cubeic-like’}]</td><td>[]</td></tr><tr><td>showSlider</td><td>Whether to turn on the underscore follow effect</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>inline</td><td>Whether text and icons are displayed on one line</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>useTransition</td><td>Whether to use transition</td><td>Boolean</td><td>true/false</td><td>true</td></tr></tbody></table></li><li><p>CubeTab</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Needed</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Use it to determine which tab is clicked before 1.12.5, after 1.12.5 just use to display text by default</td><td>String/Number</td><td>yes</td><td>-</td></tr><tr><td>value</td><td>Use it to determine which tab is clicked<sup>1.12.5+</sup></td><td>String/Number</td><td>no</td><td><code>label</code> value</td></tr></tbody></table></li><li><p>CubeTabPanels</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Demo</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Use v-model to display the corresponding panels at initialization</td><td>String/Number</td><td>-</td><td>-</td></tr><tr><td>data</td><td>For data rendered with <code>cube-tab-panels</code>, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including <code>label</code> and <code>value</code><sup>1.12.5+</sup>. If a custom slot is used, this value may not be passed</td><td>Array</td><td>[{label: 1, value: 1}, {label: 2, value: 2}]</td><td>[]</td></tr></tbody></table></li><li><p>CubeTabPanel</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Needed</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>determine that the panels is displayed</td><td>String/Number</td><td>yes</td><td>-</td></tr><tr><td>value</td><td>the key of panel, use it to determined selected value<sup>1.12.5+</sup></td><td>String/Number</td><td>no</td><td><code>label</code> value</td></tr></tbody></table></li></ul><h3>Slot</h3><ul><li><p>CubeTab</p><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td><code>cube-tab</code>’s text</td></tr><tr><td>icon</td><td>Generally used to display icon</td></tr></tbody></table></li></ul><h3>Events</h3><ul><li><p>CubeTabBar</p><p>| Event Name | Description | parameter | | - | - | - | - | | click | Dispatched when the tab is clicked | The <code>label</code>/<code>value</code><sup>1.12.5+</sup> value of the tab which is selected | | change | Dispatched when tab changed | The <code>label</code>/<code>value</code><sup>1.12.5+</sup> value of the tab which is selected |</p></li></ul><h3>Instance methods</h3><ul><li><p>CubeTabBar</p><p>This method works when the instance’s <code>showSlider</code> property is set to true.</p><table><thead><tr><th>Method name</th><th>Description</th><th>Parameter Type</th></tr></thead><tbody><tr><td>setSliderTransform</td><td>Change the underscore’s transformX of the <code>cube-tab-bar</code> component. If you pass Number, it will be converted into a pixel, or you can pass a String with units</td><td>Number/String</td></tr></tbody></table></li></ul>`,21),n=[d],b={__name:"tab-bar",setup(c,{expose:e}){return e({frontmatter:{}}),(s,r)=>(a(),t("div",l,n))}};export{b as default};
