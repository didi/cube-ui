import{a as e,o as d,j as n}from"./index-9017f177.js";const r={class:"markdown-body"},a=n(`<h2>SegmentPicker 组件</h2><blockquote><p>1.7.0 新增</p></blockquote><p>段选择器，用于实现多段的选择，比如选择时间段：2010年9月1日 - 2014年6月30日。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><p>通过 <code>data</code> 属性定义每个节点选择器的类型和属性，<code>is</code> 代表该选择器是用哪种 Picker 组件，既可以是 Cube UI 的 Picker 类组件，也可以是你自己定义的 Picker 组件。比如下面是我们用两个 DatePicker 组件来做时间段选择。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDateSegmentPicker&quot;&gt;StartDate - EndDate&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">const dateSegmentData = [
  {
    is: &#39;cube-date-picker&#39;,
    title: &#39;入学时间&#39;,
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: &#39;cube-date-picker&#39;,
    title: &#39;毕业时间&#39;,
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
]

export default {
  mounted () {
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) =&gt; {
        this.$createDialog({
          type: &#39;warn&#39;,
          content: \`Selected Items: &lt;br/&gt; - 入学时间: \${selectedTexts[0].join(&#39;&#39;)} &lt;br/&gt; - 毕业时间: \${selectedTexts[1].join(&#39;&#39;)}\`,
          icon: &#39;cubeic-alert&#39;
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) =&gt; {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    })
  },
  methods: {
    showDateSegmentPicker() {
      this.dateSegmentPicker.show()
    }
  }
}
</code></pre><p>并且为了实现两个选择器之间的联动，我们可以在 next 下一步的事件处理函数中，根据第一个的选择，更新第二个选择器，比如这里是，将结束时间的最小值 = 所选的开始时间。</p></li><li><p>快递 - 寄件地址 - 收件地址</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCitySegmentPicker&quot;&gt;Express - From - To&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">import { provinceList, cityList, areaList } from &#39;example/data/area&#39;

const cityData = provinceList
cityData.forEach(province =&gt; {
  province.children = cityList[province.value]
  province.children.forEach(city =&gt; {
    city.children = areaList[city.value]
  })
})

export default {
  mounted () {
    this.citySegmentPicker = this.$createSegmentPicker({
      data: [{
        title: &#39;选择快递&#39;,
        data: [expressData],
        selectedIndex: [1]
      }, {
        is: &#39;cube-cascade-picker&#39;,
        title: &#39;寄件地址&#39;,
        data: cityData,
        selectedIndex: [0, 0, 0],
        cancelTxt: &#39;返回&#39;
      }, {
        is: &#39;cube-cascade-picker&#39;,
        title: &#39;收件地址&#39;,
        data: cityData,
        selectedIndex: [0, 0, 0]
      }],
      cancelTxt: &#39;Cancel&#39;,
      confirmTxt: &#39;Confirm&#39;,
      nextTxt: &#39;Next&#39;,
      prevTxt: &#39;Prev&#39;,
      onSelect: (selectedVals, selectedIndexs, selectedTexts) =&gt; {
        this.$createDialog({
          type: &#39;warn&#39;,
          content: \`Selected Items: &lt;br/&gt; - 所选快递:  \${selectedTexts[0].join(&#39;&#39;)} &lt;br/&gt; - 寄件地址: \${selectedTexts[1].join(&#39;&#39;)} &lt;br/&gt; - 收件地址: \${selectedTexts[2].join(&#39;&#39;)}\`,
          icon: &#39;cubeic-alert&#39;
        }).show()
      }
    })
  },
  methods: {
    showCitySegmentPicker() {
      this.citySegmentPicker.show()
    }
  }
}
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>data</td><td>定义各个选择器的组件名和属性</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>nextTxt</td><td>下一步按钮文案</td><td>String</td><td>‘下一步’</td><td>-</td></tr><tr><td>prevTxt</td><td>上一步按钮文案</td><td>String</td><td>‘下一步’</td><td>-</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>副标题</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>取消按钮文案</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>确定按钮文案</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime<sup>1.8.1</sup></td><td>快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>is</td><td>该节点选择器的组件名</td><td>String</td><td>cube-picker</td><td>cube-date-picker</td></tr><tr><td>其它</td><td>该节点选择器的属性</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>select</td><td>点击确认按钮触发此事件</td><td>各个选择器的 select 事件的参数1，Array 类型</td><td>各个选择器的 select 事件的参数2，Array 类型</td><td>各个选择器的 select 事件的参数3，Array 类型</td></tr><tr><td>cancel</td><td>点击取消按钮触发此事件</td><td>-</td><td>-</td><td>-</td></tr><tr><td>next</td><td>点击下一步按钮触发此事件</td><td>当前 picker 的索引，Number类型</td><td>其余参数为，当前 picker select 时间的参数</td><td>···</td></tr><tr><td>prev</td><td>点击上一步按钮触发此事件</td><td>当前 picker 的索引，Number类型</td><td>-</td><td>-</td></tr><tr><td>change</td><td>滚轴滚动后触发此事件</td><td>pickerIndex: 当前滚动 picker 的索引，Number类型</td><td>index: 当前滚动列索引，Number类型</td><td>selectedIndex: 当前列选中项的索引，Number类型</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,14),c=[a],p={__name:"segment-picker",setup(i,{expose:t}){return t({frontmatter:{}}),(o,l)=>(d(),e("div",r,c))}};export{p as default};
