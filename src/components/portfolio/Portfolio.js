import React from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className={styles.cont}>
        <h1 className={styles.title}>VIEW OUR <spam className={styles.green}>PORTFOLIO</spam> <span className={styles.n_line}>OVERVIEW</span></h1>
        {/* <img src='images/vector7.svg' className={styles.line}></img> */}
        <img src='images/img_main_3.png' className={styles.port_img}></img>
        {/* <img src='images/vector7.svg' className={styles.line}></img> */}
        <img className={styles.set} src='images/bgr_set.png'></img>
    </div>
  )
}
