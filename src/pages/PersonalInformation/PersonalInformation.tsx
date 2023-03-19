import s from './PersonalInformation.module.scss'
import MenuBar from '../.././component/MenuBar/MenuBar'
import Avatar from '../.././assets/images/avatar.jpg'
import Input from '../.././component/Input/Input'
import IconRing from '/public/iconRing.jpg'

const PersonalInformation = () => {
  return (
    <div className={s.container}>
      <MenuBar />
      <div className={s.rightContainer}>
        <div className={s.navContainer}>
          <p className={s.pInformation}>Thông tin cá nhân</p>
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
        </div>
        <div className={s.information}>
          <div className={s.fristInfoContainer}>
            <img src={Avatar} alt='avarta' />
            <p>Lê Quỳnh Ái Vân</p>
          </div>
          <div className={s.inputContainer}>
            <p>Tên người dùng</p>
            <Input placeholder='Lê Quỳnh Ái Vân' disabled={true} />
            <p>Số điện thoại</p>
            <Input placeholder='0767375921' disabled={true} />
            <p>Email:</p>
            <Input placeholder='adminSSO1@domain.com' disabled={true} />
          </div>
          <div className={s.inputContainer}>
            <p>Tên đăng nhập</p>
            <Input placeholder='lequynhaivan01' disabled={true} />
            <p>Mật khẩu</p>
            <Input placeholder='311940211' disabled={true} />
            <p>Vai trò:</p>
            <Input placeholder='Kế toán' disabled={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PersonalInformation
