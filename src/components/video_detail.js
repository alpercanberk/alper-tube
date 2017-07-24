import React from 'react';

var VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = 'https://youtube.com/embed/' + videoId;

  return(
    <div className ="col-md-8 video-detail grey">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className = "embed-responsive-item" src={url}></iframe>
      </div>
      <div className = "details white">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>

      </div>
    </div>

  );


};

export default VideoDetail;
