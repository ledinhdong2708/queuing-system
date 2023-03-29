import { Link } from 'react-router-dom'
import s from './MenuBar.module.scss'
import Logo from '../.././assets/images/logo.png'
import IconDashboard01 from '/public/iconDashboard01.png'
import IconDashboard02 from '/public/iconDashboard02.png'
import clsx from 'clsx'
import IconDashboard03 from '/public/iconDashboard03.png'
import IconDashboard04 from '/public/iconDashboard04.png'
import IconDashboard05 from '/public/iconDashboard05.png'
import IconDashboard06 from '/public/iconDashboard06.png'

const MenuBarService = () => {
  const classIconDashboard = clsx(s.iconDashboard, 'tsIconDashboard')

  return (
    <div className={s.leftContainer}>
      <img className={s.logo} src={Logo} alt='company logo' />
      <Link id='link' className={classIconDashboard} to='/personalinformation'>
        <img src={IconDashboard01} alt='icon dashboard 01' />
        <p>Dashboard</p>
      </Link>
      <Link className={classIconDashboard} to='/device'>
        <img src={IconDashboard02} alt='icon dashboard 02' />
        <p>Thiết bị</p>
      </Link>
      <Link style={{ backgroundColor: '#FF7506' }} className={classIconDashboard} to='/service'>
        <img src={IconDashboard03} alt='icon dashboard 03' />
        <p>Dịch vụ</p>
      </Link>
      <Link className={classIconDashboard} to='/progression'>
        <img src={IconDashboard04} alt='icon dashboard 04' />
        <p>Cấp số</p>
      </Link>
      <Link className={classIconDashboard} to='/report'>
        <img src={IconDashboard05} alt='icon dashboard 05' />
        <p>Báo cáo</p>
      </Link>
      <Link className={classIconDashboard} to='/personalinformation'>
        <img src={IconDashboard06} alt='icon dashboard 06' />
        <p>Cập nhật hệ thống</p>
      </Link>
      <button>【➜ Đăng xuất</button>
    </div>
  )
}
export default MenuBarService
