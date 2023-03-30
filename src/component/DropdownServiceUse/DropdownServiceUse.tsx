// import  from 'react'
import React, { useState } from 'react'
import s from '.././DropdownServiceUse/DropdownServiceUse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faX } from '@fortawesome/free-solid-svg-icons'
const DropdownServiceUse = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = React.useState<string[]>([])
  const arry = [
    'Khám tim mạch',
    'Khám sản phụ khoa',
    'Khám răng hàm mặt',
    'Khám tai mũi họng',
    'Khám hô hấp',
    'Khám tổng quát'
  ]
  function handleClick() {
    setIsActive(!isActive)
  }
  return (
    <div className={s.container}>
      <div className={s.dropdownContainer}>
        <div role='presentation' className={s.dropdown} onClick={handleClick}>
          {selected.map((items) => {
            return (
              <div className={s.serviceContent} key={items}>
                {items} <FontAwesomeIcon className={s.iconDelete} icon={faX} />
              </div>
            )
          })}
        </div>
        <FontAwesomeIcon style={{ color: '#FF7506' }} icon={faCaretDown} />
      </div>
      {isActive && (
        <div className={s.dropdownContent}>
          {arry.map((items) => {
            return (
              <button
                key={items}
                onClick={() => {
                  setSelected(selected.concat(items))
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
export default DropdownServiceUse
