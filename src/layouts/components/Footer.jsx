import { Link } from 'react-router-dom'

const SectionFooter = () => {
	return (
		<>
			<footer>
				{/* Footer Start*/}
				<div className="footer-area footer-padding">
					<div className="container">
						<div className="row d-flex justify-content-between">
							<div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
								<div className="single-footer-caption mb-50">
									<div className="single-footer-caption mb-30">
										{/* logo */}
										<div className="footer-logo">
											<Link href="about.html">
												<img src="/assets/img/logo/logo.png" alt="" />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
								<div className="single-footer-caption mb-50">
									<div className="footer-tittle">
										<h4>Quick Links</h4>
										<ul>
											<li>
												<Link href="/about">About</Link>
											</li>
											<li>
												<Link href="/software"> IT & Software </Link>
											</li>
											<li>
												<Link href="/development"> Development </Link>
											</li>
											<li>
												<Link href="/marketing"> Marketing </Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3">
								<div className="single-footer-caption mb-50">
									<div className="footer-tittle">
										<h4> Address </h4>
										<p>
											<i className="fa fa-map-marker-alt me-3" /> JL. Gotong Royong I, 12540
										</p>
										<p>
											<i className="fa fa-phone-alt me-3" /> 082135662004
										</p>
										<p>
											<i className="fa fa-envelope me-3" /> f.team@sdkindo.co.id
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Footer bottom */}
						<div className="row align-items-center">
							<div className="col-xl-7 col-lg-8 col-md-7">
								<div className="footer-copy-right">
									<p>
										Copyright ©2020 All rights reserved | This template is made with{" "}
										<i className="fa fa-heart" aria-hidden="true" /> by{" "}
										<Link href=""> DKS </Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Footer End*/}
			</footer>
			{/*? Search model Begin */}
			<div className="search-model-box">
				<div className="h-100 d-flex align-items-center justify-content-center">
					<div className="search-close-btn">+</div>
					<form className="search-model-form">
						<input type="text" id="search-input" placeholder="Searching key....." />
					</form>
				</div>
			</div>

		</>
	)
}

export default SectionFooter