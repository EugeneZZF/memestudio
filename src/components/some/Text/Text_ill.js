import React from 'react'
import styles from './Text_ill.module.css'

export default function Text_ill({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("i_1")}</h1>
        <p className={styles.p1}>{t("i_2")}</p>
        <p className={styles.p1}>{t("i_3")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("i_4")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("i_5")}</span>{t("i_6")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("i_7")}</span>{t("i_8")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("i_9")}</span>{t("i_10")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("i_11")}</span></p>
        <p className={styles.p1}>{t("i_12")}</p>
        <p className={styles.p1}>{t("i_13")}</p>
    </div>
  )
}
