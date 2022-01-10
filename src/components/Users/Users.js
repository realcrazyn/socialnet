import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/icon.png'
import s from './Users.module.css'

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = props.currentPage; i <= pagesCount; i++) {
    if (pages.length === 0) {
      if (i === 1) {
      } else {
        pages.unshift(1)
        pages.push(i)
      }
    } else if (pages.length === 7) {
      pages.push(pagesCount)
    } else if (pages.length > 7) {
    } else {
      pages.push(i)
    }
  }

  return (
    <div>
      <div className={s.user_pag}>
        {pages.map((p, i) => (
          <span
            key={i}
            className={
              props.currentPage === p
                ? s.user_pag__activepage + ' ' + s.user_pag__page
                : s.user_pag__page
            }
            onClick={() => {
              props.onPageChanged(p)
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u, ind) => (
        <div key={ind} className={s.user_card}>
          <div>
            <div className={s.user_card__logo}>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="img"
                  className={s.user_card__logoimg}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
