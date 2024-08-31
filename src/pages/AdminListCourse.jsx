import React from "react";
import ListCourse from "../components/ListCourse";

const AdminListCourse = () => {
    const courses = [
        {
            videoUrl: "https://www.youtube.com/embed/OEhw6GqQDts?si=yPU4quUPi-RaSdF-",
            title: "Rahasia Sukses Marketing di Era Digital",
            price: "$7",
            teacherName: "John Doe"
        },
    ];

    return (
        <div className="my-courses-page">
            <ListCourse courses={courses} />
        </div>
    );
};

export default AdminListCourse;
