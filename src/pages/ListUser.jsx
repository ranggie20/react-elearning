import React from 'react'
import TeamMember from '../components/TeamMember';
const Judul = () => {
	return (
        <>
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>List User</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Pengguna = () => {
    const userMembers = [
        { image: "assets/img/team/team-1.jpg", name: "Jennie Kim"},
    ];

    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    {userMembers.map((item, index) => (
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

const ListUser = () => {
	return (
		<>
			<Judul/>
            <Pengguna/>
		</>
	)
}

export default ListUser