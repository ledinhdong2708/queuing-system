import { useState } from 'react'
import s from './DropdownActive.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownActive = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState('Tất cả')
  const arry = ['Tất cả', 'Hoạt động', 'Ngưng hoạt động']
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
export default DropdownActive
