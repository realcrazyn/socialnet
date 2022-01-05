import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import './Dialog.css'

export const Dialog = (props) => {
  return (
    <div className={s.dialogs_item}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}
