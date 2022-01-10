import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import s from './Profile.module.css'

export const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
