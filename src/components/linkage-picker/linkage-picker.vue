<template>
  <cube-picker
      ref="picker"
      :title="title"
      :data="pickerData"
      :selected-index="pickerSelectedIndex"
      @select="_pickerSelect"
      @cancel="_pickerCancel"
      @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  import CubePicker from '../picker/picker.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'cube-linkage-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      title: {
        type: String,
        default: 'Linkage Picker'
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
        linkageData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex.slice(),
        pickerData: []
      }
    },
    created() {
      this.tempIndex = []
      this.changeI = 0
      this.updatePickerData(true)
    },
    methods: {
      show() {
        this.$refs.picker.show()
      },
      hide() {
        this.$refs.picker.hide()
      },
      setData(data, selectedIndex) {
        this.linkageData = data
        this.pickerSelectedIndex = selectedIndex
        this.updatePickerData(true)
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      },
      _pickerChange(i, newIndex) {
        if (newIndex !== this.tempIndex[i]) {
          this.changeI = i
          this.tempIndex.splice(i, 1, newIndex)
          this.updatePickerData()
        }
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      updatePickerData(init) {
        const pickerData = []
        let data = this.linkageData
        let i = 0
        while (Array.isArray(data) && data.length) {
          let columnData = []
          data.forEach((item) => {
            columnData.push({
              value: item.value,
              text: item.text
            })
          })
          pickerData.push(columnData)

          if (init) {
            this.tempIndex[i] = this.pickerSelectedIndex[i] || 0
          }

          if (!init && i > this.changeI) {
            /* try to remain same value  */
            const findIndex = columnData.findIndex((item) => {
              return item.value === this.pickerData[i][this.tempIndex[i]].value
            })
            this.tempIndex[i] = findIndex !== -1 ? findIndex : 0
          }

          data = data[this.tempIndex[i]].children
          i++
        }

        this.pickerData = pickerData
        if (!init) {
          this.$refs.picker.setData(this.pickerData, this.tempIndex)
          this.$refs.picker.refresh()
          for (let j = this.changeI + 1; j < this.tempIndex.length; j++) {
            this.$refs.picker.scrollTo(j, this.tempIndex[j])
          }
        }
      }
    },
    components: {
      CubePicker
    }
  }
</script>
