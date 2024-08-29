import React from 'react';
import PopularItem from './PopularItem';

const PopularItemsList = () => {
  const items = [
    { imgSrc: 'assets/img/gallery/popular1.png', altText: 'Game Development', itemName: 'Basics of Game Development', itemPrice: '$ 35', itemUrl: 'product_details.html' },
    { imgSrc: 'assets/img/gallery/popular2.png', altText: 'Cyber Security', itemName: 'Cyber Security', itemPrice: '$ 25', itemUrl: 'product_details.html' },
    { imgSrc: 'assets/img/gallery/popular3.png', altText: 'Windows Server', itemName: 'Windows Server', itemPrice: '$ 10', itemUrl: 'product_details.html' },
  ];

  return (
    <div className="row">
      {items.map((item, index) => (
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <PopularItem
            imgSrc={item.imgSrc}
            altText={item.altText}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            itemUrl={item.itemUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default PopularItemsList;