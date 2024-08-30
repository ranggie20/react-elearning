// PopularItemsList.js
import React from 'react';
import PopularItem from './PopularItem';

const PopularItemsList = ({ items }) => {
    return (

        <div className='container py-5 popular-items'>
            <div className="row">
                {items.map((item, index) => (
                    <div className='col-md-4'>
                    <PopularItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        url={item.url}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularItemsList;
