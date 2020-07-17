import React, { useState } from "react"
import styled from "styled-components"

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`

const Mentor = ({ firstName, lastName, year, major }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>
      <NameContainer>
        <Name>{firstName}</Name>
        <Name>{lastName}</Name>
      </NameContainer>
      {isOpen && (
        <div>
          <div>{year}</div>
          <div>{major}</div>
        </div>
      )}
    </div>
  )
}

export default Mentor
