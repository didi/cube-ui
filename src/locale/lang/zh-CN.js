export default {
  cancel: '取消',
  confirm: '确认',
  ok: '确定',
  prev: '上一步',
  next: '下一步',
  selectText: '请选择',
  now: '现在',
  selectTime: '选择时间',
  today: '今日',
  formatDate: 'M月D日',
  hours: '点',
  minutes: '分',
  validator: {
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
      string: '至少输入 {{config}} 位字符',
      number: '不得小于 {{config}}',
      array: '请选择至少 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
      email: '至少输入 {{config}} 位字符',
      tel: '至少输入 {{config}} 位字符',
      url: '至少输入 {{config}} 位字符'
    },
    max: {
      string: '请勿超过 {{config}} 位字符',
      number: '请勿大于 {{config}}',
      array: '最多选择 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: '请勿超过 {{config}} 位字符',
      tel: '请勿超过 {{config}} 位字符',
      url: '请勿超过 {{config}} 位字符'
    },
    len: {
      string: '请输入 {{config}} 位字符',
      number: '长度应等于 {{config}}',
      array: '请选择 {{config}} 项',
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: '请输入 {{config}} 位字符',
      tel: '请输入 {{config}} 位字符',
      url: '请输入 {{config}} 位字符'
    },
    pattern: '格式错误',
    custom: '未通过校验',
    notWhitespace: '空白内容无效'
  }
}
