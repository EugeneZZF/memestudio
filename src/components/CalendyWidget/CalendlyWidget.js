  
   import React from 'react';
   import { InlineWidget } from 'react-calendly';
   import styles from './CalendlyWidget.module.css'
   import './Calendly.css'

   const CalendlyWidget = ( {t} ) => {
     return (
       <div className={styles.cal_cont}>
        <div className={styles.cal_up}>
            <p className={styles.title_cal}>THE MEME PROTOCOL</p>
            <p className={styles.title_cal_2}>{t("call") }</p>
            <div className={styles.cal_bot}>
                <div className={styles.line_cal}>
                    <img src='/images/clock.png'className={styles.img_cal}></img>
                    <p className={styles.p_bot}>1 hr</p>
                </div>
                <div className={styles.line_cal}>
                    <img src='/images/cam.png' className={styles.img_cal_2}></img>
                    <p  className={styles.p_bot}>{t("call_2") }</p>
                </div>
            </div>
        </div>
        <div className={styles.cal}>
        <InlineWidget url="https://calendly.com/mail-thememeprotocol/30min" 
          
          pageSettings={{
              backgroundColor: '#162F1A',
              hideLandingPageDetails: true,
              hideEventTypeDetails: true,
              primaryColor: '#81CF50',
              textColor: '#FFF'
            }}
          className={styles.cal}
       />
        </div>
         
       </div>
     );
   };

   export default CalendlyWidget;