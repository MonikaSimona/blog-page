import React from 'react'

const TeamMemberCard = ({ img, name, job }) => {
    return (
        <div className="member-card-wrapper">
            <div className="image">
                <img src={require(`../assets/images/${img}.png`)} alt="" />
            </div>
            <div className="info">
                <p className="member-name">
                    {name}
                </p>
                <p className="member-job">{job}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard