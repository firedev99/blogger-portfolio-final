import React from "react"
const Video = ({ videoSrcURL, videoTitle, className, ...props }) => (
  <div className={className}>
    <iframe
      height="100%"
      width="100%"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video