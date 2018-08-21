import { toLocaleDateString } from '../../util'

export default {
  required: '此为必填项',
  type: {
    string: '请输入字符',
    number: '请输入数字',
    array: '数据类型应为数组',
    date: '请选择有效日期',
    email: '请输入有效邮箱',
    tel: '请输入有效的手机号码',
    url: '请输入有效网址'
  },
  min: {
    string: /* istanbul ignore next */ (config) => `至少输入 ${config} 位字符`,
    number: /* istanbul ignore next */ (config) => `不得小于 ${config}`,
    array: /* istanbul ignore next */ (config) => `请选择至少 ${config} 项`,
    date: /* istanbul ignore next */ (config) => `请选择 ${toLocaleDateString(config, 'zh')} 之后的时间`,
    email: /* istanbul ignore next */ (config) => `至少输入 ${config} 位字符`,
    tel: /* istanbul ignore next */ (config) => `至少输入 ${config} 位字符`,
    url: /* istanbul ignore next */ (config) => `至少输入 ${config} 位字符`
  },
  max: {
    string: /* istanbul ignore next */ (config) => `请勿超过 ${config} 位字符`,
    number: /* istanbul ignore next */ (config) => `请勿大于 ${config}`,
    array: /* istanbul ignore next */ (config) => `最多选择 ${config} 项`,
    date: /* istanbul ignore next */ (config) => `请选择 ${toLocaleDateString(config, 'zh')} 之前的时间`,
    email: /* istanbul ignore next */ (config) => `请勿超过 ${config} 位字符`,
    tel: /* istanbul ignore next */ (config) => `请勿超过 ${config} 位字符`,
    url: /* istanbul ignore next */ (config) => `请勿超过 ${config} 位字符`
  },
  len: {
    string: /* istanbul ignore next */ (config) => `请输入 ${config} 位字符`,
    number: /* istanbul ignore next */ (config) => `长度应等于 ${config}`,
    array: /* istanbul ignore next */ (config) => `请选择 ${config} 项`,
    date: /* istanbul ignore next */ (config) => `请选择 ${toLocaleDateString(config, 'zh')}`,
    email: /* istanbul ignore next */ (config) => `请输入 ${config} 位字符`,
    tel: /* istanbul ignore next */ (config) => `请输入 ${config} 位字符`,
    url: /* istanbul ignore next */ (config) => `请输入 ${config} 位字符`
  },
  pattern: '格式错误',
  custom: '未通过校验',
  notWhitespace: '空白内容无效'
}
