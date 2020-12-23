import React from 'react';
import './css/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {


  return (
    <div onClick={() => onVideoSelect(video)}className="item video-item" key={video.id.videoId}>
      <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.default.url}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>


  )
}

export default VideoItem;