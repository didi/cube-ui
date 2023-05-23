import{a as e,o as n,j as d}from"./index-9017f177.js";const o={class:"markdown-body"},i=d(`<h2>TimePicker</h2><p><code>TimePicker</code> component provides commonly used functions of date selection.</p><p><strong>Notice:</strong> Cause this component used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showTimePicker () {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 5,
        delay: 15,
        onSelect: (selectedTime, selectedText, formatedTime) =&gt; {
          this.$createDialog({
            type: &#39;warn&#39;,
            title: \`selected time: \${selectedTime}\`,
            content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
            icon: &#39;cubeic-alert&#39;
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            type: &#39;correct&#39;,
            txt: &#39;Clicked cancel button&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p><code>showNow</code> is uesed to control whether the time “now” is displayed. <code>minuteStep</code> is used to control the step of the minute. <code>delay</code> represents the time that postponed backwards from now, which determines the minimal optional time.</p></li><li><p>Configuration of date options</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker - day options&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showTimePicker () {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 10,
        day: {
          len: 5,
          filter: [&#39;Today&#39;, &#39;Tomorrow&#39;],
          format: &#39;M year d day&#39;
        },
        onSelect: (selectedTime, selectedText, formatedTime) =&gt; {
          this.$createDialog({
            type: &#39;warn&#39;,
            title: \`selected time: \${selectedTime}\`,
            content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
            icon: &#39;cubeic-alert&#39;
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            type: &#39;correct&#39;,
            txt: &#39;Clicked cancel button&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p><code>len</code> attribute in <code>day</code> can set the length of date displayed in the first column.</p><p><code>filter</code> attribute can set the text of the date displayed in the first column.</p><p><code>format</code> attribute can set the text in <code>M year d day</code> format when the <code>len</code> is greater than the length of <code>filter</code> array.</p></li><li><p>Format<sup>1.10.0+</sup></p><p>You can use property <code>format</code> to configure the format of <code>formatedTime</code>, an argument of event <code>select</code>.</p><pre><code class="language-html">&lt;cube-button @click=&quot;showFormatPicker&quot;&gt;Config format&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createTimePicker({
          format: &#39;hh:mm&#39;,
          onSelect: this.selectHandler,
          onCancel: this.cancelHandler
        })
      }
      this.formatPicker.show()
    },
    selectHandler(selectedTime, selectedText, formatedTime) {
      this.$createDialog({
        type: &#39;warn&#39;,
        title: \`selected time: \${selectedTime}\`,
        content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandler() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>Min <sup>1.12.6</sup></p><p>You could use the property <code>min</code> to set the min optional time. It could accept a date (Date type) or a timestamp (Number type).</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMinPicker&quot;&gt;Config min&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showMinPicker() {
      if (!this.minPicker) {
        this.minPicker = this.$createTimePicker({
          min: +new Date() - (2 * 60 + 20) * 60 * 1000,
          onSelect: this.selectHandler,
          onCancel: this.cancelHandler
        })
      }
      this.minPicker.show()
    },
    selectHandler(selectedTime, selectedText, formatedTime) {
      this.$createDialog({
        type: &#39;warn&#39;,
        title: \`selected time: \${selectedTime}\`,
        content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandler() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>Max <sup>1.12.6</sup></p><p>You could use the property <code>max</code> to set the max optional time. It could accept a date (Date type) or a timestamp (Number type).</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMaxPicker&quot;&gt;Config max&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showMaxPicker() {
      if (!this.maxPicker) {
        this.maxPicker = this.$createTimePicker({
          delay: 0,
          max: +new Date() + ((2 * 24 + 2) * 60 + 20) * 60 * 1000,
          onSelect: this.selectHandler,
          onCancel: this.cancelHandler
        })
      }
      this.maxPicker.show()
    },
    selectHandler(selectedTime, selectedText, formatedTime) {
      this.$createDialog({
        type: &#39;warn&#39;,
        title: \`selected time: \${selectedTime}\`,
        content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
        icon: &#39;cubeic-alert&#39;
      }).show()
    },
    cancelHandler() {
      this.$createToast({
        type: &#39;correct&#39;,
        txt: &#39;Picker canceled&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre></li><li><p>Set time manually</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker - setTime(next hour)&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    const time = new Date().valueOf() + 1 * 60 * 60 * 1000
    showTimePicker () {
      const timePicker = this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 15,
        day: {
          len: 5,
          filter: [&#39;Today&#39;, &#39;Tomorrow&#39;, &#39;The day after tomorrow&#39;],
          format: &#39;M year D day&#39;
        },
        onSelect: (selectedTime, selectedText, formatedTime) =&gt; {
          this.$createDialog({
            type: &#39;warn&#39;,
            title: \`selected time: \${selectedTime}\`,
            content: \`selected text: \${selectedText}&lt;br&gt;format time: \${formatedTime}\`,
            icon: &#39;cubeic-alert&#39;
          }).show()
        },
        onCancel: () =&gt; {
          this.$createToast({
            type: &#39;correct&#39;,
            txt: &#39;Clicked cancel button&#39;,
            time: 1000
          }).show()
        }
      })

      timePicker.setTime(time)
      timePicker.show()
    }
  }
}
</code></pre><p><code>timePicker</code> instance exports <code>setTime</code> methos to set time manually with the time stamp as time format. When the time stamp is lower than current time stamp, <code>timePicker</code> displays current time by default.</p></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>day</td><td>date configuration</td><td>Object</td><td>{ len: 3, filter: [‘今日’], format: ‘M月D日’ }</td></tr><tr><td>showNow</td><td>whether to display now; configure the text of option now<sup>1.9.0</sup></td><td>Boolean, Object<sup>1.9.0</sup></td><td>true</td></tr><tr><td>minuteStep</td><td>step of the minute</td><td>Number</td><td>10</td></tr><tr><td>delay</td><td>minutes that postponed backwards from now, which determines the minimal optional time (only effect without setting <code>min</code>)</td><td>Number</td><td>15</td></tr><tr><td>min<sup>1.12.6</sup></td><td>the min optional time</td><td>Date, Number</td><td>null</td></tr><tr><td>max<sup>1.12.6</sup></td><td>the max optional time</td><td>Date, Number</td><td>null</td></tr><tr><td>title</td><td>title</td><td>String</td><td>‘选择时间’</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>subtitle</td><td>String</td><td>‘’</td></tr><tr><td>cancelTxt<sup>1.8.1</sup></td><td>the text of the cancel button</td><td>String</td><td>‘取消’</td></tr><tr><td>confirmTxt<sup>1.8.1</sup></td><td>the text of the confirm button</td><td>String</td><td>‘确定’</td></tr><tr><td>swipeTime</td><td>the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms</td><td>Number</td><td>2500</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>whether visible. Bind to <code>v-model</code></td><td>Boolean</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>whether hide the component when clicked the mask layer</td><td>Boolean</td><td>true</td></tr><tr><td>format<sup>1.10.0</sup></td><td>the format of formatedTime the third argument of select event</td><td>String</td><td>‘YYYY/M/D hh:mm’</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>the value of the style z-index</td><td>Number</td><td>100</td></tr></tbody></table><ul><li><code>day</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>len</td><td>date column, postpone <code>len</code> days backwards from now (only effect without setting <code>max</code>)</td><td>Number</td><td>3</td></tr><tr><td>filter</td><td>date column, map time to the text in filter</td><td>Array</td><td>[‘今日’]</td></tr><tr><td>format</td><td>format time</td><td>String</td><td>‘M月D日’</td></tr></tbody></table><ul><li><code>showNow</code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text<sup>1.9.0</sup></td><td>the text of option now</td><td>String</td><td>‘现在’</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>select</td><td>triggers when clicking the confirm button</td><td>selectedTime: currently selected timestamp</td><td>selectText: text of currently selected time</td><td>formatedTime<sup>1.10.0</sup></td></tr><tr><td>change</td><td>triggers when the roller scrolls</td><td>index: Number, index of current scrolling roller</td><td>selectedIndex: Number, index of selected item in current column</td><td>-</td></tr><tr><td>cancel</td><td>triggers when clicking the cancel button</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>setTime</td><td>manually set time displayed in time-picker with with the time stamp as time format</td><td>time stamp</td></tr><tr><td>show</td><td>show</td><td>-</td></tr><tr><td>hide</td><td>hide</td><td>-</td></tr></tbody></table>`,15),c=[i],h={__name:"time-picker",setup(r,{expose:t}){return t({frontmatter:{}}),(s,l)=>(n(),e("div",o,c))}};export{h as default};
