import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  newMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/messageReducer'
import { Dialogs } from './Dialogs'

let mapStateToProps = (state) => {
  return {
    state: state.messageReducer,
    isAuth: state.authReducer.isAuth,
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

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
