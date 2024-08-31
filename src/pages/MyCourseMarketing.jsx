import React from "react";
import DetailComponent from "../components/DetailComponent";

const Marketing =() => {
    return(
        <>
        <div class="slider-area ">
            <div class="single-slider slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Marketing Strategy</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

const MarketingStrategy=() => {
    const detailItem = [
    {   url: "https://www.youtube.com/embed/eKHUNrE_Ik8?si=tF6ju5DyvAErFptD",
        title: "Rahasia Sukses Marketing di Era Digital",
        deskripsi: "Di era digital, kesuksesan marketing bergantung pada kemampuan untuk memanfaatkan teknologi dan data dalam menjangkau audiens secara efektif. Rahasia suksesnya terletak pada pemahaman mendalam tentang perilaku konsumen online, penggunaan strategi content marketing yangrelevan, serta pengoptimalan platform digital seperti media sosial,SEO, dan email marketing. Selain itu, personalisasi dan interaksireal-time dengan pelanggan menjadi kunci dalam membangun hubungan yang kuat dan loyalitas merek. Dengan strategi yang tepat, bisnis dapat memperluas jangkauan, meningkatkan engagement, dan meraih kesuksesan dalam pasar digital yang kompetitif."
    }    
    ];

    return(
                <div className="d-flex justify-content-center">
                    {detailItem.map((item, index) => (
                        <DetailComponent
                            key={index}
                            url={item.url}
                            title={item.title}
                            deskripsi={item.deskripsi}
                        />
                    ))}
                </div>
    );
};

const MyCourseMarketing=() => {
    return(
        <>
        <Marketing/>
        <MarketingStrategy/>
        </>
    )
}

export default MyCourseMarketing