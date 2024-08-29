import React from "react";

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
    )
}

const MarketingStrategy=() => {
    return(
        <>
            <div className="product_image_area" style={{ marginTop: "3rem" }}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                    <div
                        className="align-self-center event_outer development"
                        style={{ minWidth: 0 }}
                    >
                        <a href="my_marketing_strategi.html">
                        <div className="events_item">
                            <div className="down-content">
                            <span className="author" />
                            <h4 />
                            <iframe
                                width={360}
                                height={300}
                                src="https://www.youtube.com/embed/eKHUNrE_Ik8?si=tF6ju5DyvAErFptD"
                                frameBorder={0}
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
                            {" "}
                            Rahasia Sukses Marketing
                            <br />
                            di Era Digital{" "}
                        </h3>
                        <p>
                            Di era digital, kesuksesan marketing bergantung pada kemampuan untuk
                            memanfaatkan teknologi dan data dalam menjangkau audiens secara
                            efektif. Rahasia suksesnya terletak pada pemahaman mendalam tentang
                            perilaku konsumen online, penggunaan strategi content marketing yang
                            relevan, serta pengoptimalan platform digital seperti media sosial,
                            SEO, dan email marketing. Selain itu, personalisasi dan interaksi
                            real-time dengan pelanggan menjadi kunci dalam membangun hubungan
                            yang kuat dan loyalitas merek. Dengan strategi yang tepat, bisnis
                            dapat memperluas jangkauan, meningkatkan engagement, dan meraih
                            kesuksesan dalam pasar digital yang kompetitif.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MyCourseMarketing=() => {
    return(
        <>
        <Marketing/>
        <MarketingStrategy/>
        </>
    )
}

export default MyCourseMarketing