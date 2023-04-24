import MenuBarProgression from '../.././component/MenuBar/MenuBarProgression'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import s from '.././Service/Service.module.scss'
import sAddProgression from './AddProgression.module.scss'
import DropdownService from '../.././component/DropdownService/DropdownService'
import Button from '../.././component/Button/Button'
import { useState } from 'react'

const AddProgression = () => {
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
      <MenuBarProgression />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p className={sAddProgression.pContent}>Cấp số</p>
            <p>
              <FontAwesomeIcon className={sAddProgression.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sAddProgression.pContent}>Danh sách cấp số</p>
            <p>
              <FontAwesomeIcon className={sAddProgression.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sAddProgression.pContent}>Cấp số mới</p>
          </div>
          <NavAvatar />
        </div>
        <div className={s.listDevice}>
          <p className={s.listContent}>Quản lý cấp số</p>
        </div>
        <div className={sAddProgression.newProgression}>
          <h1>CẤP SỐ MỚI</h1>
          <p>Dịch vụ khách hàng lựa chọn</p>
          <div className={sAddProgression.dropdownContainer}>
            <DropdownService />
          </div>
          <div className={sAddProgression.btnContainer}>
            <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={btnStyle} name='Hủy bỏ' />
            <Button name='In số' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddProgression
