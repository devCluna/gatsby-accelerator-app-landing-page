import React from 'react'
import Corporation from '../Icon/Corporation/Corporation'
import Incubator from '../Icon/Incubator/Incubator'
import Investor from '../Icon/Investor/Investor'
import OpenChallenge from '../Icon/OpenChallenge/OpenChallenge'
import Startup from '../Icon/Startup/Startup'
import * as styles from './community.module.css'
import dummyData from '../../utils/dummyData.js'

const icons = {
    incubator: <Incubator />,
    corporation: <Corporation />,
    investor: <Investor />,
    startup: <Startup />,
    openChallenge: <OpenChallenge />
}

function Community() {
    return (
        <div className={styles.community}>
            <div className={styles.comContent}>
                {dummyData.map(community => (
                    <div className={styles.comItem}>
                        <div className={styles.itemHead}>
                            <div className={styles.itemIcon}>
                                {icons[community.icon]}
                            </div>

                            <span className={styles.headTitle}>
                                {community.title}
                            </span>

                        </div>
                        <p className={styles.comParagraph}>{community.p1}</p>
                        <p className={styles.comParagraph}>{community.p2}</p>
                        <hr />
                        <div className={styles.comSection2}>
                            <h1 className={styles.altTitle}>{community.subtitle}</h1>
                            <ul>
                                {community.feats.map(feat => (
                                    <li>
                                        <div>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75477 16.6421C13.1932 16.6421 16.7912 13.0441 16.7912 8.60566C16.7912 4.16725 13.1932 0.569214 8.75477 0.569214C4.31636 0.569214 0.718323 4.16725 0.718323 8.60566C0.718323 13.0441 4.31636 16.6421 8.75477 16.6421ZM8.52984 10.0578L11.7773 7.01686L11.0907 6.28368L8.17312 9.01577L6.40417 7.4867L5.74731 8.24661L7.85813 10.0712L8.2 10.3667L8.52984 10.0578Z" fill="#206ECF" />
                                            </svg>
                                        </div>
                                        <span>{feat}</span>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <button className={styles.comButton}>Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Community
