import{a as e,o as d,j as n}from"./index-e8a96955.js";const o={class:"markdown-body"},a=n(`<h2>DatePicker</h2><blockquote><p>New in 1.7.0+</p></blockquote><p>DatePicker can be used to choose date, which has flexible configuration for time granularity, such as year - month - date, hour - minute - second, year - month - date - hour - minute - second, year - month, etc.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>You can create a component instance by <code>$createDatePicker</code>, and configure <code>min</code>, <code>max</code> to set the selected date range. the <code>value</code> could use to set the current selected date.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDatePicker&quot;&gt;Date Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: &#39;Date Picker&#39;,
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - date: \${date} &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>Column configuration</p><p>Though column configuration, <code>DatePicker</code> get the power of flexible time granularity. There are six columns in total: year, month, date, hour, minute and second. You can configure the starting column and the count of columns by <code>startColumn</code> and <code>columnCount</code>, such as the default “year - month - date” picker is “three column” starting from “year”, and “hour - minute - second” picker is the “three column” starting from “time”.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;Time Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showTimePicker() {
      if (!this.timePicker) {
        this.timePicker = this.$createDatePicker({
          title: &#39;Time Picker&#39;,
          min: [8, 0, 0],
          max: [20, 59, 59],
          value: new Date(),
          startColumn: &#39;hour&#39;,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.timePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - date: \${date} &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>year-month-date-hour-minute-second</p><p>Similarly, if you want year-month-date-hour-minute-second picker, just “six columns” starting from “year”</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDateTimePicker&quot;&gt;Date Time Picker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showDateTimePicker() {
      if (!this.dateTimePicker) {
        this.dateTimePicker = this.$createDatePicker({
          title: &#39;Date Time Picker&#39;,
          min: new Date(2008, 7, 8, 8, 0, 0),
          max: new Date(2020, 9, 20, 20, 59, 59),
          value: new Date(),
          columnCount: 6,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.dateTimePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - date: \${date} &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>Format</p><p>You can also configure the date format by the property <code>format</code>.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showFormatPicker&quot;&gt;Use format&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createDatePicker({
          title: &#39;Use format&#39;,
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          format: {
            year: &#39;YY年&#39;,
            month: &#39;MM月&#39;,
            date: &#39;第 D 日&#39;
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.formatPicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - date: \${date} &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p><code>columnOrder</code> <sup>1.12.14</sup></p><p><code>columnOrder</code> can be used to change the display order in case where the order is not ‘Year-Month-Date Hour-Minute-Second’. For example, we can set the <code>columnOrder</code> to <code>[&#39;month&#39;, &#39;date&#39;, &#39;year&#39;]</code> for the display order of ‘Month-Date-Year’.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showChangeOrderPicker&quot;&gt;Date Picker(Change order)&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showChangeOrderPicker() {
       if (!this.changeOrderPicker) {
         this.changeOrderPicker = this.$createDatePicker({
           title: &#39;Date Picker&#39;,
           min: new Date(2008, 7, 8),
           max: new Date(2020, 9, 20),
           value: new Date(),
           columnOrder: [&#39;month&#39;, &#39;date&#39;, &#39;year&#39;],
           onSelect: this.selectHandle,
           onCancel: this.cancelHandle
         })
       }
       this.changeOrderPicker.show()
     }
  }
}
</code></pre></li><li><p><code>$updateProps</code></p><p>With the <code>$updateProps</code> method, you can modify the properties of component instances created by createAPI. For example, in <code>DatePicker</code>, we can modify the value of <code>value</code> attribute to change the date currently selected.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showUpdatePropsPicker&quot;&gt;Use $updateProps&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showUpdatePropsPicker() {
      if (!this.updatePropsPicker) {
        this.updatePropsPicker = this.$createDatePicker({
          title: &#39;Use $updateProps&#39;,
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.updatePropsPicker.show()
      setTimeout(() =&gt; {
        this.updatePropsPicker.$updateProps({
          title: &#39;updated&#39;,
          value: new Date(2010, 9, 1)
        })
      }, 1000)
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: &#39;warn&#39;,
        content: \`Selected Item: &lt;br/&gt; - date: \${date} &lt;br/&gt; - value: \${selectedVal.join(&#39;, &#39;)} &lt;br/&gt; - text: \${selectedText.join(&#39; &#39;)}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th><th>Example</th></tr></thead><tbody><tr><td>min</td><td>the minimum value of optional range</td><td>Date, Array</td><td>-</td><td>new Date(2010, 0, 1)</td><td>new Date(2008, 7, 8)</td></tr><tr><td>max</td><td>the maximum value of optional range</td><td>Date, Array</td><td>-</td><td>December 31 of next year based on current time [new Date().getFullYear() + 1, 12, 31, 23, 59, 59]</td><td>new Date(2020, 9, 20)</td></tr><tr><td>value</td><td>current selected Date</td><td>Date, Array</td><td>-</td><td>the minimum value of optional range</td><td>new Date()</td></tr><tr><td>startColumn</td><td>the start column</td><td>String</td><td>year/month/date/hour/minute/second</td><td>year</td><td>hour</td></tr><tr><td>columnCount</td><td>the count of column</td><td>Number</td><td>-</td><td>3</td><td>6</td></tr><tr><td>format<sup>1.8.0+</sup></td><td>date format</td><td>Object</td><td>-</td><td>{ year: ‘YYYY’, month: ‘M’, date: ‘D’, hour: ‘hh’, minute: ‘mm’, second: ‘ss’ }</td><td>{ year: ‘YY年’, month: ‘MM月’, date: ‘第 D 日’ }</td></tr><tr><td>title</td><td>title</td><td>String</td><td>-</td><td>‘’</td><td>-</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>subtitle</td><td>String</td><td>-</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>the text of the cancel button</td><td>String</td><td>-</td><td>‘取消’</td><td>-</td></tr><tr><td>confirmTxt</td><td>the text of the confirm button</td><td>String</td><td>-</td><td>‘确定’</td><td>-</td></tr><tr><td>swipeTime</td><td>the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms</td><td>Number</td><td>-</td><td>2500</td><td>-</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>true/false</td><td>false</td><td>-</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true/false</td><td>true</td><td>-</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>-</td><td>100</td><td>-</td></tr><tr><td>columnOrder<sup>1.12.14</sup></td><td>display order</td><td>Array</td><td>-</td><td>[‘year’, ‘month’, ‘date’, ‘hour’, ‘minute’, ‘second’]</td><td>-</td></tr></tbody></table><ul><li><code>format</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th><th>Example</th></tr></thead><tbody><tr><td>year</td><td>the format of year, <code>YYYY</code> represent full year，<code>YY</code> only last two digit of year</td><td>String</td><td><code>YYYY</code></td><td><code>YY年</code></td></tr><tr><td>month</td><td>the format of month, <code>M</code> don’t pad 0，<code>MM</code> pad 0</td><td>String</td><td><code>M</code></td><td><code>MM月</code></td></tr><tr><td>date</td><td>the format of date, <code>D</code> don’t pad 0，<code>DD</code> pad 0</td><td>String</td><td><code>D</code></td><td><code>第 D 日</code></td></tr><tr><td>hour</td><td>the format of hour, <code>h</code> don’t pad 0，<code>hh</code> pad 0</td><td>String</td><td><code>hh</code></td><td><code>h点</code></td></tr><tr><td>minute</td><td>the format of minute, <code>m</code> don’t pad 0，<code>mm</code> pad 0</td><td>String</td><td><code>mm</code></td><td><code>mm分</code></td></tr><tr><td>second</td><td>the format of second, <code>s</code> don’t pad 0，<code>ss</code> pad 0</td><td>String</td><td><code>ss</code></td><td><code>ss秒</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking the confirm button</td><td>date: Date, the selected date</td><td>selectedVal: Array, the selected value</td><td>selectedText: Array, the selected text</td></tr><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td><td></td></tr><tr><td>change</td><td>triggers when the roller scrolls</td><td>index: Number, index of current scrolling roller</td><td>selectedIndex: Number, index of selected item in current column</td><td></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Method name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>show</td></tr><tr><td>hide</td><td>hide</td></tr></tbody></table>`,14),c=[a],u={__name:"date-picker",setup(r,{expose:t}){return t({frontmatter:{}}),(i,s)=>(d(),e("div",o,c))}};export{u as default};
