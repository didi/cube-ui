<template>
  <div class="demo-select" @click="clickHandler">
    <cube-input ref="input" v-model="modelText" v-bind="$attrs">
      <i :class="icon" slot="append" v-if="icon"></i>
    </cube-input>
  </div>
</template>
<script>
import { camelize } from '../../../src/common/lang/string'

export default {
  props: {
    // v-model 值
    value: null,
    // 图标
    icon: String,
    // 配置项
    options: Object,
    // 加载数据函数
    // default: (options) => Promise
    loadData: Function,
    // 控制行为函数，不建议自定义使用
    action: Function,
    // 格式化 value 值，用于格式化从配置组件的 select 事件中格式化结果
    formatValue: Function
  },
  data() {
    const formatedValue = this._formatValue()
    return {
      model: formatedValue,
      modelText: formatedValue.text,
      isActive: false
    }
  },
  computed: {
    computedValue() {
      return this._formatValue()
    }
  },
  watch: {
    isActive(newV) {
      this.$refs.input.isFocus = newV
    },
    model(newV) {
      this.modelText = newV.text
      this.modelMap[newV.value] = newV.text
      // value 发生了变化
      // @arg value select结果
      this.$emit('input', newV.value)
    }
  },
  beforeCreate() {
    this.modelMap = {}
  },
  methods: {
    _formatValue(value = this.value) {
      if (value === Object(value)) {
        return value
      }
      return {
        text: this.modelMap[value] || value,
        value: value
      }
    },
    defaultAction() {
      const { component, options } = this.options
      return this[camelize(`$create-${component}`)](options || {})
    },
    showComponent() {
      if (!this.actionComponent) {
        const component = this.actionComponent = this.action ? this.action(this) : this.defaultAction(this)
        component.$on('select', this.onSelect)
        component.$on('hide', this.onHide)
        component.$on('cancel', this.onHide)
        component.$on('close', this.onHide)
      }
      this.actionComponent.show()
      this.isActive = true
    },
    clickHandler() {
      if (this.loadData) {
        this.loadData(this.options).then(() => {
          this.showComponent()
        })
      } else {
        this.showComponent()
      }
    },
    onSelect(...args) {
      this.isActive = false
      this.model = this._formatValue(this.formatValue ? this.formatValue(...args) : {
        text: args[0],
        value: args[2]
      })
    },
    onHide() {
      this.isActive = false
    }
  }
}
</script>
<style lang="stylus">
.demo-select
  .cube-input
    pointer-events: none
  .cube-input-append
    padding: 10px
</style>
