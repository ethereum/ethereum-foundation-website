import React from "react"
import Img from "gatsby-image"

const Profile = ({ member }) => {
  debugger
  return (
    <div>
      <Img fixed={member.img} alt={member.name} />
      <h3>{member.name}</h3>
      <div>{member.title}</div>
      <p>{member.bio}</p>
    </div>
  )
}

export default Profile
