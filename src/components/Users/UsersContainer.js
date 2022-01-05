import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import { Users } from './Users'

let mapStateToProps = (state) => {
  return {
    usersReducer: state.usersReducer,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followHandler: (id) => dispatch(followAC(id)),
    unfollowHandler: (id) => dispatch(unfollowAC(id)),
    getUsers: (users) => dispatch(setUsersAC(users)),
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
