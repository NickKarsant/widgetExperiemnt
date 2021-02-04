import React, { useState } from "react";

const VideoSearchBar = ({ onFormSubmit }) => {
  const [videoTerm, setVideoTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onFormSubmit(videoTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            onChange={e => setVideoTerm(e.target.value)}
            type="text"
            value={videoTerm}
          />
        </div>
      </form>
    </div>
  );
};

export default VideoSearchBar;
