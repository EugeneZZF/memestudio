import React from 'react'
import styles from './Cal_left.module.css'
import Cal_left_img from '../some/cal_left_img'

export default function ( {t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.cont_title}>{t("cal_h1")}</h1>
        
        <div className={styles.line}>
            <div className={styles.ico_cont}>
              <div className={styles.img_cont} style={{ backgroundImage: `url('images/ob.svg')` }}>
                <img className={styles.ico_img} src='images/link_1 (1).png'></img>                
              </div>
              <p className={styles.ico_name}>CATS</p>
            </div>
            <div className={styles.ico_cont}>
              <div className={styles.img_cont} style={{ backgroundImage: `url('images/ob.svg')` }}>
                <img className={styles.ico_img} src='images/link_1 (4).png'></img>                
              </div>
              <p className={styles.ico_name}>Trum<span className={styles.per}>pFar</span>m <span className={styles.per}>Bot</span></p>
            </div>
        </div>
        <div className={styles.line}>
            <div className={styles.ico_cont}>
              <div className={styles.img_cont} style={{ backgroundImage: `url('images/ob.svg')` }}>
                <img className={styles.ico_img} src='images/link_1 (3).png'></img>                
              </div>
              <p className={styles.ico_name}>PHIL</p>
            </div>
            <div className={styles.ico_cont}>
              <div className={styles.img_cont} style={{ backgroundImage: `url('images/ob.svg')` }}>
                <img className={styles.ico_img} src='images/link_4.png'></img>                
              </div>
              <p className={styles.ico_name}>Tomo Cat<span className={styles.tramp}>&shy;</span></p>
            </div>
        </div>
        <img className={styles.set} src='images/bgr_set.png'></img>
    </div>
  )
}
