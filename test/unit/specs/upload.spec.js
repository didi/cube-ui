import Vue from 'vue2'
import Upload from '@/modules/upload'
import instantiateComponent from '@/common/helpers/instantiate-component'
import '../utils/file'
import '../utils/xhr'
const UploadBtn = Upload.Btn
const UploadFile = Upload.File

describe('Upload.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Upload)
    expect(Vue.component(Upload.name))
      .to.be.a('function')
    expect(Vue.component(UploadBtn.name))
      .to.be.a('function')
    expect(Vue.component(UploadFile.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createUpload()
    expect(vm.$el.className)
      .to.equal('cube-upload')
    expect(vm.$el.children[0].className)
      .to.equal('cube-upload-def clear-fix')
    expect(vm.$el.querySelectorAll('.cube-upload-btn-def').length)
      .to.equal(1)
    const input = vm.$el.querySelector('input')
    expect(input.className)
      .to.equal('cube-upload-input')
    expect(input.type)
      .to.equal('file')
    expect(input.multiple)
      .to.be.true
    expect(input.accept)
      .to.equal('image/*')
  })

  it('should add files & upload', function (done) {
    this.timeout(1000)

    vm = createFilesUpload(2, {}, {
      target() {
        return '/upload2'
      },
      checkSuccess(response, file, cb) {
        setTimeout(() => {
          /* eslint-disable standard/no-callback-literal */
          cb(true)
        })
      }
    })
    // check data
    expect(vm.files.length)
      .to.equal(2)
    expect(vm.files[0].name)
      .to.equal('xx.x')
    expect(vm.files[0].size)
      .to.equal(3)

    // check init content
    setTimeout(() => {
      const allFiles = vm.$el.querySelectorAll('.cube-upload-file')
      expect(allFiles.length)
        .to.equal(2)
      expect(allFiles[0].querySelector('.cube-upload-file-def').style.backgroundImage)
        .not.to.be.null
      expect(allFiles[0].querySelector('.cube-upload-file-state').className)
        .to.equal('cube-upload-file-state')
      expect(allFiles[0].querySelector('.cube-upload-file-status').className)
        .to.equal('cube-upload-file-status')
      expect(allFiles[0].querySelector('.cube-upload-file-progress').textContent.trim())
        .to.equal('0%')
      // hide upload btn
      expect(vm.$el.querySelector('.cube-upload-btn').style.display)
        .to.equal('none')
    }, 50)
    // start uploading
    setTimeout(() => {
      // check data state
      expect(vm.files[0]._xhr)
        .not.to.be.null
      expect(vm.files[0]._xhr.url)
        .to.equal('/upload2')
      expect(vm.files[0].status)
        .to.equal('uploading')
      expect(vm.files[0].progress)
        .to.equal(0)
      expect(vm.files[1].status)
        .to.equal('ready')
      // progress
      vm.files[0]._xhr.triggerProgress(1, vm.files[0].size)
      expect(vm.files[0].progress.toFixed(2))
        .to.equal('0.33')

      vm.$nextTick(() => {
        const allFiles = vm.$el.getElementsByClassName('cube-upload-file')
        expect(allFiles[0].querySelector('.cube-upload-file-state').className)
          .to.equal('cube-upload-file-state cube-upload-file_stat')
        expect(allFiles[0].querySelector('.cube-upload-file-progress').textContent.trim())
          .to.equal('33%')

        // progress agagin
        vm.files[0]._xhr.triggerProgress(2, vm.files[0].size)

        setTimeout(() => {
          expect(vm.files[0].progress.toFixed(2))
            .to.equal('0.67')
          // success
          vm.files[0]._xhr.triggerSuccess()
          // need to wait checkSuccess
          setTimeout(() => {
            expect(vm.files[0].progress)
              .to.equal(1)
            expect(vm.files[0].status)
              .to.equal('success')

            setTimeout(() => {
              expect(allFiles[0].querySelector('.cube-upload-file-status').className)
                .to.equal('cube-upload-file-status cubeic-right')

              // next file
              expect(vm.files[1]._xhr)
                .not.to.be.null
              expect(vm.files[1].status)
                .to.equal('uploading')
              expect(vm.files[1].progress)
                .to.equal(0)
              // error
              vm.files[1]._xhr.triggerError()
              expect(vm.files[1].progress)
                .to.equal(1)
              expect(vm.files[1].status)
                .to.equal('error')

              setTimeout(() => {
                expect(allFiles[1].querySelector('.cube-upload-file-status').className)
                  .to.equal('cube-upload-file-status cubeic-warn')

                done()
              })
            })
          })
        }, 100)
      })
    }, 200)
  })

  it('should remove file', function (done) {
    this.timeout(1000)

    vm = createFilesUpload(3)

    expect(vm.files.length)
      .to.equal(3)

    setTimeout(() => {
      expect(vm.files[0].status)
        .to.equal('uploading')
      const allFiles = vm.$el.getElementsByClassName('cube-upload-file')
      // click remove ele
      allFiles[0].querySelector('.cubeic-wrong').click()

      expect(vm.files.length)
        .to.equal(2)
      expect(vm.files[0].name)
        .to.equal('zz.z')

      done()
    }, 200)
  })

  it('should start & pause upload', function (done) {
    this.timeout(1000)

    vm = createFilesUpload()

    setTimeout(() => {
      expect(vm.files[0].status)
        .to.equal('uploading')

      expect(vm.paused)
        .to.be.false

      vm.start()
      expect(vm.paused)
        .to.be.false

      vm.pause()
      expect(vm.paused)
        .to.be.true
      expect(vm.files[0].status)
        .to.equal('ready')

      vm.start()
      expect(vm.paused)
        .to.be.false
      expect(vm.files[0].status)
        .to.equal('uploading')

      done()
    }, 200)
  })

  it('should retry upload', function (done) {
    this.timeout(1000)

    vm = createFilesUpload()

    setTimeout(() => {
      vm.files[0]._xhr.triggerError()
      vm.files[1]._xhr.triggerError()

      vm.retry()
      expect(vm.files[0].retryId)
        .not.to.be.null
      expect(vm.files[0].status)
        .to.equal('uploading')
      done()
    }, 200)
  })

  it('should trigger events', function (done) {
    this.timeout(1000)
    const filesAddedHandler = sinon.spy()
    const fileSubmittedHandler = sinon.spy()
    const fileRemovedHandler = sinon.spy()
    const fileSuccessHandler = sinon.spy()
    const fileErrorHandler = sinon.spy()
    const fileClickHandler = sinon.spy()
    vm = createFilesUpload(3, {
      'files-added': filesAddedHandler,
      'file-submitted': fileSubmittedHandler,
      'file-removed': fileRemovedHandler,
      'file-success': fileSuccessHandler,
      'file-error': fileErrorHandler,
      'file-click': fileClickHandler
    })
    expect(filesAddedHandler)
      .to.be.calledOnce
    expect(filesAddedHandler.getCall(0).args[0].length)
      .to.equal(4)
    expect(fileSubmittedHandler)
      .to.have.callCount(3)
    setTimeout(() => {
      // remove
      const firstFile = vm.files[0]
      const allFiles = vm.$el.getElementsByClassName('cube-upload-file')
      // click remove ele
      allFiles[0].querySelector('.cubeic-wrong').click()
      expect(fileRemovedHandler)
        .to.be.calledWith(firstFile)
      // success
      vm.files[0]._xhr.triggerSuccess()
      expect(fileSuccessHandler)
        .to.be.calledWith(vm.files[0])
      // error
      vm.files[1]._xhr.triggerError()
      expect(fileErrorHandler)
        .to.be.calledWith(vm.files[1])
      // click
      allFiles[1].click()
      expect(fileClickHandler)
        .to.be.calledWith(vm.files[0])
      done()
    }, 200)
  })

  function createUpload(props = { action: '/upload' }, events = {}) {
    const vm = instantiateComponent(Vue, Upload, {
      props,
      on: events
    })
    return vm
  }

  function createFilesUpload(max = 2, events = {}, opts = {}) {
    const vm = createUpload({
      action: {
        target: '/upload',
        progressInterval: 30,
        data: {
          param: 'param'
        },
        headers: {
          'my-header': 'my-header'
        },
        ...opts
      },
      max
    }, events)
    const uploadBtn = vm.$children[0]
    uploadBtn.changeHandler({
      currentTarget: {
        files: [
          new window.File(['111'], 'xx.x'),
          new window.File(['222'], 'yy.y', {
            ignore: true
          }),
          new window.File(['333'], 'zz.z'),
          new window.File(['444'], '44.44')
        ]
      }
    })
    return vm
  }
})
