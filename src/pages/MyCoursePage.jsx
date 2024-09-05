import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'

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
    const [courseList, setCourseList] = useState([])

    const fetchCourseList = async () => {
        try {
            const response = await axios.get("/my-course")
            setCourseList(response.data.data || [])
        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    useEffect(() => {
        fetchCourseList()
    }, [])

    return(
        <>
            <div className="popular-items" style={{ paddingTop: "8rem" }}>
                <div className="container">
                    <div className="row">
                    { courseList.map((c) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <Link to={`/mydetail/${c.course_id}`}>
                                <div className="popular-img">
                                <img src={`${import.meta.env.VITE_API_URL}/${c.thumbnail}`} alt="" />
                                </div>
                            </Link>
                            <div className="popular-caption">
                                <Link to={`/mydetail/${c.course_id}`}></Link>
                                <h3>
                                <Link to={`/mydetail/${c.course_id}`}> </Link> 
                                <Link to={`/mydetail/${c.course_id}`}>
                                    { c.course_name }
                                </Link>
                                </h3>
                            </div>
                            </div>
                        </div>
                    )) }
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