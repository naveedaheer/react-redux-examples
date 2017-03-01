import ActionTypes from '../store/ActionTypes'

const initialState = {
    todo : {
      todoList : [
      
      ]
    },
    maxId : 0
}

function Reducer(state = initialState, action) {
   var items = null;
  switch (action.type) {

  case ActionTypes.ADD_TODO:

    var newState = Object.assign({}, state );
    newState.maxId += 1;
    newState.todo.todoList.push({...action.payload,id:newState.maxId});
    return newState;
 
  default:
    return state
  }
}

export default Reducer;