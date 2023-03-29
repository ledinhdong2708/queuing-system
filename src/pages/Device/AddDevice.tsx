import { useState } from 'react'
import MenuBarDevice from '../.././component/MenuBar/MenuBarDevice'
import s from './AddDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import Input from '../.././component/Input/Input'
import Button from '../.././component/Button/Button'
import DropdownTypeDevice from '../../component/DropdownTypeDevice/DropdownTypeDevice'
const AddDevice = () => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  const btnStyle = {
    border: '1.5px solid #FF9138',
    boxShadow: '0px 0px 6px #E7E9F2',
    color: isHover ? 'white' : '#FF9138',
    backgroundColor: isHover ? '#DC3545' : '#FFF2E7'
  }
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
            <p>Thêm thiết bị</p>
          </div>
          <NavAvatar />
        </div>
        <p className={s.deviceManage}>Quản lý thiết bị</p>
        <div className={s.deviceInforContainer}>
          <p className={s.deviceInforContent}>Thông tin thiết bị</p>
          <div className={s.deviceInfor}>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='DeviceCode'>
                Mã thiết bị:<span>✱</span>
              </label>
              <Input placeholder='Nhập mã thiết bị' id='DeviceCode' />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='TypeDevice'>
                Loại thiết bị:<span>✱</span>
              </label>
              <DropdownTypeDevice />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='DeviceName'>
                Tên thiết bị:<span>✱</span>
              </label>
              <Input placeholder='Nhập tên thiết bị' id='DeviceName' />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='LoginName'>
                Tên đăng nhập:<span>✱</span>
              </label>
              <Input placeholder='Nhập tài khoản' id='LoginName' />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='IpAddress'>
                Địa chỉ IP:<span>✱</span>
              </label>
              <Input placeholder='Nhập địa chỉ IP' id='IpAddress' />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='Password'>
                Mật khẩu:<span>✱</span>
              </label>
              <Input placeholder='Nhập mật khẩu' id='Password' />
            </div>
            <div className={s.DeviceInputContainer}>
              <label htmlFor='ServiceUse'>
                Dịch vụ sử dụng:<span>✱</span>
              </label>
              <Input placeholder='Nhập dịch vụ sử dụng' id='ServiceUse' />
              <p className={s.note}>
                <span>✱</span>Là trường thông tin bắt buộc
              </p>
            </div>
          </div>
        </div>
        <div className={s.btnContainer}>
          <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={btnStyle} name='Hủy bỏ' />
          <Button name='Thêm thiết bị' />
        </div>
      </div>
    </div>
  )
}
export default AddDevice
