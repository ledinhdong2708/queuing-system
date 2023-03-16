import s from './ResetPass.module.scss'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import Logo from '../.././assets/images/logo.png'
import Images from '../.././assets/images/images.jpg'

function ResetPass() {
  return (
    <div className={s.logoCotainer}>
      <div className={s.leftContainer}>
        <img className={s.logo} src={Logo} alt='Logo Company' />
        <form className={s.loginForms} action=''>
          <p className={s.p}>Mật khẩu</p>
          <Input type={'password'} />
          <p className={s.p}>Nhập lại mật khẩu</p>
          <Input type={'password'} />
          <Button name='Xác nhận' />
        </form>
      </div>
      <div className={s.rightContainer}>
        <img src={Images} className={s.images} alt='images' />
      </div>
    </div>
  )
}
export default ResetPass
