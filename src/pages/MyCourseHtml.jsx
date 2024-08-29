import React from "react";

const Html =() => {
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2> Web Development </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const DetailHtml =() => {
    return(
        <>
            <div className="product_image_area" style={{ marginTop: "3rem" }}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                    <div
                        className="align-self-center event_outer development"
                        style={{ minWidth: 0 }}
                    >
                        <a href="my_course_cyber.html">
                        <div className="events_item">
                            <div className="down-content">
                            <span className="author" />
                            <h4 />
                            <iframe
                                width={360}
                                height={300}
                                src="https://www.youtube.com/embed/OEhw6GqQDts?si=yPU4quUPi-RaSdF-"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""
                            />
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div
                        className="single_product_text text-center"
                        style={{ marginBottom: "3rem" }}
                        >
                        <h3>
                            Tutorial membuat halaman <br />
                            web pertama untuk pemula
                        </h3>
                        <p>
                        Ini adalah video panduan langkah demi langkah yang dirancang untuk pemula yang ingin belajar membuat halaman web pertama mereka. Dalam tutorial ini, Anda akan mempelajari dasar-dasar HTML, bahasa markup yang digunakan untuk menyusun konten di web. Panduan ini mencakup cara menulis struktur HTML sederhana, termasuk elemen-elemen dasar seperti html ,head dan body, serta cara menambahkan teks, gambar, dan tautan ke halaman Anda. Dengan mengikuti tutorial ini, Anda akan mendapatkan pemahaman yang kuat tentang cara kerja HTML dan siap untuk membangun halaman web yang lebih kompleks.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MyCourseHtml =() => {
    return (
        <>
            <Html/>
            <DetailHtml/>
        </>
    )
}

export default MyCourseHtml