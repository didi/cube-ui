<template>
  <cube-picker
      ref="picker"
      :title="title"
      :data="pickerData"
      :selected-index="pickerSelectedIndex"
      :cancelTxt="cancelTxt"
      :confirmTxt="confirmTxt"
      @select="_pickerSelect"
      @cancel="_pickerCancel"
      @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  import CubePicker from '../picker/picker.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'cube-cascade-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      title: {
        type: String,
        default: 'Cascade Picker'
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
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      confirmTxt: {
        type: String,
        default: '确定'
      }
    },
    data () {
      return {
        cascadeData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex.slice(),
        pickerData: []
      }
    },
    created() {
      this.updatePickerData()
    },
    methods: {
      show() {
        this.$refs.picker.show()
      },
      hide() {
        this.$refs.picker.hide()
      },
      setData(data, selectedIndex = []) {
        this.cascadeData = data
        this.pickerSelectedIndex = selectedIndex
        this.updatePickerData()
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      },
      _pickerChange(i, newIndex) {
        if (newIndex !== this.pickerSelectedIndex[i]) {
          this.pickerSelectedIndex.splice(i, 1, newIndex)
          this.updatePickerData(i + 1)
        }
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      updatePickerData(fromColumn = 0) {
        let data = this.cascadeData
        let i = 0
        while (Array.isArray(data) && data.length) {
          if (i >= fromColumn) {
            let columnData = []
            data.forEach((item) => {
              columnData.push({
                value: item.value,
                text: item.text
              })
            })
            this.pickerData[i] = columnData
            /* refillColumn could only be called after show() */
            this.pickerSelectedIndex[i] = fromColumn === 0
              ? (this.pickerSelectedIndex[i] < data.length ? this.pickerSelectedIndex[i] || 0 : 0)
              : this.$refs.picker.refillColumn(i, columnData)
          }
          data = data[this.pickerSelectedIndex[i]].children

          i++
        }

        this.pickerData = this.pickerData.slice()
      }
    },
    components: {
      CubePicker
    }
  }
</script>
