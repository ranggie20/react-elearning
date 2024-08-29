import React from 'react'

const SectionTeam = () => {
	return (
        <>
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>Our Team</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SectionList = () => {
    return(
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">Expert Instructors</h1>
                        </div>
                        <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-1.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Jennie Kim</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-2.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Lalisa Manoban</h5>
                                    <small>Web Developer</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-3.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Roséanne Park</h5>
                                    <small>Marketing</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/gallery/team_4.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Kim Jisoo</h5>
                                    <small>Video Editor</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-5.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Na Jaemin</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-6.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Mark Lee</h5>
                                    <small>Video Editor</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-7.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Sim Jaeyun</h5>
                                    <small>Marketing</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img
                                    className="img-fluid"
                                    src="assets/img/team/team-8.jpg"
                                    alt=""
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Lee Jeno</h5>
                                    <small>Web Developer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const OurTeamPage = () => {
	return (
		<>
			<SectionTeam/>
            <SectionList/>
		</>
	)
}

export default OurTeamPage