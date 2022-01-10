import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { getAuthUserData } from '../../redux/authReducer'

class HeaderContainerAPI extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
  email: state.authReducer.email,
})

export const HeaderContainer = connect(mapStateToProps, { getAuthUserData })(
  HeaderContainerAPI
)
