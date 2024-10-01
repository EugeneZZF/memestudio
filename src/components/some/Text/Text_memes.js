import React from 'react'
import styles from './Text_ill.module.css'

export default function Text_memes({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("7_1")}</h1>
        <p className={styles.p1}>{t("7_2")}</p>
        <p className={styles.p1}>{t("7_3")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("7_4")}</span></p>

        <p className={styles.p1}><span className={styles.green}>{t("7_5")}</span>{t("7_6")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("7_7")}</span>{t("7_8")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("7_9")}</span>{t("7_10")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("7_11")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("7_12")}</span>{t("7_13")}</p>
        
        <p className={styles.p1}><span className={styles.green}>{t("7_14")}</span>{t("7_15")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("7_16")}</span>{t("7_17")}</p>
        

    </div>
  )
}