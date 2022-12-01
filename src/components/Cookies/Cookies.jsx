import React from 'react'
import Button from '../Button/Button'
import * as styles from './cookies.module.css'

const Cookies = () => {
  const [cookies, setCookies] = React.useState(false)
  return (
    <>
    {!cookies 
      &&
      <div className={styles.cookies}>
        <div className={styles.desc}>
          <span className={styles.cookiesText}>By using this site on the AcceleratorApp network, you agree with our use of cookies.</span>
          <div onClick={()=>setCookies(true)}>
            <Button  mr textContent="Accept cookies" type="altPrimary"/>
            <Button textContent="Want to know more?" type="altSecondary"/>
          </div>
          <span className={styles.policy}>Read our Cookie Policy</span>
        </div>
      </div>
    }
    </>
  )
}

export default Cookies
