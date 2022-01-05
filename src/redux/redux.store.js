import { combineReducers, createStore } from 'redux'
import { messageReducer } from './messageReducer'
import { profileReducer } from './profileReducer'
import { sidebarReducer } from './sidebarReducer'
import { usersReducer } from './usersReducer'

let reducers = combineReducers({
  profileReducer: profileReducer,
  messageReducer: messageReducer,
  sidebarReducer: sidebarReducer,
  usersReducer: usersReducer,
})

export let store = createStore(reducers)
