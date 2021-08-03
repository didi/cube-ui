import { CubeUIComponent } from '../component'

export interface IFile extends CubeUIComponent {
  name?: string
  size?: number
  url?: string
  base64?: string
  status?: string
  progress?: number
  file?: File
  response?: object | string | []
  responseHeaders?: string
}

export declare class CubeUpload extends CubeUIComponent {
  value?: IFile[]
  action?: string | object
  max?: number
  auto?: boolean
  simultaneousUploads?: number
  multiple?: boolean
  accept?: string
  processFile?: (file?: File, next?: Function) => any
  start?: () => void
  pause?: () => void
  retry?: () => void
  removeFile?: (file: File) => void
}
