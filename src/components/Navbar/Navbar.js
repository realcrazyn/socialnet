import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? '#0084ff' : '',
          })}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs/"
          activeclassname={s.select}
          style={({ isActive }) => ({
            color: isActive ? '#0084ff' : '',
          })}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          activeclassname={s.select}
          style={({ isActive }) => ({
            color: isActive ? '#0084ff' : '',
          })}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          activeclassname={s.select}
          style={({ isActive }) => ({
            color: isActive ? '#0084ff' : '',
          })}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          activeclassname={s.select}
          style={({ isActive }) => ({
            color: isActive ? '#0084ff' : '',
          })}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}
