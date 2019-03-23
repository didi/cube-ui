<template>
  <cube-picker
    ref="picker"
    v-model="isVisible"
    :data="pickerData"
    :selected-index="pickerSelectedIndex"
    :pending="pending"
    :title="title"
    :subtitle="subtitle"
    :z-index="zIndex"
    :cancel-txt="_cancelTxt"
    :confirm-txt="_confirmTxt"
    :swipe-time="swipeTime"
    :mask-closable="maskClosable"
    @select="_pickerSelect"
    @cancel="_pickerCancel"
    @change="_pickerChange">
  </cube-picker>
</template>

<script type="text/ecmascript-6">
  import CubePicker from '../picker/picker.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import basicPickerMixin from '../../common/mixins/basic-picker'
  import pickerMixin from '../../common/mixins/picker'
  import localeMixin from '../../common/mixins/locale'

  const COMPONENT_NAME = 'cube-cascade-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, basicPickerMixin, pickerMixin, localeMixin],
    props: {
      async: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cascadeData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex.slice(),
        pickerData: [],
        pending: false
      }
    },
    created() {
      this._updatePickerData()
    },
    methods: {
      setData(data, selectedIndex = []) {
        this.pending = false
        this.cascadeData = data.slice()
        this.pickerSelectedIndex = selectedIndex.slice()
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
          this.async
            ? (this.pending = i !== this.pickerData.length - 1)
            : this._updatePickerData(i + 1)
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
                text: item[this.textKey],
                order: item[this.orderKey]
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
