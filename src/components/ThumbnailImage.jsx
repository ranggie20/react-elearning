import React from 'react';
import '../assets/css/ThumbnailImage.scss'; // Buat file CSS terpisah atau gunakan inline styling

function ThumbnailImage({ src, alt }) {
  return (
    <div className="thumbnail-wrapper">
      <div className="thumbnail-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default ThumbnailImage;