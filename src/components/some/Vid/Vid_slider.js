import React from 'react';
import './Vid_slider.css';
import 'video-react'
import { Player , ControlBar,VolumeMenuButton} from 'video-react';
import "video-react/dist/video-react.css"; // обязательно импортируйте стили

const Vid_slider = ({ videoSrc, pt , container}) => {
  return (
    <div className="s_v1" style={{ paddingTop: `${pt}rem` }}>
        <Player
          playsInline
          src={videoSrc}          
        >
          <ControlBar autoHide={false} disableCompletely={false}>
          <VolumeMenuButton vertical />
          </ControlBar>
        </Player>
    </div>
  );
};
export default Vid_slider;