import React from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList'

const SectionSoftware=() => {
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2> IT & Software </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SoftwarePage = () => {
    const SoftwareItems = [
        { image: 'assets/img/gallery/microcontroller.jpeg', title: 'Mikrokontroler', price: 35, url: 'basic_game_details.html' },
        { image: 'assets/img/gallery/server.jpeg', title: 'Windows Server', price: 25, url: 'cyber_security_details.html' },
        { image: 'assets/img/gallery/cyber.jpeg', title: 'Cyber Security', price: 10, url: 'windows_details.html' },
    ];

    return (
        <>
            <SectionSoftware/>
            <PopularItemsList items={SoftwareItems} />
        </>
    );
};

export default SoftwarePage