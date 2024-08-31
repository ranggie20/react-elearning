import React from "react";
import TeamMember from "../components/TeamMember";

const Teacher = () => {
    const teacherMembers = [
        { image: "assets/img/team/team-2.jpg", name: "Lalisa Manoban" },
    ];

    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    {teacherMembers.map((item, index) => (
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

const ListTeacher = () => {
	return (
		<>
			<Teacher/>
		</>
	)
}

export default ListTeacher