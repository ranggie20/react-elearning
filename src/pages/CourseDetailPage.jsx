import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";
import DetailComponent from "../components/DetailComponent";

const CourseDetailPage = () => {
  const params = useParams();
  const [course, setCourse] = useState([]);

  const fetchDataPopular = async () => {
    try {
      const response = await axios.get("/public/get-course/" + params.id);
      console.log(response.data)
      setCourse(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataPopular();
  }, []);

  return (
    <>
      <PageTitle title={course.course_name} />
      <DetailComponent
        url={course.url}
        title={course.course_name}
        description={course.course_description}
        price={course.price}
      />
    </>
  );
};

export default CourseDetailPage;
