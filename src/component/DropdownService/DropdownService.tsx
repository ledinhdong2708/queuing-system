import { useState } from 'react'
import s from '.././DropdownTypeDevice/DropdownTypeDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const DropdownService = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState('Chọn loại thiết bị')
  const arry = [
    'Tất cả',
    'Khám sản - Phụ khoa',
    'Khám răng hàm mặt',
    'Khám tai mũi họng',
    'Khám tim mạch',
    'Khám hô hấp',
    'Khám tổng quát'
  ]
  function handleClick() {
    setIsActive(!isActive)
  }

  return (
    <div className={s.container}>
      <div className={s.dropdownContainer}>
        <button className={s.dropdown} onClick={handleClick}>
          {selected}
        </button>
        <FontAwesomeIcon style={{ color: '#FF7506' }} icon={faCaretDown} />
      </div>
      {isActive && (
        <div className={s.dropdownContent}>
          {arry.map((items) => {
            return (
              <button
                key={items}
                onClick={() => {
                  setSelected(items)
                  setIsActive(false)
                }}
              >
                {items}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default DropdownService
