import styles from './Input.module.scss'
import React, { HTMLInputTypeAttribute } from 'react'
import IconEyeOff from '/public/iconEyeOff.png'
import IconEye from '/public/iconEye.png'
import { clsx } from 'clsx'
interface InputProps {
  type?: HTMLInputTypeAttribute | undefined
  disabled?: boolean | undefined
  placeholder?: string | undefined
}

const Input: React.FC<InputProps> = ({ type, disabled, placeholder }) => {
  const classLabel = clsx(styles.input, 'inputPass')
  const classEyeOff = clsx(styles.iconEyeOff, 'icEyeOff')
  function handleClick() {
    const inputPass = document.querySelectorAll<HTMLInputElement>('.inputPass')
    const iconEyeOff = document.querySelectorAll<HTMLImageElement>('.icEyeOff')

    if ((document.getElementById('inputCheck') as HTMLInputElement).checked) {
      Array.from(inputPass).map((ele) => {
        ele.type = 'text'
      })
      Array.from(iconEyeOff).map((ele) => {
        ele.src = IconEye
      })
    } else {
      Array.from(inputPass).map((ele) => {
        ele.type = 'password'
      })
      Array.from(iconEyeOff).map((ele) => {
        ele.src = IconEyeOff
      })
    }
  }
  if (disabled === true) {
    return (
      <input
        type={type}
        disabled={disabled}
        className={styles.input}
        placeholder={placeholder}
        style={{ backgroundColor: '#EAEAEC' }}
      />
    )
  }
  if (type !== 'password') {
    return <input type={type} disabled={disabled} required className={styles.input} />
  }
  return (
    <div className={styles.inputContainer}>
      <input type={type} required className={classLabel} />
      <input
        type='checkbox'
        onClick={handleClick}
        onKeyDown={handleClick}
        id='inputCheck'
        className={styles.inputCheckBox}
      />
      <label htmlFor='inputCheck' className={styles.labelEyeOff}>
        <img src={IconEyeOff} className={classEyeOff} alt='icon eye off' />
      </label>
    </div>
  )
}

export default Input
