import{a as e,o as d,j as n}from"./index-9017f177.js";const r={class:"markdown-body"},c=n(`<h2>SegmentPicker</h2><blockquote><p>New in 1.7.0+</p></blockquote><p>SegmentPicker is used to achieve multi segment choose, for example, the choose of time period: September 1, 2010 - 2014 June 30th.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Using the <code>data</code> attribute to define the component name and properties of each node picker, <code>is</code> represents which Picker component is used, either a Picker component of a Cube UI, or a Picker component defined by yourself. For example, we use two DatePicker components to make time period choose.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDateSegmentPicker&quot;&gt;StartDate - EndDate&lt;/cube-button&gt;
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
</code></pre><p>In order to implement the Cascade between the two pickers, we can update the second picker in the handle function of the <code>next</code> event, according to the first choice. As in here, the minimum value of the end time = the selected start time.</p></li><li><p>Express - From - To</p><pre><code class="language-html">&lt;cube-button @click=&quot;showCitySegmentPicker&quot;&gt;Express - From - To&lt;/cube-button&gt;
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Accepted Values</th></tr></thead><tbody><tr><td>data</td><td>define the component name and properties of each node picker</td><td>Array</td><td>[]</td><td>-</td></tr><tr><td>title</td><td>title</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>subtitle</td><td>String</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>the text of the cancel button</td><td>String</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>the text of the confirm button</td><td>String</td><td>‘确定’</td><td>-</td></tr><tr><td>nextTxt</td><td>the text of the next button</td><td>String</td><td>‘下一步’</td><td>-</td></tr><tr><td>prevTxt</td><td>the text of the prev button</td><td>String</td><td>‘下一步’</td><td>-</td></tr><tr><td>swipeTime<sup>1.8.1</sup></td><td>the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms</td><td>Number</td><td>2500</td><td>-</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>100</td><td>-</td></tr></tbody></table><ul><li><code>data</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Example</th></tr></thead><tbody><tr><td>is</td><td>the component name of each node picker</td><td>String</td><td>cube-picker</td><td>cube-date-picker</td></tr><tr><td>…rest</td><td>the properties of each node picker</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking the confirm button</td><td>the parameter 1 of each picker’s select event, Array</td><td>the parameter 2 of each picker’s select event, Array</td><td>the parameter 3 of each picker’s select event, Array</td></tr><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td><td>-</td></tr><tr><td>next</td><td>triggers when clicking the next button</td><td>the index of current picker, Number</td><td>…rest, is the parameters of current picker’s select event</td><td>···</td></tr><tr><td>prev</td><td>triggers when clicking the prev button</td><td>the index of current picker, Number</td><td>-</td><td>-</td></tr><tr><td>change</td><td>triggers when the roller scrolls</td><td>pickerIndex: Number, the index of current picker</td><td>index: Number, index of current scrolling roller</td><td>selectedIndex: Number, index of selected item in current column</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,14),i=[c],p={__name:"segment-picker",setup(a,{expose:t}){return t({frontmatter:{}}),(s,h)=>(d(),e("div",r,i))}};export{p as default};
