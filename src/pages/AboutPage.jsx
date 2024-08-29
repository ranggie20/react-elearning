import React from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList'


const SectionName = () => {
  return (
    <>
        <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    
  )
}

const SectionAbout = () => {
    return ( 
        <>
            <div className="about-details section-padding30" style={{paddingTop: "4rem"}}>
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-1 col-lg-8">
                            <div className="about-details-cap mb-50">
                                <h4>Our Mission</h4>
                                <p>
                                Dalam merancang aplikasi e-learning, misi kami adalah
                                memberdayakan pembelajaran dengan menyediakan platform yang
                                memungkinkan setiap individu untuk mengakses pengetahuan dan
                                keterampilan kapan saja dan di mana saja. Kami berkomitmen untuk
                                meningkatkan kualitas pendidikan melalui konten yang berkualitas
                                dan interaktif, yang dirancang untuk memenuhi berbagai gaya
                                belajar dan kebutuhan pendidikan pengguna. Selain itu, kami
                                bertujuan untuk mendorong keterlibatan dan partisipasi aktif
                                dengan menciptakan lingkungan pembelajaran yang kolaboratif dan
                                inklusif.
                                </p>
                            </div>
                            <div className="about-details-cap mb-50">
                                <h4>Our Vision</h4>
                                <p>
                                Visi kami adalah menjadi pusat pembelajaran global yang diakui
                                untuk inovasi dalam pendidikan dan pembelajaran digital. Kami
                                bertekad untuk memastikan bahwa pendidikan berkualitas tinggi
                                dapat diakses oleh semua orang, tanpa batasan geografis, sosial,
                                atau ekonomi. Kami juga berfokus pada pembelajaran berkelanjutan,
                                menciptakan ekosistem yang mendukung perkembangan dan adaptasi
                                para pelajar terhadap perubahan zaman. Dengan misi dan visi ini,
                                kami berharap dapat memberikan dampak positif bagi pendidikan di
                                seluruh dunia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}    

const AboutPage = () => {
    return (
        <>
            <SectionName/>
            <SectionAbout/>
        </>
    )
}

export default AboutPage