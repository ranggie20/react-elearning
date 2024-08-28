import React from 'react'

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

const SectionPopularCourse = () => {
	return (
		<>
			<div className="popular-items">
				<div className="container">
					{/* Section tittle */}
					<div className="row justify-content-center">
						<div className="col-xl-7 col-lg-8 col-md-10">
							<div className="section-tittle mb-70 text-center">
								<h2>Popular Course</h2>
								<p>
									Explore our most popular courses, carefully curated to enhance your
									skills and knowledge in the most sought-after fields!
								</p>
							</div>
						</div>
					</div>
						<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular1.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Basics of Game Development</a>
									</h3>
									<span>$ 35</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular2.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Cyber Security</a>
									</h3>
									<span>$ 25</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular3.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Windows Server</a>
									</h3>
									<span>$ 10</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular4.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Google Analytics</a>
									</h3>
									<span>$ 10</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular5.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Marketing Strategy</a>
									</h3>
									<span>$ 16</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="single-popular-items mb-50 text-center">
								<div className="popular-img">
									<img src="assets/img/gallery/popular6.png" alt="" />
									<div className="img-cap">
										<span>Add to cart</span>
									</div>
									<div className="favorit-items">
										<span className="flaticon-heart" />
									</div>
								</div>
								<div className="popular-caption">
									<h3>
									<a href="product_details.html">Arduino</a>
									</h3>
									<span>$ 18</span>
								</div>
							</div>
						</div>
					</div>
					{/* Button */}
				</div>
			</div>
		</>
	)
}	

const HomePage = () => {
	return (
		<>
			<SliderArea />
			<SectionNewProduct />
			<SectionPopularCourse/>
		</>
	)
}

export default HomePage