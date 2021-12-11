export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAG-BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

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
  },

  _callSubscriber() {},

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: '0',
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.payload
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.payload
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: '6',
        message: this._state.messagesPage.newMessageBody,
        likesCount: '1',
      }
      this._state.messagesPage.messages.push(newMessage)
      this._state.messagesPage.newMessageBody = ''
      this._callSubscriber(this._state)
    }
  },
}
window.store = store

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: text,
  }
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}
export const newMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    payload: text,
  }
}
