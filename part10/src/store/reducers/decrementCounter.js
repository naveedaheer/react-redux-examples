import ActionTypes from "../actionTypes"

const initialState = {
  decrementState: 0
}

function decrementCounter(state = initialState, action) {
   switch (action.type) {
  
  case ActionTypes.DECREMENT:
   // return value - 1
   return Object.assign({}, state, { decrementState: state.decrementState - 1 });
   
  case ActionTypes.DECREMENT_WITH_VALUE:
   // return value - action.val
       return Object.assign({}, state, { decrementState: state.decrementState - action.val });

  default:
    return state
  }
}

export default decrementCounter