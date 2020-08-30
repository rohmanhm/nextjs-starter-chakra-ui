import React, { HTMLAttributes } from 'react'
import styles from './Button.module.scss'

export const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.default}>
      {children}
    </button>
  )
}
