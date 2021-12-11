import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header__img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLuy0lYsuikGlEjTQmgqyLpFJMP_MwUrB3w&usqp=CAU"
        alt="img"
      />
    </header>
  )
}
