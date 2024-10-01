import React from 'react'
import styles from './Text_ill.module.css'

export default function Text_gifs({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("8_1")}</h1>
        <p className={styles.p1}>{t("8_2")}</p>
        <p className={styles.p1}>{t("8_3")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("8_4")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("8_5")} </span>{t("8_6")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("8_7")} </span>{t("8_8")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("8_9")} </span>{t("8_10")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("8_11")} </span></p>
        <p className={styles.p1}>{t("8_12")}</p>
        <p className={styles.p1}>{t("8_13")}</p>
        <p className={styles.p1}>{t("8_14")}</p>
        <p className={styles.p1}>{t("8_15")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("8_16")} </span></p>
    </div>
  )
}