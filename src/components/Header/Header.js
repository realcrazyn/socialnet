import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header__img}
        src="https://brandlogos.net/wp-content/uploads/2021/02/bing-logo.png"
        alt="img"
      />
    </header>
  )
}
