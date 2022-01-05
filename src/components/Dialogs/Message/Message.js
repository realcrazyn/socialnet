import s from './Message.module.css'

export const Message = (props) => {
  return (
    <div className={s.dialogs_message}>
      <p className={s.dialogs_message__text}>{props.message}</p>
      <p className={s.dialogs_message__likes}>
        Likes: <span> {props.likes}</span>
      </p>
    </div>
  )
}
