import Upload from '../../components/upload/upload.vue'
import UploadBtn from '../../components/upload/btn.vue'
import UploadFile from '../../components/upload/file.vue'

Upload.install = function (app) {
  app.component(Upload.name, Upload)
  app.component(UploadBtn.name, UploadBtn)
  app.component(UploadFile.name, UploadFile)
}

Upload.Btn = UploadBtn
Upload.File = UploadFile

export default Upload
