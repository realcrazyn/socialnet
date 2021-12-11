import s from './Message.module.css'

export const Message = (props) => {
  return (
    <div className={s.dialogs_message}>
      {props.message}
      <div className={s.dialogs_likes}> Likes: {props.likes}</div>
    </div>
  )
}
