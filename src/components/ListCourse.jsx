import React from "react";

const ListCourse = ({ courses }) => {
    return (
    <div className="px-4 py-2">
        <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="list-course">
                {courses.map((course, index) => (
                    <div key={index} className="course-item">
                        <div className="video-container">
                            <iframe 
                                width="360" 
                                height="200" 
                                src={course.videoUrl} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="course-details">
                            <h4>{course.title}</h4>
                            <p>Price: {course.price}</p>
                            <p>Instructor: {course.teacherName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default ListCourse;