import React from 'react';

const PopularItem = ({ imgSrc, altText, itemName, itemPrice, itemUrl }) => {
  return (
    <div className="single-popular-items mb-50 text-center">
      <div className="popular-img">
        <img src={imgSrc} alt={altText} />
        <div className="img-cap">
          <span>Add to cart</span>
        </div>
        <div className="favorit-items">
          <span className="flaticon-heart" />
        </div>
      </div>
      <div className="popular-caption">
        <h3>
          <a href={itemUrl}>{itemName}</a>
        </h3>
        <span>{itemPrice}</span>
      </div>
    </div>
  );
};

export default PopularItem