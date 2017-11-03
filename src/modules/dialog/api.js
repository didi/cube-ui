import createAPI from '../../common/helpers/create-api'

export default function addDialog (Vue, Dialog) {
  const dialog = createAPI(Vue, Dialog, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'])
  const types = ['alert', 'confirm']
  types.forEach((type) => {
    dialog[type] = function (config, renderFn) {
      config.type = type
      return dialog.create(config, renderFn)
    }
  })
}
