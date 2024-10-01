import React from 'react'
import styles from './Text_3d.module.css'

export default function Text_3d({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("3_1")}</h1>
        <p className={styles.p1}>{t("3_2")}</p>
        <p className={styles.p1}>{t("3_3")}<span className={styles.green}>{t("3_4")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("3_5")}</span></p>

        <p className={styles.p1}><span className={styles.green}>{t("3_6")}</span>{t("3_7")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_8")}</span>{t("3_9")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_10")}</span>{t("3_11")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_12")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("3_13")}</span>{t("3_14")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_15")}</span>{t("3_16")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_17")}</span></p>

        <p className={styles.p1}><span className={styles.green}>{t("3_18")}</span>{t("3_19")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_20")}</span>{t("3_21")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_22")}</span>{t("3_23")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("3_24")}</span></p>


    </div>
  )
}
