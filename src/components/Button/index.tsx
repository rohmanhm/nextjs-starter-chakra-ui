import React from 'react'
import styles from './Button.module.scss'

export const Button: React.FC<{}> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.default}>
      {children}
    </button>
  )
}
