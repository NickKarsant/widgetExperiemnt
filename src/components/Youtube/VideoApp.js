import React, { useState, useEffect } from "react";
import VideoSearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./hooks/useVideos";

const VideoApp = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  useEffect(() => {
    console.log(videos);
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <VideoSearchBar onFormSubmit={search} />
      
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail  video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList  onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoApp;
