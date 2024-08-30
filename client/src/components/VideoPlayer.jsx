import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-container" style={{ width: '320px', height: '180px', overflow: 'hidden' }}>
      <video
        controls
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
