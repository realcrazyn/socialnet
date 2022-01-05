export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAG-BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.payload,
      }
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: '6',
            message: state.newMessageBody,
            likesCount: '1',
          },
        ],
        newMessageBody: '',
      }
    default:
      return state
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
