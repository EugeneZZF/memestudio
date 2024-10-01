import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MySlider_2d.css';
import Vid_slider from '../../some/Vid/Vid_slider';

const MySlider_2d = () => {
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
    <div className="slider-container_2d">
      <Slider {...settings}>
        
        <div className="slide_12">
          <video className="s_v2" src="\sliders\2D ANIMATION\56eb6cafdfeb06fce5bac055cc70c18ba664cfd5.mp4" controls></video>
        </div> 
        <div className="slide_12">
          <video className="s_v2" src="\sliders\2D ANIMATION\e2d0ac0f38238e28cb313d2c912fff5d9e2d00a2.mp4" controls></video>
        </div> 
        <div className="slide_11">
          <video className="s_v1" src="\sliders\2D ANIMATION\24e4bcc280fb4dd4f5802351075302aa93590c5e.mp4" controls></video>          
        </div>
        <div className="slide_12">
          <video className="s_v2" src="\sliders\2D ANIMATION\ceb36bab29f0b2a83d032c5e1d537ece21260dd5.mp4" controls></video>            
        </div> 
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default MySlider_2d;