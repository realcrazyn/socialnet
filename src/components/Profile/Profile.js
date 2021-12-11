import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import s from './Profile.module.css'

export const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}
