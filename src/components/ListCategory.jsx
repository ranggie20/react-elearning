import React from 'react';

const ListCategory = ({ categories }) => {
  return (
  <div className="container"> 
    <div className="px-4 py-2">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="list-course">
          <div className="category-list">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <img src={category.image} alt={category.name} className="category-image" style={{ width: '300px', height: '300px', objectFit: 'cover' }}/>
                <h3 className="category-name">{category.name}</h3>
              </div>
            ))}
          </div>  
        </div>
      </div>
    </div>
  </div>        
  );
};

export default ListCategory;
