import React from 'react'

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
                    {/* Section tittle */}
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-popular-items mb-50 text-center">
                        <a href="/mycoursehtml">
                            <div className="popular-img">
                            <img src="assets/img/gallery/new_product2.png" alt="" />
                            </div>
                        </a>
                        <div className="popular-caption">
                            <h3>
                            <a href="/mycoursehtml">
                                Tutorial mebuat halaman web untuk pemula
                            </a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-popular-items mb-50 text-center">
                        <a href="/mycoursemarketing">
                            <div className="popular-img">
                            <img src="assets/img/gallery/popular5.png" alt="" />
                            </div>
                        </a>
                        <div className="popular-caption">
                            <a href="/mycoursemarketing"></a>
                            <h3>
                            <a href="/mycoursemarketing" />
                            <a href="/mycoursemarketing">
                                Rahasia sukses marketing di era digital
                            </a>
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