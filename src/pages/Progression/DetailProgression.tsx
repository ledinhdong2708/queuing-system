import MenuBarProgression from '../.././component/MenuBar/MenuBarProgression'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faRotateLeft, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import s from '.././Service/Service.module.scss'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import sDetailProgression from './DetailProgression.module.scss'
const DetailProgression = () => {
  return (
    <div className='Container'>
      <Link to='/progression' className={s.addDevice}>
        <FontAwesomeIcon className={s.iconAdd} icon={faRotateLeft} />
        <p>Quay lại</p>
      </Link>
      <MenuBarProgression />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p className={sDetailProgression.pContent}>Cấp số</p>
            <p>
              <FontAwesomeIcon className={sDetailProgression.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sDetailProgression.pContent}>Danh sách cấp số</p>
            <p>
              <FontAwesomeIcon className={sDetailProgression.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sDetailProgression.pContent}>Chi tiết</p>
          </div>
          <NavAvatar />
        </div>
        <p className={sDetailProgression.pTitle}>Quản lý cấp số</p>
        <div className={sDetailProgression.inforProgressionContainer}>
          <p className={sDetailProgression.inforProgressionTitle}>Thông tin cấp số</p>
          <div className={sDetailProgression.inforProgressionContentContainer}>
            <div className={sDetailProgression.inforProgressionLeft}>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Họ tên:</p>
                <p className={sDetailProgression.personalInformationValue}>Nguyễn Thị Dung</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Tên dịch vụ:</p>
                <p className={sDetailProgression.personalInformationValue}>Khám tim mạch</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Số thứ tự:</p>
                <p className={sDetailProgression.personalInformationValue}>2001201</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Thời gian cấp:</p>
                <p className={sDetailProgression.personalInformationValue}>14:35 - 07/11/2021</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Hạn sử dụng</p>
                <p className={sDetailProgression.personalInformationValue}>18:00 - 07/11/2021</p>
              </div>
            </div>
            <div className={sDetailProgression.inforProgressionRight}>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Nguồn cấp:</p>
                <p className={sDetailProgression.personalInformationValue}>Kiosk</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Trạng thái:</p>
                <p className={sDetailProgression.personalInformationValue}>
                  <FontAwesomeIcon className={sDetailProgression.waiting} icon={faCircle} />
                  Đang chờ
                </p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Số điện thoại:</p>
                <p className={sDetailProgression.personalInformationValue}>0948523623</p>
              </div>
              <div className={sDetailProgression.personalInformation}>
                <p className={sDetailProgression.personalInformationKey}>Địa chỉ email:</p>
                <p className={sDetailProgression.personalInformationValue}>nguyendung@gmail.com</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailProgression
