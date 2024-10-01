import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Preloader from '../Preloader/Preloader';
import './Illustration.css';

const Chara = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="gifs">
      <Slider {...settings}>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\джедай-01.webp" 
            alt="GIF 1"
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\Персонаж-банк1-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\Персонаж-банк2-01.webp" 
            alt="GIF 3" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\Персонаж-банк3-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\Персонаж-банк4-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\супермэн-вид-сзади-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\супермэн-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        <div className="slide_5">
          <LazyLoadImage 
            src="\sliders\CHARACKTERS CREATION\PHIL-01.webp" 
            alt="GIF 2" 
            effect="blur"
            placeholder={<Preloader />} // Используем прелоадер
          />
        </div>
        
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default Chara