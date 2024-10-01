import React from 'react';
import './Video.css';
import 'video-react'
import { Player , ControlBar,VolumeMenuButton} from 'video-react';
import "video-react/dist/video-react.css"; // обязательно импортируйте стили

const Video = ({ videoSrc, pt }) => {
  return (
    <div className='container_1' style={{ paddingTop: `${pt}rem` }}>
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
export default Video;