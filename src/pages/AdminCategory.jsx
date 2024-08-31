import React from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle';

const SectionProfile = () => {
    const [category, setCategory] = useState('');

    const [newiconPath, setNewIconPath] = useState('');
  
    const handleSaveChanges = (event) => {
      event.preventDefault();
      console.log('Submitted:', { category, newiconPath });
      
    };

    const handleIconPathChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setNewIconPath(selectedPhoto);
      };
    
  
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
                    <input type="file" onChange={handleIconPathChange} />  
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