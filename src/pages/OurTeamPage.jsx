import React from 'react'
import TeamMember from '../components/TeamMember';
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

const ListTeam = () => {
    const teamMembers = [
        { image: "assets/img/team/team-3.jpg", name: "Roséanne Park" },
        { image: "assets/img/gallery/team_4.jpg", name: "Kim Jisoo"}
    ];

    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    {teamMembers.map((item, index) => (
                        <TeamMember
                            key={index}
                            image={item.image}
                            name={item.name}
                        />
                    ))}
                </div>    
            </div>        
        </div>
    );
};

const OurTeamPage = () => {
	return (
		<>
			<SectionTeam/>
            <ListTeam/>
		</>
	)
}

export default OurTeamPage