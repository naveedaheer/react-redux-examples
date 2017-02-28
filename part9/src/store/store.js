import {createStore} from "redux";
import {combineReducers} from "redux"
import incrementCounter from "./reducers/incrementCounter"
import decrementCounter from "./reducers/decrementCounter"


export const rootReducer = combineReducers({incrementCounter, decrementCounter})


let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
)

export default store