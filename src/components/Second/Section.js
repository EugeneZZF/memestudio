import React from 'react'
import styles from './Section.module.css'
import Video from '../Main/Video'

export default function Section({t}) {
  return (
    <>
        <div className={styles.cont} style={{ backgroundImage: `url('images/bgr_sethion.png')` }}>
            <div className={styles.left}>                   
                {t("video_1")}
                <span className={styles.green}>{t("web")}</span>
                {t("video_2")}
            </div>
            <div className={styles.right}>                
                    <Video videoSrc="videos/video_2.mp4"></Video>                
                    <Video videoSrc="videos/video_3.mp4" pt={4}></Video>
            </div>
            {/* <img className={styles.set} src='images/bgr_set.png'></img>
            <div className={styles.dots}>
                <img className={styles.dots_img} src='images/dot_sec.png'></img>
                <img className={styles.dots_img} src='images/dot_sec.png'></img>
                <img className={styles.dots_img} src='images/dot_sec.png'></img>
            </div> */}
        </div>
        
    </>
  )
}
