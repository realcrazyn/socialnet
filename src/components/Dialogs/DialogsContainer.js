import { connect } from 'react-redux'
import {
  newMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/messageReducer'

import { Dialogs } from './Dialogs'

let mapStateToProps = (state) => {
  return {
    state: state.messageReducer,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(sendMessageCreator())
    },
    onChangeMessage: (text) => {
      dispatch(newMessageBodyCreator(text))
    },
  }
}

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
