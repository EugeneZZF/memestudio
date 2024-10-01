import React from 'react';
import styles from './cal_left_img.module.css'

export default function ({ link, title , mt}) {
  return (
    <div className={styles.cont_1}>
        <div className={styles.cont} style={{ backgroundImage: `url('images/ob.png')` }}>
            <img className={styles.cont_img} src={`/images/${link}`} alt="image description" />      
        </div>
        <p className={styles.cont_title}>{title}</p>
    </div>
    
  );
}