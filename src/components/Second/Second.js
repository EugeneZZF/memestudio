import React from 'react'
import styles from './Second.module.css'


export default function ({t}) {
  return (
    <div className={styles.cont}>
        <img className={styles.cont_img} src='images/img_main_2.png'></img>
        <div className={styles.cont_sec}>
            <p className={styles.cont_p}>{t("sec")}</p>
        </div>
        <img className={styles.set} src='images/bgr_set.png'></img>
        <img src='\images\Group94.png' className={styles.bgr_dots_1}></img>
    </div>
  )
}
