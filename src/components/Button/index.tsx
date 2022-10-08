import { HTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type ButtonProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.default}>
      {children}
    </button>
  )
}
