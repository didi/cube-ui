<template>
  <cube-picker
      ref="picker"
      :title="title"
      :data="pickerData"
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
        tempIndex: [],
        changeI: 0
      }
    },
    computed: {
      depth() {
        let depth = 0
        if (this.data.length) {
          depth++
          let data = this.data[0]
          while (data.children) {
            depth++
            data = data.children[0]
          }
        }
        return depth
      }
    },
    created() {
      for (let i = 0; i < this.depth; i++) {
        this.tempIndex.push(0)
      }
      this.updatePickerData(true)
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
        let data = this.data
        for (let i = 0; i < this.depth; i++) {
          let columnData = []
          data.forEach((item) => {
            columnData.push({
              value: item.value,
              text: item.text
            })
          })
          pickerData.push(columnData)

          if (!init && i > this.changeI) {
            /* try to remain same value  */
            const findIndex = columnData.findIndex((item) => {
              return item.value === this.pickerData[i][this.tempIndex[i]].value
            })
            this.tempIndex[i] = findIndex !== -1 ? findIndex : 0
          }

          data = data[this.tempIndex[i]].children
        }

        this.pickerData = pickerData
        if (!init) {
          this.$refs.picker.setData(this.pickerData, this.tempIndex)
          this.$refs.picker.refresh()
          for (let j = this.changeI + 1; j < this.depth; j++) {
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
