import { Loader } from '../../../Loader/Loader'
import s from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div>
      <div className={s.prfile_img}>
        <img
          alt=""
          className={s.profile_img__item}
          src={props.profile.photos.large}
        />
      </div>
      <div className={s.profile_descr}>{props.profile.fullName}</div>
      <div>Status: {props.profile.aboutMe}</div>
    </div>
  )
}
