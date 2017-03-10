import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from './reducer/authReducer'
import MissingPeopleReducer from './reducer/missingPeopleReducer'

export const rootReducer = createStore(combineReducers({
        AuthReducer,
        MissingPeopleReducer
        
           })
           )

export let store = rootReducer;