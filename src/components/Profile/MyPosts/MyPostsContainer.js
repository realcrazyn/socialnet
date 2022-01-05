import { connect } from 'react-redux'
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(updateNewPostActionCreator(text)),
    onAddPost: () => dispatch(addPostActionCreator()),
  }
}

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
