import React from 'react'
import { Link } from 'react-router-dom'

const CourseKu=() => {
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2> My Course </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const DetailCourse=() => {
    return(
        <>
            <div className="popular-items" style={{ paddingTop: "8rem" }}>
                <div className="container">
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-popular-items mb-50 text-center">
                        <Link href="/mycoursemarketing">
                            <div className="popular-img">
                            <img src="assets/img/gallery/popular5.png" alt="" />
                            </div>
                        </Link>
                        <div className="popular-caption">
                            <Link href="/mycoursemarketing"></Link>
                            <h3>
                            <Link href="/mycoursemarketing" />
                            <Link href="/mycoursemarketing">
                                Rahasia sukses marketing di era digital
                            </Link>
                            </h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MyCoursePage = () => {
    return (
        <>
            <CourseKu/>
            <DetailCourse/>
        </>
    );
};

export default MyCoursePage