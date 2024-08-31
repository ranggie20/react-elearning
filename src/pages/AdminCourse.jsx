import React from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle';

const SectionProfile = () => {
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [iconPath, setIconPath] = useState('');
  
    const handleSaveChanges = () => {
        console.log('Saving changes:', {
          courseName,
          description,
          category,
          price,
          thumbnail,
          iconPath,
        });
      };

      const handleDelete = () => {
        // Logic untuk menghapus course
        console.log('Deleting course');
      }
  
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
              <input
                type="text"
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
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
              <label className="block text-muted-foreground" htmlFor="thumbnail">
                Thumbnail URL
              </label>
              <input
                type="text"
                id="thumbnail"
                className="form-control"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-muted-foreground" htmlFor="icon-path">
                Icon Path
              </label>
              <input
                type="text"
                id="iconPath"
                className="form-control"
                value={iconPath}
                onChange={(e) => setIconPath(e.target.value)}
              />
            </div>
    
            <div className="flex justify-between">
              <button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="bg-danger text-white hover:bg-danger/80 rounded-lg p-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    };

const AdminCategory=()=>{
    return(
        <>
        <PageTitle title={'Manage Course'}/>
        <SectionProfile />
        </>
    )
}

export default AdminCategory