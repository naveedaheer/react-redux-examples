import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from '../Reducers/AuthReducer'


export const rootReducer = createStore(combineReducers({
        AuthReducer,
           })
           )

export let store = rootReducer;