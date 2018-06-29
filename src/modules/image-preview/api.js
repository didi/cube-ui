import createAPI from '../../common/helpers/create-api'

export default function addImagePreview (Vue, ImagePreview) {
  createAPI(Vue, ImagePreview, ['change', 'hide'], true)
}
