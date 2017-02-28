import ActionTypes from "../actionTypes"

function incrementCounter(value = 0, action) {
  
  switch (action.type) {
  
  case ActionTypes.INCREMENT:
    return value + 1

    case ActionTypes.INCREMENT_WITH_VALUE:
    return value + action.val;

  default:
    return value
  }
}

export default incrementCounter