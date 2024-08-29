import React from 'react'

const SectionMarketing=() =>{
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Marketing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MarketingCourse=() => {
    return(
        <>
            <section className="popular-items latest-padding">
                <div className="container">
                    <div className="row product-btn justify-content-between mb-40">
                    {/* Grid and List view */}
                    <div className="grid-list-view"></div>
                    {/* Select items */}
                    </div>
                    {/* Nav Card */}
                    <div className="properties__button">
                    {/*Nav Button  */}
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                            className="nav-item nav-link active"
                            id="nav-home-tab"
                            data-toggle="tab"
                            href="#nav-home"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            {" "}
                            Digital Marketing{" "}
                        </a>
                        <a
                            className="nav-item nav-link"
                            id="nav-profile-tab"
                            data-toggle="tab"
                            href="#nav-profile"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            {" "}
                            Social Media Marketing{" "}
                        </a>
                        <a
                            className="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#nav-contact"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            {" "}
                            Branding{" "}
                        </a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        >
                        <h2>Digital Marketing</h2>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        >
                        <h2>Social Media Marketing</h2>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        >
                        <h2>Branding</h2>
                        </div>
                    </div>
                    {/*End Nav Button  */}
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <a href="/">
                                <img src="assets/img/gallery/tiktok.jpeg" alt="" />
                                </a>
                                <div className="img-cap">
                                <span>Add to cart</span>
                                </div>
                                <div className="favorit-items">
                                <span className="flaticon-heart" style={{ color: "white" }} />
                                </div>
                            </div>
                            <div className="popular-caption">
                                <h3>
                                <a href="/"> TikTok Marketing </a>
                                </h3>
                                <span>$ 5</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <a href="/">
                                <img src="assets/img/gallery/strategy.jpeg" alt="" />
                                </a>
                                <div className="img-cap">
                                <span>Add to cart</span>
                                </div>
                                <div className="favorit-items">
                                <span className="flaticon-heart" style={{ color: "white" }} />
                                </div>
                            </div>
                            <div className="popular-caption">
                                <h3>
                                <a href="/"> Strategy Marketing </a>
                                </h3>
                                <span> $ 7 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <a href="/">
                                <img src="assets/img/gallery/bisnis.jpeg" alt="" />
                                </a>
                                <div className="img-cap">
                                <span>Add to cart</span>
                                </div>
                                <div className="favorit-items">
                                <span className="flaticon-heart" style={{ color: "white" }} />
                                </div>
                            </div>
                            <div className="popular-caption">
                                <h3>
                                <a href="/"> Pengelolaan Bisnis </a>
                                </h3>
                                <span> $ 10 </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Nav Card */}
                </div>
                </section>
        </>
    )
}

const MarketingPage=() =>{
    return(
        <>
            <SectionMarketing/>
            <MarketingCourse/>
        </>
    )
}

export default MarketingPage