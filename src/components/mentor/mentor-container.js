import React from "react"

import Mentor from "./mentor"

const mentor1 = {
  name: "Anusha Arora",
  year: 2,
  major: "CS/business",
}

const MentorContainer = props => {
  return (
    <div>
      <div>{props.majorName}</div>
      <Mentor {...mentor1} />
    </div>
  )
}

export default MentorContainer
