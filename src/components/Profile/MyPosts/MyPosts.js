import React from 'react'
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../redux/state'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
  const postsData = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const textHandler = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostActionCreator(text))
  }

  let newPostElement = React.createRef()

  return (
    <div className={s.posts}>
      <h3>
        My posts
        <div>
          <div>
            {' '}
            <textarea
              ref={newPostElement}
              value={props.newPostText}
              onChange={textHandler}
            ></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add Post</button>
            <button>Remove</button>
          </div>
        </div>
      </h3>
      <div className={s.posts_collection}>{postsData}</div>
    </div>
  )
}
