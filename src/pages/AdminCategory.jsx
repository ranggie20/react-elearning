import React from 'react'
import { useState} from 'react'
import PageTitle from '../components/PageTitle';

const SectionProfile = () => {
    const [category, setCategory] = useState('');
    const [iconpath, setIconPath] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted:', { category, iconpath });
      
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
            <label className="block text-muted-foreground" htmlFor="icon-path">
                Icon Path
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              value={iconpath}
              onChange={(e) => setIconPath(e.target.value)}
            />
          </div>
          <button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
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