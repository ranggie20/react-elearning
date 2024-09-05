import React, { useEffect, useState } from 'react';
import MyCourseDetail from '../components/MyCourseDetail';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const MyDetail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  const videoUrl = "https://www.youtube.com/embed/example-video-id";
  const courseDescription = "Ini adalah deskripsi dari kursus yang sedang ditonton.";

  const fetchCourseDetail = async () => {
    try {
      const response = await axios.get(`/my-course/${id}`)
      setDetail(response.data.data || {})
    } catch (error) {
      console.error("cannot get course detail:", error)
    }
  }

  useEffect(() => {
    fetchCourseDetail()
  }, [])

  return (
    <div>
      <MyCourseDetail video={`${import.meta.env.VITE_API_URL}/${detail.video}`} title={detail.course_name} deskripsi={detail.course_description} />
    </div>
  );
};

export default MyDetail;
