import React from 'react';

const YouTubeEmbed = ({ videoId }) => (
  <iframe
    width="100%"
    height="515"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

export default YouTubeEmbed;
