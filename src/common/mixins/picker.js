export default {
  props: {
    title: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: '取消'
    },
    confirmTxt: {
      type: String,
      default: '确定'
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    zIndex: {
      type: Number
    }
  }
}
