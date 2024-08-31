import React from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal2 = withReactContent(Swal)

const SectionProfile = () => {
    const [category, setCategory] = useState('')
    const [newiconPath, setNewIconPath] = useState(null)
  
    const handleSaveChanges = async (event) => {
      event.preventDefault();

      const formData = new FormData()
      formData.append("category_name", category)
      formData.append("icon", newiconPath)

      try {
        await axios.post("http://localhost:3000/category/create-category", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        Swal2.fire({
          icon: "success",
          title: "Kategori berhasil dibuat",
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

    const handleIconPathChange = (event) => {
      const selectedPhoto = event.target.files[0]
      setNewIconPath(selectedPhoto)
    }

    return (
      <div className="container">
        <div className="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
          <div className="flex items-center mb-4">
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground" htmlFor="category">
              New Category
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-4">
                <div className="block text-muted-foreground mb-2"> Icon Path</div>
                <label className="block text-muted-foreground" htmlFor="photo">
                    <input type="file" onChange={handleIconPathChange} accept='image/png,image/jpeg' />  
                </label>
            </div>

            <div className="flex justify-between">
                <button
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2"
                    onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
      </div>
    );
  };
  

const AdminCategory=()=>{
    return(
        <>
        <PageTitle title={'Manage Category'}/>
        <SectionProfile />
        </>
    )
}

export default AdminCategory