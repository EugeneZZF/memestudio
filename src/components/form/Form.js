import React from 'react'
import styles from './Form.module.css'

export default function Form({t}) {
  return (
    <div className={styles.cont}>
        <img className={styles.line} src='\images\line_main.png'></img>

        <div className={styles.cont_form}>            
            <img className={styles.dot} src='/images/dot_group.svg'></img>
            <p className={styles.title}>
                {t("form")} 
                <span className={styles.green}>{t("form_2")}</span>
            </p>
            <p className={styles.below}>Please fill out form below:</p>
            <form action="mailto:mail@thememeprotocol.com" method="POST" enctype="text/plain">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="e.g., email@example.com" required />

                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" />

                <label for="required">Your message</label>
                <textarea className={styles.message_input} type="text" id="required" name="message" required placeholder="Enter text here"></textarea>

                <button className={styles.btn_send} type="submit">SEND</button>
            </form>
        </div>

        <img className={styles.line_2} src='\images\line_main.png'></img>
    </div>
  )
}