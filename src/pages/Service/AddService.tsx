import { useState } from 'react'
import MenuBarService from '../.././component/MenuBar/MenuBarService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import Button from '../.././component/Button/Button'
import s from './AddService.module.scss'
import Input from '../.././component/Input/Input'

const AddService = () => {
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
  //   const element  =  document.getElementById("autoBoost") as HTMLInputElement;
  //   if(element.checked){
  //     console.log(element);

  //   }
  function handleCheck() {
    const checkBox = document.querySelector('.checkBox') as HTMLDivElement
    checkBox.classList.toggle('lele')
    const right = document.querySelector('.right') as HTMLParagraphElement
    right.classList.toggle('block')
  }
  return (
    <div className='Container'>
      <MenuBarService />
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
              <input id='autoBoost' type='checkbox' onChange={handleCheck} />
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
              <input id='autoBoost' type='checkbox' onChange={handleCheck} />
              <p>Prefix:</p>
            </label>
            <input className={s.numberInput} type='number' placeholder='0001' />
          </div>
          <div className={s.surfix}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input id='autoBoost' type='checkbox' onChange={handleCheck} />
              <p>Surfix:</p>
            </label>
            <input className={s.numberInput} type='number' placeholder='0001' />
          </div>
          <div className={s.reset}>
            <label className={s.checkboxContainer}>
              <div className='checkBox'>
                <FontAwesomeIcon className='iconCheck' icon={faCheck} />
              </div>
              <input id='autoBoost' type='checkbox' onChange={handleCheck} />
              <p>Reset mỗi ngày</p>
            </label>
            <p className={s.note}>
              <span>✱</span>Là trường thông tin bắt buộc
            </p>
          </div>
        </div>
        <div className={s.btnContainer}>
          <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={btnStyle} name='Hủy bỏ' />
          <Button name='Thêm dịch vụ' />
        </div>
      </div>
    </div>
  )
}
export default AddService
