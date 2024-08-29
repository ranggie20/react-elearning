import React from 'react';

const PopularItemsList = () => {
    const items = [
        { image: 'assets/img/gallery/popular1.png', title: 'Basics of Game Development', price: 35, url: 'product_details.html' },
        { image: 'assets/img/gallery/popular2.png', title: 'Cyber Security', price: 25, url: 'product_details.html' },
        { image: 'assets/img/gallery/popular3.png', title: 'Windows Server', price: 10, url: 'product_details.html' },
    ];

    const PopularItem = ({ image, title, price, url }) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <img src={image} alt="" />
                                <div className="img-cap">
                                    <span>Add to cart</span>
                                </div>
                                <div className="favorit-items">
                                    <span className="flaticon-heart" />
                                </div>
                            </div>
                            <div className="popular-caption">
                                <h3>
                                    <a href={url}>{title}</a>
                                </h3>
                                <span>${price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="row">
            {items.map((item, index) => (
                <PopularItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    url={item.url}
                />
            ))}
        </div>
    );
};

export default PopularItemsList
