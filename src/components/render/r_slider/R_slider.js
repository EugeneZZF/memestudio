import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MySlider.css'; // Ваши пользовательские стили
import Vid_slider from '../../some/Vid/Vid_slider';


const MySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",// Добавляем кастомные стрелки
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
    <div className="slider_container">
      <Slider {...settings}>
        
        <div className="slide_1">
            <Vid_slider  className="videos" videoSrc="sliders\3d_video\video2.mp4"></Vid_slider>
        </div> 
        <div className="slide_1">
            <Vid_slider  className="videos" videoSrc="\sliders\3d_video\video.mp4"></Vid_slider>
        </div>
        <div className="slide_1">
            <Vid_slider  className="videos" videoSrc="sliders\3d_video\video2.mp4"></Vid_slider>
        </div>
        <div className="slide_1">
            <Vid_slider container="videos" className="videos" videoSrc="\sliders\3d_video\video.mp4"></Vid_slider>
        </div>
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default MySlider;