import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react'


export default function Header({language, t, changeLanguage_func, changeLanguage, activeButtonId , setActiveButtonId, handleButtonClick_1}) {

  
  const [isOpen, setOpen] = useState(false);


  const handleButtonClick = () => {
    changeLanguage_func();
    if(language != true){
      changeLanguage("ru");
    }
    else{
      changeLanguage("en");
    }
  };

  return (
    <>
    <div className={styles.cont}>
      
      <header>
      {/* <div className={styles.nav}></div> */}
      <div className={styles.main_info}>
        <img className={styles.logo_face} src='/images/logo_face.png'></img>
        <div className={styles.name_logo}>
        <img className={styles.logo_face_2} src='/images/logo_face.png'></img>
          <h1 className={styles.name_site}>THE MEME PROTOCOL</h1>
          </div>
        <div className={styles.nav}>
          <a onClick={() => handleButtonClick_1(2)} href="#render" className={styles.nav_link}>
            {t("anim")}
          </a>
          <a onClick={() => handleButtonClick_1(1)} href="#render" className={styles.nav_link}>
            {t("Illustrations")}
          </a>
          <a onClick={() => handleButtonClick_1(7)} href="#render" className={styles.nav_link}>
            {t("Memes")}
          </a>
          <a href="#render" className={styles.nav_link}>
            {t("Blog")}
          </a>
          <a href="#contact" className={styles.nav_link}>
            {t("Contact")}
          </a>
        </div>
        <button className={styles.mobile_nav} onClick={() => setOpen(!isOpen)}>
          <img className={styles.mobile_nav_img} src="/images/nav_m.svg"></img>
        </button>
        {/* <img className={`${styles.img_menu_2} ${language ? styles.flipped : ''}`} src='/images/arrow.svg'></img> */}
        <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.m_menu_list}>
            <li className={styles.m_item}>
              <button
                onClick={handleButtonClick}
                className={styles.menu_buttons}
              >
                <div className={styles.menu_item}>
                  {language ? (
                    <img
                      className={styles.img_menu}
                      src="/images/russia.svg"
                    ></img>
                  ) : (
                    <img
                      className={styles.img_menu}
                      src="/images/english.svg"
                    ></img>
                  )}

                  {language ? (
                    <p className={styles.p_menu}>Русский</p>
                  ) : (
                    <p className={styles.p_menu}>English</p>
                  )}

                  <img
                    className={`${styles.img_menu_2} ${
                      language ? styles.flipped : ""
                    }`}
                    src="/images/arrow.svg"
                  ></img>
                </div>
              </button>
            </li>
            <li className={styles.m_item}>
              <a href="#render" className={styles.nav_link}>
                {t("anim")}
              </a>
              <img className={styles.line} src="/images/line.svg"></img>
            </li>
            <li className={styles.m_item}>
              <a href="#render" className={styles.nav_link}>
                {t("Illustrations")}
              </a>
              <img className={styles.line} src="/images/line.svg"></img>
            </li>
            <li className={styles.m_item}>
              <a href="#render" className={styles.nav_link}>
                {t("Memes")}
              </a>
              <img className={styles.line} src="/images/line.svg"></img>
            </li>
            <li className={styles.m_item}>
              <a href="#render" className={styles.nav_link}>
                {t("Blog")}
              </a>
              <img className={styles.line} src="/images/line.svg"></img>
            </li>
            <li className={styles.m_item}>
              <a href="#contact_mob" className={styles.nav_link}>
                {t("Contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={handleButtonClick} className={styles.menu_button}>
        <div className={styles.menu_item}>
          {language ? (
            <img className={styles.img_menu} src="/images/russia.svg"></img>
          ) : (
            <img className={styles.img_menu} src="/images/english.svg"></img>
          )}

          {language ? (
            <p className={styles.p_menu}>Русский</p>
          ) : (
            <p className={styles.p_menu}>English</p>
          )}

          <img
            className={`${styles.img_menu_2} ${language ? styles.flipped : ""}`}
            src="/images/arrow.svg"
          ></img>
        </div>
      </button>
      </header>
      <div className={styles.video_background_container}>
      <video muted autoPlay loop className={styles.video_background}>
          <source src="\videos\bgr_3.mp4" type="video/mp4"/>
      </video>
      </div>
    </div>
    
    </>
  );
}