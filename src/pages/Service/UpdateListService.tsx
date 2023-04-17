import { useState } from 'react'
import MenuBarService from '../.././component/MenuBar/MenuBarService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import Button from '../.././component/Button/Button'
import s from './AddService.module.scss'
import Input from '../.././component/Input/Input'

const UpdateListService = () => {
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
  function handleCheck() {
    const checkBox = document.querySelectorAll('.checkBox')
    checkBox[0].classList.toggle('changeCheckBox')
  }
  function handleCheck1() {
    const checkBox = document.querySelectorAll('.checkBox')
    checkBox[1].classList.toggle('changeCheckBox')
  }
  function handleCheck2() {
    const checkBox = document.querySelectorAll('.checkBox')
    checkBox[2].classList.toggle('changeCheckBox')
  }
  function handleCheck3() {
    const checkBox = document.querySelectorAll('.checkBox')
    checkBox[3].classList.toggle('changeCheckBox')
  }

  return (
    <div className='Container'>
      <MenuBarService />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p className={s.pContent}>Thiết bị</p>
            <p>
              <FontAwesomeIcon className={s.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={s.pContent}>Danh sách dịch vụ</p>
            <p>
              <FontAwesomeIcon className={s.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={s.pContent}>Chi tiết</p>
            <p>
              <FontAwesomeIcon className={s.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={s.pContent}>Cập nhật</p>
          </div>
          <NavAvatar />
        </div>
        <p className={s.serviceManage}>Quản lý dịch vụ</p>
        <div className={s.serviceInforContainer}>
          <p className={s.serviceInforContent}>Thông tin dịch vụ</p>
          <div className={s.serviceContainer}>
            <div className={s.inputService}>
              <div>
                <label htmlFor='inputCodeService'>
                  Mã dịch vụ:<span>✱</span>
                </label>
                <Input placeholder='201' id='inputCodeService' />
              </div>
              <div>
                <label htmlFor='inputNameService'>
                  Tên dịch vụ:<span>✱</span>
                </label>
                <Input placeholder='Khám tim mạch' id='inputNameService' />
              </div>
            </div>
            <div className={s.inputDescribe}>
              <label htmlFor='inputDescribe'>Mô tả:</label>
              <input type='text' id='inputDescribe' placeholder='Mô tả dịch vụ' />
            </div>
          </div>
          <p className={s.serviceInforContent}>Quy tắc cắp số</p>
          <div className={s.autoBoost}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input className='autoBoost' type='checkbox' onChange={handleCheck} />
              <p>Tăng tự động từ:</p>
            </label>
            <input className={s.numberInput} type='number' placeholder='0001' />
            <p className={s.come}>đến</p>
            <input className={s.numberInput} type='number' placeholder='0009' />
          </div>
          <div className={s.prefix}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input className='autoBoost' type='checkbox' onChange={handleCheck1} />
              <p>Prefix:</p>
            </label>
            <input className={s.numberInput} type='number' placeholder='0001' />
          </div>
          <div className={s.surfix}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input className='autoBoost' type='checkbox' onChange={handleCheck2} />
              <p>Surfix:</p>
            </label>
            <input className={s.numberInput} type='number' placeholder='0001' />
          </div>
          <div className={s.reset}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input className='autoBoost' type='checkbox' onChange={handleCheck3} />
              <p>Reset mỗi ngày</p>
            </label>
            <p className={s.note}>
              <span>✱</span>Là trường thông tin bắt buộc
            </p>
          </div>
        </div>
        <div className={s.btnContainer}>
          <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={btnStyle} name='Hủy bỏ' />
          <Button name='Cập nhật' />
        </div>
      </div>
    </div>
  )
}
export default UpdateListService
