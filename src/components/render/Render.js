import React from 'react'
import styles from './Render.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import R_slider from './r_slider/R_slider'
import MySlider_2d from './r_slider/2d_sliders';
import Gifs_slider from './r_slider/Gifs.js';
import Stickers from './r_slider/Stickers';
import Illustration from './r_slider/Illustration';
import Chara from './r_slider/Chara';
import Memes from './r_slider/Memes'
import Text_ill from '../some/Text/Text_ill.js';
import Text_3d from '../some/Text/Text_3d.js';
import Text_2d from '../some/Text/Text_2d.js';
import Text_Stickers from '../some/Text/Stickers.js';
import Text_chara from '../some/Text/Text_Chara.js';
import Text_websites from '../some/Text/Text_websites.js';
import Text_memes from '../some/Text/Text_memes.js';
import Text_gifs from '../some/Text/Text_gifs.js';
import Websites from './r_slider/Website.js';
import Form from '../form/Form.js';

const RenderComponent = ({ activeButtonId, t }) => {
  let ComponentToRender;
  let TextComponent;

  switch(activeButtonId) {
    case 1:
      ComponentToRender = Illustration;
      TextComponent = Text_ill;
      break;
    case 2:
      ComponentToRender = R_slider;
      TextComponent = Text_3d;
      break;
    case 3:
      ComponentToRender = MySlider_2d;
      TextComponent = Text_2d;
      break;
    case 4:
      ComponentToRender = Stickers;
      TextComponent = Text_Stickers;
      break;
    case 5:
      ComponentToRender = Chara;
      TextComponent = Text_chara;
      break;
    case 6:
      ComponentToRender = Websites;
      TextComponent = Text_websites;  // Assuming the same text for Chara
      break;
    case 7:
      ComponentToRender = Memes;
      TextComponent = Text_memes;
      break;
    case 8:
      ComponentToRender = Gifs_slider;
      TextComponent = Text_gifs;
      break;
    default:
      ComponentToRender = Gifs_slider;
      TextComponent = Text_gifs;
      break;
  }

  return (
    <div className={styles.cont}>
      {ComponentToRender && <ComponentToRender />}
      {TextComponent && <TextComponent t={t} />}
      
    </div>
  );
};

export default RenderComponent