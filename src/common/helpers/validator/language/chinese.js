export default {
  required: '此为必填项',
  type: {
    string: '请输入字符',
    number: '请输入数字',
    array: '请选择一项或多项',
    date: '请选择有效日期',
    email: '请输入有效邮箱',
    tel: '请输入有效的手机号码',
    url: '请输入有效网址'
  },
  min: {
    string: (config) => `至少输入 ${config} 位字符`,
    number: (config) => `不得小于 ${config}`,
    array: (config) => `请选择至少 ${config} 项`,
    date: (config) => `请选择 ${config} 之后的时间`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `至少输入 ${config} 位字符`,
    tel: (config) => `至少输入 ${config} 位字符`,
    url: (config) => `至少输入 ${config} 位字符`
  },
  max: {
    string: (config) => `请勿超过 ${config} 位字符`,
    number: (config) => `请勿大于 ${config}`,
    array: (config) => `最多选择 ${config} 项`,
    date: (config) => `请选择 ${config} 之前的时间`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `请勿超过 ${config} 位字符`,
    tel: (config) => `请勿超过 ${config} 位字符`,
    url: (config) => `请勿超过 ${config} 位字符`
  },
  len: {
    string: (config) => `请输入 ${config} 位字符`,
    number: (config) => `需等于 ${config}`,
    array: (config) => `请选择 ${config} 项`,
    date: (config) => `请选择 ${config}`, // TODO: transform to year-month-day-hh-mm-ss
    email: (config) => `请输入 ${config} 位字符`,
    tel: (config) => `请输入 ${config} 位字符`,
    url: (config) => `请输入 ${config} 位字符`
  },
  pattern: '格式错误',
  custom: '未通过校验',
  notWhitespace: '空白内容无效'
}
