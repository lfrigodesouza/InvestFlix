import React from 'react';
import { VideoCardContainer } from './styles';
import './style.css';

function VideoCard({ imagem, videoTitle, videoURL, categoryColor }) {
  return (
    <div class="image-container">
      <VideoCardContainer
        url={imagem}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
      <div class="image-caption">
        {videoTitle}
      </div>
    </div>
  );
}

export default VideoCard;
