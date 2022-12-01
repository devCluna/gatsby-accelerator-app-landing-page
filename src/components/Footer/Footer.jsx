import React from 'react'
import * as styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footContent}>
          <h1 className={styles.footTitle}>Join our growing community</h1>
          <span className={styles.footDesc}>Sign up for news and updates about AcceleratorApp</span>
          <form className={styles.footEmail}>
            <label htmlFor='email'>Your Email</label>
            <input type="text" id="email"/>
          </form>

          <div className={styles.links}>
            <div className={styles.link}>
              <span className={styles.linkHead}>Community</span>
              <span className={styles.linkItem}>Incubator/Accelerator</span>
              <span className={styles.linkItem}>Corporations</span>
              <span className={styles.linkItem}>Startups</span>
              <span className={styles.linkItem}>Investor</span>
              <span className={styles.linkItem}>Open Challenges</span>
            </div>

            <div className={styles.link}>
              <span className={styles.linkHead}>Modules</span>
              <span className={styles.linkItem}>Coaching Module</span>
              <span className={styles.linkItem}>Data Module</span>
              <span className={styles.linkItem}>Ecosystem Module</span>
              <span className={styles.linkItem}>LMS Module</span>
              <span className={styles.linkItem}>Events</span>
              <span className={styles.linkItem}>Application Proccessing</span>
            </div>

            <div className={styles.link}>
              <span className={styles.linkHead}>Company</span>
              <span className={styles.linkItem}>About Us</span>
              <span className={styles.linkItem}>Carrers <span className={styles.hiring}>We're hiring!</span></span>
              <span className={styles.linkItem}>Blog</span>
              <span className={styles.linkItem}>Pricing</span>
              <span className={styles.linkItem}>Contact Us</span>
            </div>

            <div className={styles.link}>
              <span className={styles.linkHead}>Documentation</span>
              <span className={styles.linkItem}>Documentation</span>
              <span className={styles.linkItem}>Release Log</span>
              <span className={styles.linkItem}>FAQ</span>
              <span className={styles.linkItem}>Legal</span>
            </div>

            <div className={styles.link}>
              <span className={styles.linkHead}>Follow</span>
              <span className={`${styles.linkItem} ${styles.socialIcon}`}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1991_419)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.982121 14.0332H4.06796V4.88832H0.982121V14.0332ZM2.54494 0.480225C1.48951 0.480225 0.800003 1.16295 0.800003 2.05999C0.800003 2.93924 1.47087 3.63975 2.50513 3.63975H2.52631C3.60207 3.63975 4.27125 2.93924 4.27125 2.05999C4.25177 1.16211 3.60207 0.480225 2.54494 0.480225ZM15.2 8.78818V14.0332H12.1125V9.13971C12.1125 7.91147 11.6669 7.07288 10.548 7.07288C9.69497 7.07288 9.19012 7.63787 8.96396 8.18507C8.88348 8.3799 8.86231 8.6535 8.86231 8.9254V14.0332H5.77647C5.77647 14.0332 5.81883 5.74724 5.77647 4.88832H8.864V6.18432C8.85807 6.19448 8.84876 6.2038 8.84283 6.21481H8.864V6.18347C9.27483 5.56173 10.0058 4.67401 11.6457 4.67401C13.6753 4.67401 15.2 5.98018 15.2 8.78818Z" fill="#B6C0CD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1991_419">
                  <rect x="0.799805" y="0.0566406" width="14.4" height="14.4" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
              <span className={`${styles.linkItem} ${styles.socialIcon}`}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1991_423)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48234 14.4571V7.24958H10.9191L11.3066 4.85919H8.48297V3.66087C8.48297 3.03478 8.69208 2.44188 9.60741 2.44188H11.4431V0.0571289H8.84046C6.6523 0.0571289 6.05626 1.46644 6.05626 3.41294V4.85919H4.55617V7.24958H6.05626V14.4571H8.48171H8.48234Z" fill="#B6C0CD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1991_423">
                  <rect x="0.799805" y="0.0576172" width="14.3999" height="14.3999" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
              <span className={`${styles.linkItem} ${styles.socialIcon}`}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1991_427)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6405 10.481C13.6405 11.969 12.4885 13.1772 11.0732 13.1772H4.92789C3.51258 13.1772 2.36058 11.969 2.36058 10.481V4.02843C2.36058 2.54181 3.51258 1.33359 4.92789 1.33359H11.0732C12.4885 1.33359 13.6405 2.54181 13.6405 4.02843V10.481ZM11.0732 0.0554199H4.92789C2.84058 0.0554199 1.14345 1.83758 1.14345 4.02843V10.481C1.14345 12.6732 2.84058 14.4553 4.92857 14.4553H11.0725C13.1605 14.4553 14.8577 12.6732 14.8577 10.481V4.02843C14.8577 1.83758 13.1605 0.0554199 11.0725 0.0554199H11.0732Z" fill="#B6C0CD"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00083 10.294C7.28585 10.2935 6.60031 10.0092 6.09468 9.50375C5.58905 8.99825 5.30466 8.31277 5.30393 7.5978C5.30447 6.88257 5.58874 6.19678 6.09435 5.69091C6.59996 5.18505 7.28561 4.90043 8.00083 4.89952C8.71611 4.90025 9.40186 5.18481 9.90751 5.69071C10.4132 6.19662 10.6974 6.88252 10.6977 7.5978C10.6968 8.31265 10.4124 8.99795 9.90674 9.5033C9.40113 10.0087 8.71569 10.2928 8.00083 10.2933V10.294ZM8.00083 3.48422C5.7325 3.48422 3.88657 5.32878 3.88657 7.5978C3.88784 8.68864 4.32169 9.73445 5.09297 10.5059C5.86425 11.2773 6.90999 11.7113 8.00083 11.7127C10.2692 11.7127 12.1151 9.86544 12.1151 7.5978C12.1138 6.50708 11.6799 5.46141 10.9086 4.69022C10.1373 3.91903 9.09155 3.4853 8.00083 3.48422ZM11.0872 2.11279C10.817 2.11279 10.5503 2.22114 10.3604 2.41313C10.1697 2.60513 10.058 2.86982 10.058 3.13999C10.058 3.41084 10.1697 3.67621 10.3597 3.86821C10.5503 4.05816 10.817 4.16993 11.0872 4.16993C11.3581 4.16993 11.6228 4.05816 11.8134 3.86821C12.0054 3.67621 12.1151 3.41084 12.1151 3.14067C12.1152 3.00567 12.0887 2.87196 12.037 2.74721C11.9854 2.62247 11.9097 2.50912 11.8142 2.41365C11.7188 2.31819 11.6054 2.24248 11.4807 2.19085C11.3559 2.13923 11.2222 2.1127 11.0872 2.11279Z" fill="#B6C0CD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1991_427">
                  <rect x="0.799805" y="0.057373" width="14.3999" height="14.3999" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </span>
              <span className={`${styles.linkItem} ${styles.socialIcon}`}>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1991_433)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7342 4.7468C13.7342 4.61651 13.7273 4.49377 13.7219 4.36486C14.3019 3.96035 14.803 3.45301 15.2003 2.86795C14.6595 3.09741 14.0874 3.24486 13.5031 3.30543C14.1184 2.95203 14.581 2.38338 14.8019 1.7091C14.2204 2.04063 13.5862 2.26979 12.9271 2.38658C12.651 2.09001 12.3179 1.85224 11.9476 1.68752C11.5774 1.5228 11.1778 1.43451 10.7726 1.42796C10.3864 1.42103 10.0027 1.4912 9.64392 1.63437C9.28516 1.77754 8.95855 1.99082 8.68322 2.26175C8.40789 2.53268 8.18936 2.8558 8.04042 3.21221C7.89148 3.56862 7.81513 3.95115 7.81583 4.33743C7.81583 4.56714 7.83983 4.79068 7.89332 5.00874C5.43573 4.85788 3.25791 3.65309 1.80283 1.83253C1.53847 2.2848 1.39952 2.7994 1.40032 3.32326C1.40032 4.35869 1.92352 5.27822 2.71757 5.81651C2.24598 5.79625 1.78608 5.66341 1.37632 5.42908V5.46954C1.37634 6.15681 1.61212 6.82327 2.04429 7.35765C2.47647 7.89203 3.07887 8.26199 3.75094 8.40575C3.49729 8.47327 3.23582 8.50693 2.97334 8.50587C2.78577 8.50267 2.59891 8.48201 2.41517 8.44415C2.6002 9.03569 2.96594 9.55438 3.461 9.9273C3.95606 10.3002 4.55553 10.5086 5.17516 10.5232C4.56216 11.0044 3.86004 11.3596 3.10923 11.5684C2.35841 11.7771 1.57373 11.8354 0.800323 11.7397C2.14706 12.6196 3.72141 13.0872 5.33013 13.085C10.761 13.085 13.7342 8.61832 13.7342 4.7468Z" fill="#B6C0CD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1991_433">
                  <rect x="0.800781" y="0.057373" width="14.3999" height="14.3999" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </span>
            </div>
          </div>

          

          <div className={styles.altLinks}>
            <div className={styles.altLinksHolder}>
              <div>
                <span className={styles.altLink}>Privacy</span>
                <span className={styles.altLink}>Cookies</span>
              </div>
              <div>
                <span className={styles.altLink}>Terms Of Use</span>
                <span className={styles.altLink}>DPA</span>
                <span className={styles.altLink}>Subproccesors</span>
              </div>
            </div>

            <div className={styles.copyright}>
              <p className={styles.copy}>Copyright © 2022 AcceleratorApp <span>All Rights Reserved</span></p>
              <div></div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1991_448)">
                  <path d="M9.5 0.256836C7.71997 0.256836 5.97991 0.784677 4.49987 1.77361C3.01983 2.76254 1.86628 4.16815 1.18509 5.81269C0.5039 7.45722 0.32567 9.26682 0.672937 11.0127C1.0202 12.7585 1.87737 14.3621 3.13604 15.6208C4.39472 16.8795 5.99836 17.7366 7.74419 18.0839C9.49002 18.4312 11.2996 18.2529 12.9442 17.5718C14.5887 16.8906 15.9943 15.737 16.9832 14.257C17.9722 12.7769 18.5 11.0369 18.5 9.25684C18.4974 6.87068 17.5484 4.58299 15.8611 2.89573C14.1738 1.20846 11.8862 0.259417 9.5 0.256836V0.256836ZM11.9165 5.50684H7.0835C7.72008 4.25004 8.53389 3.09121 9.5 2.06584C10.4665 3.09092 11.2803 4.2498 11.9165 5.50684ZM12.5165 7.00684C12.747 7.73484 12.8673 8.49323 12.8735 9.25684C12.8673 10.0204 12.747 10.7788 12.5165 11.5068H6.482C6.25149 10.7788 6.13116 10.0204 6.125 9.25684C6.13116 8.49323 6.25149 7.73484 6.482 7.00684H12.5165ZM7.55 2.02384C6.68575 3.08117 5.97244 4.25336 5.4305 5.50684H3.01475C4.00915 3.79416 5.63875 2.54265 7.55 2.02384ZM2 9.25684C1.99994 8.4936 2.11653 7.73484 2.34575 7.00684H4.925C4.73057 7.7412 4.62977 8.49719 4.625 9.25684C4.62977 10.0165 4.73057 10.7725 4.925 11.5068H2.34575C2.11653 10.7788 1.99994 10.0201 2 9.25684ZM3.01475 13.0068H5.4305C5.97244 14.2603 6.68575 15.4325 7.55 16.4898C5.63875 15.971 4.00915 14.7195 3.01475 13.0068ZM7.0835 13.0068H11.9165C11.2799 14.2636 10.4661 15.4225 9.5 16.4478C8.53353 15.4228 7.71968 14.2639 7.0835 13.0068ZM11.4538 16.4898C12.3167 15.4323 13.0287 14.2601 13.5695 13.0068H15.9853C14.9917 14.7187 13.3636 15.9701 11.4538 16.4898ZM17 9.25684C17.0001 10.0201 16.8835 10.7788 16.6543 11.5068H14.075C14.2694 10.7725 14.3702 10.0165 14.375 9.25684C14.3702 8.49719 14.2694 7.7412 14.075 7.00684H16.6528C16.8825 7.73476 16.9996 8.49352 17 9.25684ZM13.5695 5.50684C13.0287 4.25358 12.3167 3.0814 11.4538 2.02384C13.3636 2.54353 14.9917 3.79494 15.9853 5.50684H13.5695Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1991_448">
                  <rect width="18" height="18" fill="white" transform="translate(0.5 0.256836)"/>
                  </clipPath>
                  </defs>
                </svg>
              <span className={styles.lang}>English</span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Footer
