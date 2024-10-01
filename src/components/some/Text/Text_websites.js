import React from 'react'
import styles from './Text_ill.module.css'

export default function Text_2d({ t }) {
  return (
    <div className={styles.cont}>
      <h1 className={styles.h1}>{t("6_1")}</h1>
      <p className={styles.p1}>{t("6_2")}</p>
      <p className={styles.p1}><span className={styles.green}>{t("6_3")}</span></p>
      <p className={styles.p1}>{t("6_4")}
      <span className={styles.green}>{t("6_4_1")}</span>
      {t("6_4_2")}
      </p>
      <p className={styles.p1}>{t("6_5")}
      </p>
      <p className={styles.p1}>
        <span className={styles.green}>{t("6_6")}</span>
      </p>

    <p className={styles.p1}>
      <span className={styles.green}>{t("6_7_1")}</span>
        {t("6_7")}
    </p>
    <p className={styles.p1}>
      <span className={styles.green}>{t("6_8_1")}</span>
        {t("6_8")}
    </p>
    <p className={styles.p1}>
      <span className={styles.green}>{t("6_9_1")}</span>
        {t("6_9")}
    </p>
    <p className={styles.p1}>
      <span className={styles.green}>{t("6_10_1")}</span>
        {t("6_10")}
    </p>
    </div>
  )
}