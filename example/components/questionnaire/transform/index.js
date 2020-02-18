import transformType from './type'
import transformModel from './model'
import transformTitle from './title'
import transformOptions from './options'
import transformRequired from './required'
import transformErrMsg from './err'
import transformCustom from './custom'

export default function transform(config) {
  const field = {}
  const transforms = [
    transformType,
    transformModel,
    transformTitle,
    transformOptions,
    transformRequired,
    transformErrMsg,
    transformCustom
  ]
  transforms.forEach((transformFn) => {
    transformFn(config, field)
  })
  return field
}
