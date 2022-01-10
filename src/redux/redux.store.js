import { applyMiddleware, combineReducers, createStore } from 'redux'
import { authReducer } from './authReducer'
import { messageReducer } from './messageReducer'
import { profileReducer } from './profileReducer'
import { sidebarReducer } from './sidebarReducer'
import { usersReducer } from './usersReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profileReducer: profileReducer,
  messageReducer: messageReducer,
  sidebarReducer: sidebarReducer,
  usersReducer: usersReducer,
  authReducer: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
