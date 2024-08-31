import React from 'react';
import ListCategory from '../components/ListCategory';

const AdminListCategory = () => {
  const categories = [
    { image: 'assets/img/gallery/gallery1.jpeg', name: 'Gaming' }
  ];

  return (
    <div className="home-page">
      <ListCategory categories={categories} />
    </div>
  );
};

export default AdminListCategory;
