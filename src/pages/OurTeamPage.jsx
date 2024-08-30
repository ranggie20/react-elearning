import React from 'react'
import ListTeam from '../layouts/components/ListTeam'
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

const OurTeamPage = () => {
	return (
		<>
			<SectionTeam/>
            <ListTeam/>
		</>
	)
}

export default OurTeamPage