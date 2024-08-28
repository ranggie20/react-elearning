import React from 'react'

const SectionDetailCyber = () => {
 return(
    <>
         <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="hero-cap text-center">
                        <h2>Cyber Security</h2>
                    </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
    </>
 )
}

const SectionCyber = ()=>{
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
                            allowFullScreen="" />
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single_product_text text-center">
                        <h3>
                            Dasar-Dasar Keamanan Siber:
                            <br />
                            Apa saja yang Perlu diKetahui?
                        </h3>
                        <p>
                            Ini merupakann sebuah video yang bertujuan memberikan pemahaman
                            mendasar tentang konsep keamanan siber kepada pemirsa. Dalam video
                            ini, penonton akan mempelajari apa itu keamanan siber, mengapa
                            penting untuk melindungi data pribadi dan organisasi dari ancaman
                            digital, serta berbagai jenis ancaman siber seperti malware,
                            phishing, dan hacking. Selain itu, video ini juga akan memberikan
                            tips praktis untuk meningkatkan keamanan online, seperti penggunaan
                            kata sandi yang kuat, pentingnya memperbarui perangkat lunak, dan
                            cara mengenali potensi ancaman siber. Video ini cocok untuk pemula
                            yang ingin memahami dasar-dasar keamanan di dunia digital.
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
                            <div className="wishlist">
                            <a href="wishlist.html">
                                <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="30px"
                                width="30px"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "black" }}
                                >
                                <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z" />
                                </svg>
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

const Cyber_SecurityPage=()=>{
    return(
        <>
        <SectionDetailCyber/>
        <SectionCyber/>
        </>
    )
}

export default Cyber_SecurityPage