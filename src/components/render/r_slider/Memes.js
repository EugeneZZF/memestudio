import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Illustration.css'

const Memes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // Добавляем кастомные стрелки
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
        <div className="slide_4">
          <img src="\sliders\MEMES\2 (1).jpg" alt="GIF 1" />
        </div>
        <div className="slide_4">
          <img src="\sliders\MEMES\14.jpg" alt="GIF 2" />
        </div>
        <div className="slide_4">
          <img src="\sliders\MEMES\20.jpg" alt="GIF 2" />
        </div>
        <div className="slide_4">
          <img src="\sliders\MEMES\22.jpg" alt="GIF 2" />
        </div>
        <div className="slide_4">
          <img src="\sliders\MEMES\58.jpg" alt="GIF 2" />
        </div>
        <div className="slide_4">
          <img src="\sliders\MEMES\мемыDone.png" alt="GIF 2" />
        </div>
        
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default Memes