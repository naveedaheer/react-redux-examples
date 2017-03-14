import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from '../Reducers/AuthReducer'
import ProductReducer from '../Reducers/ProductReducer'

export const rootReducer = createStore(combineReducers({
        AuthReducer,
        ProductReducer
           })
           )

export let store = rootReducer;