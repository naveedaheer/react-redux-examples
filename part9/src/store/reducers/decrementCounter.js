import ActionTypes from "../actionTypes"

function decrementCounter(value = 0, action) {
   switch (action.type) {
  
  case ActionTypes.DECREMENT:
    return value - 1
   
  case ActionTypes.DECREMENT_WITH_VALUE:
    return value - action.val
  default:
    return value
  }
}

export default decrementCounter