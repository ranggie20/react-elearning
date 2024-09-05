import React, { useEffect } from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle';
import axios from '../api/axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal2 = withReactContent(Swal)

const SectionProfile = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const [newthumbnail, setNewThumbnail] = useState('');

  const [categoryList, setCategoryList] = useState([])

  const handleThumbnailChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setNewThumbnail(selectedPhoto);
  };
  
  const fetchCategoriesList = async () => {
    try {
      const response = await axios.get("/public/category")

      setCategoryList(response.data.data || [])
      setCategory(response.data.data[0] ? response.data.data[0].category_id : 1)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSaveChanges = async () => {
    const formData = new FormData()
    formData.append('course_name', courseName)
    formData.append('course_description', description)
    formData.append('category_id', category)
    formData.append('price', price)
    formData.append('thumbnail', newthumbnail)

    try {
      await axios.post("/teacher/create-course", formData, {
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
  }

  useEffect(() => {
    fetchCategoriesList()
  }, [])
    
  return (
    <div className="container">
      <div className="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-muted-foreground" htmlFor="courseName">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            className="form-control"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground" htmlFor="category">
            Category
          </label>
          <select id='category' className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
            { categoryList.map((c) => (
              <option key={c.category_id} value={c.category_id}>{ c.category_name }</option>
            )) }
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
            <div className="block text-muted-foreground mb-2">Thumbnail URL</div>
            <label className="block text-muted-foreground" htmlFor="photo">
                <input type="file" onChange={handleThumbnailChange} accept='image/png,image/jpeg' />  
            </label>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminCourse=()=>{
    return(
        <>
        <PageTitle title={'Manage Course'}/>
        <SectionProfile />
        </>
    )
}

export default AdminCourse