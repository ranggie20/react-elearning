import React from 'react'
import CourseComponent from '../components/CourseComponent';

const SectionCourse = () => {
    
    const developmentsItems = [
        { image: 'assets/img/gallery/gallery1.jpeg', title: 'Basics of Game Development', price: 35, url: '/' },
        { image: 'assets/img/gallery/java.jpeg', title: 'Java Programming', price: 25, url: '/' },
        { image: 'assets/img/gallery/html.jpeg', title: 'Web Development', price: 10, url: '/' },
    ];

    return (
        <div className='container popular-items py-5'>
            <div className="row">
                {developmentsItems.map((item,index) => (
                    <div key={index} className="col-md-4">
                        <CourseComponent url={item.url} imageSrc={item.image} title={item.title} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

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

    return (
        <>
            <SectionName/>
            <SectionCourse />
        </>
    );
};

export default DevelopmentPage