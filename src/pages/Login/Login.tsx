import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import Logo from '../.././assets/images/logo.png'
import Images from '../.././assets/images/images.jpg'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function Login() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [authing, setAuthing] = useState(false)

  const signInWithGoogle = async () => {
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid)
        navigate('/personalinformation')
      })
      .catch((error) => {
        console.log(error)
        setAuthing(false)
      })
  }

  return (
    <div className={styles.logoCotainer}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src={Logo} alt='Logo Company' />
        <form className={styles.loginForms} action=''>
          <label className={styles.label} htmlFor='username'>
            Tên đăng nhập *
          </label>
          <Input />
          <label className={styles.label} htmlFor='password'>
            Mật khẩu *
          </label>
          <div className={styles.inputPass}>
            <Input type={'password'} />
            {/* <img className={styles.iconEye} src={IconEye} alt='icon eye' /> */}
          </div>
          <Link to='/forgotpass' className={styles.forgotPass}>
            Quên mật khẩu?
          </Link>
          <Button name='Đăng nhập' />
          <button className={styles.googleLoginBtn} onClick={() => signInWithGoogle()} disabled={authing}>
            Đăng nhập bằng google
          </button>
        </form>
      </div>
      <div className={styles.rightContainer}>
        <img src={Images} className={styles.images} alt='images' />
      </div>
    </div>
  )
}
export default Login
