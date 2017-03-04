import { createStore } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from './reducer/authReducer'
// import UserReducer from './reducers/userReducer'

export const rootReducer = createStore(AuthReducer)

export let store = rootReducer;