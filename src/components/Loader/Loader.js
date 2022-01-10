import s from './Loader.module.css'

export const Loader = () => (
  <div className={s.lds_ring}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
