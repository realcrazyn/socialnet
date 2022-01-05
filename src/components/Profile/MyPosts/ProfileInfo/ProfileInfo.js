import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div className={s.prfile_img}>
        <img
          alt=""
          className={s.profile_img__item}
          src="https://i.pinimg.com/originals/93/b2/41/93b24188e3e04350e236c5376c99e247.jpg"
        />
      </div>
      <div className={s.profile_descr}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt
        aliquid ad tenetur tempora molestiae voluptatum totam nihil assumenda
        impedit eaque sed ut nobis sint non iusto rem, quaerat corporis!
        Accusamus vitae expedita quasi, ab inventore neque harum aliquam
        reprehenderit, adipisci suscipit, explicabo omnis eligendi. Assumenda
        commodi quasi fugiat quidem animi! Et nihil amet placeat ratione autem
        provident eligendi accusantium? Reprehenderit quo quisquam voluptas quos
        temporibus voluptatum minima esse soluta fuga? Veniam labore laborum nam
      </div>
    </div>
  )
}
