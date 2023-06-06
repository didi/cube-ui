import{a as e,o as d,j as n}from"./index-e8a96955.js";const c={class:"markdown-body"},o=n(`<h2>TimePicker组件</h2><p><code>TimePicker</code>组件提供了常用的日期选择功能。</p><p><strong>注：</strong> 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 <a href="#/zh-CN/docs/create-api">create-api</a>。</p><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker&lt;/cube-button&gt;
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
            txt: &#39;Picker canceled&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p><code>showNow</code> 用于控制是否显示“现在”时间，<code>minuteStep</code> 用于控制分钟的步长，<code>delay</code> 则表示的是当前时间向后推迟的时间，决定了最小可选时间。</p></li><li><p>日期选项配置</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker - day options&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showTimePicker () {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 10,
        day: {
          len: 5,
          filter: [&#39;今天&#39;, &#39;明天&#39;],
          format: &#39;M月d日&#39;
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
            txt: &#39;Picker canceled&#39;,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</code></pre><p><code>day</code>字段的<code>len</code>属性可以设置第一列需要展示的日期长度；</p><p><code>filer</code>属性设置第一列日期展示的文案；</p><p><code>format</code>属性用以格式化日期显示的方式，当<code>len</code>的数量大于<code>filter</code>的数组长度时，会以<code>M月d日</code>的格式显示文案。</p></li><li><p>Format 配置<sup>1.10.0+</sup></p><p>通过 <code>format</code> 属性可配置 <code>select</code> 事件的 <code>formatedTime</code> 参数的格式。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showFormatPicker&quot;&gt;Config format&lt;/cube-button&gt;
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
</code></pre></li><li><p>分钟数的步长</p><p>通过 <code>minuteStep</code> 属性可配置分钟数的步长，默认为 10 分钟，这样的话，可选的分钟就是 10、20、30、40、50。另外在 v1.10.5+，<code>minuteStep</code> 还支持传入一个对象，你可以通过子属性 <code>rule</code> 配置取整的规则，是向上取整 <code>ceil</code>，向下取整 <code>floor</code>，又或是四舍五入<code>round</code>。而子属性 <code>step</code> 则代表步长。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMinuteStepPicker&quot;&gt;Config minute step&lt;/cube-button&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    showFormatPicker() {
      if (!this.minuteStepPicker) {
        this.minuteStepPicker = this.$createTimePicker({
          minuteStep: {
            rule: &#39;ceil&#39;,
            step: 15
          },
          onSelect: this.selectHandler,
          onCancel: this.cancelHandler
        })
      }
      this.minuteStepPicker.show()
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
</code></pre></li><li><p>最小可选时间 min <sup>1.12.6</sup></p><p>你可以通过 <code>min</code> 属性设置最小可选时间。它可以接受 Date 类型的日期时间，也可以 Number类型的时间戳。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMinPicker&quot;&gt;Config min&lt;/cube-button&gt;
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
</code></pre></li><li><p>最大可选时间 max <sup>1.12.6</sup></p><p>你可以通过 <code>max</code> 属性设置最大可选时间。它可以接受 Date 类型的日期时间，也可以 Number类型的时间戳。</p><pre><code class="language-html">&lt;cube-button @click=&quot;showMaxPicker&quot;&gt;Config max&lt;/cube-button&gt;
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
</code></pre></li><li><p>手动设置时间</p><pre><code class="language-html">&lt;cube-button @click=&quot;showTimePicker&quot;&gt;TimePicker - setTime(next hour)&lt;/cube-button&gt;
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
          filter: [&#39;今天&#39;, &#39;明天&#39;, &#39;后天&#39;],
          format: &#39;M月D日&#39;
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
            txt: &#39;Picker canceled&#39;,
            time: 1000
          }).show()
        }
      })

      timePicker.setTime(time)
      timePicker.show()
    }
  }
}
</code></pre><p><code>timePicker</code>实例向外暴露<code>setTime</code>方法用以手动设置时间，时间格式为时间戳。当时间戳小于当前时间戳时，<code>timePicker</code>实例会默认显示当前时间。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>day</td><td>日期配置</td><td>Object</td><td>{ len: 3, filter: [‘今日’], format: ‘M月D日’ }</td></tr><tr><td>showNow</td><td>是否显示现在；以及现在选项的文案<sup>1.9.0</sup></td><td>Boolean, Object<sup>1.9.0</sup></td><td>true</td></tr><tr><td>minuteStep</td><td>分钟数的步长。 当为 Object 时还可以配置取整规则，详见后续 <code>minuteStep</code> 子配置项说明<sup>1.10.5</sup></td><td>Number, Object<sup>1.10.5</sup></td><td>10</td></tr><tr><td>delay</td><td>将当前时间向后推算的分钟数，决定了最小可选时间（注：仅当未设置 <code>min</code> 时有效）</td><td>Number</td><td>15</td></tr><tr><td>min<sup>1.12.6</sup></td><td>最小可选时间</td><td>Date, Number</td><td>null</td></tr><tr><td>max<sup>1.12.6</sup></td><td>最大可选时间</td><td>Date, Number</td><td>null</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>‘选择时间’</td></tr><tr><td>subtitle<sup>1.8.1</sup></td><td>副标题</td><td>String</td><td>‘’</td></tr><tr><td>cancelTxt<sup>1.8.1</sup></td><td>取消按钮文案</td><td>String</td><td>‘取消’</td></tr><tr><td>confirmTxt<sup>1.8.1</sup></td><td>确定按钮文案</td><td>String</td><td>‘确定’</td></tr><tr><td>swipeTime</td><td>快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms</td><td>Number</td><td>2500</td></tr><tr><td>visible<sup>1.8.1</sup></td><td>显示状态，是否可见。<code>v-model</code>绑定值</td><td>Boolean</td><td>false</td></tr><tr><td>maskClosable<sup>1.9.6</sup></td><td>点击蒙层是否隐藏</td><td>Boolean</td><td>true</td></tr><tr><td>format<sup>1.10.0</sup></td><td>select 事件参数 formatedTime 的格式</td><td>String</td><td>‘YYYY/M/D hh:mm’</td></tr><tr><td>zIndex<sup>1.9.6</sup></td><td>样式 z-index 的值</td><td>Number</td><td>100</td></tr></tbody></table><ul><li><code>day</code> 子配置项</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>len</td><td>日期列，从当前时间算起，往后推len天（注：仅当未设置 <code>max</code> 时有效）</td><td>Number</td><td>3</td></tr><tr><td>filter</td><td>日期列，将时间映射为filter中的文案内容</td><td>Array</td><td>[‘今日’]</td></tr><tr><td>format</td><td>时间格式化</td><td>String</td><td>‘M月D日’</td></tr></tbody></table><ul><li><code>showNow</code> 子配置项<sup>1.9.0</sup></li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>现在选项的文案</td><td>String</td><td>‘现在’</td></tr></tbody></table><ul><li><code>minuteStep</code> 子配置项<sup>1.10.5</sup></li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>rule</td><td>取整的规则（仅用于设置最小可选时间的取整规则，对于最大时间，固定为 floor）</td><td>String</td><td>floor/ceil/round</td><td>‘floor’</td></tr><tr><td>step</td><td>分钟数的步长</td><td>Number</td><td>-</td><td>10</td></tr></tbody></table><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数1</th><th>参数2</th><th>参数3</th></tr></thead><tbody><tr><td>select</td><td>点击确认按钮触发此事件</td><td>selectedTime: 当前选中的timestamp</td><td>selectText: 当前选中的时间文案</td><td>formatedTime: 格式化日期<sup>1.10.0</sup></td></tr><tr><td>change</td><td>滚轴滚动后触发此事件</td><td>index: 当前滚动列次序，Number类型</td><td>selectedIndex: 当前列选中项的索引，Number类型</td><td>-</td></tr><tr><td>cancel</td><td>点击取消按钮触发此事件</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setTime</td><td>手动设置time-picker组件显示的时间，数据格式为时间戳</td><td>时间戳</td></tr><tr><td>show</td><td>显示</td><td>-</td></tr><tr><td>hide</td><td>隐藏</td><td>-</td></tr></tbody></table>`,17),r=[o],h={__name:"time-picker",setup(i,{expose:t}){return t({frontmatter:{}}),(a,s)=>(d(),e("div",c,r))}};export{h as default};
