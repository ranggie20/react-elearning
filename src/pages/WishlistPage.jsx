import React from 'react'

const WishlistName=() => {
    return(
        <>
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
        </>
    )
}

const WishlistList=() => {
    return(
        <>
            <section className="popular-items latest-padding">
                <div className="container">
                    {/* Nav Card */}
                    <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab">
                        <div className="row" style={{ paddingTop: 100 }}>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="basic_game_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular1.png" alt="" />
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
                                <a href="basic_game_details.html">
                                    Pengenalan Pengembangan Game: Langkah Awal untuk Membuat
                                    Game
                                </a>
                                </h3>
                                <span>$ 15 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="cyber_security_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular2.png" alt="" />
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
                                <a href="cyber_security_details.html">
                                    Dasar-Dasar Keamanan Siber: Apa saja yang Perlu diKetahui?
                                </a>
                                </h3>
                                <span>$ 10 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="windows_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular3.png" alt="" />
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
                                <a href="windows_details.html">
                                    Pengenalan Windows Server: Fitur dan Fungsi Utame
                                </a>
                                </h3>
                                <span>$ 8 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="html_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular4.png" alt="" />
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
                                <a href="html_details.html">
                                    Tutorial HTML: Membuat Halaman Web Pertama Anda
                                </a>
                                </h3>
                                <span>$ 10 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="strategi_mark_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular5.png" alt="" />
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
                                <a href="strategi_mark_details.html">
                                    Rahasia Sukses Marketing di Era Digital
                                </a>
                                </h3>
                                <span>$ 10 </span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                            <a href="microcontroller_details.html">
                                <div className="popular-img">
                                <img src="assets/img/gallery/popular6.png" alt="" />
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
                                <a href="microcontroller_details.html">
                                    Proyek Sederhana dengan Mikrokontroler: Tutorial Untuk
                                    Pemula
                                </a>
                                </h3>
                                <span>$ 15 </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Nav Card */}
            </section>
        </>
    )
}

const WishlistPage=() => {
    return(
        <>
            <WishlistName/>
            <WishlistList/>
        </>
    )
}

export default WishlistPage