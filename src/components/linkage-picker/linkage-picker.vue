<template>
  <cube-picker
      ref="picker"
      :title="title"
      :data="data"
      :selected-index="selectedIndex"
      @select="_pickerSelect"
      @cancel="_pickerCancel"
      @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  import CubePicker from '../picker/picker.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'linkage-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      title: {
        type: String,
        default: '选择时间'
      },
      data: {
        type: Array,
        default() {
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      show() {
        this.$refs.picker.show()
      },
      hide() {
        this.$refs.picker.hide()
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      },
      _pickerChange(index, selectedIndex) {
        this.$emit(EVENT_CHANGE, index, selectedIndex)
      }
    },
    components: {
      CubePicker
    }
  }
</script>
