import React, { useState } from 'react';
import styles from './Slider_left.module.css';

const Slider = ({title}) => {
  const images = [
    'images/img_main_2.png',
    'images/img_main_1.png',
    'images/img_main_2.png',
    'images/img_main_1.png',
    'images/img_main_1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>        
      <button className={styles.navButtonPerv} style={{ backgroundImage: `url('images/perv.png')` }} onClick={goToPrevious}></button>
      <img className={styles.line} src='images/vector11.png'></img>
      <div className={styles.imageContainer}>
        <div 
          className={styles.imagesWrapper}
          style={{ transform: `translateX(-${currentIndex * 28}rem)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + image}
              alt={`Slide ${index}`}
              className={styles.sliderImage}
            />
          ))}
        </div>
      </div>
      <img className={styles.line} src='images/vector11.png'></img>
      <button className={styles.navButtonNext} style={{ backgroundImage: `url('images/next.png')` }} onClick={goToNext}></button>
    </div>
  );
};

export default Slider;