import React from 'react';

const TeamMember = ({ image, name, jobDesk }) => {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={image} alt='' />
                </div>
                <div className="text-center p-4">
                    <h5 className="mb-0">{name}</h5>
                    <small>{jobDesk}</small>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;