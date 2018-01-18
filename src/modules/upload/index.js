import Upload from '../../components/upload/upload.vue'
import UploadBtn from '../../components/upload/btn.vue'
import UploadFile from '../../components/upload/file.vue'

Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
  Vue.component(UploadBtn.name, UploadBtn)
  Vue.component(UploadFile.name, UploadFile)
}

Upload.Btn = UploadBtn
Upload.File = UploadFile

export default Upload
