import React from 'react'
import * as styles from'./icons.module.css'
import cake from '../../assets/cake.png'
import rocket from '../../assets/rocket.png'
import window from '../../assets/window.png'
import docs from '../../assets/docs.png'
import arrow from '../../assets/arrow.png'

function Icons() {
  return (
    <div className={styles.icons}>
      <div className={styles.iconsHolder}>
          <div className={styles.icon}>
            <img className={styles.img} src={cake}/>
          </div>
          <div className={styles.icon}>
            <img className={styles.img} src={rocket}/>
          </div>
          <div className={styles.icon}>
            <img className={styles.img} src={window}/>
          </div>
          <div className={styles.icon}>
            <img className={styles.img} src={docs}/>
            </div>
          <div className={styles.icon}>
            <img className={styles.img} src={arrow}/>
          </div>
      </div>
      <div className={styles.community}>
        <h1>Community</h1>
        <p className={styles.comSubtitle}>Lorem ipsum dolor sit amet</p>
        <p className={styles.comParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Icons
