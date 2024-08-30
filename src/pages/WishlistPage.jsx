import React from 'react';
import PopularItemsList from '../layouts/components/PopularItemsList';

const WishlistName = () => {
    return (
        <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>wishlist</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const WishlistPage = () => {
    const wishlistItems = [
        { image: 'assets/img/gallery/popular4.png', title: 'Google Analytics', price: 10, url: 'google_analytics_details.html' },
        { image: 'assets/img/gallery/popular5.png', title: 'Marketing Strategy', price: 16, url: 'strategi_mark_details.html' },
        { image: 'assets/img/gallery/popular6.png', title: 'Arduino', price: 18, url: 'microcontroller_details.html' }
    ];

    return (
        <>
            <WishlistName />
            <PopularItemsList items={wishlistItems} />
        </>
    );
};

export default WishlistPage;
