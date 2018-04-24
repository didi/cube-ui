<template>
  <cube-picker
      ref="picker"
      v-model="isVisible"
      :data="pickerData"
      :selected-index="pickerSelectedIndex"
      :title="title"
      :z-index="zIndex"
      :cancel-txt="cancelTxt"
      :confirm-txt="confirmTxt"
      :swipe-time="swipeTime"
      @select="_pickerSelect"
      @cancel="_pickerCancel"
      @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  import CubePicker from '../picker/picker.vue'
  import popupMixin from '../../common/mixins/popup'
  import basicPickerMixin from '../../common/mixins/basic-picker'
  import pickerMixin from '../../common/mixins/picker'

  const COMPONENT_NAME = 'cube-cascade-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [popupMixin, basicPickerMixin, pickerMixin],
    data () {
      return {
        cascadeData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex.slice(),
        pickerData: []
      }
    },
    created() {
      this._updatePickerData()
    },
    methods: {
      show() {
        if (this.isVisible) {
          return
        }
        this.$refs.picker
          ? this.$refs.picker.show()
          : this.$nextTick(() => {
            this.$refs.picker.show()
          })
      },
      hide() {
        if (!this.isVisible) {
          return
        }
        this.$refs.picker
          ? this.$refs.picker.hide()
          : this.$nextTick(() => {
            this.$refs.picker.hide()
          })
      },
      setData(data, selectedIndex = []) {
        this.cascadeData = data
        this.pickerSelectedIndex = selectedIndex
        this._updatePickerData()
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
          this._updatePickerData(i + 1)
        }
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _updatePickerData(fromColumn = 0) {
        let data = this.cascadeData
        let i = 0
        while (data) {
          if (i >= fromColumn) {
            let columnData = []
            data.forEach((item) => {
              columnData.push({
                value: item[this.valueKey],
                text: item[this.textKey]
              })
            })
            this.pickerData[i] = columnData
            /* refillColumn could only be called after show() */
            this.pickerSelectedIndex[i] = fromColumn === 0
              ? (this.pickerSelectedIndex[i] < data.length ? this.pickerSelectedIndex[i] || 0 : 0)
              : this.$refs.picker.refillColumn(i, columnData)
          }
          data = data.length ? data[this.pickerSelectedIndex[i]].children : null

          i++
        }

        if (i < this.pickerData.length) {
          this.pickerData.splice(i, this.pickerData.length - i)
        }

        this.pickerData = this.pickerData.slice()
      }
    },
    components: {
      CubePicker
    }
  }
</script>
