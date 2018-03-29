const toButtonHandler = (field, type) => {
  field.type = 'button'
  if (!field.props) {
    field.props = {}
  }
  field.props.type = type
}

export {
  toButtonHandler
}
