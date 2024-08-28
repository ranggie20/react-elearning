import React from 'react'

const SectionDetailhtml = () => {
    return(
        <>
            <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>HTML</h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

const Sectionhtml =()=>{
    return(
        <>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
                        <div className="events_item">
                        <div className="thumb">
                            <a href="#">
                            <img src="assets/images/course-02.jpg" alt="" />
                            </a>
                            <span className="category" />
                        </div>
                        <div className="down-content">
                            <span className="author" />
                            <h4 />
                            <iframe
                            width={360}
                            height={300}
                            src="https://www.youtube.com/embed/OEhw6GqQDts?si=yPU4quUPi-RaSdF-"
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            />
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single_product_text text-center">
                        <h3>
                            Tutorial HTML:
                            <br />
                            Membuat Halaman Web Pertama Anda
                        </h3>
                        <p>
                            Ini merupakan video panduan langkah-demi-langkah yang dirancang
                            untuk pemula yang ingin belajar membuat halaman web pertama mereka.
                            Dalam tutorial ini, Anda akan mempelajari dasar-dasar HTML, bahasa
                            markup yang digunakan untuk menyusun konten di web. Panduan ini
                            mencakup cara menulis struktur HTML yang sederhana, seperti
                            elemen-elemen dasar , , , serta bagaimana menambahkan teks, gambar,
                            dan tautan ke halaman Anda. Dengan mengikuti tutorial ini, Anda akan
                            mendapatkan pemahaman yang kuat tentang cara kerja HTML dan siap
                            untuk membangun halaman web yang lebih kompleks.
                        </p>
                        <div className="card_area">
                            <div className="product_count_area">
                            <p>$7</p>
                            </div>
                            <div className="add_to_cart">
                            <a href="cart.html" className="btn_3">
                                add to cart
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
     </>
    )
}

const Html_DetailPage=()=>{
    return(
        <>
        <SectionDetailhtml/>
        <Sectionhtml/>
        </>
    )
}

export default Html_DetailPage
