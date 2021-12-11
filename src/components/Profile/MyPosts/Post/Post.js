import s from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.ava}
        src="https://thumbs.dfs.ivi.ru/storage9/contents/b/4/0e3ef20a0f848cf9c84f8b003b62fe.jpg"
        alt="img"
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}
