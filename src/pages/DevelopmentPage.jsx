import React from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList';

const SectionName = () => {
	return (
        <>
            <div className="slider-area ">
				<div className="single-slider slider-height2 d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="hero-cap text-center">
									<h2>Development</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</div>
        </>
    )
}

const DevelopmentPage = () => {
    const developmentsItems = [
        { image: 'assets/img/gallery/gallery1.jpeg', title: 'Basics of Game Development', price: 35, url: '/' },
        { image: 'assets/img/gallery/java.jpeg', title: 'Java Programming', price: 25, url: '/' },
        { image: 'assets/img/gallery/html.jpeg', title: 'Web Development', price: 10, url: '/' },
    ];

    return (
        <>
            <SectionName/>
            <PopularItemsList items={developmentsItems} />
        </>
    );
};

export default DevelopmentPage