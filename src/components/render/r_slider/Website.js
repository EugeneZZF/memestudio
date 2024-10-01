import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Illustration.css'

const Websites = () => {
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
    <div className="ill">
      <Slider {...settings}>
        <div className="slide_7">
          <img src="\sliders\WEBSITES\555.JPG" alt="GIF 1" />
        </div>
        <div className="slide_7">
          <img src="\sliders\WEBSITES\Capture.JPG" alt="GIF 2" />
        </div>
        <div className="slide_7">
          <img src="\sliders\WEBSITES\555.JPG" alt="GIF 1" />
        </div>
        <div className="slide_7">
          <img src="\sliders\WEBSITES\Capture.JPG" alt="GIF 2" />
        </div>
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default Websites