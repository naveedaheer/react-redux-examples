function counter(value = 0, action) {
  switch (action.type) {
  case 'INC':
    return value + 1
  case 'DEC':
    return value - 1
    case 'PLUS_WITH_VALUE':
    return value + action.val;
  case 'MINUS_WITH_VALUE':
    return value - action.val;
  default:
    return value
  }
}

export default counter