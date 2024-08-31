import React from "react";
import DetailComponent from "../components/DetailComponent";

const Marketing = () => {
    return (
        <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>Web Development</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MarketingStrategy = () => {
    const detailItem = [
        {
            url: "https://your-course-link.com",
            title: "Tutorial HTML: Membuat Halaman Web Pertama Anda",
            description: "Ini merupakan video panduan langkah-demi-langkah yang dirancang untuk pemula yang ingin belajar membuat halaman web pertama mereka. Dalam tutorial ini, Anda akan mempelajari dasar-dasar HTML, bahasa markup yang digunakan untuk menyusun konten di web. Panduan ini mencakup cara menulis struktur HTML yang sederhana, seperti elemen-elemen dasar , , , serta bagaimana menambahkan teks, gambar, dan tautan ke halaman Anda. Dengan mengikuti tutorial ini, Anda akan mendapatkan pemahaman yang kuat tentang cara kerja HTML dan siap untuk membangun halaman web yang lebih kompleks.",
            price: "$7"
        }
    ];

    return (
        <div className="d-flex justify-content-center">
            {detailItem.map((item, index) => (
                <DetailComponent
                    key={index}
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>
    );
};

const MyCourseMarketing = () => {
    return (
        <>
            <Marketing />
            <MarketingStrategy />
        </>
    );
};

export default MyCourseMarketing;