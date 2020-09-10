import React from "react"
import styled from "styled-components"

const TempContainer = styled.div`
  color: white;
  font-family: "Nunito Sans";
`

const TempMessage = ({ semester }) => {
  return (
    <TempContainer>
      <p>
        Our mentorship program hasn't kicked off yet for
        {semester ? ` the ${semester} semester` : " this semester"}! Check back
        later to learn more about the mentors.
      </p>
      <p>Interested in being a mentor?</p>
      <p>Contact us at nucsmo@gmail.com to find out how to get involved.</p>
    </TempContainer>
  )
}

export default TempMessage
