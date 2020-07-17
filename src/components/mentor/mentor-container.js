import React from "react"
import styled from "styled-components"

import Mentor from "./mentor"

/*
Mentor format:

firstName
lastName
year
major
*/

const mentor1 = {
  firstName: "Anusha",
  lastName: "Arora",
  year: 2,
  major: "CS/business",
}

const mentor2 = {
  firstName: "Katie",
  lastName: "Busemeyer",
  year: 5,
  major: "CS/cognitive psychology",
}

const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const MentorContainer = styled.div`
  background: #d9e2ff;
  padding: 20px;
  margin: 20px;

  flex-basis: 20%;
`

const MajorContainer = props => {
  return (
    <div>
      <div>{props.majorName}</div>
      <div>-------</div>
      <MentorsContainer>
        <MentorContainer>
          <Mentor {...mentor1} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
      </MentorsContainer>
    </div>
  )
}

export default MajorContainer
