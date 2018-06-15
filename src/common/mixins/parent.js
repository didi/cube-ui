export default function parentMixinCreator (relationKey, targetKey = 'relationParent') {
  return {
    created() {
      this[targetKey] = this._getTargetParent()
    },
    destroyed() {
      this[targetKey] = null
    },
    methods: {
      _getTargetParent() {
        let p = this.$parent
        while (p) {
          if (p[relationKey]) {
            return p
          }
          p = p.$parent
        }
        return null
      }
    }
  }
}
