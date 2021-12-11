import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? 'gold' : '',
          })}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs/"
          activeClassName={s.select}
          style={({ isActive }) => ({
            color: isActive ? 'gold' : '',
          })}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          activeClassName={s.select}
          style={({ isActive }) => ({
            color: isActive ? 'gold' : '',
          })}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          activeClassName={s.select}
          style={({ isActive }) => ({
            color: isActive ? 'gold' : '',
          })}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}
