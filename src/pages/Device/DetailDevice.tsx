import MenuBarDevice from '../.././component/MenuBar/MenuBarDevice'
import s from './AddDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
const DetailDevice = () => {
  return (
    <div className='Container'>
      <MenuBarDevice />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p>Thiết bị</p>
            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            <p>Danh sách thiết bị</p>
            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            <p>Chi tiết thiết bị</p>
          </div>
          <NavAvatar />
        </div>
        <p className={s.deviceManage}>Quản lý thiết bị</p>
        <div className={s.deviceInforContainer}>
          <p className={s.deviceInforContent}>Thông tin thiết bị</p>
          <div className={s.DeviceDetailContainer}>
            <div className={s.DetailContainer}>
              <p>Mã thiết bị:</p>
              <p>KIO_01</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Loại thiết bị:</p>
              <p>Kiosk</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Tên thiết bị:</p>
              <p>Kiosk</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Tên đăng nhập:</p>
              <p>Linhkyo011</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Địa chỉ IP:</p>
              <p>128.172.308</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Mật khẩu:</p>
              <p>CMS</p>
            </div>
            <div className={s.DetailContainer}>
              <p>Dịch vụ sử dụng:</p>
              <p>
                Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailDevice
