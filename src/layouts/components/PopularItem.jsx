import React from 'react';

const PopularItem = ({ image, title, price, url }) => {
    return (
        <section className="popular-items latest-padding">
            
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >


                        <div className="single-popular-items mb-50 text-center">
                            <a href={url}>
                                <div className="popular-img">
                                    <img src={image} alt={title} />
                                    <div className="img-cap">
                                        <span>Add to cart</span>
                                    </div>
                                    <div className="favorit-items">
                                        <span className="flaticon-heart" />
                                    </div>
                                </div>
                            </a>
                            <div className="popular-caption">
                                <h3>
                                    <a href={url}>{title}</a>
                                </h3>
                                <span>${price}</span>
                            </div>
                        </div>
                    </div>
                </div>
        
        </section>
    );
};

export default PopularItem;
