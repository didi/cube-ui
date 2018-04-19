export default {
  data() {
    return {
      validating: false,
      pending: false,
      originValid: undefined
    }
  },
  computed: {
    valid() {
      const originValid = this.originValid
      const pending = this.pending
      const validating = this.validating
      return (pending || validating) ? undefined : originValid
    },
    invalid() {
      const valid = this.valid
      return valid === undefined ? valid : !valid
    }
  }
}
