import { messageReducer } from './messageReducer'
import { profileReducer } from './profileReducer'
import { sidebarReducer } from './sidebarReducer'

export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hi', likesCount: '1' },
        { id: '2', message: 'post', likesCount: '1' },
        { id: '3', message: 'WTF', likesCount: '1' },
      ],
      newPostText: '',
    },

    messagesPage: {
      messages: [
        { id: '1', message: 'Hi', likesCount: '1' },
        { id: '2', message: 'Hello', likesCount: '2' },
        { id: '3', message: 'HWTFi', likesCount: '4' },
        { id: '4', message: 'fghhfgh', likesCount: '0' },
        { id: '5', message: 'MFAKA!', likesCount: '100500' },
      ],
      newMessageBody: '',
      dialogs: [
        {
          id: '1',
          name: 'Helen',
        },
        {
          id: '2',
          name: 'Dimych',
        },
        {
          id: '3',
          name: 'Sasha',
        },
        {
          id: '4',
          name: 'Valera',
        },
        {
          id: '5',
          name: 'Andrey',
        },
      ],
    },
    sidebar: {},
  },

  _callSubscriber() {},

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messageReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
  },
}
window.store = store
