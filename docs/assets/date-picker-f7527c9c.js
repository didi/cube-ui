import{a as e,o as d,j as n}from"./index-e8a96955.js";const c={class:"markdown-body"},a=n(`<h2>DatePicker 组件</h2><blockquote><p>1.7.0 新增</p></blockquote><p>日期选择器，可用于日期选择，选择粒度的灵活配置，如年月日、时分秒、年月日时分秒、年月等。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><p>通过 <code>$createDatePicker</code> 创建一个组件实例，配置 <code>min</code>、<code>max</code> 设定选择的日期范围，还可以通过 <code>value</code> 设置当前选择的日期。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDatePicker&quot;&gt;Date Picker&lt;/cube-button&gt;
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
</code></pre></li><li><p>列的配置</p><p><code>DatePicker</code> 有一个非常灵活的能力，就是可以配置列，总共是年、月、日、时、分、秒六种的列，你可以通过 <code>startColumn</code> 和 <code>columnCount</code> 来配置起始列和列数，比如默认的”年月日“选择，是从“年”开始的“三列”，而时分秒，则是从“时”开始的“三列”。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;Time Picker&lt;/cube-button&gt;
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
</code></pre></li><li><p>年月日时分秒选择器</p><p>同理，如果想要年月日时分秒选择器，则是以“年”开始的六列。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showDateTimePicker&quot;&gt;Date Time Picker&lt;/cube-button&gt;
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
</code></pre></li><li><p>日期格式</p><p>你还可以通过 <code>format</code> 属性配置日期格式。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showFormatPicker&quot;&gt;Use format&lt;/cube-button&gt;
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
</code></pre></li><li><p><code>columnOrder</code> <sup>1.12.14</sup></p><p>针对日期展示格式顺序不是 “年-月-日 小时-分钟-秒” 的场景，可以通过 <code>columnOrder</code> 来修改展示顺序。例如日期展示顺序为 “月-日-年”，可配置 <code>columnOrder</code> 值为 <code>[&#39;month&#39;, &#39;date&#39;, &#39;year&#39;]</code></p><pre><code class="language-html">&lt;cube-button @click=&quot;showChangeOrderPicker&quot;&gt;Date Picker(Change order)&lt;/cube-button&gt;
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
</code></pre></li><li><p><code>$updateProps</code></p><p>通过<code>$updateProps</code>方法，可以修改用 createAPI 创建的组件实例的属性。比如 <code>DatePicker</code>中，我们可以修改 <code>value</code> 属性的值改变当前选择的日期。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showUpdatePropsPicker&quot;&gt;Use $updateProps&lt;/cube-button&gt;
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
</code></pre></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>min</td><td>可选范围的最小值</td><td>Date, Array</td><td>-</td><td>new Date(2010, 0, 1)</td><td>new Date(2008, 7, 8)</td></tr><tr><td>max</td><td>可选范围的最大值</td><td>Date, Array</td><td>-</td><td>当前时间未来一年的12月31日，[new Date().getFullYear() + 1, 12, 31, 23, 59, 59]</td><td>new Date(2020, 9, 20)</td></tr><tr><td>value</td><td>当前选择的日期</td><td>Date, Array</td><td>-</td><td>可选范围的最小值</td><td>new Date()</td></tr><tr><td>startColumn</td><td>起始列</td><td>String</td><td>year/month/date/hour/minute/second</td><td>year</td><td>hour</td></tr><tr><td>columnCount</td><td>列数</td><td>Number</td><td>-</td><td>3</td><td>6</td></tr><tr><td>format<sup>1.8.0+</sup></td><td>日期格式</td><td>Object</td><td>-</td><td>{ year: ‘YYYY’, month: ‘M’, date: ‘D’, hour: ‘hh’, minute: ‘mm’, second: ‘ss’ }</td><td>{ year: ‘YY年’, month: ‘MM月’, date: ‘第 D 日’ }</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>‘’</td><td>‘时间选择’</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>副标题</td><td>String</td><td>-</td><td>‘’</td><td>-</td></tr><tr><td>cancelTxt</td><td>取消按钮文案</td><td>String</td><td>-</td><td>‘取消’</td><td>‘返回’</td></tr><tr><td>confirmTxt</td><td>确定按钮文案</td><td>String</td><td>-</td><td>‘确定’</td><td>‘选择’</td></tr><tr><td>swipeTime</td><td>快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms</td><td>Number</td><td>-</td><td>2500</td><td>-</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>true/false</td><td>false</td><td>-</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true/false</td><td>true</td><td>-</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>-</td><td>100</td><td>-</td></tr><tr><td>columnOrder<sup>1.12.14</sup></td><td>列的展示顺序</td><td>Array</td><td>-</td><td>[‘year’, ‘month’, ‘date’, ‘hour’, ‘minute’, ‘second’]</td><td>-</td></tr></tbody></table><ul><li><code>format</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>year</td><td>年的格式，<code>YYYY</code> 代表完整年份，<code>YY</code> 仅年份后两位</td><td>String</td><td><code>YYYY</code></td><td><code>YY年</code></td></tr><tr><td>month</td><td>月的格式，<code>M</code> 不补 0，<code>MM</code> 补 0</td><td>String</td><td><code>M</code></td><td><code>MM月</code></td></tr><tr><td>date</td><td>日的格式，<code>D</code> 不补 0，<code>DD</code> 补 0</td><td>String</td><td><code>D</code></td><td><code>第 D 日</code></td></tr><tr><td>hour</td><td>时的格式，<code>h</code> 不补 0，<code>hh</code> 补 0</td><td>String</td><td><code>hh</code></td><td><code>h点</code></td></tr><tr><td>minute</td><td>分的格式，<code>m</code> 不补 0，<code>mm</code> 补 0</td><td>String</td><td><code>mm</code></td><td><code>mm分</code></td></tr><tr><td>second</td><td>秒的格式，<code>s</code> 不补 0，<code>ss</code> 补 0</td><td>String</td><td><code>ss</code></td><td><code>ss秒</code></td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>select</td><td>点击确认按钮触发此事件</td><td>date: 当前选中日期，Date 类型</td><td>selectedVal: 当前选中项每一列的值，Array 类型</td><td>selectedText: 当前选中项每一列的文案，Array 类型</td></tr><tr><td>cancel</td><td>点击取消按钮触发此事件</td><td>-</td><td>-</td><td></td></tr><tr><td>change</td><td>滚轴滚动后触发此事件</td><td>index: 当前滚动列次序，Number 类型</td><td>selectedIndex: 当前列选中项的索引，Number 类型</td><td></td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>显示</td></tr><tr><td>hide</td><td>隐藏</td></tr></tbody></table>`,14),o=[a],u={__name:"date-picker",setup(r,{expose:t}){return t({frontmatter:{}}),(s,i)=>(d(),e("div",c,o))}};export{u as default};
