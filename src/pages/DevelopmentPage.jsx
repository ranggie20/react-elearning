import React from 'react'

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

const SectionCourse = () => {
	return(
		<>
			<section className="popular-items latest-padding">
				<div className="container">
					<div className="row product-btn justify-content-between mb-40">
						<div className="grid-list-view"></div>
						</div>
							<div className="properties__button">
								<nav>
									<div className="nav nav-tabs" id="nav-tab" role="tablist">
										<a
											className="nav-item nav-link active"
											id="nav-home-tab"
											data-toggle="tab"
											href="#nav-home"
											role="tab"
											aria-controls="nav-home"
											aria-selected="true">
											Web Development
										</a>
										<a
											className="nav-item nav-link"
											id="nav-profile-tab"
											data-toggle="tab"
											href="#nav-profile"
											role="tab"
											aria-controls="nav-profile"
											aria-selected="true">
											Game Development
										</a>
										<a
											className="nav-item nav-link"
											id="nav-contact-tab"
											data-toggle="tab"
											href="#nav-contact"
											role="tab"
											aria-controls="nav-contact"
											aria-selected="true">
											Programming Language
										</a>
									</div>
								</nav>
								<div className="tab-content" id="nav-tabContent">
									<div
										className="tab-pane fade show active"
										id="nav-home"
										role="tabpanel"
										aria-labelledby="nav-home-tab">
										<h2>Web Development</h2>
									</div>
									<div
										className="tab-pane fade"
										id="nav-profile"
										role="tabpanel"
										aria-labelledby="nav-profile-tab">
										<h2>Game Development</h2>
									</div>
									<div
										className="tab-pane fade"
										id="nav-contact"
										role="tabpanel"
										aria-labelledby="nav-contact-tab">
										<h2>Programming Language</h2>
									</div>
								</div>
							</div>
							<div className="tab-content" id="nav-tabContent">
								<div
									className="tab-pane fade show active"
									id="nav-home"
									role="tabpanel"
									aria-labelledby="nav-home-tab">
									<div className="row">
										<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
												<div className="single-popular-items mb-50 text-center">
													<div className="popular-img">
														<a href="html_details.html">
															<img src="assets/img/gallery/html.jpeg" alt="" />
														</a>
														<div className="img-cap">
															<span>Add to cart</span>
														</div>
														<div className="favorit-items">
															<span className="flaticon-heart" style={{ color: "white" }} />
														</div>
													</div>
												<div className="popular-caption">
												<h3>
													<a href="html_details.html"> Web Development </a>
												</h3>
												<span>$ 5</span>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
									<div className="single-popular-items mb-50 text-center">
									<div className="popular-img">
										<a href="java_details.html">
										<img src="assets/img/gallery/java.jpeg" alt="" />
										</a>
										<div className="img-cap">
										<span>Add to cart</span>
										</div>
										<div className="favorit-items">
										<span className="flaticon-heart" style={{ color: "white" }} />
										</div>
									</div>
									<div className="popular-caption">
										<h3>
										<a href="java_details.html"> Java </a>
										</h3>
										<span>$ 7</span>
									</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
									<div className="single-popular-items mb-50 text-center">
										<div className="popular-img">
											<a href="basic_game_details.html">
												<img src="assets/img/gallery/gallery1.jpeg" alt="" />
											</a>
											<div className="img-cap">
												<span>Add to cart</span>
										</div>
										<div className="favorit-items">
											<span className="flaticon-heart" style={{ color: "white" }} />
										</div>
										</div>
											<div className="popular-caption">
												<h3>
												<a href="basic_game_details.html"> Basic Game Development </a>
												</h3>
												<span> $ 15 </span>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

const DevelopmentPage = () => {
	return (
		<>
			<SectionName/>
			<SectionCourse/>
		</>
	)
}

export default DevelopmentPage