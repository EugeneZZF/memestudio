import React from 'react';
import styles from './Text_ill.module.css';

export default function Text_2d({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("2_1")}</h1>
        <p className={styles.p1}>{t("2_2")}</p>
        <p className={styles.p1}>{t("2_3")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("2_4")}</span></p>
        <p className={styles.p1}>{t("2_5")}</p>
        <p className={styles.p1}>{t("2_6")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("2_7")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("2_8")}</span>{t("2_9")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("2_10")}</span>{t("2_11")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("2_12")}</span>{t("2_13")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("2_14")}</span></p>
    </div>
  );
}
