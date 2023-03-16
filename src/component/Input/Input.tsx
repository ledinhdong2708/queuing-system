import styles from './Input.module.scss'
import React, { HTMLInputTypeAttribute } from 'react'
interface InputProps {
  type?: HTMLInputTypeAttribute | undefined
}
const Input: React.FC<InputProps> = ({ type }) => {
  return <input type={type} required className={styles.input} />
}

export default Input
