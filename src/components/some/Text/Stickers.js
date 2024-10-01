import React from 'react';
import styles from './Text_ill.module.css';

export default function Text_Stickers({t}) {
  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>{t("4_1")}</h1>
        <p className={styles.p1}>{t("4_2")}</p>
        <p className={styles.p1}>{t("4_3")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("4_4")}</span></p>
        <p className={styles.p1}>{t("4_5")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("4_6")}</span></p>
        <p className={styles.p1}><span className={styles.green}>{t("4_7")}</span>{t("4_8")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("4_9")}</span>{t("4_10")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("4_11")}</span>{t("4_12")}</p>
        <p className={styles.p1}><span className={styles.green}>{t("4_13")}</span>{t("4_14")}</p>
        <p className={styles.p1}>{t("4_15")}</p>
    </div>
  );
}
