import React from 'react'
import styles from './Running.module.css'
import stocks from './stocks.json';

export default function Running() {
  return (
    <div className={styles.running_line}>
    <div className={styles.container}>
      {stocks.map((stock, index) => (
        <div key={index} className={styles.stockItem}>
          <p>{stock.name}</p>
          <div className={styles.coeff_cont}>
            {stock.coefficient>0 ? (<img className={styles.coeff_img} src='/images/plus.svg'></img>) :(<img className={styles.coeff_img} src='/images/minus.svg'></img>)}
            {stock.coefficient>0 ? (
                <p className={styles.plus}>{stock.coefficient }%</p>
            ) : (
                <p className={styles.minus}>{stock.coefficient }%</p>
            )}
          </div>
          
        </div>
      ))}
    </div>
    <div className={styles.container}>
      {stocks.map((stock, index) => (
        <div key={index} className={styles.stockItem}>
          <p>{stock.name}</p>
          <div className={styles.coeff_cont}>
            {stock.coefficient>0 ? (<img className={styles.coeff_img} src='/images/plus.svg'></img>) :(<img className={styles.coeff_img} src='/images/minus.svg'></img>)}
            {stock.coefficient>0 ? (
                <p className={styles.plus}>{stock.coefficient }%</p>
            ) : (
                <p className={styles.minus}>{stock.coefficient }%</p>
            )}
          </div>
          
        </div>
      ))}
    </div>
    </div>
    
  )
}
