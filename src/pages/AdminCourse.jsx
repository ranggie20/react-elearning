import React from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle';

const SectionProfile = () => {
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const [newthumbnail, setNewThumbnail] = useState('');
    const [newiconPath, setNewIconPath] = useState('');

  
    const handleSaveChanges = () => {
        console.log('Saving changes:', {
          courseName, description,category,price,newthumbnail,newiconPath });
      };
      const handleThumbnailChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setNewThumbnail(selectedPhoto);
      };
      const handleIconPathChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setNewIconPath(selectedPhoto);
      };
    
      
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
                <div className="block text-muted-foreground mb-2">Thumbnail URL</div>
                <label className="block text-muted-foreground" htmlFor="photo">
                    <input type="file" onChange={handleThumbnailChange} />  
                </label>
            </div>

            <div className="mb-4">
                <div className="block text-muted-foreground mb-2"> Icon Path</div>
                <label className="block text-muted-foreground" htmlFor="photo">
                    <input type="file" onChange={handleIconPathChange} />  
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