import React from 'react'
import Button from '../Button/Button'
import * as styles from './demo.module.css'

export default function Demo() {
  return (
    <div className={styles.demo}>
        <span className={styles.demoSub}>What are you waiting for?</span>
        <p className={styles.demoDesc}>Join +150 companies that already trust us for their growth</p>
        <div>
            <Button mr={true} textContent="Request a Demo" type="altSecondary"/>
            <Button textContent="Contact Us" type="altPrimary" />
        </div>
    </div>
  )
}
