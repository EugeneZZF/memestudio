import React from 'react'
import styles from './Text_ill.module.css'

export default function Text_chara({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1_2}><span className={styles.green}>{t("5_1")}</span></h1>
        <p className={styles.p1}>{t("5_2")}<span className={styles.green}>{t("5_3")}</span></p>
        <p className={styles.p1}>{t("5_4")} </p>
        <p className={styles.p1}><span className={styles.green}>{t("5_5")}</span></p>

        <p className={styles.p1}><span className={styles.green}>{t("5_6")}</span>{t("5_7")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("5_8")}</span>{t("5_9")}</p>
        <p className={styles.p1}>{t("5_10_1")}<span className={styles.green}>{t("5_10")}</span>{t("5_11")}</p>
        <p className={styles.p1}>{t("5_12")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("5_13")}</span>{t("5_14")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("5_15")}</span>{t("5_16")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("5_17")}</span></p>
    </div>
  )
}