import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading!!</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui segment">
        <iframe
          width="610"
          height="315"
          title="video-player"
          src={videoSrc}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
