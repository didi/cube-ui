import createAPI from '../../common/helpers/create-api'

export default function addToast (Vue, Toast) {
  const toast = createAPI(Vue, Toast, [], true)
  const types = ['loading', 'correct', 'error', 'warn']
  types.forEach(type => {
    toast[type] = function (config) {
      config.type = type
      return toast.create(config)
    }
  })
}
