import React from 'react';

const PopularItem = ({ image, title, price, url }) => {
    return (
        <section className="popular-items latest-padding">
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row" style={{ paddingTop: 100 }}>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularItem;
