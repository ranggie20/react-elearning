// ListTeam.jsx
import React from 'react';
import TeamMember from './TeamMember';

const ListTeam = () => {
    const teamMembers = [
        { image: "assets/img/team/team-1.jpg", name: "Jennie Kim", jobDesk: "Designation" },
        { image: "assets/img/team/team-2.jpg", name: "Lalisa Manoban", jobDesk: "Web Developer" },
        { image: "assets/img/team/team-3.jpg", name: "Roséanne Park", jobDesk: "Marketing" },
        { image: "assets/img/gallery/team_4.jpg", name: "Kim Jisoo", jobDesk: "Video Editor" },
        { image: "assets/img/team/team-5.jpg", name: "Na Jaemin", jobDesk: "Designation" },
        { image: "assets/img/team/team-6.jpg", name: "Mark Lee", jobDesk: "Video Editor" },
        { image: "assets/img/team/team-7.jpg", name: "Sim Jaeyun", jobDesk: "Marketing" },
        { image: "assets/img/team/team-8.jpg", name: "Lee Jeno", jobDesk: "Web Developer" },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Expert Instructors</h1>
                </div>
                <div className="row g-4">
                    {teamMembers.map((index, member) => (
                        <TeamMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            jobDesk={member.jobDesk}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListTeam;
