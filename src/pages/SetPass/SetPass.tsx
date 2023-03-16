import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './SetPass.module.scss'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import Logo from '../.././assets/images/logo.png'
import Images from '../.././assets/images/images.jpg'

function SetPass() {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  const boxStyle = {
    cursor: 'pointer',
    backgroundColor: isHover ? 'lightblue' : 'white',
    color: isHover ? 'red' : 'orange'
  }
  return (
    <div className={s.logoCotainer}>
      <div className={s.leftContainer}>
        <img className={s.logo} src={Logo} alt='Logo Company' />
        <form className={s.loginForms} action=''>
          <h2 className={s.h2}>Đặt lại mật khẩu</h2>
          <p className={s.p}>Vui lòng nhập email để đặt lại mật khẩu của bạn</p>
          <Input />
          <div className={s.btnContainer}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <Button style={boxStyle} name='Hủy' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/resetpass'>
              <Button name='Tiếp tục' />
            </Link>
          </div>
        </form>
      </div>
      <div className={s.rightContainer}>
        <img src={Images} className={s.images} alt='images' />
      </div>
    </div>
  )
}
export default SetPass
