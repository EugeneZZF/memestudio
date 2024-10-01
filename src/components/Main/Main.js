import React from 'react'
import styles from './Main.module.css'
import Video from './Video'
import Running from '../Running'
import CalendlyWidget from '../CalendyWidget/CalendlyWidget'
import Cal_left from '../CalendyWidget/Cal_left'
import Second from '../Second/Second'
import Section from '../Second/Section'
import Portfolio from '../portfolio/Portfolio'
import Sliders_1 from '../portfolio/Sliders/Sliders_1'
import Sliders_2 from '../portfolio/Sliders/Sliders_2'
import Change_button from '../some/Change_button'
import { useState } from 'react'
import Form from '../form/Form'
import Render from '../render/Render'



export default function Main( {t , activeButtonId , setActiveButtonId, handleButtonClick} ) {

  
  return (
    <main>
      <h1 className={styles.bgr_title}>GET TO KNOW US</h1>   
      <img src='\images\Group94.png' className={styles.bgr_dots_1}></img>
      <div className={styles.card_main}>
        <div 
        className={styles.card_main_left} 
        style={{ backgroundImage: `url('images/img_main_1.png')` }}>
        </div>
        <div className={styles.card_main_right} style={{ backgroundImage: `url('images/card_main_sq.png')` }}>
          <div className={styles.card_cont}>
            <img className={styles.card_main_dots} src='\images\card_main_dots.png'></img>
            <p className={styles.card_title}>{t("card_title") } <span style={{ color: `#81CF50` }}>{t("us")}</span></p>
            <p className={styles.card_p}>{t("card_text_1") } </p>
            <p className={styles.card_p}><span style={{ color: `#81CF50` }}>{t("card_some") }</span> {t("card_text_2")} </p>
          </div>
        </div>
      </div>
      <img src='\images\line_main.png' className={styles.line_main}></img>
      <div className={styles.cal_cont}>
        <CalendlyWidget t={t}></CalendlyWidget>
        <Cal_left t={t}></Cal_left>        
      </div>
      <Second t={t} ></Second>
      <img  src='\images\line_main.png' className={styles.line_main_2}></img>
      <Section t={t}></Section>
      <Portfolio  t={t}></Portfolio>
     
      <div id="render" className={styles.button_cont}>
        <div className={styles.line_cont}>
              <Change_button
              t={t}
              id={1}
              title={`${t("ill")}`}
              isActive={activeButtonId === 1}
              onButtonClick={handleButtonClick}
            />
            <Change_button
              t={t}
              id={2}
              title={`${t("ill_2")}`}
              isActive={activeButtonId === 2}
              onButtonClick={handleButtonClick}
            />
            <Change_button
              t={t}
              id={3}
              title={`${t("ill_3")}`}
              isActive={activeButtonId === 3}
              onButtonClick={handleButtonClick}
            />      
        </div>
        <div className={styles.line_cont}>
              <Change_button
              t={t}
              id={4}
              title={`${t("ill_4")}`}
              isActive={activeButtonId === 4}
              onButtonClick={handleButtonClick}
            />
            <Change_button
              t={t}
              id={5}
              title={`${t("ill_5")}`}
              isActive={activeButtonId === 5}
              onButtonClick={handleButtonClick}
            />
            <Change_button
              t={t}
              id={6}
              title={`${t("ill_6")}`}
              isActive={activeButtonId === 6}
              onButtonClick={handleButtonClick}
            />      
        </div>
        <div className={styles.line_cont}>
              <Change_button
              t={t}
              id={7}
              title={`${t("ill_7")}`}
              isActive={activeButtonId === 7}
              onButtonClick={handleButtonClick}
            />
            <Change_button
              t={t}
              id={8}
              title={"ill_8"}
              isActive={activeButtonId === 8}
              onButtonClick={handleButtonClick}
            />     
        </div>      
      </div>
      
      <div  className={styles.render_cont}>
        
        <Render t={t} activeButtonId={activeButtonId}></Render>    
        <div id='contact_mob'></div>    
        <Form t={t}></Form>
      </div>
      
      <div className={styles.bottom}></div>
      <div id='contact'></div>
    </main>
  )
}
