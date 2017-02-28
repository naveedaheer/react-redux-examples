import ActionTypes from "../actionTypes"

const initialState = {
    incrementState : 0
}

function incrementCounter(state=initialState, action) {
  
  switch (action.type) {
  
  case ActionTypes.INCREMENT:
    //return value + 1
    return Object.assign({}, state, { incrementState: state.incrementState + 1 });

    case ActionTypes.INCREMENT_WITH_VALUE:
    //return value + action.val;
     return Object.assign({}, state, { incrementState: state.incrementState + action.val });

  default:
    return state
  }
}

export default incrementCounter