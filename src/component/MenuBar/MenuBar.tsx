import s from './MenuBar.module.scss'
import Logo from '../.././assets/images/logo.png'
import IconDashboard01 from '/public/iconDashboard01.jpg'
import IconDashboard02 from '/public/iconDashboard02.jpg'
import IconDashboard03 from '/public/iconDashboard03.jpg'
import IconDashboard04 from '/public/iconDashboard04.jpg'
import IconDashboard05 from '/public/iconDashboard05.jpg'
import IconDashboard06 from '/public/iconDashboard06.jpg'

const MenuBar = () => {
  return (
    <div className={s.leftContainer}>
      <img src={Logo} alt='company logo' />
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard01} alt='icon dashboard 01' />
        <p>Dashboard</p>
      </a>
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard02} alt='icon dashboard 02' />
        <p>Thiết bị</p>
      </a>
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard03} alt='icon dashboard 03' />
        <p>Dịch vụ</p>
      </a>
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard04} alt='icon dashboard 04' />
        <p>Cấp số</p>
      </a>
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard05} alt='icon dashboard 05' />
        <p>Báo cáo</p>
      </a>
      <a className={s.iconDashboard} href='/personalinformation'>
        <img src={IconDashboard06} alt='icon dashboard 06' />
        <p>Cập nhật hệ thống</p>
      </a>
      <button>【➜ Đăng xuất</button>
    </div>
  )
}
export default MenuBar
