import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
  const postsData = props.posts.map((post, i) => (
    <Post key={i} message={post.message} likesCount={post.likesCount} />
  ))

  const addPost = () => {
    props.onAddPost()
  }

  const textHandler = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  let newPostElement = React.createRef()

  return (
    <div className={s.posts}>
      <h6>
        Here is what I think:
        <div>
          <div className={s.posts_input}>
            <textarea
              className={s.posts_input__item}
              ref={newPostElement}
              value={props.newPostText}
              onChange={textHandler}
            ></textarea>
          </div>
          <div className={s.posts_buttons}>
            <button className={s.posts_buttons__item} onClick={addPost}>
              Add Post
            </button>
            <button className={s.posts_buttons__item}>Remove</button>
          </div>
        </div>
      </h6>
      <div className={s.posts_collection}>{postsData}</div>
    </div>
  )
}
