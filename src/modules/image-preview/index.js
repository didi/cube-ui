import ImagePreview from '../../components/image-preview/image-preview.vue'
import addImagePreview from './api'

ImagePreview.install = function (app) {
  app.component(ImagePreview.name, ImagePreview)
  addImagePreview(app, ImagePreview)
}

export default ImagePreview
