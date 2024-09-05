import React from 'react';

const MyCourseDetail = ({ video, title, deskripsi }) => {
  return (
    <div className="course-detail container">
      <div className="video-section">
        <iframe
          width="100%"
          height="500"
          src={video}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="description-section text-center mt-5">
        <h2>{title}</h2>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default MyCourseDetail;
