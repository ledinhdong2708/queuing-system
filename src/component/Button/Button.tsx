import styles from './Button.module.scss'
import React, { MouseEventHandler } from 'react'

interface ButtonMe {
  name?: string
  style?: React.CSSProperties
  onMouseEnter?: MouseEventHandler<HTMLButtonElement> | undefined
  onMouseLeave?: MouseEventHandler<HTMLButtonElement> | undefined
}
const Button: React.FC<ButtonMe> = ({ name, style, onMouseEnter, onMouseLeave }) => (
  <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style} className={styles.button}>
    {name}
  </button>
)
export default Button
