import React from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList';

const SliderArea = () => {
	return (
		<div className="slider-area ">
			<div className="slider-active">
				{/* Single Slider */}
				<div className="single-slider slider-height d-flex align-items-center slide-bg">
					<div className="container">
						<div className="row justify-content-between align-items-center">
							<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
								<div className="hero__caption">
									<h1
										data-animation="fadeInLeft"
										data-delay=".2s"
										data-duration="2000ms"
									>
										Welcome to e-Learning
									</h1>
									<p
										data-animation="fadeInLeft"
										data-delay=".3s"
										data-duration="2000ms"
									>
										Jadikan setiap hari kesempatan untuk belajar sesuatu yang baru
										dengan e-learning yang fleksibel dan personal
									</p>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
								<div
									className="hero__img"
									data-animation="bounceIn"
									data-delay=".4s"
								>
									<img
										src="assets/img/hero/watch.png"
										alt=""
										className=" heartbeat"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

const SectionNewProduct = () => {
	return (
		<>
			<section className="new-product-area section-padding30">
				<div className="container">
					{/* Section tittle */}
					<div className="row">
						<div className="col-xl-12">
							<div className="section-tittle mb-70">
								<h2>New Course</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-new-pro mb-30 text-center">
								<div className="product-img">
									<img src="assets/img/gallery/new_product1.png" alt="" />
								</div>
								<div className="product-caption">
									<h3>
										<a href="product_details.html">IT & Software</a>
									</h3>
									<span>$ 20</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-new-pro mb-30 text-center">
								<div className="product-img">
									<img src="assets/img/gallery/new_product2.png" alt="" />
								</div>
								<div className="product-caption">
									<h3>
										<a href="product_details.html">Development</a>
									</h3>
									<span>$ 12</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-new-pro mb-30 text-center">
								<div className="product-img">
									<img src="assets/img/gallery/new_product3.png" alt="" />
								</div>
								<div className="product-caption">
									<h3>
										<a href="product_details.html">Digital Marketing</a>
									</h3>
									<span>$ 10</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
 const Popular =() => {
	return(
		<>
		<div className='container py-5'>
			<div className="row">
				<div className="col-xl-12">
					<div className="section-tittle mb-70">
						<h2>Popular Course</h2>
					</div>
				</div>
			</div>
		</div>
		</>
	)
 }
const HomePage = () => {
    const CourseItems = [
        { image: 'assets/img/gallery/popular1.png', title: 'Basics of Game Development', price: 35, url: 'basic_game_details.html' },
        { image: 'assets/img/gallery/popular2.png', title: 'Cyber Security', price: 25, url: 'cyber_security_details.html' },
        { image: 'assets/img/gallery/popular3.png', title: 'Windows Server', price: 10, url: 'windows_details.html' },
        { image: 'assets/img/gallery/popular4.png', title: 'Google Analytics', price: 10, url: 'google_analytics_details.html' },
        { image: 'assets/img/gallery/popular5.png', title: 'Marketing Strategy', price: 16, url: 'strategi_mark_details.html' },
        { image: 'assets/img/gallery/popular6.png', title: 'Arduino', price: 18, url: 'microcontroller_details.html' }
    ];

    return (
        <>
            <SliderArea/>
			<SectionNewProduct/>
			<Popular/>
            <PopularItemsList items={CourseItems} />
        </>
    );
};

export default HomePage