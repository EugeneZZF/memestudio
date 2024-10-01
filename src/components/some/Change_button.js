import React from 'react';
import styles from './Change_button.module.css';

export default function Change_button({ t, id, title, isActive, onButtonClick }) {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.active : ''}`}
      onClick={() => onButtonClick(id)}
    >
      <p className={styles.btn_p}>{t(title)}</p>
    </button>
  );
}