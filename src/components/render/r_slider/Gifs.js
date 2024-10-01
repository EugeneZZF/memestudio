
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gifs.css'

const Gifs_slider = () => {
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
        <div className="slide_5">
          <img src="\sliders\GIFs\86f3e5df49b868a11753fbf7daba6d8affa12444-1720990412.gif" alt="GIF 1" />
        </div>
        <div className="slide_5">
          <img src="\sliders\GIFs\c6a79bed4cd8c66f465738ae99070ea0323260a6-1724017335.gif" alt="GIF 2" />
        </div>
        <div className="slide_5">
          <img src="\sliders\GIFs\Gif-2.gif" alt="GIF 3" />
        </div>
        <div className="slide_5">
          <img src="\sliders\GIFs\c6a79bed4cd8c66f465738ae99070ea0323260a6-1724017335.gif" alt="GIF 2" />
        </div>
        
        {/* Добавьте больше слайдов по мере необходимости */}
      </Slider>
      <div className='gifs_text'>
        
      </div>
    </div>
  );
};

export default Gifs_slider