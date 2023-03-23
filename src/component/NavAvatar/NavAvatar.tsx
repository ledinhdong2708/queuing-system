import s from './NavAvatar.module.scss'
import IconRing from '/public/iconRing.jpg'
import Avatar from '../.././assets/images/avatar.jpg'

const NavAvatar = () => {
  return (
    <div className={s.avatarName}>
      <button className={s.iconRing}>
        <img src={IconRing} alt='icon ring' />
      </button>
      <img src={Avatar} alt='avatar' />
      <div className={s.desciption}>
        <p className={s.greeting}>Xin chào</p>
        <p>Lê Quỳnh Ái Vân</p>
      </div>
    </div>
  )
}
export default NavAvatar
