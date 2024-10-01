import React from 'react'
import styles from './Sliders_2.module.css'
import Slider_left from '../Slider_left'


export default function Sliders_1({title}) {
    return (
        <div className={styles.cont}>
            <h1 className={styles.title}>{title}</h1>
            <Slider_left></Slider_left>
            <div className={styles.bgr_slider_1}></div>
            <img src='images/slider_dots_2.png' className={styles.dots}></img>
        </div>
      )
}
