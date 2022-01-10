import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUserProfile } from '../../redux/profileReducer'
import { Profile } from './Profile'

export const ProfileContainerAPI = (props) => {
  let { userId } = useParams()

  useEffect(() => {
    props.getUserProfile(userId)
  })

  return <Profile {...props} profile={props.profile} />
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
})

export const ProfileContainer = compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainerAPI)
