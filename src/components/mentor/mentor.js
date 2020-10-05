import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`

const Major = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Info = styled.div`
  font-size: 16px;
  line-height: 16px;
`
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`

const MentorContainer = styled.div`
  padding: 20px;
  margin: 20px;

  width: 30%;
  height: ${({ isOpen = false }) => (isOpen ? "auto" : "300px")};
  cursor: pointer;

  background: ${props => (props.isOpen ? "#ffffff" : "#d9e2ff")};
`

const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 32px;
  line-clamp: 2;
  overflow: hidden;
`

const Mentor = ({
  firstName,
  lastName,
  year,
  major,
  minor,
  concentration,
  email,
  interests = [],
  work = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MentorContainer isOpen={isOpen}>
      <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>
        <Layout>
          <Name>{firstName}</Name>
          <Name>{lastName}</Name>
          <Major>{major}</Major>
          {minor && <Major>{`Minor(s): ${minor}`}</Major>}
          {concentration && (
            <Major>{`Concentration(s): ${concentration}`}</Major>
          )}
          <Info>{`Email: ${email}`}</Info>
          <Info>{`Year: ${year}`}</Info>
          {!isOpen && (
            <InterestContainer>
              {interests.map(skill => {
                const combSkill = skill.split(" ").join("_")
                return (
                  <span
                    key={skill}
                    style={{ fontStyle: "italic", marginRight: "8px" }}
                  >{`#${combSkill}`}</span>
                )
              })}
            </InterestContainer>
          )}
        </Layout>
        {isOpen && (
          <Layout style={{ marginTop: "32px" }}>
            {interests.length ? (
              <>
                <Header>{"Interests"}</Header>
                <Info>
                  <ul>
                    {interests.map(interest => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                </Info>
              </>
            ) : null}
            {work.length ? (
              <>
                <Header>{`Work Experience`}</Header>
                <Info>
                  <ul>
                    {work.map(workex => (
                      <li key={workex}>{workex}</li>
                    ))}
                  </ul>
                </Info>
              </>
            ) : null}
          </Layout>
        )}
      </div>
    </MentorContainer>
  )
}

export default Mentor
