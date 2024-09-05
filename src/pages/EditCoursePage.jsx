import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal2 = withReactContent(Swal)

const PageContent = ({courseDetail}) => {
  const { id } = useParams()

  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [vidio, setvidio] = useState(null);
  const [category, setCategory] = useState('');

  
	const [categories, setCategories] = useState([]);

  
	const fetchDataCategory = async function () {
		try {
			const response = await axios.get('/public/category');
			console.log(response.data.data)
			setCategories(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataCategory()
    
    setCourseName(courseDetail.course_name)
    setCourseDescription(courseDetail.course_description)
    setPrice(courseDetail.price)
    setCategory(courseDetail.category_id)
	}, [])

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };
  const handleVidioChange = (e) => {
    const file = e.target.files[0];
    setvidio(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('course_name', courseName)
    formData.append('course_description', courseDescription)
    formData.append('category_id', category)
    formData.append('price', price)
    formData.append('thumbnail', thumbnail)
    formData.append('video', vidio)

    // Lakukan sesuatu dengan data yang di-submit (misalnya, kirim ke server)
    try {
      await axios.put(`/teacher/update-course/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      Swal2.fire({
        icon: "success",
        title: "Course berhasil dibuat",
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      })
    } catch (e) {
      console.error(e)
    } 
  };

  return (
    <div className="container edit-course-page py-5">
      <h2>Ubah data course '{courseDetail.course_name}'</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="course_name" className="form-label">Course Name</label>
          <input
            id='course_name'
            type="text"
            name="course_name"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course_description" className="form-label">Course Description</label>
          <textarea
            id='course_description'
            name="course_description"
            className="form-control"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            id='price'
            type="number"
            name="price"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>Price dalam <code>$</code> (AS dollar)</span>
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
          <input
            id='thumbnail'
            type="file"
            name="thumbnail"
            className="form-control-file"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vidio" className="form-label">Vidio</label>
          <input
            id='vidio'
            type="file"
            name="vidio"
            className="form-control-file"
            onChange={handleVidioChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            id='category'
            name="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select a category</option>
            {categories.map((item, index) => (
              <option key={index} value={item.category_name}>{item.category_name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

const EditCoursePage = () => {
  const params = useParams();

  const [courseDetail, setCourseDetail] = useState({});
  
  const fetchDataCourse = async function () {
    try {
      // benerin api nya kalo salah api nya
      const response = await axios.get(`/public/get-course/${params.id}`);
      
      setCourseDetail(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchDataCourse()
  }, [])
  return (
    <div>
      {courseDetail && Object.keys(courseDetail).length !== 0 ? 
        <PageContent courseDetail={courseDetail}/>
      : <div className='d-flex justify-content-center align-items-center' style={{minHeight: '300px'}}>
          <span>Page Not Found</span>
        </div>
      }
    </div>
  )
}

export default EditCoursePage