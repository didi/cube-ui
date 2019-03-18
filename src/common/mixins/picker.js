export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: ''
    },
    confirmTxt: {
      type: String,
      default: ''
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    _cancelTxt () {
      return this.cancelTxt || this.$t('cancel')
    },
    _confirmTxt () {
      return this.confirmTxt || this.$t('ok')
    }
  }
}
