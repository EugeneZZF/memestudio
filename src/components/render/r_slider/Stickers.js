import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gifs.css'

const Stickers = () => {
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
          <img src="\sliders\STICKERS\5e66668b3a0b2f7f9eaf1220a40a364fc250691e-1724017633.gif" alt="GIF 1" />
        </div>
        <div className="slide_4">
          <img src="\sliders\STICKERS\e82d8bbd15baaf2fbea94dad1125047582cbb3af-1720815169.gif" alt="GIF 2" />
        </div>
        <div className="slide_4">
          <img src="\sliders\GIFs\Gif-2.gif" alt="GIF 3" />
        </div>
        <div className="slide_4">
          <img src="\sliders\STICKERS\ea72a0a9c75e960a0dc009bc7d52896d6660bb7e-1724016792.gif" alt="GIF 2" />
        </div>
        
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
    </div>
  );
};

export default Stickers