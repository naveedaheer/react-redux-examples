function counter(value = 0, action) {
  switch (action.type) {
  case 'INC':
    return value + 1
  case 'DEC':
    return value - 1
  default:
    return value
  }
}

export default counter