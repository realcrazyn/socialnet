import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <img
        alt=""
        className={s.profile_img}
        src="https://i.pinimg.com/originals/93/b2/41/93b24188e3e04350e236c5376c99e247.jpg"
      />
      <div className={s.profile_descr}>ava</div>
    </div>
  )
}
