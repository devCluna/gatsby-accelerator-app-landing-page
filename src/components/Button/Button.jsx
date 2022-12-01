import React from 'react'
import * as styles from './button.module.css'

export default function Button({textContent, type, mr}) {
  return (
    <button className={`${styles.button} ${type === "primary" && styles.primary} ${type === "secondary" && styles.secondary} ${type === "altPrimary" && styles.altPrimary} ${type === "altSecondary" && styles.altSecondary} ${mr && styles.mr}` }>
      {textContent}
    </button>
  )
}
