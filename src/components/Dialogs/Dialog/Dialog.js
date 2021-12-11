import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

export const Dialog = (props) => {
  return (
    <div className={s.dialogs_item + ' ' + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}
