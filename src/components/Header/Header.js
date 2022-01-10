import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.header__img}
        src="https://brandlogos.net/wp-content/uploads/2021/02/bing-logo.png"
        alt="img"
      />
      <div className={s.header_login}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button>Exit</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}
